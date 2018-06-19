const Film = require('../film');
const assert = require('assert');

describe('Film', function () {
  let film;

  beforeEach(function () {
    film = new Film({
      title: "Titanic",
      genres: ["Drama"]
    });
  });

  it('should have title titanic', function () {
    assert.equal(film.title, "Titanic");
  });

})