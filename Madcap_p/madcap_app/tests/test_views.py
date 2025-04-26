from django.test import TestCase
from django.urls import reverse
from madcap_app.models import Avis, Member

# Test des Views

class ViewsTestCase(TestCase):

    def setUp(self):
        """Créer des données de test"""
        self.avis = Avis.objects.create(
            nom="Boble Testeur",
            email="Bob@example.com",
            telephone="0602030405",
            commentaire="Ceci est un test d'affichage.",
            note=4
        )

        self.member = Member.objects.create(
            name="Bob Marley",
            address="Jamaique",
            phone="0611223344",
            date_entree="2024-02-18"
        )

    def test_livre_dor_view(self):
        """Vérifie que la page du livre d'or s'affiche bien"""
        response = self.client.get(reverse('livre_dor'))  # Vérifie l'URL correspondante
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'livre_dor.html')
        self.assertContains(response, "Boble Testeur")  # Vérifie si le nom est affiché

    def test_membres_view(self):
        """Vérifie que la page des membres s'affiche bien"""
        response = self.client.get(reverse('liste_membres'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'liste_membres.html')
        self.assertContains(response, "Bob Marley")  # Vérifie si le nom est affiché
