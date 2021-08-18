<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Defines\SquareDefines;
use App\Utils\LocationInfo;
use Square\SquareClient;
use Square\Models\Money;
use Square\Models\CreatePaymentRequest;
use Square\Exceptions\ApiException;
use \Square\Http\ApiResponse;
use Ramsey\Uuid\Uuid;

class SquarePaymentController extends Controller
{
    public function index_squarepayment(Request $request)
    {
        $location_info = new LocationInfo();
        $currency = $location_info->getCurrency();
        $country = $location_info->getCountry();
        return view('square_order', compact(['currency', 'country']));
    }

    /**
     * 
     */
    public function process_squarepayment(Request $request)
    {
        $data  = $request->all();

        $token = $data['token'];
        try {
            $square_client = new SquareClient([
                'accessToken' => SquareDefines::SQUARE_ACCESS_TOKEN, //getenv('SQUARE_ACCESS_TOKEN'),
                'environment' => SquareDefines::ENVIRONMENT
            ]);
            $payments_api = $square_client->getPaymentsApi();

            $money = new Money();
            // Monetary amounts are specified in the smallest unit of the applicable currency.
            // This amount is in cents. It's also hard-coded for $1.00, which isn't very useful.
            $money->setAmount(300);
            // Set currency to the currency for the location
            $location_info = new LocationInfo();
            $money->setCurrency($location_info->getCurrency());
            error_log(json_encode($data));


            // Every payment you process with the SDK must have a unique idempotency key.
            // If you're unsure whether a particular payment succeeded, you can reattempt
            // it with the same idempotency key without worrying about double charging
            // the buyer.

            $create_payment_request = new CreatePaymentRequest($token, Uuid::uuid4(), $money);
            
            $response = $payments_api->createPayment($create_payment_request);
            if ($response->isSuccess()) {
                error_log("Successfull");
                return response()->json($response->getResult());
            } else {
                error_log("not Successfull");
                return response()->json(array('errors' => $response->getErrors()));
            }
        } catch (ApiException $e) {
            return response()->json(json_encode(array('errors' => $e)));
        } catch (ApiException $ex) {
            error_log($ex);
            return response()->json(json_encode(array('errors' => $ex)));
        }
    }
}
