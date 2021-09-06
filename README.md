Generar repo en tu cuenta personal de github
Incluir tests
Opcional: Decir, usando BigO notation, la complejidad del algoritmo utilizado
const books = [
    { name: "Harry Potter", author: "Joanne Rowling" },
    { name: "Warcross", author: "Marie Lu" },
    { name: "The Hunger Games", author: "Suzanne Collins" }
]
// Sort the array (desc) by author's last name

-----

## What is Big-O
[Referencia](https://medium.com/@charlie_fuentes/notacion-big-0-para-principiantes-f9cbb4b6bec8)  
La notación Big O es una herramienta muy funcional para determinar la complejidad de un algoritmo que estemos utilizando, permitiéndonos medir su rendimiento en cuanto a uso de espacio en disco, recursos (memoria y ciclos del reloj del CPU) y tiempo de ejecución, entre otras, ayudándonos a identificar el peor escenario donde el algoritmo llegue a su más alto punto de exigencia.
# 
Los términos de complejidad Big O más utilizados son:

## O(1) -> constante.  
sin importar el tamaño de entrada o salida, el tiempo de ejecución y recursos utilizados por nuestro algoritmo siempre será el mismo.  

## O(n) -> linear.
 complejidad linear, cuando su tiempo de ejecución y/o uso de recursos es directamente proporcional (es decir que se incrementa linealmente) al tamaño del valor de entrada necesario para la ejecución del algoritmo

## O(log n) -> logarítmica.
es directamente proporcional al resultado logarítmico del tamaño del valor de entrada. 

## O(n ^ 2) -> cuadrática.
 cuando su rendimiento es directamente proporcional al cuadrado del tamaño del valor de entrada. 

## O(2 ^ n) -> exponencial.
complejidad exponencial, su rendimiento se incrementa al doble cada vez que se agregue un nuevo dato al valor de entrada