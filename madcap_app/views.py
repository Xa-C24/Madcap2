from django.shortcuts import render

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
