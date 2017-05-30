from django.shortcuts import render


def landing(request):
    name = 'Rustam'
    current_date = '30.05.2017'
    return render(request, 'landing/landing.html',locals())
