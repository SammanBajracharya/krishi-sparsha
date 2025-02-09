from django.contrib.auth import get_user_model
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.exceptions import ValidationError

from api.models import Product
from api.serializers import SignUpSerializer, ProductAPISerializer

User = get_user_model()


# Create your views here.
class SignUpAPIView(generics.CreateAPIView):
    serializer_class = SignUpSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        email = serializer.validated_data["email"]
        if User.objects.filter(email=email).exists():
            raise ValidationError({"email": "Email already in use."})

        serializer.save()


# Product views
class ProductListCreateAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductAPISerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        # You can perform custom validation here if needed
        serializer.save()


class ProductRetrieveUpdateDestroyAPIView(
    generics.RetrieveUpdateDestroyAPIView
):
    queryset = Product.objects.all()
    serializer_class = ProductAPISerializer
    permission_classes = [IsAuthenticated]


# Category views
class CategoryListCreateAPIView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductAPISerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        # You can perform custom validation here if needed
        serializer.save()


class CategoryRetrieveUpdateDestroyAPIView(
    generics.RetrieveUpdateDestroyAPIView
):
    queryset = Product.objects.all()
    serializer_class = ProductAPISerializer
    permission_classes = [IsAuthenticated]
