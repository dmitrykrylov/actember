from rest_framework import viewsets
from .models import UserWord
from .serializers import UserWordSerializer


class WordViewSet(viewsets.ModelViewSet):
    queryset = UserWord.objects.all()
    serializer_class = UserWordSerializer

    def get_queryset(self):
        return UserWord.objects.filter(user=self.request.user)
