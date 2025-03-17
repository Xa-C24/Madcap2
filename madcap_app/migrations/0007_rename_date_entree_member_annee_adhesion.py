from django.db import migrations, models

class Migration(migrations.Migration):

    dependencies = [
        ('madcap_app', '0005_avis_valide'),  # Corrigez la référence à la migration précédente
    ]

    operations = [
        migrations.RenameField(
            model_name='member',
            old_name='date_entree',
            new_name='annee_adhesion',
        ),
    ]
