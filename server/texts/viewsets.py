from rest_framework import viewsets
from rest_framework.decorators import detail_route
from rest_framework.response import Response
from .models import Text
from .serializers import TextSerializer


class TextViewSet(viewsets.ModelViewSet):
    queryset = Text.objects.all()
    serializer_class = TextSerializer

    @detail_route()
    def words(self, request):
        queryset = Text.objects.filter(user=request.user)
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
