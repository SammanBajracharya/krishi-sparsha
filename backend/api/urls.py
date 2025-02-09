from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('user/register/', views.SignUpAPIView.as_view(), name="register"),
    path('user/login/', TokenObtainPairView.as_view(), name="login"),
    path('token/', TokenObtainPairView.as_view(), name="get_token"),
    path('token/refresh/', TokenRefreshView.as_view(), name="refresh"),
]
