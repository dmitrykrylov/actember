from rest_framework import viewsets
from .models import Word
from .serializers import WordSerializer


class WordViewSet(viewsets.ModelViewSet):
    queryset = Word.objects.all()
    serializer_class = WordSerializer