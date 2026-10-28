# tu_app/middleware.py
from inertia import share

def InertiaShareUserMiddleware(get_response):
    def middleware(request):
        # Usamos lambdas para que se evalúen exactamente en el momento de renderizar la página
        share(
            request,
            auth={
                "user": lambda: {
                    "username": request.user.username,
                    "email": request.user.email,
                    "name": request.user.first_name or request.user.username,
                } if request.user.is_authenticated else None
            }
        )
        
        response = get_response(request)
        return response
        
    return middleware