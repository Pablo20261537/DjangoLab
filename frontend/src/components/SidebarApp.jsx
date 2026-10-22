import React from "react";
import { Link } from "@inertiajs/react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarHeader,
  SidebarMenuItem,
  useSidebar,
  SidebarSeparator,
} from "./ui/sidebar";

export const SidebarApp = () => {
  return (
    <Sidebar className="border-r border-white/30 bg-gradient-to-b from-primary via-primary/100 to-primary/100 dark:to-slate-950 transition-all duration-300">
      <SidebarHeader className="p-6">
        <h2 className="text-xl font-bold">Panel Admin</h2>
      </SidebarHeader>
      <SidebarContent className="flex flex-col justify-between bg-transparent">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Link
                href="/usuarios"
                className="flex items-center gap-2 hover:text-blue-400 transition"
              >
                <span>📦</span>
                <span className=" text-white/60 font-bold">Usuarios</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Link
                href="/sam"
                className="flex items-center gap-2 hover:text-blue-400 transition"
              >
                <span>📦</span>
                <span className=" text-white/60 font-bold">Sam</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              {/* <Link
                href="/admin/panel/marcas"
                className="flex items-center gap-2 hover:text-blue-400 transition"
              >
                <span>🏷️</span>
                <span>Marcas</span>
              </Link> */}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarApp;
