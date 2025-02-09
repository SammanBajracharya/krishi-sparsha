from django.contrib.auth import get_user_model
from api.serializers import SignUpSerializer
from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.exceptions import ValidationError

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
