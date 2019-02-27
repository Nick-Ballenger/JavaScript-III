/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding shows everything in the browser
* 2. Implicit binding (automatically binds within an object)
* 3. Explicit binding (We specifically tell it what to do within functions)
* 4. New Binding (We build new objects and bind them)
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this);
// code example for Window Binding

// Principle 2
const Transformer = {
    Name:"Optimus",
    Hobby:"racketball",
    Play: function(){
        console.log(`${this.name} enjoys playing ${this.hobby}`);
    }
}
Transformer.play();
// code example for Implicit Binding

const Simpson = {
    Name:"Bart"
}

function catchphrase(){
console.log(`The ${this.name} says, Eat my shorts`)
}

catchphrase.call(Simpson);
// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding