from django.db import models
from django.contrib.auth.models import AbstractUser
from words.models import Word
from config import settings


class User(AbstractUser):
    words = models.ManyToManyField(
        Word,
        blank=True,
        through='UserWord'
    )


class UserWord(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL)
    word = models.ForeignKey(Word)
    known = models.BooleanField(default=False)

    class Meta:
        unique_together = ('user', 'word')
