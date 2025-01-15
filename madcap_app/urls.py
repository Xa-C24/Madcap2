from django.urls import path
from . import views
from django.contrib import admin

urlpatterns = [
    path('', views.index, name='index'),  # Route pour la page d'accueil
    path('association/', views.association, name='association'),
    path('contact/', views.contact, name='contact'),
    path('don/', views.don, name='don'),
    path('histoire/', views.histoire, name='histoire'),
    path('evenements/', views. evenements, name='evenements'),
    
     # Route pour formulaire de contact
    path('submit_contact/', views.submit_contact, name='submit_contact'),


    # Routes spécifiques à l'administration
    path('admin-login/', views.admin_login, name='admin_login'),
    path('admin-dashboard/', views.admin_dashboard, name='admin_dashboard'),
    path('search-members/', views.search_members, name='search_members'),  # Route pour la recherche
]
