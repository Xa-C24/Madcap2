from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .models import Member
from django.contrib.auth.models import User

# Create your views here.
from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def association(request):
    return render(request, 'association.html')


def contact(request):
    return render(request, 'contact.html')


def don(request):
    return render(request, 'don.html')


def histoire(request):
    return render(request, 'histoire.html')


def evenements(request):
    return render(request, 'evenements.html')

# Admin access


def admin_login(request):
    if request.method == "POST":
        # Retourne None si 'email' n'existe pas
        email = request.POST.get('email', None)
        password = request.POST.get('password', None)

        if not email or not password:  # Vérifier que les champs ne sont pas vides
            messages.error(request, "Veuillez remplir tous les champs.")
            return render(request, 'admin_login.html')

        # Rechercher l'utilisateur via l'e-mail
        try:
            username = User.objects.get(email=email).username
        except User.DoesNotExist:
            messages.error(request, "Adresse e-mail non trouvée.")
            return render(request, 'admin_login.html')

        # Authentification
        user = authenticate(request, username=username, password=password)
        if user is not None and user.is_staff:  # Vérifie si c'est un admin
            login(request, user)
            # Redirige vers le tableau de bord
            return redirect('admin_dashboard')
        else:
            messages.error(
                request, "Nom d'utilisateur ou mot de passe incorrect.")
    return render(request, 'admin_login.html')


@login_required
def admin_dashboard(request):
    if not request.user.is_staff:  # Vérifie si l'utilisateur est admin
        return redirect('admin_login')
    # Récupération des données des membres
    members = Member.objects.all()  # Assurez-vous que vous avez un modèle `Member`
    return render(request, 'admin_dashboard.html', {'members': members})
