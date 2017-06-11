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
    })
    
    function showingbasket() {
        $('.basket-items').removeClass('hidden');
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
        $('.basket-items').addClass('hidden');
    })
})
