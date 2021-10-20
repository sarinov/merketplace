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

