from rest_framework import viewsets, filters
from rest_framework.decorators import detail_route
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from .models import Text, TextWord
from .serializers import TextSerializer
from words.serializers import TextWordSerializer


class TextViewSet(viewsets.ModelViewSet):
    queryset = Text.objects.all()
    serializer_class = TextSerializer
    filter_backends = (DjangoFilterBackend, filters.OrderingFilter,)
    # filter_fields = ('user_word__known',)
    ordering_fields = ('user_word__word__lemma', 'user_word__known', 'count',)

    @detail_route()
    def words(self, request, pk):
        print(request)
        print('AAAAAA')
        queryset = TextWord.objects.filter(text=pk)
        queryset = filters.OrderingFilter().filter_queryset(request, queryset, self)
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = TextWordSerializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = TextWordSerializer(queryset, many=True)
        return Response(serializer.data)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        return Text.objects.filter(user=self.request.user)
