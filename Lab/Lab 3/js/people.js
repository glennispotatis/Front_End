let section = document.querySelector("section");

fetch('js/people.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(person => {
            let p = document.createElement('P');
            p.innerHTML = `<div>${person.name.first} ${person.name.last} (${person.age})`;

            if (person.isActive) {
                p.querySelector('div').setAttribute('class', 'active');
            }
            p.innerHTML += `<div>Jobber for ${person.company} og har en formue på ${person.balance}.</div>`;
            section.appendChild(p);
        });
    });