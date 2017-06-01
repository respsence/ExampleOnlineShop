from django.shortcuts import render
from .forms import SubscriberForm

def landing(request):
    name = 'Rustam'
    current_date = '30.05.2017'
    form = SubscriberForm(request.POST or None)
    if request.method == "POST":
        print(form)

    return render(request, 'landing/landing.html',locals())
