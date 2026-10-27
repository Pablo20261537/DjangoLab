import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Input } from "@/components/ui/input";
import { Button } from "@base-ui/react";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Register = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post("/register/store",{
        onFinish: () => reset("password","password_confirmation")
    })
  };

  return (
    <div className="w-full min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-slate-50 dark:bg-slate-950 px-4">
      <Head title="Registro" />

      <Card className="w-full max-w-[400px] border border-slate-200 bg-white p-6 shadow-xl rounded-xl dark:bg-slate-900 dark:border-slate-800">
        <CardHeader className="space-y-1 p-0 pb-6">
          <CardTitle className="text-2xl font-bold text-center tracking-tight text-slate-900 dark:text-white">
            Crear una cuenta
          </CardTitle>
          <CardDescription className="text-center text-sm text-slate-500 dark:text-slate-400">
            Introduce tus datos para registrarte en la plataforma
          </CardDescription>
        </CardHeader>

        <form onSubmit={submit} className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
            >
              Nombre Completo
            </Label>
            <Input
              id="name"
              name="name"
              value={data.name}
              autoComplete="name"
              onChange={(e) => setData("name", e.target.value)}
              placeholder="John Doe"
              className="w-full h-10 px-3 rounded-md border border-slate-300 bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950"
            />
            {errors.name && (
              <p className="text-xs font-medium text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Campo: Correo */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
            >
              Correo Electrónico
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={data.email}
              autoComplete="username"
              onChange={(e) => setData("email", e.target.value)}
              placeholder="tu@ejemplo.com"
              className="w-full h-10 px-3 rounded-md border border-slate-300 bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950"
            />
            {errors.email && (
              <p className="text-xs font-medium text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Campo: Contraseña */}
          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
            >
              Contraseña
            </Label>
            <Input
              id="password"
              type="password"
              name="password"
              value={data.password}
              autoComplete="new-password"
              onChange={(e) => setData("password", e.target.value)}
              className="w-full h-10 px-3 rounded-md border border-slate-300 bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950"
            />
            {errors.password && (
              <p className="text-xs font-medium text-red-500">
                {errors.password}
              </p>
            )}
          </div>

          {/* Campo: Confirmar Contraseña */}
          <div className="space-y-2">
            <Label
              htmlFor="password_confirmation"
              className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
            >
              Confirmar Contraseña
            </Label>
            <Input
              id="password_confirmation"
              type="password"
              name="password_confirmation"
              value={data.password_confirmation}
              autoComplete="new-password"
              onChange={(e) => setData("password_confirmation", e.target.value)}
              className="w-full h-10 px-3 rounded-md border border-slate-300 bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950"
            />
            {errors.password_confirmation && (
              <p className="text-xs font-medium text-red-500">
                {errors.password_confirmation}
              </p>
            )}
          </div>
          <div className="pt-2">
            <Button
              className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow transition-colors"
              type="submit"
              disabled={processing}
            >
              {processing ? "Creando cuenta..." : "Registrarse"}
            </Button>
            {/* Registrarse */}
          </div>

          {/* Link para regresar al Login */}
          <div className="text-center pt-4 border-t border-slate-100 dark:border-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              ¿Ya tienes una cuenta?{" "}
              <Link
                href="/"
                className="text-blue-600 font-medium hover:underline"
              >
                Inicia sesión
              </Link>
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Register;
