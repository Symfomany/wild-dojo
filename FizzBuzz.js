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

 20 / 5 = 4
 20 % 5 = 0

 Anthony
  if (nombre % 3 === 0 && nombre % 5 === 0) {
    return "FizzBuzz";
  }
  
*/

function FizzBuzz(nombre) {
  const mop = nombre % 5 === 0;
  const map = nombre % 3 === 0;

  if (mop && map) {
    return "FizzBuzz";
  } else if (map) {
    return "Fizz";
  } else if (mop) {
    return "Buzz";
  }
}

module.exports = FizzBuzz;
