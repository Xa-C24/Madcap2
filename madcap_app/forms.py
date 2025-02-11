from django import forms
from .models import Avis  # On importe le modèle Avis

class AvisForm(forms.ModelForm):
    class Meta:
        model = Avis
        fields = ['nom', 'email', 'telephone', 'commentaire', 'note']  # Champs du formulaire
        widgets = {
            'note': forms.Select(choices=[(i, f"{i} ★") for i in range(1, 6)]),  # Afficher des étoiles pour la note
        }
