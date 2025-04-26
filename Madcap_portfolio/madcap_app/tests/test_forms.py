from django.test import TestCase
from madcap_app.forms import AvisForm, MemberForm  # Assure-toi que ces formulaires existent
from madcap_app.models import Avis, Member

class FormsTestCase(TestCase):

    def test_avis_form_valid(self):
        """Vérifie que le formulaire AvisForm est valide avec des données correctes"""
        form_data = {
            'nom': 'Jean Letesteur',
            'email': 'jean.Letesteur@example.com',
            'telephone': '0630405',
            'commentaire': 'Très bon site !',
            'note': 5
        }
        form = AvisForm(data=form_data)
        self.assertTrue(form.is_valid())
        

    def test_avis_form_invalid(self):
        """Vérifie que le formulaire AvisForm est invalide avec une note hors limite"""
        form_data = {
            'nom': 'Jean Letesteur',
            'email': 'jean.Letesteur@example.com',
            'telephone': '0602030405',
            'commentaire': 'Super ! amazing !',
            'note': 6  # Note invalide
        }

        form = AvisForm(data=form_data)
        self.assertFalse(form.is_valid())
        self.assertIn('note', form.errors)  # Vérifie que l'erreur est bien sur le champ 'note'

    def test_member_form_valid(self):
        """Vérifie que le formulaire MemberForm est valide"""
        form_data = {
            'name': 'Bob marley',
            'address': 'Avenue de la Jamaique',
            'phone': '0612345678',
            'date_entree': '2024-02-18'
        }
        form = MemberForm(data=form_data)
        self.assertTrue(form.is_valid())

    def test_member_form_invalid_phone(self):
        """Vérifie que le formulaire MemberForm est invalide avec un numéro incorrect"""
        form_data = {
            'name': 'Bob marley',
            'address': 'Avenue de la Jamaique',
            'phone': 'ABC12345690',  # Numéro invalide
            'date_entree': '2024-02-18'
        }
        form = MemberForm(data=form_data)
        self.assertFalse(form.is_valid())
        self.assertIn('phone', form.errors)