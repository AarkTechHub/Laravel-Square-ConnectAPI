<?php
namespace App\Utils;
use App\Defines\SquareDefines;

class LocationInfo {
    // Initialize the Square client.
    var $currency;
    var $country;
  
    function __construct() {
      
  
      $this->square_client = new \Square\SquareClient([
        'accessToken' => SquareDefines::SQUARE_ACCESS_TOKEN,  
        'environment' => SquareDefines::ENVIRONMENT
      ]);
      $location = $this->square_client->getLocationsApi()->retrieveLocation(SquareDefines::SQUARE_LOCATION_ID)->getResult()->getLocation();
      $this->currency = $location->getCurrency();
      $this->country = $location->getCountry();  
    }
  
    public function getCurrency() {
      return $this->currency;
    }
  
    public function getCountry() {
      return $this->country;
    }
  }
?>