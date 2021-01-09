from django.contrib import admin
from django.urls import path, include
from product import views
from rest_framework.routers import DefaultRouter

from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register("products", views.ProductViewSet)
router.register("orders", views.OrderViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include(router.urls))
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
