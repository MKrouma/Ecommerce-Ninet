from django.contrib import admin
from .models import Product


class ProductAdmin(admin.ModelAdmin):
    readonly_fields = (
        'id',
        'created_at',
        'modified_at',
        'deleted_at'
    )


admin.site.register(Product, ProductAdmin)
