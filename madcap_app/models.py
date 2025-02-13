from django.db import models, IntegrityError  # Importation de "models" pour définir les tables de la base de données
from django.core.exceptions import ValidationError  # Importation de "ValidationError" pour gérer les erreurs de validation personnalisées

class Member(models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField()
    phone = models.CharField(max_length=15, unique=True)  # Téléphone unique
    date_entree = models.DateField(null=True, blank=True)

    def save(self, *args, **kwargs):
        # Vérifie si un membre avec le même nom et numéro de téléphone existe déjà
        if Member.objects.filter(name=self.name, phone=self.phone).exclude(pk=self.pk).exists():
            raise ValidationError(f"Le membre '{self.name}' avec le téléphone '{self.phone}' est déjà présent dans la base de données.")
        try:
            super().save(*args, **kwargs)  # Appelle la méthode save originale
        except IntegrityError:
            raise ValidationError(f"Le membre '{self.name}' avec le téléphone '{self.phone}' est déjà présent dans la base de données.")

    class Meta:
        ordering = ['name']  # Tri automatique par ordre alphabétique
        unique_together = ('name', 'phone')  # Contrainte d'unicité

    def __str__(self):
        return self.name


# Gère les avis laissés 
class Avis(models.Model):
    nom = models.CharField(max_length=100)
    email = models.EmailField()
    telephone = models.CharField(max_length=15)
    commentaire = models.TextField()
    note = models.IntegerField(choices=[(i, str(i)) for i in range(1, 6)])  # Note de 1 à 5
    date = models.DateTimeField(auto_now_add=True)

    # Champs pour les images
    photo1 = models.ImageField(upload_to='avis_photos/', null=True, blank=True)
    photo2 = models.ImageField(upload_to='avis_photos/', null=True, blank=True)
    photo3 = models.ImageField(upload_to='avis_photos/', null=True, blank=True)
    photo4 = models.ImageField(upload_to='avis_photos/', null=True, blank=True)

    class Meta:
        ordering = ['-date']  # Afficher les avis du plus récent au plus ancien

    def __str__(self):
        return f"{self.nom} - {self.note} étoiles"
