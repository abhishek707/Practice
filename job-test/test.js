// var obj1 = {}
// var obj2 = {}

// // console.log(obj1 === obj2)

// // var foos = ['a', 'b', 'c' , 'd', 'e']
// // var bars = ['x', 'y', 'z']
// //  for (var i = 0; i < foos.length; i++) 
// //     { 
//         // var foo = foos[i]; 
//     // console.log(foo)

// // for (var i = 0; i < bars.length; i++) 
// //     { 
// //         var bar = bars[i]; 
// //     }
// //  }
// //  console.log(foo)
// //  console.log(bars)

// console.log(1 + 5 + "bottles of milk")

// console.log(typeof x)

// // var myarr = new array()

// var a = false 
// var x = a ? 'A' : 'B'
// console.log(x)

// // var obj = new Object({ this.prop1 = ‘property 1’, 
// //         this.prop2 = ‘property 2′; }) 

// var x = ['a', 'b', 'c']

// // x.unshift(0)
// // x.pop();
// // x.splice(0);
// x.splice(0, 1);
// console.log(x)

// var x = 'I am global x';
//  var y = 'I am global y'; 
//  function foo() { 
//      var y = x = 'Hello from foo'; 
//     } 
//     foo();
//     console.log(x)
//     console.log(y)

function createBase(baseNumber) {
    return function(N) {
      // we are referencing baseNumber here even though it was declared
      // outside of this function. Closures allow us to do this in JavaScript
      return baseNumber + N;
    }
  }
  
  var addSix = createBase(6);
  console.log(addSix(10));
  console.log(addSix(21));

  function createBase(baseNumber) {
      return function(a){
          return baseNumber + a
      }
  }

  var addSix = createBase(6)
  console.log(addSix(10))