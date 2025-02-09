from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from uuid import uuid4


# Create your models here.
class UserManager(BaseUserManager):

    def create_user(self, email, password, username, **extra_fields):
        if not email:
            raise ValueError("Email is required")

        user = self.model(
            email=self.normalize_email(email),
            username=username,
            **extra_fields
        )
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password, username):
        user = self.create_user(
            email=email,
            username=username,
            password=password
        )
        user.is_staff = True
        user.is_superuser = True
        user.save()
        return user


class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    email = models.EmailField(unique=True)
    username = models.CharField(
        max_length=144,
        blank=False,
        default="default_username"
    )
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]
    objects = UserManager()


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
    imgage = models.FileField(upload_to='static/uploads', null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    p_quantity = models.IntegerField()
    p_rate = models.DecimalField(max_digits=5, decimal_places=2)
    p_sale = models.DecimalField(max_digits=10, decimal_places=0)
    description = models.CharField(max_length=1000, null=True, blank=True)
    p_created_at = models.DateTimeField(auto_now_add=True)

    def str(self):
        return self.name
