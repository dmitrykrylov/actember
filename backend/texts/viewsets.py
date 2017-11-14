from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Text
from .serializers import TextSerializer


class TextViewSet(viewsets.ModelViewSet):
    queryset = Text.objects.all()
    serializer_class = TextSerializer
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        return Text.objects.filter(user=self.request.user)
