



var x = "Lorem ipsum";
var y = 2345;
var z = "2345";
var q = false;
var w;



x += "3" + 1;
//x = x + "3" + 1;  to je isto kao ovaj redak iznad

var baaa = "b" + "a" + +"a" + "a";
// baNaNa  to je rezultata ove linije gore

console.log(x);
console.log(baaa);
console.log(typeof w);

//    if ( q == w) console.log("isti su");

/*
‘5’ - 3 = 2
‘5’ + 3 = ’53’
‘5’ - ’4’ = 1
‘5’ + + ‘5’= ’55’
‘Foo’ ++ ‘bar’ = ‘fooNaN’
‘5’ + - ‘2’ = ‘5-2’
‘5’ + - + — + — ++ - + - + - + - - - ‘2’ = ‘5-2’
X = 3 = 3
‘5’ + x - x = 50
‘5’ - x+x = 5 
*/