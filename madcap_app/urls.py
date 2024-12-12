from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # Route pour la page d'accueil
    path('association/', views.association, name='association'),
    path('contact/', views.contact, name='contact'),
    path('don/', views.don, name='don'),
    path('histoire/', views.histoire, name='histoire'),
    path('evenements/', views. evenements, name='eveclnements'),
]
