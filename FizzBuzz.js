
/** 
 * Marlene roxane
  if (nb % 3){
        return nombre % nombre; 
    } else if{

    }else
    }
 Astuce: Savoir si un nombre est multiple peut s'écrire avec le symbole Modulo noté "%"
 
 Roxane :

  // your code here
    if (nb % 3) {
        return('fizz');
    }else if (nb % 5){
return('Buzz')

        
    }else if {
else{
    
}

Claire

 if (nb % 3)
   return ('fizz');
}
    else if (nb % 5) {
    return ('buzz') 
    }

    else (nb % 3 && nb %5 ) {
        return ('fizzbuzz');
    }

    // sylvain

     let cinq = nombre % 5;
 let trois = nombre %3;
 
    if(cinq == 0){
        return ('fizz')
    } 
    


    // vincent
    if (nombre%5 ==0 && nombre%3 ==0) {
    return ('Fizzbuzz');
    }
    else if (nombre%3 == 0) {
        return ('fizz');
    }

    else if (nombre%5 == 0){
        return ('buzz');
    }

    else 
    {
        return nombre;
    }


 */
function FizzBuzz(nombre){
    if (isNaN(nombre)){
        return "Ce n'est pas un nombre";
    }

    const multiple5 = nombre % 5 == 0;
    const multiple3 = nombre % 3 == 0;

    if(multiple5 && multiple3){
        return "FizzBuzz";
    }
    else if (multiple5) {
        return "Buzz";
    } else if (multiple3) {
        return "Fizz";
    } else {
        return nombre;
    }
}



module.exports = FizzBuzz