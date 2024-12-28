function spread(...student)
{
      console.log(student);
      
}
spread({
  name:["abi","rahul"],
  age:20,
  isStudent:true,
  address:{
    state:"tamiladu",
    city:"perundurai"
  },
  hello: function(){
    console.log("jgregf");
    console.log("64b");
  }

})

console.log(student.name);



  let student = new Object();
  student.name= "dhe";
  student.age= 20;
  student.hel = function()
  {
    console.log("hrvg");
  }
  student.hel();


  let a= 15
  if(a%3==0)
  {
    console.log("hi");
    if(a%5==0)
      {
        console.log("hello");
      }
  }
  
  else if(a%3==0 || a%5==0)
  {
    console.log("hi hello");
  }
 
  
  let choice = 3;
  switch(choice)
  {
    case 1:
      console.log("hell");
    case 2:
      console.log("hi");
      break;
    case 3:
        console.log("poda");
        break; 
    default:
      console.log("pooda");
        break; 

           
  }
 var a=5;

  for(a=1;a<100;a++)
  {
    console.log("hi");
  }
  
  console.log(a);


let apple = () => console.log("hello");
apple();

let orange = () => "orange";
console.log(orange());

let banana = () => {
  console.log("nandhini");
  return 3+3;
}
console.log(banana());


let banana = (a,b) => {
  console.log("nandhini");
  return a+b;
}
console.log(banana(3,3));

let a= [1,2,3,4,5]
let x= [6,7,8,9]
let b=[...a,...x]
console.log(b);

rest operator
 
function rest(x,y,...value)
{
    console.log(value);
    console.log(x);
}
rest(1,2,3,4);


destructuring operator
let a=[1,2,3,4,5,6,7]
let [b,c,d,...e]=a;
console.log(e);

let obj={
  name:"ram",
  id:33,
  age:22
}
let {name,...n}=obj;
console.log(n);


function dog()
{
  setTimeout(()=>{
    console.log("the dog");
  } ,3000)
}
function cat()
{
  console.log("the cat");
}
dog();
cat();


let a="A";
function process(complet)
{
  setTimeout(()=>{
  console.log(`File ${a} is processing...`);
  
},1000) 
setTimeout(()=>{
  console.log("file got downloaded");
},2000) 
   complet();
}
function complete()
{
  setTimeout(()=>{
    console.log("complted");
   
  },3000) 
}
process(complete);