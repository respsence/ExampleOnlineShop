from django.conf.urls import url, include
from django.contrib import admin
from landing import views

urlpatterns = [
    url(r'^', views.home, name='home'),
    url(r'^landing/', views.landing, name='landing'),
]
