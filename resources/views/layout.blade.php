
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> @yield('title')</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200&display=swap" rel="stylesheet">
</head>

<style>
    body{
        font-family: 'IBM Plex Sans', sans-serif !important;
    }
</style>
<body >


<div class="container">
    <div class="d-flex justify-content-between align-items-center">
        <div class="header-text text-left mt-5 mb-5">
        <h2>Hello</h2>
    </div>
    <div class="btn-group" >
  <button type="button" class="btn "><a href="/">HOME</a></button>
  <button type="button" class="btn "><a href="/signIn/">SIGN IN</a></button>

</div>
    
    </div>
    
 @yield('main_content')
    
  </div>
<script
  src="https://code.jquery.com/jquery-3.6.0.js"
  integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
  crossorigin="anonymous"></script>


<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</body>
<script type="text/javascript" src="{{ URL::asset('js/app.js') }}"></script>

</html>


