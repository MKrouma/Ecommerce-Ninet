from django.db import models


class Product(models.Model):
    """ Product model
    """

    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=9, decimal_places=0, default=0)
    sku = models.CharField(max_length=100)

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now_add=True)
    deleted_at = models.DateTimeField(auto_now_add=True)

    img_file = models.FileField()
    # default="https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"

    def __str__(self):
        return self.name
