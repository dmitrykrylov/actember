from rest_framework import viewsets
from .models import Word
from users.models import UserWord
from .serializers import WordSerializer, UserWordSerializer


class WordViewSet(viewsets.ModelViewSet):
    queryset = Word.objects.all()
    serializer_class = WordSerializer


class UserWordViewSet(viewsets.ModelViewSet):
    queryset = UserWord.objects.all()
    serializer_class = UserWordSerializer
    filter_fields = ('known',)

    def get_queryset(self):
        return UserWord.objects.filter(user=self.request.user)
