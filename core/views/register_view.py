# from django.shortcuts import render
from inertia import render
import json
from django.http import JsonResponse, HttpResponseRedirect
from django.contrib.auth.models import User
from django.contrib.auth import login as auth_login  # <-- 1. Importa el login de Djangofrom django.http import HttpResponseRedirect
from django.urls import reverse
from django.views.decorators.csrf import ensure_csrf_cookie,csrf_exempt
# Create your views here.

@csrf_exempt
def register(request):
    print("Entrando a Register")
    return render(request, 'Auth/Register')

@csrf_exempt
def register_user(request):

 try:
    data = json.loads(request.body)
    print("DATOS RECIBIDOS:", data)

    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    password_confirmation = data.get('password_confirmation')

    #validacion basica
    if password != password_confirmation:
        # En una implementación real con Inertia, querrás retornar los errores al formulario
        return HttpResponseRedirect(reverse('register'))

    if User.objects.filter(email=email).exists():
        #Manejar error de email duplicado
        return HttpResponseRedirect(reverse('register'))

    #Crear el usuario en la tabla por defecto de PostgreSQL (auth_user)
    #usamos el email como username si no pides un username separado
    user = User.objects.create_user(
        username=email,
        email=email,
        password=password,
        first_name=name
    )

    auth_login(request, user)

    return HttpResponseRedirect('/usuarios')

    # ¡OBLIGATORIO! Retornar una respuesta para que Django no tire error:
    return JsonResponse({
                "status": "success", 
                "message": "¡Usuario creado con éxito!"
            }, status=200)

 except Exception as e:
            # Si algo falla al guardar, también debes retornar una respuesta de error
    return JsonResponse({
                "status": "error", 
                "message": str(e)
            }, status=400)
            
    return JsonResponse({"status": "error", "message": "Método no permitido"}, status=405)

    # Opcional: Iniciar sesión automáticamente tras el registro
    # login(request, user)

    # Redirigir a la página principal o dashboard usando Inertia
    # return HttpResponseRedirect(reverse('dashboard'))