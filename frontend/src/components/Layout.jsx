import React, { useState } from "react";
import SidebarApp from "./SidebarApp";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { ChevronDown, User, Settings, Shield, LogOut } from "lucide-react";
import { txt } from "@/lang/uiLang";

export const Layout = ({ header, children }) => {
  //Abrir el modal o cerrar
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen overflow-hidden bg-slate-50 dark:bg-slate-950 antialiased">
        {/* LADO IZQUIERDO: El menú lateral */}
        <SidebarApp />

        {/* LADO DERECHO: Contiene la cabecera y el área de contenido principal */}
        <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
          <header className="h-14 border-b border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 flex items-center justify-between px-6 shrink-0">
            <div className="flex items-center gap-4">
              {/* SidebarTrigger real */}
              <SidebarTrigger />
              <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800 hidden sm:block" />
              <div className="hidden sm:block text-sm font-semibold text-slate-700 dark:text-slate-300">
                {header || "Nombre de la Página / Header"}
              </div>
            </div>

            {/* CONTENEDOR PRINCIPAL DEL DROPDOWN */}
            <div className="relative">
              {/* Botón Disparador (Muestra el usuario actual) */}
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer focus:outline-none"
              >
                <div className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
                  {/* Avatar simulado con la inicial */}
                  <div className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold text-xs uppercase">
                    U
                  </div>
                  <span className="hidden md:inline-block max-w-[120px] truncate">
                    Usuario Ejemplo
                  </span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </div>
              </button>

              {/* MENÚ FLOTANTE DESPLEGABLE (Estático/Siempre Visible) */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl ring-1 ring-black/5 dark:border-slate-800 dark:bg-slate-950 z-50">
                  {/* Encabezado del menú: Datos del usuario */}
                  <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-800/60 mb-1">
                    <p className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Cuenta
                    </p>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate mt-0.5">
                      Usuario Ejemplo
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                      usuario@email.com
                    </p>
                  </div>

                  {/* Opción: Mi Perfil */}
                  <div className="flex items-center w-full px-3 py-2 text-sm rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                    <User className="w-4 h-4 mr-2.5 text-slate-400" />
                    Mi Perfil
                  </div>

                  {/* SECCIÓN DIVISOR */}
                  <div className="border-t border-slate-100 dark:border-slate-800/60 my-1"></div>

                  {/* Funcionalidad futura 1: Configuración */}
                  <div className="flex items-center w-full px-3 py-2 text-sm rounded-lg text-slate-400 dark:text-slate-500 cursor-not-allowed opacity-60">
                    <Settings className="w-4 h-4 mr-2.5" />
                    Configuración{" "}
                    <span className="ml-auto text-[10px] font-bold bg-slate-100 dark:bg-slate-900 px-1.5 py-0.5 rounded text-slate-500">
                      Pronto
                    </span>
                  </div>

                  {/* Funcionalidad futura 2: Seguridad / Logs */}
                  <div className="flex items-center w-full px-3 py-2 text-sm rounded-lg text-slate-400 dark:text-slate-500 cursor-not-allowed opacity-60">
                    <Shield className="w-4 h-4 mr-2.5" />
                    Seguridad
                  </div>

                  {/* SECCIÓN DE CIERRE DE SESIÓN */}
                  <div className="border-t border-slate-100 dark:border-slate-800/60 my-1"></div>

                  {/* Botón: Cerrar Sesión */}
                  <div className="flex items-center w-full px-3 py-2 text-sm rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors font-medium cursor-pointer">
                    <LogOut className="w-4 h-4 mr-2.5" />
                    Cerrar Sesión
                  </div>
                </div>
              )}
            </div>
          </header>

          {/* El contenedor dinámico ({children}) correctamente anidado */}
          <main className="flex-1 p-8 overflow-y-auto">
            <div className="sm:hidden mb-4 font-semibold">{header}</div>
            {children}
          </main>

                      {/* =========================================================
                FOOTER FIJO Y DISCRETO (MINIMALISTA - GRIS ULTRA SUAVE)
                ========================================================= */}
            <footer className="fixed bottom-0 left-0 z-40 w-full h-10 border-t bg-slate-50/80 backdrop-blur-sm border-slate-200/60 shadow-xs dark:bg-gray-900/80">
                <div className="flex items-center justify-between h-full px-6 text-[11px] font-medium text-slate-400 dark:text-slate-500">
                    {/* Izquierda: Copyright y Versión */}
                    <div>
                        <a
                            href="#"
                            className="text-slate-400 hover:text-slate-600 transition-colors dark:text-slate-500 dark:hover:text-slate-300"
                        >
                            © {new Date().getFullYear()}{" "}
                            {txt.footer.empresa}{" "}
                        </a>
                    </div>

                    {/* Centro: Datos extras del Dashboard */}
                    <div className="hidden md:inline text-slate-400/80 dark:text-slate-600">
                        <a
                            href="#"
                            className="text-slate-400 hover:text-slate-600 transition-colors dark:text-slate-500 dark:hover:text-slate-300"
                        >
                            {txt.footer.developBy}
                        </a>
                    </div>

                    {/* Derecha: Enlaces rápidos o soporte */}
                    <div className="flex items-center gap-4">
                        {txt.footer.version}
                        <a
                            href="#"
                            className="text-slate-400 hover:text-slate-600 transition-colors dark:text-slate-500 dark:hover:text-slate-300"
                        >
                            {txt.footer.tecno}{" "}
                        </a>
                    </div>
                </div>
            </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};
