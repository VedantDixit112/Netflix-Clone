let val1 = document.querySelectorAll(".rony1 button");
let val3 = document.querySelectorAll(".rony3 button");
let val2 = document.querySelectorAll(".rony2 button");
let val5 = document.querySelectorAll(".rony5 button");
let val4 = document.querySelectorAll(".rony4 button");
for(l of val1){
    l.addEventListener("click", function() {
        let myElement = document.getElementById("#col1");
        let s=document.querySelector(".rony1 h3");
            if (myElement) {
                if(myElement.style.display == "block"){
                    myElement.style.display = "none";
                    s.innerText="+";
                }
                else{
                    myElement.style.display = "block";
                    s.innerText="x";
                }
            }
        })};
        for(l of val2){
            l.addEventListener("click", function() {
                let s=document.querySelector(".rony2 h3");
                let myElement = document.getElementById("#col2");
                    if (myElement) {
                        if(myElement.style.display == "block"){
                            myElement.style.display = "none";
                            s.innerText="+";
                        }
                        else{
                            myElement.style.display = "block";
                            s.innerText="x";
                        }
                    }
                })};

for(l of val3){
    l.addEventListener("click", function() {
        let s=document.querySelector(".rony3 h3");
        let myElement = document.getElementById("#col3");
            if (myElement) {
                if(myElement.style.display == "block"){
                    myElement.style.display = "none";
                    s.innerText="+";
                }
                else{
                    myElement.style.display = "block";
                    s.innerText="x";
                }
            }
        })};
        for(l of val4){
    l.addEventListener("click", function() {
        let s=document.querySelector(".rony4 h3");
        let myElement = document.getElementById("#col4");
            if (myElement) {
                if(myElement.style.display == "block"){
                    myElement.style.display = "none";
                    s.innerText="+";
                }
                else{
                    myElement.style.display = "block";
                    s.innerText="x";
                }
            }
        })};
for(l of val5){
    l.addEventListener("click", function() {
        let s=document.querySelector(".rony5 h3");
        let myElement = document.getElementById("#col5");
            if (myElement) {
                if(myElement.style.display == "block"){
                    myElement.style.display = "none";
                    s.innerText="+";
                }
                else{
                    myElement.style.display = "block";
                    s.innerText="x";
                }
            }
        })};       
        

