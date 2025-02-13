# Projet Madcap1874

## ⛵ Présentation du Projet
Madcap1874 est un site web développé pour présenter l'histoire du bateau Madcap, promouvoir l'association, permettre l'inscription de nouveaux membres et recueillir les témoignages des visiteurs. Le site est également un espace interactif avec une météo en temps réel, des informations sur les événements à venir et des liens pour soutenir l'association.

## ⚙ Technologies Utilisées
- **Framework Backend** : Django (Python)
- **Base de données** : SQLite
- **Frontend** : HTML, CSS, JavaScript
- **API météo** : Intégration de la carte Windy pour la météo en direct
- **Système de gestion des avis** : Stockage et validation des avis avant affichage
- **Traduction du site** : Flask-Babel pour la gestion des langues (FR & EN)

## 🌐 Structure du Site
### ⛵ Page d'Accueil (`index.html`)
- Présentation du Madcap avec une vidéo.
- Deux liens cliquables :
  - **Adhérer à l'association** via HelloAsso.
  - **Page de contact** pour plus d'informations.
- Choix de la langue (français/anglais).

### 📝 Histoire du Madcap (`histoire.html`)
- Résumé de l'histoire du bateau de 1874 à aujourd'hui.
- Illustrations et descriptions des différentes époques.

### 🎣 Page Événements (`evenements.html`)
- Calendrier des événements auxquels Madcap participera en 2025.

### 👨‍🌾 Soutenir le Projet (`don.html`)
- Explication des différents moyens de soutenir Madcap.
- Lien cliquable vers HelloAsso pour les dons.

### 💬 Livre d'Or - Votre Expérience (`livre_dor.html`)
- Formulaire pour **poster un commentaire** sur l'expérience vécue à bord du Madcap.
- **Affichage des avis** du plus récent au plus ancien.
- **Validation des avis** avant affichage sur le site.

### 📞 Page Contact (`contact.html`)
- Formulaire de contact.
- Numéro de téléphone et email de l'association.
- **Carte interactive** situant Madcap à Canet-en-Roussillon.

### 🏠 Interface Administrateur
- Gestion des membres de l'association.
- Validation des avis avant publication.
- Interface de recherche dynamique pour les membres.

## 📊 Gestion des Bases de Données
### 👨‍🌾 Table des Membres (`madcap_app_member`)
Stocke les informations des membres de l'association :
```sql
CREATE TABLE madcap_app_member (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    phone TEXT UNIQUE NOT NULL,
    date_entree DATE
);
```
**Exemples de requêtes SQL :**
```sql
INSERT INTO madcap_app_member (name, address, phone, date_entree) VALUES ('Xavier Dupont', '123 Rue de Paris', '0123456789', '2025-01-01');
SELECT * FROM madcap_app_member;
DELETE FROM madcap_app_member WHERE id = 3;
UPDATE madcap_app_member SET phone = '0987654321' WHERE id = 1;
```

### 💬 Table des Avis (`madcap_app_avis`)
Stocke les avis des visiteurs sur le site.
```sql
CREATE TABLE madcap_app_avis (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nom TEXT NOT NULL,
    email TEXT NOT NULL,
    telephone TEXT NOT NULL,
    commentaire TEXT NOT NULL,
    note INTEGER NOT NULL CHECK(note BETWEEN 1 AND 5),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    valide BOOLEAN DEFAULT FALSE
);
```
**Exemples de requêtes SQL :**
```sql
INSERT INTO madcap_app_avis (nom, email, telephone, commentaire, note, valide) VALUES ('Jean Dupont', 'jean.dupont@example.com', '0601020304', 'Super expérience !', 5, 0);
SELECT * FROM madcap_app_avis WHERE valide = 1;
UPDATE madcap_app_avis SET valide = 1 WHERE id = 1;
```

## 🛠 Commandes Utiles
### ⚙ Installation des dépendances
```bash
pip install flask flask-babel django
```

### ⚡ Démarrer le serveur Django
```bash
python3 manage.py runserver
```

### 🔒 Créer un super-utilisateur
```bash
python3 manage.py createsuperuser
```

### 📈 Gestion de la Base de Données SQLite
```bash
python3 manage.py dbshell
.tables
SELECT * FROM madcap_app_member;
SELECT * FROM madcap_app_avis;
```

## 🎨 Outils de Développement
- **Live Server** pour recharger les pages automatiquement :
  ```bash
  npm install -g browser-sync
  browser-sync start --proxy "127.0.0.1:8000" --files "templates/**/*.html, static/**/*.css, static/**/*.js"
  ```
- **Extension VS Code** : Prettier pour le formatage du code.

---

## 🌟 Conclusion
Le projet Madcap1874 vise à promouvoir et préserver l'histoire du bateau Madcap tout en facilitant l'implication des membres et des visiteurs. Le site est conçu pour être interactif, informatif et accessible.

💡 **Prochaine étape :** Finaliser la page "À propos de l'association" et intégrer des améliorations graphiques.

---
📖 **Dernière mise à jour :** [Date automatique lors de la mise à jour]

