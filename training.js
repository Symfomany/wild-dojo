// ES6 Training
// variables, if..elseif..else, function






 // construction de la fonction 
function direBonjour(){
    let age = -8;
    
    let phrase = "";

    if (age >= 18) {
        phrase = "je suis majeur";
    } else {
        phrase = "je suis mineur";
    }

    return phrase;
}

// appel de la fonction 
let resultat = direBonjour(); 

console.log(`Le résultat est : ${resultat}`);


// argument
function carre(nombre){
    return nombre * nombre;
}

function css(propriete, valeur){

}
css('border-color', 'red')

let resultatTwo = carre(2);
let resultatThree = carre(9);

console.log(resultatTwo, resultatThree);



console.log(20%3);