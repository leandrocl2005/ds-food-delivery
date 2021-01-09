from django.db import models


# Create your models here.
class Product(models.Model):
    class Meta:
        verbose_name_plural = "Produtos"
        verbose_name = "Produto"

    name = models.CharField(max_length=30, verbose_name="Nome")
    price = models.FloatField(verbose_name="Preço")
    description = models.TextField(verbose_name="Descrição")
    imageUri = models.ImageField(upload_to='uploads', verbose_name="Imagem")

    def formatted_uri(self):
        return "http://localhost:8000/" + self.imageUri.name.replace(
            'uploads', 'images')


class Order(models.Model):
    class Meta:
        verbose_name_plural = "Pedidos"
        verbose_name = "Pedido"

    latitude = models.FloatField(verbose_name="Latitude")
    longitude = models.FloatField(verbose_name="Longitude")
    address = models.CharField(max_length=200, verbose_name="Endereço")
    products = models.ManyToManyField(Product)
