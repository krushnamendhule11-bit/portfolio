const words=[
"AWS Learner",
"DevOps Learner",
"Business Analytics Student",
"Future Business Analyst"
];

let i=0;
let j=0;
let current="";
let deleting=false;

function typing(){

document.getElementById("typing").innerHTML=current;

if(!deleting){

current=words[i].substring(0,j++);

if(j>words[i].length){

deleting=true;

}

}else{

current=words[i].substring(0,j--);

if(j==0){

deleting=false;

i++;

if(i==words.length){

i=0;

}

}

}

setTimeout(typing,120);

}

typing();
