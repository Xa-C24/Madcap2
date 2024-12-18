from django.db import models

class Member(models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField()
    phone = models.CharField(max_length=15)
    date_entree = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.name
    