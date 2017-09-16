from django.contrib import admin
from .models import Text


@admin.register(Text)
class TextAdmin(admin.ModelAdmin):
    list_display = (
        'user',
        'original'
    )
