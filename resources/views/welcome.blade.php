@extends('layout')


@section('title')Welcome @endsection

@section('main_content')



    <div class="row">
        <!-- start row -->
        <!--start  sidebar -->
        <div class="col-lg-3 col border-end ">

            <div class="mb-5 mt-4">
                <select onchange="filtration(event, 'order')" class="form-select">
                    <option value="created_at-asc">New</option>
                    <option value="created_at-desc">Old</option>
                    <option value="price-asc">Price: High to Low</option>
                    <option value="price-desc">Price: LoW to High</option>
                </select>
            </div>

            <div class="mb-5">
                <input onkeyup="filtration(event, 'search')" class="form-control" type="text" placeholder="search">
            </div>

            <div class="category mb-5">

                <ul class="list-group">
                    @foreach ($categories as $key => $value)
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            {{ $key }}
                            <span class="badge bg-primary rounded-pill">{{ $value }}</span>
                        </li>
                    @endforeach
                </ul>

            </div>

            <div class="addProduct">

                <button type="button" class="btn btn-primary mb-5" data-toggle="modal" data-target="#exampleModal">
                    Add Product
                </button>

            </div>

        </div>
        <!-- end sidebar -->

        <!-- start Product list -->
        <div class="col-lg-9 col  " id="allProducts">
            @foreach ($products as $product)
                <div class="product p-5 border rounded-3">
                    <div class="d-flex align-items-center">

                        <div class="flex-shrink-0">
                            <img src="https://image.shutterstock.com/image-illustration/img-file-document-icon-trendy-260nw-1407027353.jpg"
                                width="150px" alt="...">
                        </div>

                        <div class="flex-grow-1 ms-3">

                            <h3 class="title">{{ $product->name }}</h3>
                            <p class="description lead"> {{ $product->description }}</p>
                            <p class="price">price: <b>{{ $product->price }}</b></p>
                            <p class="count">counte: <b>{{ $product->count }}</b></p>

                            <div class="d-flex align-items-center justify-content-between">

                                <div class="btn-group" role="group">
                                    <button type="button" class="btn border">Like: {{ $product->like }}</button>
                                    <button type="button" class="btn border">Dislike: {{ $product->dislike }}</button>
                                </div>

                                <div>
                                    <a href="single/{{ $product->id }}">Open =></a>
                                </div>

                            </div>

                        </div>



                    </div>
                </div>
            @endforeach
        </div>
        <!-- end Product list -->


    </div> <!-- end row -->




    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">

                <div class="modal-header">
                    <h5 class="modal-title " id="exampleModalLabel">Add product</h5>
                </div>

                <div class="modal-body">

                    <div id="productAddCorrect">
                    </div>

                    <input type="text" class="form-control" id="name" placeholder="Title">
                    <input type="text" class="form-control mt-2" id="description" placeholder="Description">
                    <input type="text" class="form-control mt-2" id="img" placeholder="Img">
                    <input type="text" class="form-control mt-2" id="price" placeholder="Price">
                    <input type="text" class="form-control mt-2" id="count" placeholder="Count">
                    <input type="text" class="form-control mt-2" id="like" placeholder="Like">
                    <input type="text" class="form-control mt-2" id="dislike" placeholder="Dislike">
                    <input type="text" class="form-control mt-2" id="category" placeholder="Category">


                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" onclick="create()">Push</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" id="closeModal">Close</button>
                </div>

            </div>
        </div>
    </div>



@endsection
