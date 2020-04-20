class Links {
  constructor (selector, links) {
    this._linkList = document.querySelector(selector);
    this._links = links;
  }

  showLinks() {
    this._linkList.innerHTML = '';
    this._links.forEach(link=>{
      const li = document.createElement('LI');
      li.innerHTML = `<div>${link.title}</div><div>${link.url}</div><div>${link.description}</div>`;
      this._linkList.appendChild(li);
    })
  }

  addLink(form) {
    const link = new Link(form.url.value,
                          title.value,
                          descr.value);
    this._links.push(link);
    this.showLinks();
  }
}
