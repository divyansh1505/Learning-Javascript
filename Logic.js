//LOGICAL OPERATORSSSSSSSSSSSSSSSSSSSSSSSSSSS

alert( null || 2 || undefined );
//It will give 2 as thats the first truthy value 

alert( alert(1) || 2 || alert(3) );
//It will give 1 and then 2.
// alert(1) gives 1 but alert ka return type is undetermined. 
// so undeterment vs 2 me 2 is selected


alert( 1 && null && 2 );
//Shows null as and operater -returns the first falsy value it encounters, 
// or if all values are truthy, it returns the last value.


//AND returns first falsy value and OR return first truthy value.

alert( null || 2 && 3 || 4 );
// The result of 2 && 3 = 3, so it gives 3 
//AND HAVE MORE PRECENDENCE THAN OR.