# Ecommerce-Ninet
Projet de développement d'un site de ecommerce pour Ninet Shooping. 

## Design 
Nous avons proposé au designer de reproduire le site [dreamskin](https://dreamskinhaven.co.ke/). \
Le design de l'application est donc disponible [ici]().

## Application
La stack technique est la suivante :
- `frontend`: react JS;
- `backend` : django (rest framework);
- `database` : postgres.


### Frontend
```
cd frontend
npm i
npm start

npm build (pour le deploiement)
```

### Backend
Avant de deployer, il faut s'assurer d'avoir votre fichier `.env`. 
Il répresente les variables d'environnement. 
Dans le dossier `Ecommerce-Ninet`, appliquer les instrictions : 

```
python -V
python -m venv .venv
source .venv/bin/activate (linux) | .venv\Script\activate (windows)
pip install -r requirements.txt

python manage.py runserver 8000
```

Si vous êtes sur linux, pour pouvez lancer tout le code au dessus depuis le fichier `runner.sh` avec le code suivant :
```
bash runner.sh 8001
```

### Database
La base de donnée est deployée dans un serveur RDMS Postgres sur Digital Ocean. 
Si vous avez comme reponse `Waiting for postgres...`, cela signifie que 
votre adresse IP n'est pas acceptée comme point d'entrée pour le serveur. 
Il faudra donc en discuter avec @mkrouma. 

Nous avons :
- ninetshopping_staging : base de données de developpement;
- ninetshooping_production : base de données de production. 


## Contribution
### Branch model
Pour le developpement nous aurons deux branches principales : 
- master : application en production;
- develop : application pour les tests d'intégration et le pull request vers master;
- features branch : pour chaque feature à developer et intégrer au produit. 

Il faut éviter de faire de longue branche. Il faut privilégier une branche pour un feature à intégrer. \
Feature_branch_name = `{DEVELOPER}_ISSUENUMBER_COMMENT`.

Pour avoir une vue, sur les prochaines étapes du projet, vous pensez regarder le projet associé au repo, [Ninet shopping github project](https://github.com/users/MKrouma/projects/6)

## Deploiement
L'architecture des applications (frontend/backend) est une architecture distribuée en microservices.  Nous allons donc créer un container pour nos services et les orchestrer avec docker-compose. 

Cette operation est reservée à @mkrouma. 

`dev dc`
```
sudo docker-compose up -d --build
```
`prod dc`
```
sudo docker-compose -f docker-compose.prod.yml up -d --build
```

## Tips
`PYTHON`\
secrets token
```
python -c "import secrets; print(secrets.token_hex(12))"
```

`DJANGO`\
project & app
```
django-admin startproject {PROJECT_NAME} .
```

migrate
```
python manage.py makemigrations {PROJECT_NAME} (first migration)
python manage.py makemigrations
python manage.py migrate
```

superuser 
```
python manage.py createsuperuser
```

shell & data api
```
python manage.py shell
from backend.models import Product
Product.objects.all()
Product.objects.all().values()
Product.objects.all().filter(name="ordinary")
Product.objects.get(id=1) 
Product.objects.filter(id=1).update(price=20000) 
Product.objects.get(id=4).delete()
```

`DROPLET`\
project & app
```
ssh -i ~/.ssh/id_rsa_2 mahadou@ADRESS_IP
```

## Auteur
Ibrahim @ibrahim-abdullah2 \
Moussa @devvamoussa \
Mahadou @mkrouma \
😃 `geodaftar.com`