from rest_framework import serializers
from .models import Text
from words.serializers import UserWordSerializer


class TextSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text
        fields = ('__all__')
