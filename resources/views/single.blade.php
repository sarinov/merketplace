@extends('layout')

@section('title')Welcome @endsection

@section('main_content')



<div class="container">
     <div class="product p-5 border rounded-3">
        <div class="d-flex align-items-center">
          <div class="flex-shrink-0">
            <img src="https://image.shutterstock.com/image-illustration/img-file-document-icon-trendy-260nw-1407027353.jpg" width="250px" alt="...">
          </div>
          <div class="flex-grow-1 ms-3">
            <h3 class="title" id="name_{{$products->id}}">{{$products->name}} </h3>
            <p class="description lead" id="description_{{$products->id}}">{{$products->decription}} </p>

          <div class=" d-flex">
            <p class="price" id="price_{{$products->id}}" style="margin-right: 20px;"> price: <b>{{$products->price}}</b></p>
            <p class="count" id="count_{{$products->id}}" style="margin-right: 20px;" >counte: <b>{{$products->counte}}</b></p> 
        
            <p class="like" id="like_{{$products->id}}" style="margin-right: 20px;">Like: {{$products->like}}</p>
            <p class="dislike" id="dislike_{{$products->id}}" style="margin-right: 20px;">Dislike: {{$products->dislike}}</p> 

            </div>
          <div class="btn-group" role="group">
          
                <button onclick="delete_product({{$products->id}})" type="button" class="btn border">Delete</button>
                  <button onclick="update_cells({{$products->id}})" id = "update_cells_{{$products->id}}" type="button" class="btn border">Update</button>
                  <button onclick="like({{$products->id}})"type="button" class="btn border">Like</button>
                  <button onclick="dislike({{$products->id}})"type="button" class="btn border">Dislike</button>
                  <button onclick="increment({{$products->id}})"type="button" class="btn border">Incrment</button>
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

    




  </div>
</div>
     </div>



</div>



   

    @endsection