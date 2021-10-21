@extends('layout')


@section('title')Welcome @endsection

@section('main_content')



<div class="row">
    <div class="col-lg-3 col border-end ">

     <div class="mb-5">
    <select class="form-select" >
  <option selected>Order by</option>
  <option value="1">New</option>
  <option value="2">Old</option>
</select>
        </div>
        <div class="mb-5">
            <input class="form-control" type="text" placeholder="search" >
        </div>
        <div class="category mb-5">
            <ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A second list item
    <span class="badge bg-primary rounded-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A third list item
    <span class="badge bg-primary rounded-pill">1</span>
  </li>
</ul>
        </div>

        <div class="addProduct">


<!-- Button trigger modal -->
<button type="button" class="btn btn-primary mb-5" data-toggle="modal" data-target="#exampleModal">
  Add Product
</button>


        </div>
    </div>

    <div class="col-lg-9 col  " id="allProducts">

        @foreach($products as $product )
            

     <div class="product p-5 border rounded-3">
        <div class="d-flex align-items-center">
  <div class="flex-shrink-0">
    <img src="https://image.shutterstock.com/image-illustration/img-file-document-icon-trendy-260nw-1407027353.jpg" width="150px" alt="...">
  </div>
  <div class="flex-grow-1 ms-3">
    <h3 class="title">{{$product->name}}</h3>
    <p class="description lead"> {{$product->description}}</p>
    <p class="price">price: <b>{{$product->price}}</b></p>
    <p class="count">counte: <b>{{$product->counte}}</b></p> 

    <div class="d-flex align-items-center justify-content-between">
            <div class="btn-group" role="group">
  <button type="button" class="btn border">Like: {{$product->like}}</button>
  <button type="button" class="btn border">Dislike: {{$product->dislike}}</button>
</div>
<div>
    <a href="single/{{$product->id}}">Open =></a>

    
</div>
    </div>
  </div>
</div>
     </div>


 @endforeach


    </div>
  </div>
</div>



<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div id="productAddCorrect">
            
        </div>
       <input type="text" class="form-control" id="name">
<input type="text" class="form-control" id="description">
<input type="text" class="form-control" id="img">
<input type="text" class="form-control" id="price">
<input type="text" class="form-control" id="count">
<input type="text" class="form-control" id="like">
<input type="text" class="form-control" id="dislike">
<input type="text" class="form-control" id="category">


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" id="closeModal">Close</button>
        <button type="button" class="btn btn-primary" onclick="create()">push</button>
      </div>
    </div>
  </div>
</div>



    @endsection