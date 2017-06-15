$(document).ready(function () {
    var form = $('#form_buying_product');
    console.log(form);
    form.on('submit', function (e) {
        e.preventDefault();
        console.log('123');
        var nmb = $('#number').val();
        console.log(nmb);
        var submit_btn = $('#submit_btn');
        var product_id = submit_btn.data('product_id');
        var product_name = submit_btn.data('name');
        var product_price = submit_btn.data('price');
        console.log(product_id);
        console.log(product_name);

        var data = {};
        data.product_id = product_id;
        data.nmb = nmb;

        var csrf_token = $('#form_buying_product [name="csrfmiddlewaretoken"]').val();
        data["csrfmiddlewaretoken"] = csrf_token;

        var url = form.attr("action");

        console.log(data)
        $.ajax({
            url: url,
            type: "POST",
            data: data,
            cache: true,
            success: function(data){
                console.log("Ok");
                console.log(data.products_total_nmb);
                if(data.products_total_nmb){
                     $('#basket_total_nmb').text("("+data.products_total_nmb+")");
                }

            },
            error: function(data){
                console.log("Error");
            }

        })


        $('.basket-items ul').append('<li>'+product_name+', '+nmb+' шт. по '+product_price +' руб '+
            +'<a href="" class="delete-item" >X</a>'+
            '</li>');
    })
    
    function showingbasket() {
        $('.basket-items').toggleClass('hidden');
    }

    $('.basket-container').on('click', function (e) {
        e.preventDefault();
        showingbasket();
    })

    $('.basket-container').mouseover(function (e) {
        e.preventDefault();
        showingbasket();
    })

    $('.basket-container').mouseout(function (e) {
        e.preventDefault();
        showingbasket();
    })

    $(document).on('click', '.delete-item', function (e) {
        e.preventDefault();
        $(this).closest('li').remove();
    })
})


