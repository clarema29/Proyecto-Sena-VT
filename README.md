# Backend de Tienda en Línea de Productos Tecnológicos

Este proyecto consta de un frontend desarrollado con HTML, CSS y JavaScript, y un backend desarrollado con Spring Boot, Spring Security con JWT y MySQL como gestor de base de datos.

## Repositorio

https://github.com/clarema29/Proyecto-Sena-VT.git

## Desarrolladores

- Claudia Redondo ([@clarema29](https://github.com/clarema29))
- Angie Morales ([@angiemoralesam](https://github.com/angiemoralesam))
- Cindy Gonzalez ([@cimagoca027](https://github.com/cimagoca027))
- William Cortés ([@WilliamCortesT](https://github.com/WilliamCortesT))

## Requisitos

### Frontend

- Git
- Visual Studio Code (o cualquier otro editor de código)

### Backend

- Java 17 en adelante
- MySQL
- IntelliJ IDEA (o cualquier otro IDE compatible con Java)

## Instrucciones

1. Clona el repositorio del proyecto: https://github.com/clarema29/Proyecto-Sena-VT.git

### Frontend

2. Abre el proyecto en Visual Studio Code.

3. Navega hasta la carpeta `frontend`.

4. En Visual Studio Code, abre el archivo `index.html` y haz clic derecho sobre él. Luego, selecciona la opción "Open with Live Server".

5. Esto abrirá la interfaz del cliente en tu navegador web, donde podrás visualizar y interactuar con la tienda en línea.

### Backend

6. Crea la base de datos en tu servidor local de MySQL.

7. Abre el archivo `application.properties` en la carpeta `backend/src/main/resources` y configura las credenciales de tu base de datos:
   
  - spring.datasource.url=jdbc:mysql://localhost:3306/nombre_base_datos
  - spring.datasource.username=tu_usuario
  - spring.datasource.password=tu_contraseña

8. Abre IntelliJ IDEA y selecciona "Open" para abrir el proyecto clonado.

9. En IntelliJ IDEA, busca el archivo `VisionTecnologiaApplication.java` en el panel de proyectos.

10. Haz clic derecho en el archivo y selecciona "Run 'VisionTecnologiaApplication'".

11. Espera a que la aplicación se compile y se inicie correctamente.

12. Una vez que el servidor esté en funcionamiento, podrás acceder a los endpoints de la API desde el frontend o mediante herramientas como Postman.

## Contribución

Si deseas contribuir a este proyecto, puedes seguir los siguientes pasos:

1. Realiza un fork del repositorio.
2. Crea una nueva rama para tus cambios: `git checkout -b mi-nueva-caracteristica`
3. Realiza los cambios y commit: `git commit -am 'Agrega una nueva característica'`
4. Sube tus cambios a tu fork: `git push origin mi-nueva-caracteristica`
5. Crea un nuevo Pull Request en el repositorio original.
