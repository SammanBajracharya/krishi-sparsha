from django.contrib.auth import get_user_model
from rest_framework import serializers
from api.models import DiscountCard, Product, Category, Todo

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
            "discount_cards",
        ]
        extra_kwargs = {
            "password": {"write_only": True},
            "id": {"read_only": True},
            "user_type": {"required": True},
            "address": {"required": True},
            "phone": {"required": True},
            "discount_cards": {"required": False},
        }

    def create(self, validated_data):
        discount_cards_data = validated_data.get("discount_cards", None)

        if discount_cards_data:
            if isinstance(discount_cards_data, str):
                discount_cards = DiscountCard.objects.get(id=discount_cards_data)
            else:
                discount_cards = discount_cards_data
        else:
            discount_cards = None

        user = User.objects.create_user(
            email=validated_data["email"],
            username=validated_data["username"],
            password=validated_data["password"],
            user_type=validated_data["user_type"],
            address=validated_data["address"],
            phone=validated_data["phone"],
            discount_cards=discount_cards,
        )
        return user


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "email",
            "username",
            "user_type",
            "address",
            "phone",
            "discount_cards",
            "password",  # Optional, if you want to allow password updates
        ]
        extra_kwargs = {
            "password": {"write_only": True},
            "discount_cards": {"required": False},
        }

    def update(self, instance, validated_data):
        # Update the user instance with the validated data
        instance.email = validated_data.get('email', instance.email)
        instance.username = validated_data.get('username', instance.username)
        instance.user_type = validated_data.get('user_type', instance.user_type)
        instance.address = validated_data.get('address', instance.address)
        instance.phone = validated_data.get('phone', instance.phone)

        # Update password if provided
        password = validated_data.get('password', None)
        if password:
            instance.set_password(password)

        instance.save()
        return instance


class ProductAPISerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "all"
        extra_kwargs = {
            "id": {"read_only": True},
            "created_at": {"read_only": True},
        }


class CategoryAPISerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "all"
        extra_kwargs = {
            "id": {"read_only": True},
            "created_at": {"read_only": True},
        }


class DiscountCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiscountCard  # Assuming DiscountCard is a model
        fields = ['id', 'card_name', 'card_code']  # Include relevant fields


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = ["id", "title", "created_at", "author"]
        extra_kwargs = {"author": {"read_only": True}}
