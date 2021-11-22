from rest_framework import serializers
from users.models import User


'''
SERIALIZERS PARA LISTAR CON EL TOKEN
'''
class UserTokenSerializer(serializers.ModelSerializer):

  class Meta:
    model=User
    fields=('username','email','name','last_name','id','second_name','phone','password')



class UserSerializers(serializers.ModelSerializer):

  class Meta:
    model = User
    fields = '__all__'


  def create(self, validated_data):
     user = User(**validated_data)
     user.set_password(validated_data['password'])
     user.save()
     return user

  def update(self, instance, validated_data):
    update_user = super().update(instance, validated_data)
    update_user.set_password(validated_data['password'])
    update_user.save()
    return update_user




class UserListSerializers(serializers.ModelSerializer):

    class Meta:
        model = User

    def to_representation(self, instance):


        return {
            'id':instance['id'],
            'Nombre de Usuario':instance['username'],
            'Nombre':instance['name'],
            'S. Nombre':instance['second_name'],
            'Apellido':instance['last_name'],
            'Telefono':instance['phone'],
            'Correo':instance['email'],
            'Password':instance['password'],
        }
