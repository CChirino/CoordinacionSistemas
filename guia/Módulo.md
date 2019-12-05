---
title: Módulos
description: Como crear modulos
---
# Módulo

Como podemos observar en todo el Sistema MiUNE2.0 se compone de distintos módulos específicos para cada tipo de grupo.

Tenemos dos tipos de módulos.

Los cuales se dividen de la siguiente manera:
- Módulos Padres: Son Aquellos donde se realizan las funciones principales del todo el sistema MiUNE2.0.
- Módulos Hijos: Se crean a partir de las funciones de los módulos padres, pero lo que cambia seria en este caso el Query.

Aprovechando que nos encontramos hablando de módulos, es bueno repasar que es un modelo MVC.

## MVC

**MVC o Modelo Vista Controlador** es un patrón de diseño de software para la programación donde se separa el código, por las distintas funcionalidades que tenemos en este caso Zend Framework se rige por esta arquitectura, la cual podemos observar en la siguiente imagen el sistema de carpetas con el que se maneja.

![Sistema de Carpetas](/images/sistema_carpetas.png) 

## Módulos Padres

Con el concepto anterior tenemos los siguientes módulos en base al esquema de MVC. En este caso serían los siguientes:

- Configs
- Modelos
- Módulos 
    - Consultas
    - Mantenimiento
    - Profile
    - Reports
    - Statics
    - Transactions
- CmBytes

### Configs

En este módulo se encuentra toda la configuración de MiUNE 2.0, esto lo adaptamos en nuestro local para poder trabajar con él.

### Modelos 

Aquí principalmente se encuentra las funciones que se llaman directamente a los controladores, por lo general, son un Query(búsqueda) que se mezclan con funciones del Zend que se encuentra ya hechas para invocarlas en nuestro proceso nuevo.

Se dividen 2:
- DbTable
- DbView

La mayoría  de los modelos se encuentran en el DbTable de la mayoria de los modulos.

### Modulos

Son aquellos que podemos observar en MiUNE 2.0, pero estos se componen de los siguiente:

- Modelos
- Controlador
- Vista

