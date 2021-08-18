<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Favicons -->
    <!-- <link rel="apple-touch-icon" sizes="180x180" href="img/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="img/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="img/favicon/favicon-16x16.png">
    <link rel="manifest" href="img/favicon/site.webmanifest"> -->

    <!-- Google Fonts -->
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="{{asset('css/app.css')}}" rel="stylesheet">


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rozha+One&display=swap" rel="stylesheet">
    <!-- Template Main CSS File -->
    
    <title>SQUARE PAYMENT Using Laravel | AARK TECHNOLOGY HUB</title>
    @yield('custom_style')
</head>

<body>
    <header>
        <nav class="navbar navbar-light" style="background:rgb(241, 135, 1)">
            <a class="navbar-brand" href="#">
              <img src="{{asset('/imgs/AARK_Tech_black.png')}}" height="40" class="d-inline-block align-top" alt="">
              <span id="nav_title" class="px-5" style="">SQUARE PAYMENT Using Laravel</span> 
            </a>
          </nav>
    </header>
    <main id="main">
        @yield('content')
    </main>


    {{-- @include('inc.footer') --}}

    <script src="{{asset("js/app.js")}}"></script>
    {{-- <script type="text/javascript" src="https://sandbox.web.squarecdn.com/v1/square.js"></script> --}}
    <script type="text/javascript" src="{{asset('/js/square_payment/square.js')}}"></script>
    @yield('custom_scripts')
</body>

</html>