/** 
 * FizzBuzz function
 Écrire une fonction prenant en argument un nombre qui retourne une chaîne de caractères (string).
 
 Pour les multiples de 3, la chaîne retournée sera “Fizz”.
 Pour les multiples de 5, la chaîne retournée sera “Buzz”.
 Pour les multiples de 3 et 5, la chaîne retournée sera “FizzBuzz”.

 Si ce dernier n’est ni un multiple de 3, ni un multiple de 5, 
 on retournera le nombre
 
 Bonus: Si l'argument nombre n'est pas un nombre, on retournera null

 Astuce: Savoir si un nombre est multiple peut s'écrire avec le symbole Modulo noté "%"

    Hakim
     /*if (nombre === 9%3)
        {
            return ('Fizz')
        }
        else if (nombre === 10%5) {


        // Benjamin
        if (nombre%3 === 0) {
        return ("Fizz")
            }
            else if (nombre%5 === 0) {
                return ("Buzz")
            }
            else if (nombre%3 === 0 && nombre%5 === 0) {
                return ("FizzBuzz")
            }
            // your code here
        
                }

        // Benjamin
        if (nombre%3 === 0) {
            return ("Fizz")
        }
        else if (nombre%5 === 0) {
            return ("Buzz")
        }
        else if (nombre%3 === 0 && nombre%5 === 0) {
            return ("FizzBuzz")
        }

        // Tommy
          if (nombre%3 === 0) {
                return ('fizz')
            }
            else if (nombre%5 === 0) {
                return ('buzz')
            }
            else if ((nombre%5 === 0) && (nombre%3 === 0)) {
                return ('fizzbuzz')
            } 
            else if ( (nombre%3 !== 0) &&  (nombre%5 !== 0)) {

            }


            //emilia


if ((nombre%3 === 0) && (nombre%5 === 0)){
    return('FizzBuzz')
}
else if (nombre%3 === 0){
    return ('Fizz')
}
else if (nombre%5 === 0){
    return ('Buzz')
}

else if ((nombre%3 !== 0) && (nombre%5 !== 0)){
    return(nombre)
}
else {
    return(null)
}
          

   

*/

function FizzBuzz(nombre) {
  if (nombre % 3 === 0 && nombre % 5 === 0) {
    return "FizzBuzz";
  } else if (nombre % 3 === 0) {
    return "Fizz";
  } else if (nombre % 5 === 0) {
    return "Buzz";
  } else if (isNaN(nombre)) {
    return null;
  }
}

module.exports = FizzBuzz;
