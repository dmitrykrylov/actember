from rest_framework import viewsets, Response
from .models import User
from .serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def retrieve(self, request, pk=None):
        if pk == 'i':
            return Response(UserSerializer(
                request.user,
                context={'request': request}).data)

        return super(UserViewSet, self).retrieve(request, pk)
