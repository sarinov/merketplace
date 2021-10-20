<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    </head>

    <body class="antialiased">
        
        <table class="table">
            <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Count</th>
                  <th scope="col">Like</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>

        @foreach($products as $product )
            <tr>
            <th class="col" id="name_{{$product->id}}">{{$product->name}}</th>
            <td class="col"  id="price_{{$product->id}}">{{$product->price}}</td>
            <td class="col" id="count_{{$product->id}}">{{$product->count}}</td>
            <td class="col" id="like_{{$product->id}}">{{$product->like}}</td>
            <td class="col">
                <button onclick="delete_product({{$product->id}})" type="button" class="btn btn-primary">Delete</button>
                <button onclick="update_cells({{$product->id}})" id = "update_cells_{{$product->id}}" type="button" class="btn btn-primary">Update</button>
                <button onclick="like({{$product->id}})"type="button" class="btn btn-primary">Like</button>
                <button onclick="dislike({{$product->id}})"type="button" class="btn btn-primary">Dislike</button>
                <button onclick="increment({{$product->id}})"type="button" class="btn btn-primary">Incrment</button>
            </td>
             </tr>
        @endforeach
    </tbody>

</table>
    </body>
    <script type="text/javascript" src="{{ URL::asset('js/app.js') }}"></script>

</html>
