let ul = document.querySelector('UL');    // Lag en unummerert liste

fetch('js/NTNU_studies.json')             // Hent oversikt over alle studier
  .then(res=>res.json())                  // Dekod JSON data
  .then(data=>{                           // Generer innhold på siden
    data.forEach(studie=>{                // For hvert studie fra filen
      console.log(studie);                // Vis studiet i konsollet
      // Dersom samlingen locations inneholder elementer
      // OG det første elementet i samlingen har en egenskap "campusCode" som er "GJOVIK"
      if (studie.locations.length>0&&studie.locations[0].campusCode=='GJOVIK') {
        let li = document.createElement('LI');
        let a = document.createElement('A');
        a.innerHTML = studie.name;        // Legg til link tekst og link
        a.href = 'https://www.ntnu.no/'+studie.url;
        li.appendChild(a);                // Legg linken i listeelementet
        let span = document.createElement('SPAN');
        // Legg inn informasjon i span taggen
        span.innerHTML = `${studie.studyLevelName}, ${studie.locationspretty}`;
        li.appendChild(span);             // Legg til span taggen i listeelementet
        ul.appendChild(li);               // Legg til listeelementet i listen
      }
    });
    // Legg til listen i seksjonen
    document.querySelector('section').appendChild(ul);
  });
ul.setAttribute('class', 'studies');      // Legg til CSS klassen "studies" på listen
