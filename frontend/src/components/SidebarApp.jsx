import React from "react";
import { Link, usePage } from "@inertiajs/react";

import { 
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
  SidebarSeparator 
} from "./ui/sidebar";

import {
  LayoutDashboard,
  Logs,
  Users,
  Settings,
  CreditCard,
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  UserCheck,
  UserLock,
  SlidersHorizontal,
} from "lucide-react";

import { txt } from "@/lang/uiLang";
import logo from "@/assets/images/logo.png";

export const SidebarApp = () => {
const { url } = usePage();
  const { open } = useSidebar();
  const [configOpen, setConfigOpen] = React.useState(false);
  
  const coreItems = [
    { title: "Usuarios", url: "/usuarios", icon: Users },
    { title: "SAM", url: "/sam", icon: UserCheck },
    { title: "Permisos", url: "/settings", icon: UserLock },
    { title: "Seguridad", url: "/security", icon: ShieldAlert },
  ];

  return (
    <Sidebar collapsible="icon" variant="sidebar" className="border-r border-white/30 bg-gradient-to-b from-primary via-primary/100 to-primary/100 dark:to-slate-950 transition-all duration-300">
      <SidebarContent className="flex flex-col justify-between bg-transparent">
        <div>
          {/* LOGO / CABECERA */}
          <Link
            href="/usuarios"
            className={`flex flex-col items-center text-center gap-1 px-2 pb-1 pt-4 border-b border-white/20 mb-4 transition-all duration-300 hover:opacity-80 group cursor-pointer ${
              open ? "justify-start" : "justify-center px-4"
            }`}
          >
            {open ? (
              <>
                <div className="flex flex-col animate-in fade-in duration-200">
                  <span className="text-sm font-black tracking-tight text-white leading-none">
                    {txt.layout.sistema}
                  </span>
                  <span className="text-[10px] font-bold text-white/80 mt-0.5 uppercase tracking-wider">
                    {txt.layout.descripcion}
                  </span>
                </div>
                <img
                  src={logo}
                  alt="Logo Empresa"
                  className="h-32 w-64 object-contain transition-all duration-200 group-hover:scale-105"
                />
              </>
            ) : (
              <Logs className="h-6 w-6 text-white transition-all duration-200 group-hover:scale-110" />
            )}
          </Link>

          {/* BLOQUE 1: ADMINISTRACION SISTEMAS */}
          <SidebarGroup>
            <SidebarGroupLabel
              className="flex flex-col text-white/60 font-bold tracking-widest text-[11px] uppercase group-data-[collapsible=icon]:items-center"
            >
              {open ? (
                <>Administracion</>
              ) : (
                <div className="flex flex-col items-center text-center">
                  Admin
                </div>
              )}
            </SidebarGroupLabel>

            <SidebarGroupContent className="mt-2">
              <SidebarMenu>
                {coreItems.map((item) => {
                  const isActive = url.startsWith(item.url);
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild tooltip={!open ? item.title : undefined}>
                        <Link
                          href={item.url}
                          className={`flex items-center gap-3 px-1 py-2.5 rounded-md text-sm font-medium transition-all duration-200 group/item ${
                            isActive
                              ? "bg-white text-primary shadow-md font-bold"
                              : "text-white/80 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <item.icon
                            className={`w-5 h-5   shrink-0 transition-colors ${isActive ? "text-primary" : "text-white/75 group-hover/item:text-white"}`}
                          />
                          {open && (
                            <span className="truncate">{item.title}</span>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}

                {/* ================= SUBMENÚ DESPLEGABLE (AJUSTES) ================= */}
                <SidebarMenuItem>
                  {/* Botón principal que activa el despliegue */}
                  <SidebarMenuButton 
                    asChild
                    tooltip={!open ? "Ajustes" : undefined}
                  >
                    <div
                      onClick={() => setConfigOpen(!configOpen)}
                      className={`w-full flex items-center justify-between px-1 py-2.5 rounded-md text-sm font-medium transition-all duration-200 group/item cursor-pointer text-white/80 hover:bg-white/10 hover:text-white ${
                        configOpen && open ? "bg-white/5 text-white" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Settings
                          className={`w-5 h-5 shrink-0 transition-colors ${configOpen && open ? "text-white" : "text-white/75 group-hover/item:text-white"}`}
                        />
                        {open && <span>Ajustes</span>}
                      </div>
                      {open &&
                        (configOpen ? (
                          <ChevronUp className="w-4 h-4 text-white/90" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-white/60 group-hover/item:text-white/90" />
                        ))}
                    </div>
                  </SidebarMenuButton>

                  {/* Contenedor colapsable manual con estado local */}
                  {configOpen && open && (
                    <div className="bg-black/15 rounded-lg mt-1 mx-1 px-2 py-1 border border-white/5 space-y-1 animate-in fade-in duration-200">
                      <Link
                        href="/usuarios"
                        className={`flex items-center gap-2 py-2 px-1 text-xs font-semibold rounded-md transition-colors ${
                          url.includes("/profile")
                            ? "text-white bg-white/10"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <CreditCard className="w-3.5 h-3.5 opacity-90" />
                        <span>SetUp</span>
                      </Link>

                      <Link
                        href="/settings/preferences"
                        className={`flex items-center gap-2 py-2 px-2 text-xs font-semibold rounded-md transition-colors ${
                          url.includes("/settings/preferences")
                            ? "text-white bg-white/10"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <SlidersHorizontal className="w-3.5 h-3.5 opacity-90" />
                        <span>Preferencias</span>
                      </Link>
                    </div>
                  )}
                </SidebarMenuItem>
                {/* ================================================================= */}

              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator className="bg-white/10 mx-4" />

          {/* BLOQUE 2: MENU PRINCIPAL DE USUARIOS */}
          <SidebarGroup>
            <SidebarGroupLabel className="flex flex-col text-white/60 font-bold tracking-widest text-[11px] uppercase group-data-[collapsible=icon]:items-center">
              {open ? (
                <>Menu Principal</>
              ) : (
                <div className="flex flex-col items-center text-center">
                  Menu
                </div>
              )}
            </SidebarGroupLabel>
            <SidebarGroupContent className="mt-2">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip={!open ? "Dashboard" : undefined}>
                    <Link
                      href="/usuarios"
                      className={`flex items-center gap-3 px-1 py-2.5 rounded-md text-sm font-medium transition-all duration-200 group/item ${
                        url.startsWith("/security")
                          ? "bg-white text-primary shadow-md font-bold"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <LayoutDashboard
                        className={`w-5 h-5 shrink-0 transition-colors ${url.startsWith("/security") ? "text-primary" : "text-white/75 group-hover/item:text-white"}`}
                      />
                      {open && <span className="truncate">Dashboard</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip={!open ? "Mi Perfil" : undefined}>
                    <Link
                      href="/usuarios"
                      className={`flex items-center gap-3 px-1 py-2.5 rounded-md text-sm font-medium transition-all duration-200 group/item ${
                        url.startsWith("/security")
                          ? "bg-white text-primary shadow-md font-bold"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <UserCheck
                        className={`w-5 h-5 shrink-0 transition-colors ${url.startsWith("/security") ? "text-primary" : "text-white/75 group-hover/item:text-white"}`}
                      />
                      {open && <span className="truncate">Mi Perfil</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarApp;