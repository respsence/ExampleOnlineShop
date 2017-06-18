$(document).ready(function () {
    var form = $('#form_buying_product');
    console.log(form);

    function BasketUpdating(product_id, nmb, is_delete) {
        var data = {};
        data.product_id = product_id;
        data.nmb = nmb;

        var csrf_token = $('#form_buying_product [name="csrfmiddlewaretoken"]').val();
        data["csrfmiddlewaretoken"] = csrf_token;

        if (is_delete){
            data["is_delete"] = true;
        }
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
                if(data.products_total_nmb || data.products_total_nmb == 0 ){
                    $('#basket_total_nmb').text("("+data.products_total_nmb+")");
                    console.log(data.products);

                    $('.basket-items ul').html("");
                    $.each(data.products, function (k, v) {

                        $('.basket-items ul').append('<li>'+v.name+' ('+v.nmb +')' +
                            '<a class="delete-item" href="" data-product_id="'+v.id+'">x</a>'+
                            '</li>');
                     })
                }

            },
            error: function(data){
                console.log("Error");
            }

        })
    }

    form.on('submit', function (e) {
        e.preventDefault();

        var nmb = $('#number').val();
        console.log(nmb);
        var submit_btn = $('#submit_btn');
        var product_id = submit_btn.data('product_id');
        var product_name = submit_btn.data('name');
        var product_price = submit_btn.data('price');
        console.log(product_id);
        console.log(product_name);

        BasketUpdating(product_id, nmb, is_delete = false)
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
        console.log('Удалить!!');
        product_id = $(this).data("product_id");
        nmb = 0;
        BasketUpdating(product_id, nmb, is_delete = true)
    });


    function calculatingBasketAmount() {
        var total_order_amount = 0;
        $('.total-product-in-basket-amount').each(function () {
            total_order_amount += parseFloat($(this).text());

        });
        $('#total_order_amount').text(total_order_amount.toFixed(2));
    };

    $(document).on('change', '.product-in-basket-nmb',function () {
        var current_nmb = $(this).val();
        var current_tr = $(this).closest('tr');
        var current_price = parseFloat(current_tr.find('.product-price').text()).toFixed(2);
        var total_amount = parseFloat(current_nmb * current_price).toFixed(2);
        current_tr.find('.total-product-in-basket-amount').text(total_amount);
        calculatingBasketAmount();
    })

    calculatingBasketAmount();
})


