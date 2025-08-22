# 🥦 Nutridata Frontend

Frontend del proyecto **Nutridata**, desarrollado con **React 19**, **Vite** y **Material UI (MUI)**.  
Este proyecto implementa un sistema moderno para explorar, gestionar y visualizar productos nutricionales, con soporte de **carrito de compras**, **favoritos**, **búsqueda avanzada** y **autenticación de usuarios** (simulada con `localStorage`/`sessionStorage`).

---

## 🚀 Tecnologías utilizadas

- ⚛️ [React 19](https://react.dev/) – Librería para la construcción de interfaces.
- ⚡ [Vite](https://vitejs.dev/) – Herramienta de build ultrarrápida para frontend.
- 🎨 [Material UI](https://mui.com/) – Componentes de interfaz accesibles y personalizables.
- 💅 [Emotion](https://emotion.sh/docs/introduction) – Librería CSS-in-JS para estilos dinámicos.
- 🔀 [React Router 7](https://reactrouter.com/) – Navegación y manejo de rutas SPA.
- 🛠️ [ESLint + Prettier](https://eslint.org/) – Linter y formateador de código.

---

## 📦 Instalación y ejecución

Clona este repositorio y ejecuta los siguientes comandos:

```bash
# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev

# Construir la versión de producción
npm run build

# Vista previa del build
npm run preview

# Lint del proyecto
npm run lint

# Formatear el código
npm run format-code
📂 Estructura de carpetas
plaintext
Copiar
Editar
nutridata-frontend/
├── public/               # Archivos estáticos (favicon, imágenes, etc.)
│   └── vite.svg
├── src/
│   ├── modules/          # Módulos organizados por dominio
│   │   ├── auth/         # Login y registro de usuarios
│   │   ├── cart/         # Carrito de compras + contexto
│   │   ├── category/     # Exploración por categorías
│   │   ├── core/         # Layout, rutas y tema global
│   │   ├── favorites/    # Favoritos + contexto global
│   │   ├── home/         # Página principal
│   │   └── search/       # Página de búsqueda
│   ├── App.jsx           # Configuración de rutas y providers
│   └── main.jsx          # Punto de entrada de la app
├── eslint.config.js      # Configuración personalizada de ESLint
├── package.json          # Configuración de dependencias y scripts
└── vite.config.js        # Configuración de Vite
✨ Características principales
👤 Autenticación simulada: login, registro y logout con localStorage y sessionStorage.

🛒 Carrito de compras: agregar, visualizar y gestionar productos.

❤️ Favoritos: guardar y administrar productos preferidos.

🔎 Búsqueda avanzada: búsqueda de productos y categorías.

🖼️ Layout responsivo: diseño limpio y adaptable con Material UI.

🎨 Tema personalizado: gestión de estilos globales con ThemeProvider.

🔐 Autenticación
El sistema de autenticación está implementado de manera client-side usando un custom hook useAuth:

Funciones expuestas:

login(username, password) → valida usuarios en localStorage.

register(username, password) → crea nuevos usuarios.

logout() → cierra la sesión.

Persistencia:

Usuarios guardados en localStorage.

Sesión activa guardada en sessionStorage.

Datos iniciales: cargados desde dummyData.js.

Esto permite probar el flujo de usuario completo sin necesidad de backend.

🧹 Estilo y convenciones de código
El proyecto incluye una configuración personalizada de ESLint + Prettier para mantener un código consistente y limpio.

Reglas principales:

Basado en configuraciones recomendadas de eslint y react-hooks.

Soporte para vite y react-refresh.

Linter configurado para ECMAScript moderno + JSX.

Orden de imports (eslint-plugin-import-helpers):

Paquetes externos (react, mui, etc.)

Assets (/assets/...)

Librerías internas (/modules/lib/...)

Utils (/modules/utils/...)

Providers (/modules/providers/...)

Hooks (/modules/hooks/...)

Layouts (/modules/layouts/...)

Components (/modules/components/...)

Imports relativos (padre, sibling, index)

Scripts útiles:

bash
Copiar
Editar
npm run lint        # Ejecuta ESLint
npm run format-code # Aplica Prettier + fix de ESLint
Esto asegura un estilo uniforme y buenas prácticas en todo el código base.

👩‍💻 Autor
📌 Bootcamp Generation Chile

```
