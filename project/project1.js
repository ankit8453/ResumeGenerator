function addNewWEField(){
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("weField");
    newnode.classList.add("mt-2");
    newnode.setAttribute("placeholder","Write here");



let we = document.getElementById("we");
let weAddButton = document.getElementById("weAddButton");

we.insertBefore(newnode,weAddButton);    
}
function addNewEQField(){
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("eqField");
    newnode.classList.add("mt-2");
    newnode.setAttribute("placeholder","Write here");


let EQ = document.getElementById("EQ");
let eqAddButton = document.getElementById("eqAddButton");

EQ.insertBefore(newnode,eqAddButton);    
}

function addNewTSField(){
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("eqField");
    newnode.classList.add("mt-2");
    newnode.setAttribute("placeholder","Write here");


let ts = document.getElementById("ts");
let esAddButton = document.getElementById("esAddButton");

ts.insertBefore(newnode,tsAddButton);    
}
function generateCV(){
    let nameField=document.getElementById("nameField").value;
    let nameT=document.getElementById("nameT");
    nameT.innerHTML=nameField;
    //contact
    document.getElementById("contactT").innerHTML=document.getElementById("contactfield").value;
    //address
    document.getElementById("addressT").innerHTML=document.getElementById("addressfield").value;
    //email
    document.getElementById("emailT").innerHTML=document.getElementById("email").value;
    //summary
    document.getElementById("summaryT").innerHTML=document.getElementById("Summary").value;
    //linkedin
    document.getElementById("LIT").innerHTML=document.getElementById("LinkedInfield").value;
    //website
    document.getElementById("WST").innerHTML=document.getElementById("Website").value;
    //Exprience
    let wes =document.getElementsByClassName("weField");
    let str="";
    for(let e of wes){
        str = str +`<li> ${e.value} </li>`;
    }
    document.getElementById("eT").innerHTML=str;

    //education
    let eus =document.getElementsByClassName("eqField");
    let st="";
    for(let e of eus){
        st=st+` <li> ${e.value} </li> `;
    }
    document.getElementById("euT").innerHTML=st;

    //topskill
    let ts =document.getElementsByClassName("tsField");
    let st1="";
    for(let e of ts){
        st1=st1+` <li> ${e.value} </li> `;
    }
    document.getElementById("tsT").innerHTML=st1;

     //image input
    let ank=document.getElementById("formFile").files[0];
    console.log(ank);
    let reader =new FileReader();
    reader.readAsDataURL(ank);
    console.log(reader.result);
    //set
    reader.onloadend=function(){
        document.getElementById("image").src = reader.result;
    }

    document.getElementById("CV-form").style.display="none";
    document.getElementById("CV-template").style.display="block";
}
//printCV
function printCV(){
    window.print();
}
