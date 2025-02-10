from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from uuid import uuid4
from backend import settings


# User Manager
class UserManager(BaseUserManager):
    def create_user(self, email, password=None, username="", **extra_fields):
        if not email:
            raise ValueError("Email is required")

        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.is_active = True
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, username):
        """Creates and returns a superuser with only necessary fields."""
        user = self.create_user(email=email, password=password, username=username)
        user.is_staff = True
        user.is_superuser = True
        user.is_active = True
        user.save(using=self._db)
        return user


# User Model
class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)

    email = models.EmailField(unique=True)
    username = models.CharField(max_length=25, blank=False, default="default_username")
    image = models.FileField(upload_to='static/uploads', null=True, blank=True)

    # ✅ Required fields for authentication and admin access
    is_staff = models.BooleanField(default=False)  # Allows access to the admin site
    is_superuser = models.BooleanField(default=False)  # Grants full admin rights
    is_active = models.BooleanField(default=True)  # Required for authentication

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    objects = UserManager()

    def str(self):
        return self.username


# Todo Model
class Todo(models.Model):
    title = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="todos")

    def str(self):
        return self.title


# Discount Card Model
class DiscountCard(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    code = models.CharField(max_length=5)
    discount = models.DecimalField(max_digits=5, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def str(self):
        return self.code


# Product Model
class Category(models.TextChoices):
    SEEDS = 'SEEDS', 'Seeds'
    FRUITS = 'FRUITS', 'Fruits'
    VEGETABLES = 'VEGETABLES', 'Vegetables'
    FLOWER = 'FLOWER', 'Flower'
    DAIRY = 'DAIRY', 'Eggs and Milk'
    OTHER = 'OTHER', 'Other'

    def str(self) -> str:
        return self.name


class Product(models.Model):
    product_owner = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.CharField(max_length=20, choices=Category.choices)
    name = models.CharField(max_length=300)
    image = models.FileField(upload_to='static/uploads', null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    sales_number = models.IntegerField(default=0)
    description = models.CharField(max_length=1000, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    discount_applied = models.BooleanField(default=False)

    def str(self):
        return self.name


# Cart Model
class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ForeignKey(Product, on_delete=models.CASCADE)

    def str(self):
        return f"{self.user.username} - {self.products.name}"


# Order Model
class Order(models.Model):
    PAYMENT_CHOICES = [
        ('cash on delivery', 'Cash on Delivery'),
        ('esewa', 'Esewa'),
        ('khalti', 'Khalti')
    ]
    order_id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    order_date = models.DateTimeField(auto_now_add=True)
    payment_type = models.CharField(max_length=50, choices=PAYMENT_CHOICES, default="cash on delivery")

    def save(self, *args, **kwargs):
        self.total_price = self.product.price * self.quantity
        super().save(*args, **kwargs)

    def str(self):
        return str(self.order_id)
