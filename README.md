# Finanzas App

## Descripción

Finanzas App es una aplicación web para la administración de finanzas personales.

Este proyecto fue desarrollado como evidencia de aprendizaje del componente Front-end, utilizando React para el cliente y Node.js con Express para el servidor.

Actualmente se encuentra implementado el módulo Gestión de Ingresos.

---

## Tecnologías utilizadas

### Front-end

- React
- React Router
- Axios
- CSS

### Back-end

- Node.js
- Express
- MySQL
- mysql2

### Herramientas

- Git
- GitHub
- Visual Studio Code
- MySQL Workbench

---

## Estructura del proyecto

```
Finanzas_app
│
├── backend
├── frontend
├── database
│   └── finanzas.sql
├── README.md
└── .env.example
```

---

## Requisitos

- Node.js 20 o superior
- MySQL 8.0 o superior
- npm

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/racronald74/Finanzas.git
```

### 2. Crear la base de datos

Ejecutar el archivo:

```
database/finanzas.sql
```

---

### 3. Configurar el backend

Ingresar a la carpeta:

```bash
cd backend
```

Instalar dependencias:

```bash
npm install
```

Crear el archivo `.env` tomando como referencia `.env.example`.

---

### 4. Ejecutar el backend

```bash
npm run dev
```

---

### 5. Configurar el frontend

Abrir otra terminal:

```bash
cd frontend
```

Instalar dependencias:

```bash
npm install
```

---

### 6. Ejecutar el frontend

```bash
npm run dev
```

---

## Funcionalidades implementadas

- Listado de ingresos.
- Registrar ingresos.
- Editar ingresos.
- Eliminar ingresos.
- Confirmación personalizada para eliminar.
- Notificaciones mediante react-toastify.
- Tarjeta resumen con el total de ingresos.
- Formato colombiano para moneda.
- Diseño responsive básico.

---

## Autor

Ronald Arenas Campuzano

SENA