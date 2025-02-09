from django.contrib.auth import get_user_model
from rest_framework import serializers
from api.models import Product, Category

User = get_user_model()


class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "email",
            "username",
            "password",
            "user_type",
            "address",
            "phone",
            "city",
        ]
        extra_kwargs = {
            "password": {"write_only": True},
            "id": {"read_only": True},
            "user_type": {"required": False},
            "address": {"required": False},
            "phone": {"required": False},
            "city": {"required": False},
        }

    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data["email"],
            username=validated_data["username"],
            password=validated_data["password"],
            user_type=validated_data["user_type"],
            address=validated_data["address"],
            phone=validated_data["phone"],
            city=validated_data["city"],
        )
        return user


class ProductAPISerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
        extra_kwargs = {
            "id": {"read_only": True},
            "created_at": {"read_only": True},
        }


class CategoryAPISerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
        extra_kwargs = {
            "id": {"read_only": True},
            "created_at": {"read_only": True},
        }
