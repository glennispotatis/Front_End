let ul = document.querySelector('ul.studenter');

fetch('../studenter.json')
    .then(res => res.json())
    .then(student => {
        document.querySelector('input#BIGEOMAT').addEventListener("click", function(){
            ul.innerHTML = "";
            student.filter(student => student.forkortelse === "BIGEOMAT").forEach(function(student){
                let li = document.createElement('LI');
                li.innerHTML = `<p class="name">${student.fornavn} ${student.etternavn}</p>
                                <p class="studyprogram">${student.studieprogram} (${student.forkortelse})</p>`
                ul.appendChild(li);
            });
        });

        document.querySelector('input#BWU').addEventListener("click", function(){
            ul.innerHTML = "";
            student.filter(student => student.forkortelse === "BWU").forEach(function(student){
                let li = document.createElement('LI');
                li.innerHTML = `<p class="name">${student.fornavn} ${student.etternavn}</p>
                                <p class="studyprogram">${student.studieprogram} (${student.forkortelse})</p>`
                ul.appendChild(li);
            });
        });

        document.querySelector('input#ÅRWEB').addEventListener("click", function(){
            ul.innerHTML = "";
            student.filter(student => student.forkortelse === "ÅRWEB").forEach(function(student){
                let li = document.createElement('LI');
                li.innerHTML = `<p class="name">${student.fornavn} ${student.etternavn}</p>
                                <p class="studyprogram">${student.studieprogram} (${student.forkortelse})</p>`
                ul.appendChild(li);
            });
        });

        document.querySelector('input#BIXD').addEventListener("click", function(){
            ul.innerHTML = "";
            student.filter(student => student.forkortelse === "BIXD").forEach(function(student){
                let li = document.createElement('LI');
                li.innerHTML = `<p class="name">${student.fornavn} ${student.etternavn}</p>
                                <p class="studyprogram">${student.studieprogram} (${student.forkortelse})</p>`
                ul.appendChild(li);
            });
        });

        document.querySelector('input#all').addEventListener("click", function(){
            ul.innerHTML = "";
            student.forEach(student=> {
                let li = document.createElement('LI');
                li.innerHTML = `<p class="name">${student.fornavn} ${student.etternavn}</p>
                                <p class="studyprogram">${student.studieprogram} (${student.forkortelse})</p>`
                ul.appendChild(li);
            });
        });
        
    });