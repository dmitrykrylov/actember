from rest_framework import viewsets
from rest_framework.decorators import detail_route
from rest_framework.response import Response
from .models import Text, TextWord
from .serializers import TextSerializer
from words.serializers import TextWordSerializer


class TextViewSet(viewsets.ModelViewSet):
    queryset = Text.objects.all()
    serializer_class = TextSerializer

    @detail_route()
    def words(self, request, pk):
        print(request)
        queryset = TextWord.objects.filter(text=pk)
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = TextWordSerializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = TextWordSerializer(queryset, many=True)
        return Response(serializer.data)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
