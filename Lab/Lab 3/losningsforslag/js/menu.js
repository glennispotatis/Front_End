fetch('js/menu.json')               // Henter fil med menydefinisjon
  .then(res=>res.json())            // Dekoder JSON data
  .then(data=>{                     // Generer menyen
    let menu = document.querySelector('nav ul');
    data.forEach((menuItem, idx)=>{ // For hvert menyelement
      let li = document.createElement('li');
      let active = '';              // Anta først at menyelementet ikke refererer til aktiv side
      if (idx==page) {              // Dersom menyelementet refererer til aktiv side
        active = ' class="active"'; // Bruk klassen "active" på menyelementet
        // Sett inn overskrift og tittel på siden
        document.querySelector('section h1').innerHTML = menuItem.subject;
        document.querySelector('head title').innerHTML = menuItem.subject;
      }
      // Legg inn link, linktekst og active attributt i linken
      li.innerHTML = `<a href=${menuItem.href}${active}>${menuItem.html}</a>`;
      menu.appendChild(li);         // Legg til menyelementet i menyen
    })
  });
