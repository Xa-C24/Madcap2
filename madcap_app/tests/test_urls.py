from django.test import SimpleTestCase
from django.urls import reverse, resolve
from madcap_app.views import index, livre_dor, liste_membres

class UrlsTestCase(SimpleTestCase):

    def test_index_url(self):
        """Vérifie que l'URL de l'accueil fonctionne"""
        url = reverse('index')
        self.assertEqual(resolve(url).func, index)

    def test_livre_dor_url(self):
        """Vérifie que l'URL du livre d'or fonctionne"""
        url = reverse('livre_dor')
        self.assertEqual(resolve(url).func, livre_dor)

    def test_liste_membres_url(self):
        """Vérifie que l'URL des membres fonctionne"""
        url = reverse('liste_membres')
        self.assertEqual(resolve(url).func, liste_membres)
