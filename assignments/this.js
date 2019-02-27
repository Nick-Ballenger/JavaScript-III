// /* The for principles of "this";
// * in your own words. explain the four principle for the "this" keyword below.
// *
// * 1. Window binding shows everything in the browser
// * 2. Implicit binding (automatically binds within an object)
// * 3. Explicit binding (We specifically tell it what to do within functions)
// * 4. New Binding (We build new objects and bind them)
// *
// * write out a code example of each explanation above
// */

// // Principle 1
// console.log(this);
// // code example for Window Binding

// // Principle 2
// const transformer = {
//     name: "Optimus Prime",
//     hobby: "racketball",
//     play: function() {
//       return `${this.name} enjoys playing ${this.hobby}`;
//     }
//   }
//   console.log(transformer.play());
// // code example for Implicit Binding


// // Principle 3

// // code example for New Binding

// function Animal(food) {
//   this.food = food;
//   this.eat = function() {
//     console.log(`This animal likes to eat ${this.food}`);
//   }
// }



// const zebra = new Animal('grass');
// const lion = new Animal('meat');

// console.log(zebra);


// zebra.eat();
// lion.eat();
// // Principle 4

// // code example for Explicit Binding
// const simpson = {
//   name: "Bart"
// }


// const skills = ["Skateboarding","eating shorts","getting strangled"];


// function introduce(skills1, skills2, skills3) {
  
//   return `I'm ${this.name}! I love ${skills1}, ${skills2}, and ${skills3}`;
// }

// console.log(introduce.call(simpson, ...skills));