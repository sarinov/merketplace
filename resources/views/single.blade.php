@extends('layout')

@section('title')Single @endsection

@section('main_content')


<!-- start container -->
    <div class="container">
        <div class="product p-5 border rounded-3">
            <div class="d-flex align-items-center">

                <div class="flex-shrink-0">
                    <img src="https://image.shutterstock.com/image-illustration/img-file-document-icon-trendy-260nw-1407027353.jpg"
                        width="250px" alt="...">
                </div>

                <div class="flex-grow-1 ms-3">
                    <h3 class="title" id="name_{{ $products->id }}">{{ $products->name }} </h3>
                    <p class="description lead" id="description_{{ $products->id }}">{{ $products->decription }} </p>

                    <div class=" d-flex">

                        <p class="price" style="margin-right: 20px;"> price:<span id="price_{{ $products->id }}">{{ $products->price }}</span></p>
                        <p class="count" style="margin-right: 20px;">count: <span
                                id="count_{{ $products->id }}">{{ $products->count }}</span> </p>

                        <p class="like" style="margin-right: 20px;">Like: <span
                                id="like_{{ $products->id }}">{{ $products->like }}</span> </p>
                        <p class="dislike" style="margin-right: 20px;">Dislike: <span
                                id="dislike_{{ $products->id }}">{{ $products->dislike }}</span> </p>

                    </div>

                    <div class="btn-group" role="group">

                        <button onclick="delete_product({{ $products->id }})" type="button"
                            class="btn border">Delete</button>
                        <button onclick="update_cells({{ $products->id }})" id="update_cells_{{ $products->id }}"
                            type="button" class="btn border">Update</button>
                        <button onclick="like({{ $products->id }})" type="button" class="btn border">Like</button>
                        <button onclick="dislike({{ $products->id }})" type="button"
                            class="btn border">Dislike</button>
                        <button onclick="increment({{ $products->id }})" type="button" class="btn border">Counte
                            +</button>
                            <button onclick="addtocart({{ $products->id }})" type="button" class="btn border">Add to cart</button>
                        <!--  <button type="button" class="btn ">Update</button>
                    <button type="button" class="btn ">Delete</button>
                    <button type="button" class="btn ">Increment</button>
                    <button type="button" class="btn ">Dicrement</button>
                    <button type="button" class="btn ">Like</button>
                    <button type="button" class="btn ">Dislike</button> -->


                    </div>

                </div>

            </div>

        </div>
    </div>
    <div class="container">
        @foreach($products->comments as $comment)
            <div>
                <h1>{{$comment->user->name}}</h1>
                <h2>{{$comment->content}}</h2>
            </div>
        @endforeach
    </div>
<!-- end container -->






    </div>
    </div>
    </div>



    </div>





@endsection
