from django.shortcuts import render, HttpResponseRedirect
from products.models import Product

def product(request, product_id):
    product = Product.objects.get(id = product_id)
    return render(request, 'products/product.html', locals())