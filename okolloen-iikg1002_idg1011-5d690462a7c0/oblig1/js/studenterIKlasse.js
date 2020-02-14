let ul = document.querySelector('ul.studenter');

fetch('../studenter.json')
    .then(res => res.json())
    .then(student => {
        document.querySelector('input#BIGEOMAT').addEventListener("click", function(){
            ul.innerHTML = "";
            if(student.forkortelse == "BIGEOMAT"){
                student.forEach(student=> {
                    ul.innerHTML += `<li>${student.fornavn}</li> <li>${student.etternavn}</li> <li>${student.studieprogram}</li> <li>${student.forkortelse}</li> </br>`;
                });
            } else {console.log("fail")};
        });
        //document.querySelector('input#BWU').addEventListener("click", showBWU());
        //document.querySelector('input#ÅRWEB').addEventListener("click", showAARWEB());
        //document.querySelector('input#BIXD').addEventListener("click", showBIXD());
        document.querySelector('input#all').addEventListener("click", function(){
            ul.innerHTML = "";
            student.forEach(student=> {
                ul.innerHTML += `<li>${student.fornavn}</li> <li>${student.etternavn}</li> <li>${student.studieprogram}</li> <li>${student.forkortelse}</li> </br>`;
            })
        });
        
    });