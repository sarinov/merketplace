<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
class ProductController extends Controller
{
    //

    public function index()
    {
        
        return  view('welcome', ['products' => Product::get()]);        
        
    }
        public function single($id)
    {
         $product = Product::find($id);

        
        return  view('single', ['products' => $product]);        
        
    }

    public function update(Request $request, $id)
    {
        $product = Product::find($id);

        $product->update($request->all());

        return  $product;        
        
    }

    public function incrementCount($id)
    {
        $product = Product::find($id);

        $product->increment('count');

        return   $product;        
        
    }
    public function incrementLike($id)
    {
        $product = Product::find($id);

        $product->increment('like');

        return   $product;        
        
    }
    public function delete($id)
    {
        $product = Product::find($id);

        $product->delete();
        return   $product;        
    
    }

    public function create(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'price' => 'numeric',
            'img' => 'required',
            'description' => 'nullable',
            'category' => 'required'
        ]);
        // dd($validated);
        Product::create($validated);
        
        return $validated;          
        
    }

}
