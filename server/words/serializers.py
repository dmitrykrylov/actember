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
    word = WordSerializer(read_only=True, source='user_word.word')
    # location = serializers.SomeSerializerField(source='user_word__')

    class Meta:
        model = TextWord
        exclude = ('text',)
