let ul = document.querySelector('.studenter');

fetch('../studenter.json')
    .then(res => res.json())
    .then(student => {
        console.log(student);
        student.forEach(student=> {
            let li = document.createElement('LI');
            li.innerHTML = `<p class="name">${student.fornavn} ${student.etternavn}</p>
                            <p class="studyprogram">${student.studieprogram} (${student.forkortelse})`
            ul.appendChild(li);
        })
    })