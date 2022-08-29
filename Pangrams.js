// Roy quiere mejorar su velocidad de escritura en máquina para concursos de programación. Su amigo le dijo que escribiera
// la oración "The quick brown fox jumps over the lazy dog" repetidamente porque es un pangrama. (pangramas son oraciones 
// construidas usando todas las letras del alfabeto, por lo menos una vez.)

// Después de escribir la oración muchas veces, Roy se aburrió. Entonces comenzó a buscar otros pangramas.

// Dada una oración s, dile a Roy si es un pangrama o no.

// Formato de Entrada

// La Entrada consiste en una linea que contiene s.

// Restricciones

// La longitud de s puede ser a lo mucho 10**3 (1 <= |s| <= 10**3)  y puede contener espacios, minúsculas y mayúsculas. Las minúsculas y mayúsculas de una misma letra son consideradas la misma letra.

// Formato de Salida

// Imprime una línea que contiene pangram si s es un pangrama, sino imprime not pangram.

// Ejemplo de Entrada #1

// We promptly judged antique ivory buckles for the next prize    

// Ejemplo de Salida #1

//pangram

// Ejemplo de Entrada #2

// We promptly judged antique ivory buckles for the prize    

// Ejemplo de Salida #2

// not pangram

function pangrams(s) {
  // Write your code here
  const comparisonString = "abcdefghijklmnopqrstuvwxyz"
  let str1 = s.replace(/\s/g, '');
  let str2 = str1.toLowerCase();
  let arr1 = str2.split('');
  let arr2 = [...new Set(arr1)];
  let arr3 = arr2.sort();
  let str3 = arr3.join('')


  if(str3 === comparisonString) {
    return "pangram"
    } else { return "not pangram" }
} 