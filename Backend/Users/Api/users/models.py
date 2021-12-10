from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser,PermissionsMixin, UserManager
from simple_history.models import HistoricalRecords

class UserManage(BaseUserManager):

    def _create_user(self, username, name, second_name, last_name, email, phone, password, is_staff, is_superuser,**extra_fileds):
        user = self.model(
            username = username,
            name=name,
            second_name = second_name,
            last_name = last_name,
            email = email,
            phone = phone,
            is_staff = is_staff,
            is_superuser = is_superuser,
            **extra_fileds
        )

        user.set_password(password)
        user.save(using = self.db)
        return user

    def create_user(self, username, name, second_name,last_name, email, phone, password =None,**extra_fileds):
        return self._create_user(username,name, second_name, last_name, email, phone, password=None,**extra_fileds)

    def create_superuser(self, username, name, second_name, last_name, email, phone, password =None,**extra_fileds):
        return self._create_user(username, name, second_name, last_name, email, phone, password =None,**extra_fileds)


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField('Nombre de usuairo', max_length=150, unique=True, blank=False)
    name = models.CharField('Nombre', max_length=150, blank=False)
    second_name = models.CharField('Segundo Nombre', max_length=150, blank=True)
    last_name =models.CharField('Apellido', max_length=150, blank=False)
    email = models.EmailField('Email',unique=True, blank=False)
    phone = models.CharField('Telefono', max_length=150, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    historical = HistoricalRecords()
    objects = UserManage()

    class Meta:
        verbose_name = 'Usuairo'
        verbose_name_plural = 'Usuairos'
    
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['usernama', 'name', 'last_name','email',]

    def natural_key(self):
        return (self.username)

    def __str__(self):
        return 'Usuario {0}, con nombre: {1} '' {2} '.format(self.username,self.name,self.last_name)
