---
category: sistema-de-archivos
path: '/ver-donde-estamos'
title: 'Ver dónde estamos'
---

## ¿Dónde estamos?
Siempre que abres un terminal, es decir, que empiezas una sesión en el terminal, te encuentras en un directorio (o carpeta) del sistema. De la misma forma que cuando abres el explorador de archivos siempre estás en una carpeta. Por ejemplo, en Ubuntu:

![Nautilus](img/terminal9.png)

Pues bien, en el terminal, para saber dónde estamos podemos usar "pwd".

<script id="asciicast-9tYNPGRTdSl5Ge0EbCzgYeyNJ" src="https://asciinema.org/a/9tYNPGRTdSl5Ge0EbCzgYeyNJ.js" data-size="medium" data-rows="20" async></script>

## ls
Para saber qué archivos tenemos en el directorio en el que estamos, podemos utilizar "ls". Si queremos ver la lista en forma de columna con mas detalles, podemos hacerlo con -l.

<script id="asciicast-XSNRPK00FilxOeFyOfUCssAAe" src="https://asciinema.org/a/XSNRPK00FilxOeFyOfUCssAAe.js" data-size="medium" data-rows="20" async></script>

Si nos fijamos al principio de cada fila, hay una d, eso significa que todos son directorios (o carpetas).

## cd
Para cambiar de directorio, podemos hacer click en otro icono si usamos el explorador de archivos, pero en el terminal tenemos que utilizar un comando: "cd".

Tengo en el escritorio (la ruta es /Users/jose/Desktop) en mi Mac, un carpta llamada "miCarpeta". Veamosla con el explorador de archivos :

![carpeta](img/terminal10.png)

Y empiezo mi sesión de terminal dentro de esa carpeta. Pongamos todo lo aprendido en práctica!

<script id="asciicast-tbGZIMmn9P1gC2thrAIYM1s9z" src="https://asciinema.org/a/tbGZIMmn9P1gC2thrAIYM1s9z.js" data-size="medium" data-rows="20" async></script>

Si queremos ir a un directorio por encima, es decir a la carpeta que contiene donde estamos, podemos usar: "cd .."

## cat
Si queremos ver qué contiene un archivo, podemos utilizar el comando "cat":

<script id="asciicast-pU9hWI8vc9iaF1decKD0AMfEi" src="https://asciinema.org/a/pU9hWI8vc9iaF1decKD0AMfEi.js" data-size="medium" data-rows="20" async></script>
