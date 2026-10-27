import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Badge } from "@/components/ui/badge";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Heading2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { txt } from "@/lang/uiLang";

import { Turnstile } from "@marsidev/react-turnstile";

export const Login = ({ status, canResetPassword }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    post("/login/store",{
      onFinish: () =>reset("password")
    })
  };

  return (
    <div className="w-full min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-slate-50 dark:bg-slate-950 px-4">
      <Head title="Iniciar sesión" />

      <Card className="w-full max-w-[400px] border border-slate-200 bg-white p-6 shadow-xl rounded-xl dark:bg-slate-900 dark:border-slate-800">
        <CardHeader className="space-y-1 p-0 pb-6">
          <CardTitle className="text-2xl font-bold text-center tracking-tight text-slate-900 dark:text-white">
            {/* Cambiar texto por imagenes */}
            <img
              src="images/header.png"
              alt="Logo Rectangular"
              className="w-full max-w-sm mb-8"
            />

            <Badge className="bg-primary text-primary-foreground text-lg font-bold px-4 py-1">
              {txt.layout.sistema}
            </Badge>
          </CardTitle>
          <CardDescription className="text-center text-sm text-slate-500 dark:text-slate-400">
            {txt.layout.descripcion}
          </CardDescription>
        </CardHeader>

        <form onSubmit={submit} className="space-y-4">
          {status && (
            <div className="text-sm font-medium text-green-600 bg-green-50 p-3 rounded-md mb-4">
              {status}
            </div>
          )}

          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
            >
              {txt.layout.usuario}
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              autoFocus={true}
              key="login-email-input"
              placeholder="correo@ejemplo.com"
              className="w-full h-10 px-3 rounded-md border border-slate-300 bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950"
            />
            {errors.email && (
              <p className="text-xs font-medium text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300"
              >
                {txt.layout.contrasena}
              </Label>
              {canResetPassword && (
                <Link
                  href="/forgot_pass"
                  className="text-xs text-slate-500 hover:text-blue-600 underline underline-offset-2"
                >
                
                  {txt.layout.recordar_pass}
                </Link>
               )} 
            </div>

            {/* Contenedor relativo para posicionar el ojo dentro del input */}
            <div className="relative">
              <Input
                id="password"
                // Cambia dinámicamente entre text y password usando tu estado showPassword
                type={showPassword ? "text" : "password"}
                name="password"
                value={data.password}
                placeholder="********"
                onChange={(e) => setData("password", e.target.value)}
                // Se añade 'pr-10' para dar espacio interno al ícono del ojo a la derecha
                className="w-full h-10 pl-3 pr-10 rounded-md border border-slate-300 bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950"
              />

              {/* Botón interactivo del Ojo */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer focus:outline-none"
                title={
                  showPassword
                    ? txt.layout.ocultar_pass
                    : txt.layout.mostrar_pass
                }
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5 transition-colors" />
                ) : (
                  <Eye className="w-5 h-5 transition-colors" />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="text-xs font-medium text-red-500">
                {errors.password}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-2 pt-2">
            <Checkbox
              id="remember"
              checked={data.remember}
              onCheckedChange={(checked) => setData("remember", checked)}
            />
            <label
              htmlFor="remember"
              className="text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer select-none"
            >
              {txt.layout.recordar_sesion}
            </label>
          </div>

          {/* ============================={}============================ */}
          {/* COMPONENTE CAPTCHA ANTI-BOTS                              */}
          <div className="flex flex-col items-center justify-center py-2">
            <Turnstile
              // Aquí pones directamente la llave pública que te dio Cloudflare
              siteKey="0x4AAAAAADlXVlmzZtydqWnv"
              // Cuando Cloudflare verifique al usuario, nos dará un token
              onSuccess={(token) => setData("cf-turnstile-response", token)}
              // Si el token expira por inactividad, limpiamos el estado
              onExpire={() => setData("cf-turnstile-response", "")}
            />

            {/* Mostramos el error si el back-end rechaza la validación */}
            {errors["cf-turnstile-response"] && (
              <p className="text-xs font-medium text-red-500 mt-2 text-center">
                {errors["cf-turnstile-response"]}
              </p>
            )}
          </div>
          {/* ========================================================= */}
          <div className="pt-2">
            <Button
              className="w-full justify-center bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm transition-all duration-200 py-2.5 font-semibold text-sm rounded-lg border-0"
              type="submit"
              disabled={processing}
            >
              {processing ? txt.layout.init_sesion1 : txt.layout.init_sesion2}
            </Button>
          </div>

          <div className="text-center pt-4 border-t border-slate-100 dark:border-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {txt.layout.no_tienes_cuenta}{" "}
              <Link
                href="/register"
                className="text-blue-600 font-medium hover:underline"
              >
                {txt.layout.registrate}
              </Link>
            </p>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
