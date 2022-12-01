# Ecommerce-Ninet
Projet de développement d'un site de ecommerce pour Ninet Shooping. 

## Conception 
Pour la concéption, nous avons demandé à un designer de réproduire le site suivant selon nos attentes [dreamskin](https://dreamskinhaven.co.ke/).

Notre design final est le suivant [OwnDesign](https://www.figma.com/file/wNwPpNXkRZxp9C9i2yyQWx/Ninet?node-id=0%3A1).

## Developpement

### Frontend
Suivant la partie à developper, veuillez le faire seulement dans le dossier `Frontend`;
Vous developpez en créant une branche pour chaque partie nommer comme suit : `NOM_code`; 
A la faire du developpement, il faut creer un Pull request pour la branche `develop`.

### Backend
Developpement python django avec `shooping`. 

## Mise en production

### Branch model
Pour le developpement nous aurons deux branches principales : 
- master : application en production;
- develop : application pour les tests d'intégration et le pull request vers master
- features branch : pour chaque feature à developer et intégrer au produit. 

Il faut éviter de faire de longue branche. Il faut privilégier une branche pour un feature à intégrer. 
Feature_branch_name = {DEVELOPER}_ISSUENUMBER_COMMENT

### Deploiement


### 
sudo docker-compose up -d --build (dev)
sudo docker-compose -f docker-compose.prod.yml down -v (prod)
sudo docker-compose -f docker-compose.prod.yml up -d --build


## generate secret
python -c "import secrets; print(secrets.token_hex(12))"