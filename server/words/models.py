from django.db import models


class Word(models.Model):
    lemma = models.CharField(max_length=100)
    description = models.TextField()
