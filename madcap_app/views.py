# Importation de la fonction render pour générer des réponses HTTP à l'aide de modèles
from django.shortcuts import render, redirect

# Importation des fonctions pour authentifier un utilisateur et gérer les sessions
from django.contrib.auth import authenticate, login

# Importation pour afficher des messages flash (ex : erreurs ou confirmations)
from django.contrib import messages

# Importation du décorateur pour restreindre l'accès aux utilisateurs connectés
from django.contrib.auth.decorators import login_required

# Importation du modèle Member défini dans le fichier models.py
from .models import Member

# Importation du modèle User fourni par Django pour gérer les utilisateurs
from django.contrib.auth.models import User

# Importation pour permettre des recherches complexes sur plusieurs champs
from django.db.models import Q  # Pour les recherches multi-critères

# Importation pour générer des réponses JSON, utile pour les API ou les requêtes AJAX
from django.http import JsonResponse

# Importation pour charger un modèle en tant que chaîne de caractères
from django.template.loader import render_to_string

# créer des réponses HTML à partir de templates
from django.shortcuts import render

# Importation pour envoyer des emails
from django.core.mail import send_mail


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


# Gestion des utilisateurs
@login_required
def admin_dashboard(request):
    if not request.user.is_staff:  # Vérifie si l'utilisateur est admin
        return redirect('admin_login')

    # Charge tous les membres pour l'affichage initial
    members = Member.objects.all().order_by('name')
    
    return render(request, 'admin_dashboard.html', {'members': members})




def search_members(request):
    query = request.GET.get('q', '').strip()  # Récupère la recherche en supprimant les espaces inutiles
    if query:
        members = Member.objects.filter(
            Q(name__icontains=query) |  # Recherche partielle sur le nom
            Q(address__icontains=query)  # Recherche partielle sur l'adresse
        ).order_by('name')  # Tri alphabétique
    else:
        members = Member.objects.all().order_by('name')  # Tous les membres si aucun filtre

    # Préparer les données au format JSON
    results = [
        {
            'name': member.name,
            'address': member.address,
            'phone': member.phone,
            'date_entree': member.date_entree.strftime('%b. %d, %Y') if member.date_entree else ''
        }
        for member in members
    ]

    return JsonResponse({'results': results})


# Formulaire de contact

def search_members(request):
    query = request.GET.get('q', '').strip()
    if query:
        members = Member.objects.filter(
            Q(name__icontains=query) | Q(address__icontains=query)
        ).order_by('name')
    else:
        members = Member.objects.all().order_by('name')

    results = [
        {
            'name': member.name,
            'address': member.address,
            'phone': member.phone,
            'date_entree': member.date_entree.strftime('%b. %d, %Y') if member.date_entree else ''
        }
        for member in members
    ]

    if not results:  # Message d'erreur si aucun résultat n'est trouvé
        return JsonResponse({'error': 'Aucun membre trouvé.'})

    return JsonResponse({'results': results})


def submit_contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        # Validation des champs
        if not name or not email or not message:
            messages.error(request, "Veuillez remplir tous les champs.")
            return redirect('contact')

        # # Préparation de l'email
        subject = f"Nouveau message de {name} via le formulaire de contact"
        message_body = f"Nom : {name}\nEmail : {email}\n\nMessage :\n{message}"
        recipient_list = ['xr.piallu@gmail.com']

        try:
            send_mail(subject, message_body, email, recipient_list)
            messages.success(request, 'Votre message a été envoyé avec succès.')
        except Exception as e:
            messages.error(request, f"Une erreur s'est produite : {str(e)}")
            print(f"Erreur SMTP : {e}")  # Affichez l'erreur dans les logs

        return redirect('contact')

    return render(request, 'contact.html')
