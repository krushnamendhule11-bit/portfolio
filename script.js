const text = [
"AWS Learner",
"DevOps Learner",
"Business Analytics Student",
"Future Business Analyst"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {

document.getElementById("typing").textContent = current;

if(!isDeleting){

current = text[i].substring(0,j++);
if(j > text[i].length){
isDeleting = true;
}

}else{

current = text[i].substring(0,j--);

if(j==0){
isDeleting=false;
i++;

if(i==text.length){
i=0;
}
}

}

setTimeout(type,120);

}

type();

const mode=document.getElementById("mode");

mode.onclick=()=>{

document.body.classList.toggle("light");

}
