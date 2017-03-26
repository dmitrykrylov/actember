from django.db import models
from django.contrib.auth.models import AbstractUser
from words.models import Word


class User(AbstractUser):
    words = models.ManyToManyField(Word,
                                   blank=True,
                                   through='words.UserWord')
