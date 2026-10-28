import json
from inertia import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponseRedirect
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout  # Renombramos para evitar conflictos
from django.contrib.auth.models import User
from django.urls import reverse
# 1. Vista para renderizar la página de Login con Inertia
def login_view(request):  # Cambiamos el nombre para que no choque con la función 'login' de django
    return render(request, 'Auth/Login', {
        'canResetPassword': True, 
        'canRegister': True,
        'status': request.session.get('status'),
    })

# 2. Vista que procesa el POST del formulario
@csrf_exempt
def login_user(request):
    if request.method != 'POST':
        return JsonResponse({"status": "error", "message": "Método no permitido"}, status=405)

    try:
        # Leer datos que React manda vía JSON con Inertia
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')

        # Intentamos buscar al usuario por su email para obtener su username real de Django
        try:
            user_obj = User.objects.get(email=email)
            username = user_obj.username
        except User.DoesNotExist:
            username = email  # Por si acaso mandaron el username directamente

        # Validamos las credenciales con el autenticador de Django
        user = authenticate(request, username=username, password=password)

        if user is not None:
            # Login exitoso, creamos la sesión en el servidor usando el login renombrado
            auth_login(request, user)
            
            # En lugar de JsonResponse plano, Inertia prefiere una redirección (HttpResponseRedirect) 
            # o una respuesta que le indique a dónde navegar tras el éxito.
            return HttpResponseRedirect('/usuarios')  # O la ruta de tu dashboard / home    
        else:
            return JsonResponse({
                "status": "error",
                "message": "Credenciales inválidas"
            }, status=400)

    except Exception as e:
        return JsonResponse({
            "status": "Error",
            "message": str(e)
        }, status=500)

@csrf_exempt
def logout_user(request):
    #Elimina la sesion del servidor y borra cookie
    auth_logout(request)

    #Redirigir usuario a login
    return HttpResponseRedirect(reverse('login'))