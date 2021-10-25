@extends('layout')

@section('title')Sign in @endsection

@section('main_content')

<!-- start container -->
    <div class="container">

        <center>

            <form style="max-width: 600px; width: 100%; margin: 110px auto;"
                <h3 class="text-center">
                    Sign in
                </h3>

                <div class="form-group row mt-5">
                    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputEmail" value="email@example.com"
                            placeholder="email@example.com">
                    </div>
                </div>
                
                <div class="form-group row mt-5">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" id="inputPassword" placeholder="Password">
                    </div>
                </div>
                <button type="button" class="btn btn-primary mt-5">Sign in</button>
            </form>

        </center>


    </div>
<!-- end container -->



@endsection
