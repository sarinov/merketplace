require('./bootstrap');
window.$ = require('jquery');


let url_token = localStorage.getItem('api_token'); 

window.showcart = function(id){

    // console.log(id);

    // let datacart = {
    //     "token":url_token, 
    //     "product_id":id
    // }

    $.ajax({
        url: "http://localhost:8000/api/cart/?token="+url_token,
        type: "GET",
        dataType: 'json',
        processData: false,
        contentType: 'application/json',
        CrossDomain:true,
        async: false,
        // data:  JSON.stringify(datacart),
        success: function (data) {
           console.log(data)
        },
        error: function (xhr, ajaxOptions, thrownError) { //Add these parameters to display the required response
            alert(xhr.status);
            alert(xhr.responseText);
        }
    });
}

window.addtocart = function(id){

    console.log(id);

    let datacart = {
        "token":url_token, 
        "product_id":id
    }

    $.ajax({
        url: "http://localhost:8000/api/cart/",
        type: "POST",
        dataType: 'json',
        processData: false,
        contentType: 'application/json',
        CrossDomain:true,
        async: false,
        data:  JSON.stringify(datacart),
        success: function (data) {
           console.log(data)
        },
        error: function (xhr, ajaxOptions, thrownError) { //Add these parameters to display the required response
            alert(xhr.status);
            alert(xhr.responseText);
        }
    });
}
window.increment = function(id){
   
    //http://localhost:8000/api/product/incrementCount/"+id+"?token=fa62dd02cc249c934cedb97a43141490b1ecc3b292a3314555f06f74dce5f754"

    $.ajax({

        url: "http://localhost:8000/api/product/incrementCount/"+id+"?token="+url_token,
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
        url: "http://localhost:8000/api/product/incrementLike/"+id+"?token="+url_token,
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
        url: "http://localhost:8000/api/product/decrementDisLike/"+id+"?token="+url_token,
        type: "PUT",
        dataType: 'json',
        processData: false,
        contentType: 'application/json',
        CrossDomain:true,
        async: false,
        success: function (data) {
            console.log(data);
            let dislike_cell = document.getElementById('dislike_'+id);
            dislike_cell.innerHTML = data.dislike;
        },
        error: function (xhr, ajaxOptions, thrownError) { //Add these parameters to display the required response
            alert(xhr.status);
            alert(xhr.responseText);
        }
    });
}
window.delete_product = function(id){
    
    $.ajax({
        url: "http://localhost:8000/api/product/"+id+"?token="+url_token,
        type: "DELETE",
        dataType: 'json',
        processData: false,
        contentType: 'application/json',
        CrossDomain:true,
        async: false,
        success: function (data) {
            console.log(data);
            let count_cell = document.getElementById('count_'+id).parentElement.remove();
            window.location = '/';
  
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
    let dislike_cell = document.getElementById('inp_dislike_'+id);
    let button = document.getElementById('update_cells_'+id);
    
    let data = {
        name: name_cell.value,
        price: price_cell.value,
        count: count_cell.value,
        like: like_cell.value,
        dislike: dislike_cell.value
    }
    $.ajax({
        url: "http://localhost:8000/api/product/"+id+"?token="+url_token,
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
            dislike_cell.parentNode.innerHTML=data.dislike
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
    let dislike_cell = document.getElementById('dislike_'+id);
    let button = document.getElementById('update_cells_'+id);

    count_cell.innerHTML=`<input id="inp_count_${id}" value="${count_cell.innerHTML}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">`
    price_cell.innerHTML=`<input id="inp_price_${id}" value="${price_cell.innerHTML}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">`
    name_cell.innerHTML=`<input id="inp_name_${id}" value="${name_cell.innerHTML}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">`
    like_cell.innerHTML=`<input id="inp_like_${id}" value="${like_cell.innerHTML}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">`
    dislike_cell.innerHTML=`<input id="inp_dislike_${id}" value="${dislike_cell.innerHTML}" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">`
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
    
    let data = new FormData();
    data.append('name', name_create.value);
    data.append('description', description_create.value);
    data.append('img', img_create.files[0]);
    data.append('price', price_create.value);
    data.append('count', count_create.value);
    data.append('like', like_create.value);
    data.append('dislike', dislike_create.value);
    data.append('category', category_create.value);
    data.append('token', url_token);
    

    $.ajax({
        url: "http://localhost:8000/api/product/",
        type: "POST",
        processData: false,
        contentType: false,
        cache: false,
        timeout: 800000,
        enctype: 'multipart/form-data',
        async: false,
        data,
        success: function (data) {
            console.log(data.name);
            $( "#productAddCorrect" ).append( "<p>Cоздано</p>" );
            $( "#allProducts" ).append(card_render(data));
        },
        error: function (xhr, ajaxOptions, thrownError) { //Add these parameters to display the required response
            alert(xhr.status);
            alert(xhr.responseText);
        }
    });
}

window.registration = function(id){
    let reg_name = document.getElementById('reg_name');
    let reg_email = document.getElementById('reg_email');
    let reg_password = document.getElementById('reg_password');

    let data = new FormData();
    data.append('name', reg_name.value);
    data.append('email', reg_email.value);
    data.append('password', reg_password.value);
   
    $.ajax({
        url: "http://localhost:8000/api/registration/",
        type: "POST",
        processData: false,
        contentType: false,
        cache: false,
        timeout: 800000,
        enctype: 'multipart/form-data',
        async: false,
        data,
        success: function (data) {
            console.log(data.name);
            localStorage.setItem('api_token', data.api_token);
            window.location.href = '/';
           
        },
        error: function (xhr, ajaxOptions, thrownError) { //Add these parameters to display the required response
            alert(xhr.status);
            alert(xhr.responseText);
        }
    });
}
window.signin = function(id){
    let login_email = document.getElementById('login_email');
    let login_password = document.getElementById('login_password');

    let data = new FormData();
    data.append('email', login_email.value);
    data.append('password', login_password.value);
   

    $.ajax({
        url: "http://localhost:8000/api/login/",
        type: "POST",
        processData: false,
        contentType: false,
        cache: false,
        timeout: 800000,
        enctype: 'multipart/form-data',
        async: false,
        data,
        success: function (data) {
            console.log(data);
            localStorage.setItem('api_token',data.api_token);
            window.location.href = '/';
           
        },
        error: function (xhr, ajaxOptions, thrownError) { //Add these parameters to display the required response
            alert(xhr.status);
            alert(xhr.responseText);
        }
    });
}

let data = {
    q : '',
    col : '',
    order : '',
}

window.filtration = function (event, type) {
    console.log(event.target.value)  
    if(type == 'search') data.q = event.target.value
    else if(type == 'order') {
        let [col, order] = event.target.value.split('-')
        data.col = col
        data.order = order
    }
    console.log(data);
    fetch_data(data);
}

function fetch_data(data){
    $.ajax({
        url: `http://localhost:8000/api/filtration?q=${data.q}&col=${data.col}&order=${data.order}?token=`+url_token,
        type: "GET",
        dataType: 'json',
        processData: false,
        contentType: 'application/json',
        CrossDomain:true,
        async: false,
        success: function (data) {
            console.log(data);
            $( "#allProducts" ).empty();
            for(let i of data){
                $( "#allProducts" ).append(card_render(i));
            }
        },
        error: function (xhr, ajaxOptions, thrownError) { //Add these parameters to display the required response
            alert(xhr.status);
            alert(xhr.responseText);
        }
    });
}
function card_render(data){
    return `
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
     </div>` 
}