let value = prompt("enter a number")
const revValue = ()=>{
let myRevValue = value.toString().split("").reverse().join("");
let myStrValue = value.toString();

if (myStrValue == myRevValue){
   document.write("it is a palindrome");

}
else{
    document.write("it is not palindrome");
}
}
 revValue()