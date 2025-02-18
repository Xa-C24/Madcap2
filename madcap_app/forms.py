from django import forms
from django.core.exceptions import ValidationError
import re  # Ajout du module pour la validation regex
from .models import Avis, Member

class AvisForm(forms.ModelForm):
    class Meta:
        model = Avis
        fields = ['nom', 'email', 'telephone', 'commentaire', 'note', 'photo1', 'photo2', 'photo3', 'photo4']

note = forms.ChoiceField(
        choices=[(i, '★' * i) for i in range(1, 6)],  # Génère des étoiles dynamiquement
        widget=forms.RadioSelect(attrs={'class': 'rating-stars'})
    )

class MemberForm(forms.ModelForm):
  phone = forms.CharField(
        max_length=15,
        min_length=10,  # Exige au moins 10 chiffres
        required=True
    )
  
  def clean_phone(self):
        phone = self.cleaned_data['phone']
        if not re.match(r'^\d{10,15}$', phone):  # ✅ Vérifie que ce sont bien des chiffres uniquement
            raise ValidationError("Le numéro de téléphone doit contenir uniquement des chiffres et faire entre 10 et 15 caractères.")
        return phone
  class Meta:
    model = Member
    fields = ['name', 'address', 'phone', 'date_entree']
