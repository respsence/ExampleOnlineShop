# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-06-06 18:30
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20170605_2059'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='short_description',
            field=models.TextField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='productimage',
            name='image',
            field=models.ImageField(upload_to='products_images/'),
        ),
    ]