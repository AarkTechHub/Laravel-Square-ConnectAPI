@extends('layouts.layout')

@section("custom_style")
<link rel="stylesheet" type="text/css" href="{{asset('/css/square_payment/style.css')}}">
  <link rel="stylesheet" type="text/css" href="{{asset('/css/square_payment/sq-payment.css')}}">
@endsection

@section("content")
<div class="container" style="margin-top:4rem;">

    <div class="card mx-auto">
        <div class="cardbody" style="text-align:center;">
            <div id="card-container"></div><button id="card-button" type="button">Pay with Card</button>
            <span id="payment-flow-message"></span>
        </div>
    </div>


</div>
@endsection

@section("custom_scripts")
<script>
  Url = {
      ajaxpp : "{{ route('ajaxprocess.post') }}"
  };
</script>
<script type="text/javascript">
    window.applicationId = "{{ App\Defines\SquareDefines::SQUARE_APPLICATION_ID }}";
    //   "<?php
    //     echo getenv('SQUARE_APPLICATION_ID');
    //     ?>";
    window.locationId ="{{ App\Defines\SquareDefines::SQUARE_LOCATION_ID }}";
    //   "<?php
    //     echo getenv('SQUARE_LOCATION_ID');
    //     ?>";
    window.currency = "{{ $currency }}";
    // //   "<?php
    // //     echo $location_info->getCurrency();
    // //     ?>";
    window.country = "{{ $country }}";
    //   "<?php
    //     echo $location_info->getCountry();
    //     ?>";
  </script>
{{-- <script type="text/javascript" src="{{asset('/js/square_payment/sq-ach.js')}}"></script> --}}
  {{-- <script type="text/javascript" src="{{asset('/js/square_payment/sq-apple-pay.js')}}"></script> --}}
  <script type="text/javascript" src="{{asset('/js/square_payment/sq-card-pay.js')}}"></script>
  {{-- <script type="text/javascript" src="{{asset('/js/square_payment/sq-google-pay.js')}}"></script> --}}
  <script type="text/javascript" src="{{asset('/js/square_payment/sq-payment-flow.js')}}"></script>
@endsection