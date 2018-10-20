---
category: primeros-comandos
path: '/primeros-comandos'
title: 'Buscar ayuda'
---

## man
Como es imposible saber qué hace cada comando de memoria, el terminal viene con un comando que nos ayuda, se llama "man" (de manual).

Cuando lo ejecutamos siempre le tenemos que indicar qué parte queremos ver del manual. Normalmente se lo indicamos con el nombre del comando tras un espacio. Por ejemplo, para saber sobre "cal":

<script id="asciicast-MQn9N4U4kCdlMIKRYuoYlu4ZB" src="https://asciinema.org/a/MQn9N4U4kCdlMIKRYuoYlu4ZB.js" data-size="medium" data-rows="20" async></script>

Cuando lo ejecutamos entramos en una vista diferente, en la que ya no podemos ejecutar los mismos comandos.

En realidad, lo que está pasando es que hay otro programita llamado "less" que se está encargando de mostrarnos la documentación. Para salir de él, tenemos que ejecutar "q".

## apropos
A veces no sabemos cómo se llama el comando para hacer algo. Además de buscar en Google, el terminal nos permite buscar en el manual con el comando "apropos".

Por ejemplo, imaginemos que queremos mostrar la fecha, pero no sabemos qué comando es. Podemos hacer:

<script id="asciicast-B9r61VIprtSMjKY7kMPSzbp1J" src="https://asciinema.org/a/B9r61VIprtSMjKY7kMPSzbp1J.js" data-size="medium" data-rows="20" async></script>

En este caso se puede ver como "less", la manera en la que se muestra el texto, nos deja bajar si pulsamos "Enter" en el teclado varias veces.

## whatis
Si queremos sólo buscar con el nombre exacto, o si vemos que "apropos" nos da demasiados resultados podemos utilizar "whatis".

<script id="asciicast-CzmEH0qKTenTrKTGhXOTPhIht" src="https://asciinema.org/a/CzmEH0qKTenTrKTGhXOTPhIht.js" data-size="medium" data-rows="20" async></script>