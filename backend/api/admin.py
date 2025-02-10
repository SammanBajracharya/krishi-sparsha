from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'p_category', 'price', 'trending', 'discounts', 'p_created_at')
    list_filter = ('p_category', 'trending', 'discounts')
    search_fields = ('name',)

