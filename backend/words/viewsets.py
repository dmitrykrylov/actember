from rest_framework import viewsets, filters
from .models import Word
from users.models import UserWord
from texts.models import TextWord
from .serializers import WordSerializer, UserWordSerializer, TextWordSerializer


class WordViewSet(viewsets.ModelViewSet):
    queryset = Word.objects.all()
    serializer_class = WordSerializer


class UserWordViewSet(viewsets.ModelViewSet):
    queryset = UserWord.objects.all()
    serializer_class = UserWordSerializer
    filter_fields = ('known',)
    ordering_fields = ('word__lemma',)
    filter_backends = (filters.DjangoFilterBackend, filters.OrderingFilter,)

    def get_queryset(self):
        return UserWord.objects.filter(user=self.request.user)


class TextWordViewSet(viewsets.ModelViewSet):
    queryset = TextWord.objects.all()
    serializer_class = TextWordSerializer
    filter_fields = ('user_word__known',)
    ordering_fields = ('user_word__word__lemma',)
    filter_backends = (filters.DjangoFilterBackend, filters.OrderingFilter,)

    def get_queryset(self):
        return TextWord.objects.filter(text=self.kwargs.get('text_pk'))
