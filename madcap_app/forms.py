from django import forms
from .models import Avis

class AvisForm(forms.ModelForm):
    class Meta:
        model = Avis
        fields = ['nom', 'email', 'telephone', 'commentaire', 'note', 'photo1', 'photo2', 'photo3', 'photo4']

note = forms.ChoiceField(
        choices=[(i, '★' * i) for i in range(1, 6)],  # Génère des étoiles dynamiquement
        widget=forms.RadioSelect(attrs={'class': 'rating-stars'})
    )

