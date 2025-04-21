from django.contrib import admin
from .models import Member

# Register your models here.
from django.contrib import admin
from .models import Avis

@admin.register(Avis)
class AvisAdmin(admin.ModelAdmin):
    list_display = ('nom', 'note', 'valide', 'date')
    list_filter = ('valide', 'note', 'date')
    search_fields = ('nom', 'commentaire', 'email')
    list_editable = ('valide',)  # Permet de cocher/décocher dans la liste

@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'annee_adhesion')
    search_fields = ('name', 'phone')