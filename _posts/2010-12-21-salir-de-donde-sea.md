---
category: trucos-terminal
path: '/salir-de-donde-sea'
title: 'Salir de donde sea'
---

## Salir de una página de manual
Lo hemos visto antes, pero cuando utilizamos el comando man, el terminal cambia y de repente ya no podemos ejecutar más comandos.

Cuando algo así pase, pulsa "q" en el teclado.

## Salir del comando actual
Hay comandos que se siguen ejecutando por siempre hasta que los paremos, o a veces no cerramos bien las comillas cuando ejecutamos un comando. Por ejemplo:

```
$ echo "hello
```

```
$ tail
```

```
$ cat
```

 Si eso nos pasa, podemos salir de ahí pulsando Ctrl + C. Si eso te falla, puedes probar con ESC.