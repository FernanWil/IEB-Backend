# IEB-Backend


## Descripcion
El proyecto está realizado en NestJs

## Instalacion 
En la consola colocar los sigueintes comandos:
1. npm i -g @nestjs/cli (Este comando es para poder acceder a cli de nestjs )

2.npm install (para poder agregar todas la dependicas de npm)

3. npm install --save @nestjs/typeorm typeorm mysql2 (Este comando, se utilizará para poder tener las dependencias para la base datos, y poder acceder a algunas dependencias de typeorm)

4. @nestjs/common

5.npm run start:dev (para correr el proyecto)

## Base de datos
La base de datos mysql fue la que implementé para realizar el proyecto, el archivo llamado (app.module.ts) se encuentra una linea de codigo:
(synchronize: true) que sirve para poder crear las tablas de la base de datos, pero principalmente se debe crear una base de datos con el nombre que aprace en el mismo archivo, en la linea de codigo: (database: 'dbieb'), despues de crearlo es solo correr el proyecto y automativamente se crearán las tablas, para la base de datos, es reconmedable comentarear la lina o cambiar a false.

