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

app.py

root@hey-coucou-xav:~/Madcap# pip install livereload
Collecting livereload
  Downloading livereload-2.7.0-py3-none-any.whl (22 kB)
  
README.md

xr.piallu@gmail.com
LecotrepiloteMadcap1874

Lancer le shell de la base de données : python3 manage.py dbshell

---Ajouter un nouveau membre---

    Insérer un membre avec une requête SQL :
    INSERT INTO madcap_app_member (name, address, phone) VALUES ('Xavier Dupont', '123 Rue de Paris, France', '0123456789');
    INSERT INTO madcap_app_member (name, address, phone, date_entree) VALUES ('Thierry ROUSSELET', 'Avenue de Sceau, 92330', '06 63 02 09 82', '2020-02-01');
    INSERT INTO madcap_app_member (name, address, phone, date_entree) VALUES ('Skipper Christian HURREAU', 'Face au port, 06700', '06 86 14 39 55', '2020-02-01');
    
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
      DELETE FROM madcap_app_member WHERE id = 3;   Plusieurs   DELETE FROM madcap_app_member WHERE id IN = (5, 7, 8, 9); 
    
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


Pour confirmer que la mise à jour a bien été effectuée, exécutez de nouveau :
      SELECT * FROM madcap_app_member;

Une fois les modifications terminées, quittez le shell avec :
      .quit


Markdown Extension Pack