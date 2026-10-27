import { Head, Link, useForm } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";

export default function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
  });

  const submit = (e) => {
    e.preventDefault();
    // post(route('password.email'));
  };

  return (
    // Contenedor idéntico para centrar perfectamente la tarjeta en la pantalla
    <div className="w-full min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-slate-50 dark:bg-slate-950 px-4">
      <Head title="¿Olvidaste tu contraseña?" />

      {/* Tarjeta con diseño estilizado al estilo shadcn */}
      <Card className="w-full max-w-[400px] border border-slate-200 bg-white p-6 shadow-xl rounded-xl dark:bg-slate-900 dark:border-slate-800">
        <CardHeader className="space-y-1 p-0 pb-6">
          <CardTitle className="text-2xl font-bold text-center tracking-tight text-slate-900 dark:text-white">
            Recuperar Contraseña
          </CardTitle>
          <CardDescription className="text-center text-sm text-slate-500 dark:text-slate-400">
            Te enviaremos un enlace de reinicio seguro a tu correo electrónico
            para que puedas cambiarla.
          </CardDescription>
        </CardHeader>

        <form onSubmit={submit} className="space-y-4">
          {/* Alerta de estado (Aparece cuando Laravel confirma que envió el correo con éxito) */}
          {status && (
            <div className="text-sm font-medium text-green-600 bg-green-50 p-3 rounded-md mb-4 dark:bg-green-950/30 dark:text-green-400">
              {status}
            </div>
          )}

          {/* Campo: Correo Electrónico */}
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
              onChange={(e) => setData("email", e.target.value)}
              placeholder="tu@ejemplo.com"
              className="w-full h-10 px-3 rounded-md border border-slate-300 bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950"
              required
              isFocused
            />
            {errors.email && (
              <p className="text-xs font-medium text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Botón de Envío */}
          <div className="pt-2">
            <Button
              className="w-full h-10 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow transition-colors"
              type="submit"
              disabled={processing}
            >
              {processing
                ? "Enviando enlace..."
                : "Enviar enlace de recuperación"}
            </Button>
          </div>

          {/* Link para volver al Login */}
          <div className="text-center pt-4 border-t border-slate-100 dark:border-slate-800">
            <Link
              href="/"
              className="text-sm text-blue-600 font-medium hover:underline"
            >
              Volver al Login
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
