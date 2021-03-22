var a = [10,20,4,40,60,70];
var b = [1,2,3,4,5,6,7,8,9,10,];

var sm= a.concat(b);

sm.sort(function(a, b)
 {
    return a - b;
  });
  
  var uniqueChars = [... new Set(sm)];
//console.log(sm);



//sm.sort();
document.write(uniqueChars);





//console.log(uniqueChars);