from inertia import render

def forgotpass_view(request):
    return render(request,"Auth/ForgotPassword")