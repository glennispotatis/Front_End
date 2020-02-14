let ul = document.createElement('UL');

fetch('js/NTNU_studies.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(studie=>{
            //console.log(studie);

            if(studie.locations.length>0 && studie.locations[0].campusCode == 'GJOVIK') {
                let li = document.createElement('LI');
                let a = document.createElement('A');
                a.innerHTML = studie.name;
                a.href = 'https://www.ntnu.no/' + studie.url;
                li.appendChild(a);

                let span = document.createElement('SPAN');
                span.innerHTML = `${studie.studyLevelName}, ${studie.locationspretty}`;
                li.appendChild(span);
                ul.appendChild(li);
            }
        });
        document.querySelector('section').appendChild(ul);
    });
ul.setAttribute('class', 'studies');