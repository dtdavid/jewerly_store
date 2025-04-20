# Jewelry Store API

Esta es una API REST para gestionar una tienda de joyas. Permite realizar operaciones sobre el inventario de joyas, como obtener, filtrar, ordenar y paginar los productos. Además, incluye características como HATEOAS, filtros dinámicos, y auditoría de consultas a través de logs.

## Funcionalidades

- **Obtener todas las joyas**: Permite consultar el inventario de joyas con paginación y filtros opcionales.
- **Filtrar joyas**: Puedes filtrar las joyas por distintos parámetros, como precio, categoría, metal y stock.
- **Ordenación**: Los resultados se pueden ordenar por diferentes atributos como `id`, `precio`, `stock`, entre otros.
- **Paginación**: Permite dividir la respuesta en páginas, controlando el número de resultados por página.
- **HATEOAS**: La respuesta incluye enlaces con el formato HATEOAS para permitir la navegación entre los recursos de la API.
- **Logs**: Se generan logs en la consola cada vez que se consulta una ruta.

## Endpoints

### 1. Obtener todas las joyas

**GET** `/joyas`

- **Parámetros**:
  - `limit` (opcional): Número máximo de joyas a devolver (por defecto 3).
  - `page` (opcional): Número de página de los resultados (por defecto 1).
  - `order_by` (opcional): Atributo y dirección de ordenación (por ejemplo, `precio_ASC` o `stock_DESC`).
- **Respuesta**:
  ```json
  {
    "totalJoyas": 100,
    "stockTotal": 500,
    "results": [
      {
        "id": 1,
        "name": "Anillo de oro",
        "precio": 500,
        "stock": 20,
        "categoria": "aros",
        "metal": "oro",
        "href": "/joyas/joya/1"
      },
      ...
    ]
  }
  ```

### 2. Obtener joya por ID

**GET** `/joyas/joya/:id`

**Descripción**: Obtiene los detalles de una joya específica por su ID.

**Respuesta**:

```json
{
  "id": 1,
  "name": "Anillo de oro",
  "precio": 500,
  "stock": 20,
  "categoria": "aros",
  "metal": "oro"
}
```

## Requisitos

- **Node.js** v14 o superior.
- **PostgreSQL** para la base de datos.

### Instalación

1. Clona el repositorio:
   `git clone https://github.com/dtdavid/jewerly_store.git`
2. Accede a la carpeta del proyecto:
   `cd jewerly_store`
3. Instala las dependencias:
   `npm install`
4. Configura tu base de datos PostgreSQL:
   - Crea una base de datos llamada jewelry_store.
   - Configura tu conexión a la base de datos en config/db.js.
5. Inicia el servidor
   `npm start`
   **El servidor estará disponible en http://localhost:3000.**

### Estructura del Proyecto

    .

├── controllers
│ └── joyasController.js # Lógica de las rutas y peticiones
├── models
│ └── joyasModel.js # Consultas y lógica de la base de datos
├── config
│ └── db.js # Configuración de la base de datos PostgreSQL
├── loggers.js # Middleware para registrar rutas consultadas
├── package.json # Dependencias y scripts
└── README.md # Documentación del proyecto

## Contribuciones

Si deseas contribuir, por favor haz un **fork del repositorio**, realiza tus cambios y abre un pull request. Asegúrate de seguir las mejores prácticas de código.

## Licencia

Este proyecto está bajo la **licencia MIT**. Consulta el archivo LICENSE para más detalles.

## Autor

👤 **David Docampo**  
🔗 [github.com/dtdavid](https://github.com/dtdavid)
