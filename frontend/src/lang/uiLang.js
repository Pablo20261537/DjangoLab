// resources/js/Constants/uiLang.js

export const uiLang = {
    es: {
        // Palabras o acciones comunes que se usan en botones
        acciones: {
            guardar: 'Guardar Cambios',
            cancelar: 'Cancelar',
            eliminar: 'Eliminar',
            editar: 'Editar',
            crear: 'Crear Nuevo',
            buscar: 'Buscar...',
            loading: 'Cargando...',
            acciones: 'Acciones',
        },
        
        // Textos del Layout principal (Navbar, Sidebar, Footer)
        layout: {
            empresa: 'ANAM',
            sistema: 'FICHAS SIA',
            descripcion: 'Sistema de Administracion de Reportes CPED',
            autor: 'Versión 1.0',
            usuario: 'USUARIO',
            contrasena: 'PASSWORD',
            recordar_pass: '¿Olvidaste tu contraseña?',
            ocultar_pass: 'Ocultar contraseña',
            mostrar_pass: 'Mostrar contraseña',
            recordar_sesion: 'Recordar sesión',
            init_sesion1: 'Iniciando sesión...',
            init_sesion2: 'Iniciar Sesión',
            no_tienes_cuenta: '¿No tienes cuenta?',
            registrate: 'Regístrate aquí',
            dashboard: 'Dashboard',
            cerrarSesion: 'Cerrar Sesión',
            perfil: 'Mi Perfil',
            soporte: 'Soporte Técnico',
            privacidad: 'Aviso de Privacidad',
            globalAdmin: 'Panel de Administración Global',
            derechos: 'Todos los derechos reservados.',
        },

        // Palabras o acciones comunes que se usan en footer
        footer: {
            version: 'Versión 1.0',
            tecno: 'Open Sorce Technology',
            empresa: 'ANAM',
            developBy: 'Develop by CPED',
        },

        // Módulos del sistema de permisos que acabamos de crear
        modulos: {
            usuarios: 'Gestión de Usuarios',
            perfiles: 'Perfiles y Roles',
            permisos: 'Permisos de Sistema',
            sistemas: 'Ecosistemas y Aplicaciones',
            configuracion: 'Configuración General',
            reportes: 'Reportes y Auditoría',
        },

        // Mensajes del modal de inactividad
        inactividadModal: {
            titulo: '¿Sigues ahí?',
            descripcion: 'Tu sesión está a punto de expirar por inactividad. Por motivos de seguridad, cerraremos tu sesión en:',
            botonMantenerse: 'Sí, mantener sesión activa',
            botonSalir: 'Salir ahora',
        }
    },
    en: {
        // Palabras o acciones comunes que se usan en botones
        acciones: {
            guardar: 'Guardar Cambios',
            cancelar: 'Cancelar',
            eliminar: 'Eliminar',
            editar: 'Editar',
            crear: 'Crear Nuevo',
            buscar: 'Buscar...',
            loading: 'Cargando...',
            acciones: 'Acciones',
        },
        
        // Textos del Layout principal (Navbar, Sidebar, Footer)
        layout: {
            dashboard: 'Panel Principal',
            cerrarSesion: 'Cerrar Sesión',
            perfil: 'Mi Perfil',
            soporte: 'Soporte Técnico',
            privacidad: 'Aviso de Privacidad',
            globalAdmin: 'Panel de Administración Global',
            derechos: 'Todos los derechos reservados.',
        },

        // Módulos del sistema de permisos que acabamos de crear
        modulos: {
            usuarios: 'Gestión de Usuarios',
            perfiles: 'Perfiles y Roles',
            permisos: 'Permisos de Sistema',
            sistemas: 'Ecosistemas y Aplicaciones',
            configuracion: 'Configuración General',
            reportes: 'Reportes y Auditoría',
        },

        // Mensajes del modal de inactividad
        inactividadModal: {
            titulo: '¿Sigues ahí?',
            descripcion: 'Tu sesión está a punto de expirar por inactividad. Por motivos de seguridad, cerraremos tu sesión en:',
            botonMantenerse: 'Sí, mantener sesión activa',
            botonSalir: 'Salir ahora',
        }
    }
};

// Definimos el idioma por defecto del sitio (fácilmente cambiable a futuro)
const defaultLang = 'es';
export const txt = uiLang[defaultLang];