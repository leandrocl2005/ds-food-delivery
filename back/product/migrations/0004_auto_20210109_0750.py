# Generated by Django 3.1.4 on 2021-01-09 10:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0003_auto_20210109_0719'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='longitutde',
            new_name='longitude',
        ),
    ]
