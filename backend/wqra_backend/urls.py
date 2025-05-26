"""
URL configuration for wqra_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import HmetalreworkedList, HmetalByLatLong
from .views import NitroreworkedList, NitroByLatLong
from .views import PhosphreworkedList, PhosphatesByLatLong
from .views import RunoffreworkedList, RunoffByLatLong, RunoffByCounty
from .views import FecalreworkedList, FecalByLatLong

router = DefaultRouter()
router.register(r'runoff', RunoffreworkedList)  # Register the viewset with the router
router.register(r'fecal', FecalreworkedList)  # Register the viewset with the router
router.register(r'hmetal', HmetalreworkedList)  # Register the viewset with the router
router.register(r'nitro', NitroreworkedList)  # Register the viewset with the router
router.register(r'phospates', PhosphreworkedList)  # Register the viewset with the router



urlpatterns = [
    path('api/', include(router.urls)),  # Include the router URLs
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/runoff-search-by-latlon/', RunoffByLatLong.as_view(), name='runoff-by-latlon'),
    path('api/runoff-by-county/', RunoffByCounty.as_view()),
    path('api/fecal-search-by-latlon/', FecalByLatLong.as_view(), name='fecal-by-latlon'),
    path('api/hmetal-search-by-latlon/', HmetalByLatLong.as_view(), name='hmetal-by-latlon'),
    path('api/nitro-search-by-latlon/', NitroByLatLong.as_view(), name='nitro-by-latlon'),
    path('api/phospates-search-by-latlon/', PhosphatesByLatLong.as_view(), name='phospates-by-latlon'),
]


