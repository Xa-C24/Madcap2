from django.test import TestCase
from madcap_app.models import Avis
from madcap_app.models import Member
from django.core.exceptions import ValidationError
from django.db import transaction


def test_member_unique_phone(self):
    """Vérifie qu'on ne peut pas enregistrer deux membres avec le même téléphone"""
    with self.assertRaises(ValidationError):
        with transaction.atomic():  # Empêche Django d'enregistrer en cas d'erreur
            member2 = Member(name="Tusais", address="456 avenue", phone="0612345678")
            member2.full_clean()  # Vérifie la validation avant l'enregistrement
            member2.save()

# test de la class Avis

class AvisModelTest(TestCase):
    def setUp(self):
        """Créer un avis test en base de données"""
        self.avis = Avis.objects.create(
            nom="Jean Eude",
            email="jean.eude@example.com",
            telephone="0601020304",
            commentaire="Super expérience !",
            note=5
        )

    def test_avis_creation(self):
        """Vérifie que l'avis est bien enregistré"""
        avis = Avis.objects.get(email="jean.eude@example.com")
        self.assertEqual(avis.nom, "Jean Eude")
        self.assertEqual(avis.note, 5)
        self.assertEqual(avis.commentaire, "Super expérience !")

# Test de la class Member

class MemberModelTest(TestCase):
    def setUp(self):
        """Créer un membre test en base de données"""
        self.member = Member.objects.create(
            name="Lemec Lafille",
            address="123 rue de Thonon",
            phone="0612345678",
            date_entree="2024-02-18"
        )

    def test_member_creation(self):
        """Vérifie que le membre est bien enregistré"""
        member = Member.objects.get(phone="0612345678")
        self.assertEqual(member.name, "Lemec Lafille")
        self.assertEqual(member.address, "123 rue de Thonon")

    def test_member_unique_phone(self):
        """Vérifie qu'on ne peut pas enregistrer deux membres avec le même téléphone"""
        with self.assertRaises(ValidationError):
            member2 = Member(name="Tusais", address="456 avenue", phone="0612345678")
            member2.full_clean()  # Valide les contraintes avant d'enregistrer
            member2.save()

    def test_avis_note_invalide(self):
        """Vérifie qu'une note invalide lève une erreur"""
        with self.assertRaises(ValidationError):
            avis = Avis(nom="Test", email="test@example.com", telephone="0602030405",
                        commentaire="Test invalide", note=6)  # 6 est hors limites
            avis.full_clean()  # Vérifie la validation avant save()
    
    def test_member_date_entree(self):
        """Vérifie que la date d'entrée est bien enregistrée"""
        member = Member.objects.get(phone="0612345678")
        self.assertEqual(str(member.date_entree), "2024-02-18")