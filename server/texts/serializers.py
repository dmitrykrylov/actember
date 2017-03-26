from rest_framework import serializers
from .models import Text


class TextSerializer(serializers.ModelSerializer):
    processed = serializers.JSONField(read_only=True)

    class Meta:
        model = Text
        fields = ('__all__')
