class Menu {
  constructor (menuSelector, sectionSelector, jsonFile) {
    fetch(jsonFile)                           // Hent menyen fra jsonFile
      .then(res=>res.json())                        // Gjør om til JSON
      .then(data=>{
        let menu = document.querySelector(menuSelector);// Hent referanse til menyen
        data.forEach((menuItem, idx)=>{             // Gå gjennom alle menyelemtene i JSON dataene
          let li = document.createElement('li');    // Lag nytt menyelement
          // Legg til linken som innerHTML i menyelementet
          li.innerHTML = `<a data-scriptsrc="${menuItem.scriptsrc}" data-id="${menuItem.id}" href="">${menuItem.menuText}</a>`;
          menu.appendChild(li);                     // Legg til menyelementet i menyen
        });
        document.querySelectorAll(`${menuSelector} a`).forEach(a=>{
          a.addEventListener('click', e=>{
            e.preventDefault();
            if (e.target.dataset.scriptsrc!="") {
              if (document.querySelector(`[src="${e.target.dataset.scriptsrc}"]`)==null) {
                const script = document.createElement('SCRIPT');
                script.src = e.target.dataset.scriptsrc;
                document.querySelector('head').appendChild(script);
              } // Load script if not loaded
            } // Load script if exists
            document.querySelectorAll(`${menuSelector} a`).forEach(a=>{
              if (a==e.target) {
                a.classList.add('active');
              } else {
                a.classList.remove('active');
              }
            }); // Set active link item
            document.querySelectorAll(sectionSelector).forEach(section=>{
              if (section.id == e.target.dataset.id) {
                section.classList.add('active');
              } else {
                section.classList.remove('active');
              }
            }); // Show correct section
          })
        })
        document.querySelector(`${menuSelector} a`).click();
      });
  }
}
