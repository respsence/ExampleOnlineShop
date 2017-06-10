from django.shortcuts import render, HttpResponseRedirect
from .forms import SubscriberForm
from  products.models import Product, ProductImage

def landing(request):
    name = 'Rustam'
    current_date = '30.05.2017'
    form = SubscriberForm(request.POST or None)
    if request.method == "POST" and form.is_valid():
        print(request.POST)
        data = form.cleaned_data
        print(data["name"])

        new_form = form.save()
        return HttpResponseRedirect(request.META.get('HTTP_REFERER'))

    return render(request, 'landing/landing.html',locals())

def home(request):
    products_images = ProductImage.objects.filter(is_active=True, is_main=True, product__is_active=True)
    products_images_phones = products_images.filter(product__category__id = 1 )
    products_images_laptops = products_images.filter(product__category__id = 2)
    return render(request, 'landing/home.html',locals())