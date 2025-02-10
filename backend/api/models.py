from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from uuid import uuid4


# Create your models here.
class UserManager(BaseUserManager):

    def create_user(
        self,
        email,
        password,
        username,
        user_type,
        address,
        phone,
        city,
        **extra_fields
    ):
        if not email:
            raise ValueError("Email is required")

        user = self.model(
            email=self.normalize_email(email),
            username=username,
            user_type=user_type,
            address=address,
            phone=phone,
            city=city,
            **extra_fields
        )
        user.set_password(password)
        user.save()
        return user

    def create_superuser(
        self,
        email,
        password,
        username,
        user_type="admin",
        address="",
        phone="",
        city="",
    ):
        user = self.create_user(
            email=email,
            username=username,
            password=password,
            user_type=user_type,
            address=address,
            phone=phone,
            city=city,
        )
        user.is_staff = True
        user.is_superuser = True
        user.save()
        return user


class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    user_type_choices = [
        ('farmer', 'Farmer'),
        ('consumer', 'Consumer'),
        ('business', 'Business'),
    ]
    user_type = models.CharField(
        max_length=20,
        choices=user_type_choices,
        default="consumer"
    )
    email = models.EmailField(unique=True)
    username = models.CharField(
        max_length=144,
        blank=False,
        default="default_username"
    )
    address = models.CharField(
        max_length=300,
        null=True,
        blank=True
    )
    phone = models.CharField(
        max_length=20,
        null=True,
        blank=True
    )
    city = models.CharField(
        max_length=100,
        null=True,
        blank=True
    )

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]
    objects = UserManager()

    def __str__(self):
        return self.username

    def is_farmer(self):
        return self.user_type == 'farmer'

    def is_consumer(self):
        return self.user_type == 'consumer'

    def is_business(self):
        return self.user_type == 'business'


# Product Model
class Category(models.TextChoices):
    SEEDS = 'SEEDS', 'Seeds'
    FRUITS = 'FRUITS', 'Fruits'
    VEGETABLES = 'VEGETABLES', 'Vegetables'
    FLOWER = 'FLOWER', 'Flower'
    DAIRY = 'DAIRY', 'Eggs and Milk'

    def str(self) -> str:
        return self.name


class Product(models.Model):
    p_category = models.CharField(max_length=20, choices=Category.choices)
    name = models.CharField(max_length=300)
    trending = models.BooleanField(default=False, null=True)
    discounts = models.BooleanField(default=False, null=True)
    image = models.FileField(upload_to='static/uploads', null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    p_quantity = models.IntegerField()
    p_rate = models.DecimalField(max_digits=5, decimal_places=2)
    p_sale = models.DecimalField(max_digits=10, decimal_places=0)
    description = models.CharField(max_length=1000, null=True, blank=True)
    p_created_at = models.DateTimeField(auto_now_add=True)

    def str(self):
        return self.name


# Order Model
class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def str(self):
        return f"{self.user.username} - {self.product.p_name}"


class Order(models.Model):
    PAYMENT_CHOICES = [
        ('cash on delivery', 'cash on delivery'),
        ('esewa', 'esewa'),
        ('khalti', 'khalti')
    ]
    order_id = models.UUIDField(
        primary_key=True,
        default=uuid4,
        editable=False
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    total_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        blank=True,
        null=True
    )
    order_date = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.total_price = self.product.price * self.quantity
        super().save(*args, **kwargs)

    def __str__(self):
        return str(self.order_id)
