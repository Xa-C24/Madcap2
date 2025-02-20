"""
URLs configuration for madcap_app.
"""

from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .views import change_language
from . import views


urlpatterns = [
    path('', views.index, name='index'),  # Page d'accueil
    path('association/', views.association, name='association'),
    path('contact/', views.contact, name='contact'),
    path('don/', views.don, name='don'),
    path('histoire/', views.histoire, name='histoire'),
    path('evenements/', views.evenements, name='evenements'),
    path('livre_dor/', views.livre_dor, name='livre_dor'),
    path('membres/', views.liste_membres, name='liste_membres'),
    path('avis-ajax/', views.avis_ajax, name='avis_ajax'),


    # Formulaire de contact
    path('submit_contact/', views.submit_contact, name='submit_contact'),

    # Interface d'administration Django
    path('admin-login/', views.admin_login, name='admin_login'),
    path('admin-dashboard/', views.admin_dashboard, name='admin_dashboard'),
    path('search-members/', views.search_members, name='search_members'),  # Route pour la recherche

    # Change de langue
    path('change-language/<str:lang_code>/', change_language, name='change_language'),
]

#  CORRECTION : Servir les fichiers médias en production aussi 
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
