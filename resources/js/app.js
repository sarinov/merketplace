require('./bootstrap');
window.$ = require('jquery');



window.increment = function(id){
    
    $.ajax({
        url: "http://localhost:8000/api/product/incrementCount/"+id,
        type: "PUT",
        dataType: 'json',
        processData: false,
        contentType: 'application/json',
        CrossDomain:true,
        async: false,
        success: function (data) {
            let count_cell = document.getElementById('count_'+id);
            count_cell.innerHTML = data.count;

        },
        error: function (xhr, ajaxOptions, thrownError) { //Add these parameters to display the required response
            alert(xhr.status);
            alert(xhr.responseText);
        }
    });
}

window.like = function(id){
    
    $.ajax({
        url: "http://localhost:8000/api/product/incrementLike/"+id,
        type: "PUT",
        dataType: 'json',
        processData: false,
        contentType: 'application/json',
        CrossDomain:true,
        async: false,
        success: function (data) {
            console.log(data);
            let like_cell = document.getElementById('like_'+id);
            like_cell.innerHTML = data.like;
        },
        error: function (xhr, ajaxOptions, thrownError) { //Add these parameters to display the required response
            alert(xhr.status);
            alert(xhr.responseText);
        }
    });
}
window.dislike = function(id){
    
    $.ajax({
        url: "http://localhost:8000/api/product/incrementCount/"+id,
        type: "PUT",
        dataType: 'json',
        processData: false,
        contentType: 'application/json',
        CrossDomain:true,
        async: false,
        success: function (data) {
            console.log(data);
        },
        error: function (xhr, ajaxOptions, thrownError) { //Add these parameters to display the required response
            alert(xhr.status);
            alert(xhr.responseText);
        }
    });
}
window.delete_product = function(id){
    
    $.ajax({
        url: "http://localhost:8000/api/product/"+id,
        type: "DELETE",
        dataType: 'json',
        processData: false,
        contentType: 'application/json',
        CrossDomain:true,
        async: false,
        success: function (data) {
            console.log(data);
            let count_cell = document.getElementById('count_'+id).parentElement.remove();
  
        },
        error: function (xhr, ajaxOptions, thrownError) { //Add these parameters to display the required response
            alert(xhr.status);
            alert(xhr.responseText);
        }
    });
}
window.update = function(id){
    let count_cell = document.getElementById('inp_count_'+id);
    let price_cell = document.getElementById('inp_price_'+id);
    let name_cell = document.getElementById('inp_name_'+id);
    let like_cell = document.getElementById('inp_like_'+id);
    let button = document.getElementById('update_cells_'+id);
    
    let data = {
        name: name_cell.value,
        price: price_cell.value,
        count: count_cell.value,
        like: like_cell.value
    }
    $.ajax({
        url: "http://localhost:8000/api/product/"+id,
        type: "PUT",
        dataType: 'json',
        processData: false,
        contentType: 'application/json',
        CrossDomain:true,
        async: false,
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data);
            count_cell.parentNode.innerHTML=data.count
            price_cell.parentNode.innerHTML=data.price
            name_cell.parentNode.innerHTML=data.name
            like_cell.parentNode.innerHTML=data.like
            button.onclick = () => update_cells(id);
        },
        error: function (xhr, ajaxOptions, thrownError) { //Add these parameters to display the required response
            alert(xhr.status);
            alert(xhr.responseText);
        }
    });
}
window.update_cells = function(id){
    
    let count_cell = document.getElementById('count_'+id);
    let price_cell = document.getElementById('price_'+id);
    let name_cell = document.getElementById('name_'+id);
    let like_cell = document.getElementById('like_'+id);
    let button = document.getElementById('update_cells_'+id);

    count_cell.innerHTML=`<input id="inp_count_${id}" value="${count_cell.innerHTML}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">`
    price_cell.innerHTML=`<input id="inp_price_${id}" value="${price_cell.innerHTML}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">`
    name_cell.innerHTML=`<input id="inp_name_${id}" value="${name_cell.innerHTML}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">`
    like_cell.innerHTML=`<input id="inp_like_${id}" value="${like_cell.innerHTML}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">`
    button.onclick = () => update(id);
}



window.create = function(id){
    let name_create = document.getElementById('name');
    let description_create = document.getElementById('description');
    let img_create = document.getElementById('img');
    let price_create = document.getElementById('price');
    let count_create = document.getElementById('count');
    let like_create = document.getElementById('like');
    let dislike_create = document.getElementById('dislike');
    let category_create = document.getElementById('category');
    

    

    let data = {
        name: name_create.value,
        description: description_create.value,
        img: img_create.value,
        price: price_create.value,
        count: count_create.value,
        like: like_create.value,
        dislike: dislike_create.value,
        category: category_create.value
    }
    $.ajax({
        url: "http://localhost:8000/api/product/",
        type: "POST",
        dataType: 'json',
        processData: false,
        contentType: 'application/json',
        CrossDomain:true,
        async: false,
        data: JSON.stringify(data),
        success: function (data) {
            console.log(data.name);


// $.each(data, function( key, value ) {
//     $("#AllProducts").html(value);


//   console.log( 'Свойство: ' +key + '; Значение: ' + value );

// });

$( "#productAddCorrect" ).append( "<p>Cоздано</p>" );


$( "#allProducts" ).append( `
     <div class="product p-5 border rounded-3">
        <div class="d-flex align-items-center">
  <div class="flex-shrink-0">
    <img src="https://image.shutterstock.com/image-illustration/img-file-document-icon-trendy-260nw-1407027353.jpg" width="150px" alt="...">
  </div>
  <div class="flex-grow-1 ms-3">
    <h3 class="title">${data.name}</h3>
    <p class="description lead"> ${data.description}</p>
    <p class="price">price: <b>${data.price}</b></p>
    <p class="count">counte: <b>${data.count}</b></p> 

    <div class="d-flex align-items-center justify-content-between">
            <div class="btn-group" role="group">
  <button type="button" class="btn border">Like: ${data.like}</button>
  <button type="button" class="btn border">Dislike:${data.dislike}</button>
</div>
<div>
    <a href="single/${data.id}">Open =></a>

    
</div>
    </div>
  </div>
</div>
     </div>` );



// let count_cell = document.getElementById('inp_count_'+data.id);
//     let price_cell = document.getElementById('inp_price_'+data.id);
//     let name_cell = document.getElementById('inp_name_'+data.id);
//     let like_cell = document.getElementById('inp_like_'+data.id);
//     let button = document.getElementById('update_cells_'+id);


//             count_cell.parentNode.innerHTML=data.count
//             price_cell.parentNode.innerHTML=data.price
//             name_cell.parentNode.innerHTML=data.name
//             like_cell.parentNode.innerHTML=data.like
//             button.onclick = () => update_cells(id);
        },
        error: function (xhr, ajaxOptions, thrownError) { //Add these parameters to display the required response
            alert(xhr.status);
            alert(xhr.responseText);
        }
    });
}
