from django.urls import path
from . import views



urlpatterns = [
    path('', views.index, name='index'),
    path('salir/', views.salir, name="salir" ),
    path('accounts/login/', views.login_view, name='login'),
    path('accounts/login/registro.html', views.registro, name='registro'),

]


    
    

