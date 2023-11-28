var a=require("readline-sync")
var b=a.questionInt("enter the character")
if(a>="a"&& a<="z"){
    console.log(a,"is a alphabet")
}else if(a>=0 && a<=9){
    console.log(a,"is a digit")
}else{
    console.log(a,"not a special character")
}