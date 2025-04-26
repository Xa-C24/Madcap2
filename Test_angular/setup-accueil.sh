#!/bin/bash

# Initialiser le projet Angular
npx -p @angular/cli ng new portfolio-angular --style=scss --routing

# Se déplacer dans le projet
cd portfolio-angular

# Installer Angular Material
npx -p @angular/cli ng add @angular/material

# Générer les composants
npx -p @angular/cli ng g c components/header
npx -p @angular/cli ng g c components/home
npx -p @angular/cli ng g c components/projects
npx -p @angular/cli ng g c components/contact

# Lancer le serveur local
npx -p @angular/cli ng serve
