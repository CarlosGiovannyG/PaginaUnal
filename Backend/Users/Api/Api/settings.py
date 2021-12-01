
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent.parent



SECRET_KEY = 'z+i0cocj##$2q&bhamsyd*(1vo5kuea!t#o7&nkx0uo=tqzgi4'


DEBUG = True

ALLOWED_HOSTS = ['*']




INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'rest_framework.authtoken', 
    'drf_yasg',
    'simple_history', 
    'corsheaders',   
    'users',
]



MIDDLEWARE = [
     'corsheaders.middleware.CorsMiddleware',
     'django.middleware.common.CommonMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'simple_history.middleware.HistoryRequestMiddleware',
]

ROOT_URLCONF = 'Api.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'Api.wsgi.application'

TOKEN_EXPIRED_AFTER_SECONDS = 900


DATABASES = {
'default': {
'ENGINE': 'django.db.backends.postgresql_psycopg2',
    'NAME': 'd1v7h8b3lk721h',
    'USER': 'jebkluxoncniog',
    'PASSWORD': 'dbbc4d731626b9bd48d2d6d7a0ade22e698731a143403b4888ceb8a3fb8d507e',
    'HOST': 'ec2-18-235-154-252.compute-1.amazonaws.com',
'PORT': '5432',
}
}



AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]



LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

AUTH_USER_MODEL = 'users.User'

CORS_ALLOWED_ORIGINS = [
"http://localhost:3000"
]


CORS_ORIGIN_WHITELIST =[ 
    "http://localhost:3000"
]


STATIC_URL = '/static/'

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
