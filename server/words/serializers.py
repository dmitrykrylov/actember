from rest_framework import serializers
from .models import Word
from users.models import UserWord
from texts.models import TextWord


class WordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Word
        fields = ('__all__')


class UserWordSerializer(serializers.ModelSerializer):
    word = WordSerializer(read_only=True)

    class Meta:
        model = UserWord
        exclude = ('user',)


class TextWordSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(source='user_word.id')
    known = serializers.BooleanField(source='user_word.known')
    word = WordSerializer(read_only=True, source='user_word.word')

    class Meta:
        model = TextWord
        exclude = ('text',)
