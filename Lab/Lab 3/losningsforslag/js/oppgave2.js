let section = document.querySelector('section');

fetch('js/people.json')                     // Hent informasjon
  .then(res=>res.json())                    // Dekod JSON data
  .then(data=>{                             // Behandle data
    data.forEach(person=>{                  // For hver person
      console.log(person);                  // Vis informasjon i konsollet (nyttig som referanse, fjernes når en er ferdig med å kode)
      let p = document.createElement('P');  // Lag avsnitt
      // Legg inn en div med fornavn, etternavn og alder i avsnittet
      p.innerHTML = `<div>${person.name.first} ${person.name.last} (${person.age})`;
      if (person.isActive) {                // Dersom personen er aktiv
        // Legg til klassen 'active' på div taggen (Utseende styres alltid med CSS)
        p.querySelector('div').setAttribute('class', 'active');
      }
      // Legg til en div til med informasjon om hvor personen jobber og hva vedkommende har i formue
      p.innerHTML += `<div>Jobber for ${person.company} og har en formue på ${person.balance}.</div>`;
      section.appendChild(p);               // Legg til avsnittet i seksjonen
    });
  });
