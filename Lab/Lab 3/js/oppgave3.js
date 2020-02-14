let section = document.querySelector("section");

fetch('js/spitfire.json')
    .then(res => res.json())
    .then(data => {
        let img = document.createElement('IMG');
        img.src = "img/"+data.img;
        section.appendChild(img);

        let h2 = document.createElement('H2');
        h2.innerHTML = "Key Features";
        section.appendChild(h2);

        let ul = document.createElement('UL');
        data['Key Features'].forEach(feature =>{
            let li = document.createElement('LI');
            li.innerHTML = feature;
            section.appendChild(li);
        });
        section.appendChild(ul);

        let table = document.createElement('TABLE');
        Object.keys(data.Specs).forEach(key=>{
            let tr = document.createElement('TR');
            tr.innerHTML = `<td>${key}:</td><td>${data.Specs[key]}</td>`;
            table.appendChild(tr);
        });
        section.appendChild(table);
        table.setAttribute('class', 'aircraftTable');
    });