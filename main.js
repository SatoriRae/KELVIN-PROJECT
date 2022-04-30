// KELVIN-PROJECT

//STEP 1. THE FORECAST TODAY IS 293 KELVIN. TO START, CREATE A VARIABLE NAMED KELVIN AND SET IT EQUAL TO 293. 
//THE VALUE SAVED TO KELVIN WILL STAY CONSTANT. CHOOSE THE VARIABLE TYPE WITH THIS IN MIND. 

const kelvin = 293; 
console.log(kelvin);

//STEP 2. WRITE A COMMENT THAT EXPLAINS THIS LINE OF CODE. 

//-->   In choosing a variable, the value of "var" has a global scope and the variable can change if var = something new. "let" is also a way of naming a value but needs to be defined within a block {} to get a specified scope.  However, variables declared with const maintain constant values. This will work best because the degrees in Kelvin is not going to change and we want an error to be thrown if we set const to anything else. 
//JS reads this as const kelvin and kelvin = 293. 293 is the value of kelvin. 

//STEP 3. CELSIUS IS SIMILAR TO KELVIN - THE ONLY DIFFERENCE IS THAT CELSIUS IS 273 DEGREES LESS THAN KELVIN. LET'S CONVERT KELVIN TO CELCIUS BY SUBTRACTING 273 FROM THE KELVIN VARIABLE. STORE THE RESULT IN ANOTHER VARIABLE NAMED CELSIUS. 

let celsius = kelvin - 273; 
console.log(celsius);

//STEP 4. WRITE A COMMENT THAT EXPLAINS THIS LINE OF CODE. 

//--> We can use the subtraction operator to give us the difference between the value of const kelvin (293) and number 279. That difference then defines the value of the celsius variable. // 20

//STEP 5. USE THIS EQUATION TO CALCULATE FAHRENHEIT, THEN STORE THE ANSWER IN A VARIABLE NAMED FAHRENHEIT.  FAHRENHEIT = CELSIUS * (9/5) + 32 

var fahrenheit = celsius * (9/5) + 32; //degrees
console.log(fahrenheit);

//STEP 6. WRITE A COMMENT THAT EXPLAINS THIS LINE OF CODE. 
//--> We can take the value of celsius, then use the multiplication operator * to multiply by fraction 9/5 to get a new output value. We then use the addition operator to add 32 to that value. The new output value  represents degrees in fahrenheit. //68

//STEP 7. WHEN YOU CONVERT FROM CELSIUS TO FARENHEIGHT, YOU OFTEN GET A DECIMAL NUMBER. USE THE .FLOOR() METHOD FROM THE BUILT-IN MATH OBJECT TO ROUND DOWN THE FAHRENHEIT TEMPERATURE. SAVE THE RESULT TO THE FAHRENHEIT VARIABLE. 

var fahrenheit = Math.floor (celsius * (9/5) + 32); 
console.log(fahrenheit);

//STEP 8. WRITE A COMMENT ABOVE THAT EXPLAINS THIS LINE OF CODE. 
//--> To ensure that we get an integer value for farenheit we can use the Math.floor operator that will take the number produced from (celsius * (9/5) + 32) which will get rid of any digit to the right of the decimal point and leave the "core" integer temp. //68

//STEP 9. USE CONSOLE.LOG AND STRING INTERPOLATION (template literals) TO LOG THE TEMPERATURE IN FAHRENHEIT TO THE CONSOLE AS FOLLOWS: THE TEMPERATURE IS TEMPERATURE DEGREES FAHRENHEIT. 
//USE STING INTERPOLATION TO REPLACE TEMPERATURE WITH THE VALUE SAVED TO FAHRENHEIT. 

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)


//STEP 10. RUN YOUR PROGRAM TO SEE THE RESULTS!

//--> I used string interpolation to insert the value of fahrenheight into a sting `The temperature is 68 degrees Fahrenheit.` by surrounding the sting in backticks and adding $ followed by {} around the fahrenheit variable which produced sentence that included the number value of fahrenheit. 

//STEP 11. BY USING VARIABLES, YOUR PROGRAM SHOULD WORK FOR ANY KELVIN TEMPERATURE - JUST CHANGE THE VALUE OF KELVIN AND RUN THE PROGRAM AGAIN. 
//WHAT'S 0 KELVIN IN FAHRENHEIT?

//const kelvin = 0; 
//let celsius = kelvin - 273; //-273
//var fahrenheit = Math.floor (celsius * (9/5) + 32); // -460
//console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
// *****The temperature is - 460 degrees Fahrenheit *****


//STEP 12. GREAT WORK! KELVIN CAN NOW PUBLISH HIS FORCASTS IN CELSIUS AND FARHENHEIT. IF YOU'D LIKE EXTRA PRACTIVE, TRY THIS: 
// CONVERT CELSIUS TO THE NEWTON SCALE USING THE EQUATION
//NEWTON = CELSIUS * (33/100)
//ROUND DOWN THE NEWTON TEMPERATURE USING THE .FLOOR() METHOD.

let newton = Math.floor (celsius * (33/100)); 
console.log(`The temperature is ${newton} on the Newton scale.`)
// *****The temperature is 6 on the Newton scale ***** (293 Kelvin)
// *****The temperature is -91 on the Newton scale ***** (0 Kelvin)
