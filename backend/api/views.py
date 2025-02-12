from django.contrib.auth import get_user_model
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.exceptions import ValidationError, status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Product, Todo, User
from api.serializers import (
    DiscountCardSerializer,
    SignUpSerializer,
    ProductAPISerializer,
    TodoSerializer,
    UserUpdateSerializer
)

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


class UserProfileAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        user_data = {
            "id": user.id,
            "email": user.email,
            "username": user.username,
            "user_type": user.user_type,
            "address": user.address,
            "phone": user.phone,
            "image": user.image.url if user.image else None,
            "discount_cards": DiscountCardSerializer(
                user.discount_cards,
                many=True
            ).data,
        }
        return Response(
            user_data,
            status=status.HTTP_200_OK
        )


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

    def perform_destroy(self, instance):
        instance.delete()


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


# Todo views
class TodoListCreate(generics.ListCreateAPIView):
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Todo.objects.filter(author=self.request.user)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class TodoDelete(generics.DestroyAPIView):
    serializer_class = TodoSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Todo.objects.filter(author=self.request.user)


class UserRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = SignUpSerializer
    permission_classes = [IsAuthenticated]

    def perform_destroy(self, instance):
        instance.delete()


class UserUpdateAPIView(generics.UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserUpdateSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        # Get the current user from the request
        return self.request.user


class UserListCreateAPIView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = SignUpSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        email = serializer.validated_data["email"]
        if User.objects.filter(email=email).exists():
            raise ValidationError({"email": "Email already in use."})

        serializer.save()
