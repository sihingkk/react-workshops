// Cwiczenie:

// zmien zakladki tak zeby byly "czystym komponentem" w taki sposob zeby
// poszczegolne taby nie zarzadzaly swoim stanem, zamiast tego dodaj
// wlasnosc zeby powiedziec ktory tab wyswietlic i przekaz informacje z
// rodzica do dziecka podczas renderowania nowej zakladki

var React = require('react');
var styles = require('./styles');
var data = require('./data');


var Tabs = React.createClass({

  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  getInitialState () {
    return {
      activeTabIndex: 0
    };
  },

  handleTabClick (activeTabIndex) {
    this.setState({ activeTabIndex });
  },

  renderTabs () {
    return this.props.data.map((tab, index) => {
      var style = this.state.activeTabIndex === index ?
        styles.activeTab : styles.tab;
      var clickHandler = this.handleTabClick.bind(this, index);
      return (
        <div key={tab.name} style={style} onClick={clickHandler}>
          {tab.name}
        </div>
      );
    });
  },

  renderPanel () {
    var tab = this.props.data[this.state.activeTabIndex];
    return (
      <div>
        <p>{tab.description}</p>
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

var App = React.createClass({
  render () {
    return (
      <div>
        <h1>Props v. State</h1>
        <Tabs data={this.props.tabs}/>
      </div>
    );
  }
});

React.render(<App tabs={data}/>, document.body);
