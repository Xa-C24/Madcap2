import pytest
import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "madcap_project.settings")
django.setup()

@pytest.fixture(scope="session")
def django_db_setup():
    """Permet d'initialiser la base de données Django pour pytest"""
    from django.conf import settings
    settings.DATABASES["default"] = {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": ":memory:",
    }
