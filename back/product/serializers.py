from .models import Order, Product
from rest_framework import serializers


class ProductSerializer(serializers.ModelSerializer):
    formatted_uri = serializers.CharField(required=False)

    class Meta:
        model = Product
        fields = "__all__"


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = "__all__"