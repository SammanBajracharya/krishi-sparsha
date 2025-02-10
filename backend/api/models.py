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
        discount_cards=None,
        image=None,
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
            image=image,
            discount_cards=discount_cards,
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
        image=None,
        discount_cards=None,
    ):
        user = self.create_user(
            email=email,
            username=username,
            password=password,
            user_type=user_type,
            address=address,
            phone=phone,
            image=image,
            discount_cards=discount_cards,
        )
        user.is_staff = True
        user.is_superuser = True
        user.save()
        return user


class DiscountCard(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    code = models.CharField(max_length=5)
    discount = models.DecimalField(max_digits=5, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)

    def str(self):
        return self.card_name


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
        default="consumer",
        blank=False
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
        blank=False
    )
    phone = models.CharField(
        max_length=20,
        null=True,
        blank=False
    )
    image = models.FileField(
        upload_to='static/uploads',
        null=True,
        blank=True,
    )
    discount_cards = models.ForeignKey(
        DiscountCard,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "user_type", "address", "phone", "address"]
    objects = UserManager()

    def str(self):
        return self.username

    def is_farmer(self):
        return self.user_type == "farmer"

    def is_consumer(self):
        return self.user_type == "consumer"

    def is_business(self):
        return self.user_type == "business"


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


# Order Model
class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ForeignKey(Product, on_delete=models.CASCADE)

    def str(self):
        return f"{self.user.username} - {self.product.p_name}"


class Order(models.Model):
    payment_choices = [
        ('cash on delivery', 'cash on delivery'),
        ('esewa', 'esewa'),
        ('khalti', 'khalti')
    ]
    payment_type = models.CharField(
        max_length=50,
        choices=payment_choices,
        default="cash on delivery",
        blank=False
    )
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

    def str(self):
        return str(self.order_id)
