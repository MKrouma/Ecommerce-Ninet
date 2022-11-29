# DJANGO Command

## Create app
`django-admin startproject backend .`

## Run app
`python manage.py runserver 8000`

## Migrate dataset
```
python manage.py makemigrations backend (first migration)
python manage.py makemigrations
python manage.py migrate
```

## Shell Data API
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

## API RAF
pip install djangorestframework django-cors-headers
`http://localhost:8000/api/`