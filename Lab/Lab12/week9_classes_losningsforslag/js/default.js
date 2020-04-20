const link = new Link('http://folk.ntnu.no/oeivindk/imt1441', 'Spennende greier for IMT1441', 'Flott liten beskrivelse her altså.');
console.log (link);
console.log (link.url);
link.description += " Enda mer om denne flotte linken :-).";
console.log (link.description);

const links = [];
links.push (link);

const link1 = new Link('https://www.ntnu.no/studier/emner/IMT1441#tab=omEmnet', 'IMT1441', 'Nettside hos NTNU om det flotte emnet IMT1441');
links.push (link1);

const linkOps = new Links('ul.linkliste', links);
linkOps.showLinks();

//showLinks();

document.querySelector('button').addEventListener('click', e=>{
  // Oppgave 1
  // const link = new Link(e.target.form.url.value,
  //                       e.target.form.title.value,
  //                       e.target.form.descr.value);
  // links.push(link);
  // linkOps.showLinks();
  linkOps.addLink(e.target.form);
});

// Oppgave 1
// function showLinks() {
//   const linkList = document.querySelector('ul.linkliste');
//   linkList.innerHTML = '';
//   links.forEach(link=>{
//     const li = document.createElement('LI');
//     li.innerHTML = `<div>${link.title}</div><div>${link.url}</div><div>${link.description}</div>`;
//     linkList.appendChild(li);
//   })
// }
