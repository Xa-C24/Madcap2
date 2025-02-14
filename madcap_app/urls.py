from django.urls import path
from . import views
from django.contrib import admin
from .views import change_language  #  Import de la fonction change_language


urlpatterns = [
    path('', views.index, name='index'),  # Page d'accueil
    path('association/', views.association, name='association'),
    path('contact/', views.contact, name='contact'),
    path('don/', views.don, name='don'),
    path('histoire/', views.histoire, name='histoire'),
    path('evenements/', views.evenements, name='evenements'),
    path('livre_dor/', views.livre_dor, name='livre_dor'),

    # Formulaire de contact
    path('submit_contact/', views.submit_contact, name='submit_contact'),

    # Interface d'administration Django
    path('admin/', admin.site.urls),  # Ajout de l’interface admin

    # Routes spécifiques à l'administration
    path('admin-login/', views.admin_login, name='admin_login'),
    path('admin-dashboard/', views.admin_dashboard, name='admin_dashboard'),
    path('search-members/', views.search_members, name='search_members'),  # Route pour la recherche

     path('change-language/<str:lang_code>/', change_language, name='change_language'),
]
