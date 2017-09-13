from rest_framework import serializers
from .models import Word
from users.models import UserWord


class WordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Word
        fields = ('__all__')


class UserWordSerializer(serializers.ModelSerializer):
    word = WordSerializer()

    class Meta:
        model = UserWord
        exclude = ('user',)
