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
    path('token/', TokenObtainPairView.as_view(), name="get_token"),
    path('token/refresh/', TokenRefreshView.as_view(), name="refresh"),
]
