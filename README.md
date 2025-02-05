## Madcap  

creer un serveur  pip install flask
extension qui gere les traductions des langues
pip install flask-babel

for run Django serer  
python3 manage.py runserver

creation de la strucrure
mkdir templates
  histoire.html
  index.html

mkdir css
  style.css
  images
  js

Trailing Spaces
highlight trailing spaces and delete them in a flash!

This extension is a port of the popular Sublime Text plugin Trailing Spaces.

Prettier Formatter for Visual Studio Code
Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.


app.py

root@hey-coucou-xav:~/Madcap# pip install livereload
Collecting livereload
  Downloading livereload-2.7.0-py3-none-any.whl (22 kB)
  
README.md


j'utilise une base de donné sqlite mais je travail en ligne commande avec db shell

Créer un SuperUser

 python3 manage.py createsuperuser
 association.madcap.1874@gmail.com

xr.piallu@gmail.com
LecotrepiloteMadcap1874

Lancer le shell de la base de données : python3 manage.py dbshell

---Ajouter un nouveau membre---

    Insérer un membre avec une requête SQL :
    INSERT INTO madcap_app_member (name, address, phone) VALUES ('Xavier Dupont', '123 Rue de Paris, France', '0123456789');
    INSERT INTO madcap_app_member (name, address, phone, date_entree) VALUES ('ROUSSELET Thierry ', 'Avenue de Sceau, 92330', '06 63 02 09 82', '2020-02-01');
    INSERT INTO madcap_app_member (name, address, phone, date_entree) VALUES ('HURREAU Christian Skipper', 'Face au port, 06700', '06 86 14 39 55', '2020-02-01');
    INSERT INTO madcap_app_member (name, address, phone, date_entree) VALUES ('PIEDALLU Xavier Développeur site Web', 'Bellevaux, 74470', '06 87 74 02 73', '2025-01-01');

    Vérifier les données insérées :
    SELECT * FROM madcap_app_member;

    Quitter le shell SQL :
    .quit

Si tout va bien, membre ajouter a la base de données

---Supprimer un membre---

Lancer le shell de la base de données : python3 manage.py dbshell

      Lister les membres pour voir leurs informations :
      SELECT * FROM madcap_app_member;

     Supprimer un membre par son ID : Par exemple, pour supprimer le membre avec l'ID (1) par exemple:
      DELETE FROM madcap_app_member WHERE id = 3;   Plusieurs   DELETE FROM madcap_app_member WHERE id IN = (1, 2, 4); 
    
      Vérifier que le membre a été supprimé :
      SELECT * FROM madcap_app_member;

      Quitter le shell SQL :
      .quit

Si tout va bien, membre supprimer a la base de données par l'ID


---Modifier numero de tel d'un membre---

Lancer le shell de la base de données : python3 manage.py dbshell

Affichez tous les membres pour identifier celui que vous voulez modifier :
    SELECT * FROM madcap_app_member;


Pour mettre à jour le numéro de téléphone d'un membre, utilisez la commande SQL UPDATE. Par exemple, si l'ID du membre est 1 :
      UPDATE madcap_app_member 
      SET phone = '0987654321'
      WHERE id = 1;


---Modifier le Nom Prénom d'un membre---

Lancer le shell de la base de données : python3 manage.py dbshell

  SELECT * FROM madcap_app_member;
  SELECT * FROM madcap_app_member WHERE id = 1;

  UPDATE madcap_app_member
  SET name = 'Nouveau Nom'
  WHERE id = 1;


Pour confirmer que la mise à jour a bien été effectuée, exécutez de nouveau :
      SELECT * FROM madcap_app_member;

Une fois les modifications terminées, quittez le shell avec :
      .quit


Markdown Extension Pack

live server 

npm install -g browser-sync
browser-sync --version

browser-sync start --proxy "127.0.0.1:8000" --files "templates/**/*.html, static/**/*.css, static/**/*.js"

http://localhost:3000/