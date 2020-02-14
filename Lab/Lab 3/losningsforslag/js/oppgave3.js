let section = document.querySelector('section');

fetch('js/spitfire.json')                   // Hent data fra spitfire.json
  .then(res => res.json())                      // Dekod JSON data
  .then(data => {
    let img = document.createElement('IMG');  // Lag bilde tag
    img.src = "img/" + data.img;                 // Set src i bilde taggen
    section.appendChild(img);                 // Legg inn bildet under overskriften

    let h2 = document.createElement('H2');    // Lag overskrift
    h2.innerHTML = 'Key Features';
    section.appendChild(h2);                  // Legg inn overskrift

    let ul = document.createElement('UL');    // Lag en unummerert liste
    data['Key Features'].forEach(feature => {   // Hent ut hver egenskap
      let li = document.createElement('LI');  // Opprett listeelement
      li.innerHTML = feature;                 // Sett egenskap som tekst i listeelement
      ul.appendChild(li);                     // Legg til listeelement i liste
    });
    section.appendChild(ul);                  // Legg til liste under bildet

    let table = document.createElement('TABLE');  // Lag en tabell
    Object.keys(data.Specs).forEach(key => {    // Gå gjennom alle egenskaper i objektet
      let tr = document.createElement('TR');  // Lag en tabellrad
      // Sett inn td med egenskap og egenskapens verdi
      tr.innerHTML = `<td>${key}:</td><td>${data.Specs[key]}</td>`;
      table.appendChild(tr);                  // Legg til rad i tabellen
    });
    section.appendChild(table);               // Legg til tabellen under listen
    // Legg til css klasse "aircraftTable"
    table.setAttribute('class', 'aircraftTable');
  });
