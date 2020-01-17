/*
The user should run this from the root of the project using `node 1-odd-even/index.js <integer> and should see the word odd or even depending on the integer.  If an integer is not provide, the user should see a usage statement reminding them of the how to run this code.
*/

// get input using getargs
let getargs = require("../modules/getargs/index.js")
let input = getargs.getStringArg()

/**** Do not modify anything above this line ****/

// ! is "not" so if Input is NOT String because input = get string.....
if ( !input  ) {
  console.log( "node-3-straing-contains-hello <pls enter string> and use spaces with quotes" );
 
} 

// check to see if string contains hello
// if it does report back the position in the string where it begins

else {

  // this was a little hard to find out by myself.... didnt know how to find solution properly
  if (input.indexOf('hello') > -1) {
    console.log(`hello was found at position ${input.indexOf('hello')} of string ${input}`);

    
  } else {
    console.log(`hello was not found at string ${input} `)
    
  }
}
