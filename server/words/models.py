from django.db import models
from config import settings


class Word(models.Model):
    lemma = models.CharField(max_length=100)
    description = models.TextField()


class UserWord(models.Model):
    NEW = 1
    TO_STUDY = 2
    KNOWN = 3
    STATUS_CHOICES = {
        NEW, 'New',
        TO_STUDY, 'To Study',
        KNOWN, 'Known',
    }

    user = models.ForeignKey(settings.AUTH_USER_MODEL)
    word = models.ForeignKey(Word)
    status = models.IntegerField(STATUS_CHOICES, default=NEW)
