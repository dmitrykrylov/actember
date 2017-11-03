# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-11-02 13:28
from __future__ import unicode_literals

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Text',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=140)),
                ('original', models.TextField()),
                ('processed', django.contrib.postgres.fields.jsonb.JSONField(blank=True, default={}, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='TextWord',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('count', models.IntegerField(blank=True, default=1)),
                ('text', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='texts.Text')),
            ],
        ),
    ]
