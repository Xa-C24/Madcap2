# Generated by Django 5.1.5 on 2025-03-17 12:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('madcap_app', '0005_avis_valide'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='date_entree',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
