# PARA CONTROLAR LAS SESIONES ACTIVAS

from django.contrib.admin.sites import all_sites
from django.contrib.sessions.models import Session
from rest_framework.authentication import get_authorization_header
from datetime import datetime


from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

# PARA GENERAL Y ACTUALIZAR TOKEN
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken

# EL ZERIALIZER QUE SE VA A MOSTART AL INICIAR SESION
from users.api.serializers import UserTokenSerializer
from users.models import User

from users.authentication_mixin import Authetication


class UserToken(APIView):
    def post(self, request, *args, **kwargs):
       
        username = request.data['username']
        try:
            user_token = Token.objects.get(user=UserTokenSerializer().Meta
                                           .model.objects.filter(username=username).first())
            return Response({
                'token': user_token.key
            })
        except:
            return Response({
                'error': 'Credenciales enviadas incorrectas'
            }, status=status.HTTP_400_BAD_REQUEST)


class Acces(Authetication, APIView):

    def post(self, request, *args, **kwargs):
       
        return Response({'userIdToken': UserTokenSerializer(Token.objects.filter(
            key=get_authorization_header(request).split()[1].decode()).first().user).data['id']}, status=status.HTTP_200_OK)


class Login(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        login_serializer = self.serializer_class(
            data=request.data, context={'request': request})
        if login_serializer.is_valid():
            user = login_serializer.validated_data['user']

            if user.is_active:
                token, created = Token.objects.get_or_create(user=user)
                user_serializer = UserTokenSerializer(user)
                if created:
                    return Response({
                        'token': token.key,
                        'mensaje': 'Inicio de sesion exitoso'
                    }, status=status.HTTP_201_CREATED)
                else:
                    '''PARA CERRAR SESIONES Y GENERAR UN NUEVO TOKEN'''

                    all_sessions = Session.objects.filter(
                        expire_date__gte=datetime.now())
                    if all_sessions.exists():
                        for session in all_sessions:
                            session_data = session.get_decoded()
                            if user.id == int(session_data.get('_auth_user_id')):
                                session.delete()
                    token.delete()
                    token = Token.objects.create(user=user)
                    return Response({
                        'token': token.key,
                        'mensaje': 'Inicio de sesion exitoso'
                    }, status=status.HTTP_201_CREATED)

            else:
                return Response({'mensaje': 'Este usuario no esta logueado'}, status=status.HTTP_401_UNAUTHORIZED)

        else:
            return Response({'mensaje': 'Nombre de usuario o contraseña incorrectos'}, status=status.HTTP_400_BAD_REQUEST)


class Logout(APIView):

    def post(self, request, *args, **kwargs):
       
        try:
            token = request.data['token']

            token = Token.objects.filter(key=token).first()
            # token=Token.objects.filter(key=request.GET.get('token')).first()
            if token:
                user = token.user               
                all_sessions = Session.objects.filter(
                    expire_date__gte=datetime.now())
                if all_sessions.exists():
                    for session in all_sessions:
                        session_data = session.get_decoded()
                        if user.id == int(session_data.get('_auth_user_id')):
                            session.delete()

                token.delete()

                session_message = 'Sesion de usuario eliminada'
                token_message = 'Token eliminado'
                return Response({
                    'mensaje_sesion': session_message,
                    'mensaje_token': token_message
                }, status=status.HTTP_200_OK)
            return Response({
                'error': 'No se ha encontrado un usuario con estas credenciales'
            }, status=status.HTTP_400_BAD_REQUEST)

        except:
            return Response({
                'error': 'No se ha encontrado token en la peticion'
            }, status=status.HTTP_409_CONFLICT)
