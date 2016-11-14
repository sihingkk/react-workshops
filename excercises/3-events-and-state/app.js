// Cwiczenie:
// - spraw aby po kliknieciu na tab zmieniala sie zawartosc i podswietlenie
var React = require('react');
var assign = require('react/lib/Object.assign');

var DATA = [
  { name: 'Lisp', description: 'Code is data' },
  { name: 'Haskell', description: 'Data is code' },
  { name: 'Ruby', description: 'Strings are code' },
  { name: 'JavaScript', description: 'Undefined is not a function' },
];

var App = React.createClass({

  renderTabs () {
    return this.props.countries.map((country, index) => {
      return (
        <div style={index === 0 ? styles.activeTab : styles.tab}>
          {country.name}
        </div>
      );
    });
  },

  renderPanel () {
    var country = this.props.countries[0];
    return (
      <div>
        <p>{country.description}</p>
      </div>
    );
  },

  render () {
    return (
      <div style={styles.app}>
        <div style={styles.tabs}>
          {this.renderTabs()}
        </div>
        <div style={styles.tabPanels}>
          {this.renderPanel()}
        </div>
      </div>
    );

  }
});

var styles = {};

styles.tab = {
  display: 'inline-block',
  padding: 10,
  margin: 10,
  borderBottom: '4px solid',
  borderBottomColor: '#ccc',
  cursor: 'pointer'
};

styles.activeTab = assign({}, styles.tab, {
  borderBottomColor: '#000'
});

styles.tabPanels = {
  padding: 10
};

React.render(<App countries={DATA}/>, document.body);

