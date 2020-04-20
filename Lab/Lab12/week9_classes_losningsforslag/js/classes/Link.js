class Link {
  constructor (url, title, description) {
    this._url = url;
    this.title = title;
    this.description = description;
  }

  set url (url) {
    this._url = url;
  }

  set title (title) {
    this._title = title;
  }

  set description (description) {
    this._description = description;
  }

  get url () {
    return this._url;
  }

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }
}
