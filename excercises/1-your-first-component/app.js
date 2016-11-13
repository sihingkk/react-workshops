// Cwiczenie:

// Wyrenderuj Render `DATA` na stronie
// - tytul umiesc w tagu h1
// - wyswietl tylko jedzenie meksykanskie (hint: listy  maja metode "filter")
// - posortuj alfabetycznie wg nazwy
//   (uzyj `sort-by` https://github.com/staygrimm/sort-by#example)

var React = require('react');
var sortBy = require('sort-by');

var DATA = {
  title: 'Menu',
  items: [
    { id: 1, name: 'tacos', type: 'mexican' },
    { id: 2, name: 'burrito', type: 'mexican' },
    { id: 3, name: 'tostada', type: 'mexican' },
    { id: 4, name: 'hush puppies', type: 'southern' }
  ]
};

var Menu = React.createClass({
  render () {
    return null;
  }
});

React.render(<Menu/>, document.body, () => {
  require('./tests').run();
});

