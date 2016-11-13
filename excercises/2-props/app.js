// Cwiczenie:
// https://facebook.github.io/react/docs/typechecking-with-proptypes.html
//
// - Nie uzywaj zmiennej globalen `USERS` bezposrednio w komopnencie app - przenies to props
// - Zwaliduj rozmiar (`size`) Gravatar'a  `size`, zrob tak zeby
//   byl liczba albo stringiem konwertowalnym do liczby,
//   np. `size="foo"` powiniene ostrzegac (hint: parseInt)
// - Co jezeli w emailType ktos uzyje innej nazwy props niz email? 
//   Zmien nazwa prop z userMail na logingId. wyslij zla wartosc,
//   a nastepnie napraw kod zeby ostrzerzenie bylo i mialo sens
// - ile razy `getDefaultProps` jest zawolane podczas zaladowania strony?
// - poeksperymentuj z roznymi propTypes zobacz jakie mozesz dostac ostrzezenia

var React = require('react');
var md5 = require('MD5');
var validateEmail = require('./validateEmail');
var warning = require('react/lib/warning');

var GRAVATAR_URL = "http://gravatar.com/avatar";

var USERS = [
  { id: 1, name: 'Krzysztof Kaczmarek', email: 'krzysztofkaczmarek@wingtsun.pl' },
  { id: 2, name: 'Rich Hickey', email: 'rich@cognitect.com' }
];

var emailType = (props, propName, componentName) => {
  warning(
    validateEmail(props.email),
    `Invalid email '${props.email}' sent to 'Gravatar'. Check the render method of '${componentName}'.`
  );
};

var Gravatar = React.createClass({
  propTypes: {
    email: emailType
  },

  getDefaultProps () {
    return {
      size: 16
    };
  },

  render () {
    var { email, size } = this.props;
    var hash = md5(email);
    var url = `${GRAVATAR_URL}/${hash}?s=${size*2}`;
    return <img src={url} width={size} />;
  }
});

var App = React.createClass({
  render () {
    var users = USERS.map((user) => {
      return (
        <li key={user.id}>
          <Gravatar email={user.email} size={36} /> {user.name}
        </li>
      );
    });
    return (
      <div>
        <h1>Users</h1>
        <ul>{users}</ul>
      </div>
    );
  }
});

React.render(<App />, document.body);

//require('./tests').run(Gravatar, emailType);

