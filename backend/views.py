from django.shortcuts import render  # redirect
from .serializers import ProductSerializer
from rest_framework import viewsets
from .models import Product


class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()


# home
def index(request):
    return render(request, 'files/index.html')
