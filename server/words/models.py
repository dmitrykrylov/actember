from django.db import models
from config import settings


class Word(models.Model):
    lemma = models.CharField(max_length=100)
    description = models.TextField()


class UserWord(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL)
    word = models.ForeignKey(Word)
    status = models.BooleanField(default=False)
