// for (let i =1;i<=100;i++){
//     console.log(i)
// }
// for (let i =6;i>0;i--){
//     console.log(i)
// }

const createObject =(names,gender)=>{
    const obj  = {
       names:names,
       gender:gender ||"male",
       address:{
       country:"united states",
       city:"new york"},
   }
   return obj;

   };

//    for (let i =6;i>0;i--){
//     console.log(createObject("daisy"+i,"female",i))
// }
// for (let i =6;i>0;i--){
//     console.log(createObject("daisy"+i,i%2===0?"male":"female"))
// }

for (let i =6;i>0;i--){
    console.log(createObject("daisy"+i,i%2===0?"male":"female",
    Math.floor(Math.random()*100)
    
    ))
}

//    console.log(createObject('jack'))
// const createObject =()=>{
//  return   {
//     names:"benjamin",
//     gender:"male",
//     address:{
//     country:"united states",
//     city:"new york"}
// }
// }
// console.log(createObject())

// ()=>{

// } annonymous function