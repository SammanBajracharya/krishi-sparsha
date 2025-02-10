from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("todos/", views.TodoListCreate.as_view(), name="todo-list"),
    path("todos/delete/<int:pk>/", views.TodoDelete.as_view(), name="delete-todo"),
    path('user/register/', views.SignUpAPIView.as_view(), name="register"),
    path('user/login/', TokenObtainPairView.as_view(), name="login"),
    path('user/profile/', views.UserProfileAPIView.as_view(), name="user_profile"),
    path('user/update/<uuid:pk>', views.UserUpdateAPIView.as_view(), name='user-update'),
    path('users/', views.UserListCreateAPIView.as_view(), name="user-list-create"),
    path('users/<uuid:pk>/', views.UserRetrieveUpdateDestroyAPIView.as_view(), name="user-detail"),
    path('products/', views.ProductListCreateAPIView.as_view(), name="product-list-create"),
    path('products/<int:pk>/', views.ProductRetrieveUpdateDestroyAPIView.as_view(), name="product-detail"),
    path('token/', TokenObtainPairView.as_view(), name="get_token"),
    path('token/refresh/', TokenRefreshView.as_view(), name="refresh"),
]
