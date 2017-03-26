from django.db import models
from django.contrib.postgres.fields import JSONField
from config import settings


class Text(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True)
    title = models.CharField(max_length=140)
    original = models.TextField()
    processed = JSONField(blank=True, null=True, default={})
