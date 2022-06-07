# TDD-licences-exercise
CodelyTV - TDD in Typescript course: 02.Graduated Tiered Pricing

### 🛠 ¡A praticar! Ejercicio TPP

Te proponemos un ejercicio para practicar Transformation Priority Premise (TPP) 🙃

### 📝 Ejercicio

Seguimos con la misma historia de usuario al ejercicio anterior, pero en esta ocasión hemos cambiado la lógica del mismo. Tenemos que seguir calculando el precio total de las suscripciones, y los rangos de precios son los mismos, pero ahora el precio se gradua.

En este caso el precio unitario de cada suscripción depende del Tier al que pertence. Por ejemplo, si la empresa pide 3 suscripciones, el precio sería:

| Range | Unit price |
| ----- | ---------- |
| 1 | 299 € |
| 2 | 299 € |
| 3 | 239 € |
| Total | 837 € |

El objetivo es añadir el comportamiento al sistema utilizando TDD. Se espera que la solución sea una clase o método que resuelva el algoritmo. La idea es practicar Transformation Priority Premise (TPP), pero siéntete libre de buscar otros enfoques alternativos.

### ⚙️ Configuración

Enlace al ejercicio 👉 Graduated Tiered Pricing

El ejercicio, en la carpeta base tiene todo lo necesario para empezar el mismo. Si no está disponible un lenguaje que quieras utilizar, puedes utilizar directamente uno de nuestros skeletons en los diferentes lenguajes, que ya traen una librería de testing configurada. También puedes utilizar tu propio entorno si lo deseas, ya que en el ejercicio construimos una solución desde cero.

En el archivo README tienes las instrucciones para ejecutar los tests, que es todo lo que necesitas para poder ir haciendo el ejercicio.

### 🚀 Cómo publico mi solución

Si tienes intención de publicar la solución al final, lo mejor es empezar copiando la base dentro del directorio de soluciones. De esta forma podrás ir haciendo los commits que desees y hacernos una Pull Request al finalizar el ejercicio:

cp -fr base/typscript solutions/username_small-description


Para publicar la solución, simplemente haz una Pull Request a nuestro repositorio para que la incluyamos en el mismo.

Esta es una contribución que puede ayudar a otras personas a ver diferentes enfoques y que nos de pie a analizarlas en el futuro.

### ⚠️ Solución de problemas

Si te surge cualquier problema técnico a la hora de realizar este ejercicio, puedes abrir una issue en el repositorio de GitHub.

