python -V
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

python manage.py runserver $1