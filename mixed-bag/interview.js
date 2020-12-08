var obj1 = {};
var obj2 = {}; 

console.log(obj1 === obj2)

var foos = ['a', 'b', 'c' , 'd', 'e']; 
var bars = ['x', 'y', 'z'];
// var bars = ['x', 'y', 'z', 'q', 'w', 'e', 'r', 't', 'y'];
 
// for (var i = 0; i < foos.length; i++) 
//     { 
//         var foo = foos[i]; 
// for (var i = 0; i < bars.length; i++) 
// { 
//     var bar = bars[i];
//     /* some code using `bar` */ 
//     // console.log(bar)
// }
//  } 

 var foos = ['a', 'b', 'c' , 'd', 'e']; 
 var bars = ['x', 'y', 'z'];
 for (var i = 0; i < foos.length; i++) 
{ 
  var foo = foos[i]; 
for (var i = 0; i < bars.length; i++) 
{ 
  var bar = bars[i]; 
/* some code using `bar` */ 

}
 } 

 let x = ['d', 'y', 'z'];
  x.splice(0, 1);
 console.log(x)


 var m = 'I am global x'; 
 var y = 'I am global y'; 
 function foo() { 
     var y = m = 'Hello from foo';
     } 
     foo();
     console.log(m)
     console.log(y)

        // function(){
            
        // }


     function createBase(base) {
        return function(n) {
          return base + n;
        }
      }
      
      var addSix = createBase(6);
      console.log(addSix(10));
      console.log(addSix(21));

    //   function ()

word1 = 'Mary'
word2 = 'Army'
var str1 = word1.toLowerCase().split('').sort().join('').trim();
var str2 = word2.toLowerCase().split('').sort().join('').trim();

if (str1 === str2) {
    isAnagram = true;
} else {
    isAnagram = false;
}
console.log(isAnagram)