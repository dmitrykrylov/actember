from django.db import models
from django.contrib.postgres.fields import JSONField
from config import settings
from users.models import UserWord


class Text(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, blank=True)
    title = models.CharField(max_length=140)
    original = models.TextField()
    processed = JSONField(blank=True, null=True, default={})
    words = models.ManyToManyField(
        UserWord,
        through='TextWord',
        blank=True,
    )


class TextWord(models.Model):
    text = models.ForeignKey(Text)
    user_word = models.ForeignKey(UserWord)
    count = models.IntegerField(default=1, blank=True)

    class Meta:
        unique_together = ('text', 'user_word')
