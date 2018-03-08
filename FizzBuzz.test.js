/** 
 * Ce dojo utilise la librarie Chai pour les tests unitaires (TDD)
 * Avec l'environnement Mocha
*/


const FizzBuzz = require('./FizzBuzz.js');
const assert = require('chai').assert // Librarie Chai : http://chaijs.com/guide/installation/



/**
 * All Suite Test
 */
describe('Suite test in FizzBuzz Dojo', () => {

    it('test si mutiple de 3', (done) => {
        assert.equal(FizzBuzz(9), "Fizz"); 
        done();
    });
    
    it('test si mutiple de 5', (done) => {
        assert.equal(FizzBuzz(20), "Buzz"); 
        done();
    });

    it('test si mutiple de 3 et 5', (done) => {
        assert.equal(FizzBuzz(15), "FizzBuzz"); 
        done();
    });

    it('test si mon nombre est 0', (done) => {
        assert.equal(FizzBuzz(0), "FizzBuzz"); 
        done();
    });

    it('test si mon nombre est chaine', (done) => {
        assert.equal(FizzBuzz("coucou"), null); 
        done();
    });
    
});