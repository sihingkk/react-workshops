////////////////////////////////////////////////////////////////////////////////
// Excercise:
// - make these tabs work when you click them
////////////////////////////////////////////////////////////////////////////////
var React = require('react');
var assign = require('react/lib/Object.assign');

var DATA = [
    { name: 'Lisp', description: 'Code is data' },
    { name: 'Haskell', description: 'Data is code' },
    { name: 'Ruby', description: 'Strings are code' },
    { name: 'JavaScript', description: 'Undefined is not a function' },
];

var App = React.createClass({

  getInitialState () {
    return {
      activeTabIndex: 0
    };
  },

  handleTabClick (activeTabIndex) {
    this.setState({ activeTabIndex });
  },

  renderTabs () {
    return this.props.countries.map((country, index) => {
      var style = this.state.activeTabIndex === index ?
        styles.activeTab : styles.tab;
      var clickHandler = this.handleTabClick.bind(this, index);
      return (
        <div key={country.name} style={style} onClick={clickHandler}>
          {country.name}
        </div>
      );
    });
  },

  renderPanel () {
    var country = this.props.countries[this.state.activeTabIndex];
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
