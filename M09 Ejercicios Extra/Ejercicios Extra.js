/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let array = [];

   for(let i in objeto){
      array.push([i, objeto[i]]);
   }

   return array;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objCont = {}; 
   var arrayS = string.split('');
   var letraAux = '';

   for(let i = 0; i < arrayS.length; i++){
      letraAux = arrayS[i];
      if(objCont.hasOwnProperty(letraAux) == true){
         objCont[letraAux] += 1;
      }else{
         objCont[letraAux] = 1;
      }
   }

   return objCont;


}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
  // var ban = 0, ultM = 0;
   var arrayString = string.split('');

   let stringMay = arrayString.filter(e => {
      if(e === e.toUpperCase()){
         return e;
      }
   })

   let stringMin = arrayString.filter(e => {
      if(e === e.toLowerCase()){
         return e;
      }
   })

   let newString = stringMay.join('') + stringMin.join(''); 

   return newString;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let array = frase.split('');
   let arrayMirror = [];
   let arrayAux = [];

   for(let i = 0; i < array.length; i++){
      if(array[i] === ' ' || i === array.length-1){

         if(i === array.length-1){
            arrayAux.push(array[i]);
         }

         arrayAux.reverse();
         for(let j = 0; j < arrayAux.length; j++){
            arrayMirror.push(arrayAux[j]);

            if(j === arrayAux.length-1 && i != array.length-1){
               arrayMirror.push(' ');
            }
         } 

         arrayAux = []; //limpio array

      }else{
         arrayAux.push(array[i]);
      }
   }

   return arrayMirror.join('');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let string = numero.toString();
   let array = string.split('');
   let arrayInv = array.reverse();
   let stringInv = arrayInv.join('');

   if(string === stringInv){
      return 'Es capicua';
   }else{
      return 'No es capicua';
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let array = string.split('');

   string =  array.map(elem => {
      if(elem === 'a' || elem === 'b' || elem === 'c'){
         return null;
      }else{
         return elem;
      }
   })

   return string.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let aux = '';
   for(let i = 1; i < arrayOfStrings.length; i++){
      for(let j = 0; j < (arrayOfStrings.length - i); j++){
         if(arrayOfStrings[j].length > arrayOfStrings[j+1].length){
            aux = arrayOfStrings[j];
            arrayOfStrings[j] = arrayOfStrings[j+1];
            arrayOfStrings[j+1] = aux;
            aux = '';
         }
      }
   }
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let newArray = [];
   let i = 0;
   
   while(i < array1.length){
      for(let j = 0; j < array2.length; j++){
         if(array1[i] === array2[j]){
            newArray.push(array1[i]);
         }
      }
      i++;
   }

      return newArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
