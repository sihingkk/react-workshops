// zadanie 1: skonwertuj kod do reakta
// gdzie powinien zyć?

// zadanie 2: zaimplementuj odswierzanie
// zadanie 3: niechciany kontent przy ladowaniu blyska - zdecydowanie go nie chcemy! tak samo przy refersh
// niech znika od razu po kliknieciu na button
// hint: startWith i merge Twoimi przyjaciółmi
// zadanie 4: ile razy jest uruchomiony request?

var Rx = require('rx');
var jQuery = require('jquery')

var refreshButton = document.querySelector('.refresh');


var requestStream = Rx.Observable.just('https://api.github.com/users');

var responseStream = requestStream
  .flatMap(requestUrl =>
    Rx.Observable.fromPromise(jQuery.getJSON(requestUrl))
  );

function createSuggestionStream(responseStream) {
  return responseStream.map(listUser =>
    listUser[Math.floor(Math.random()*listUser.length)]
  );
}

var suggestion1Stream = createSuggestionStream(responseStream);
var suggestion2Stream = createSuggestionStream(responseStream);
var suggestion3Stream = createSuggestionStream(responseStream);

function renderSuggestion(userData, selector) {
  var element = document.querySelector(selector);
  var usernameEl = element.querySelector('.username');
  usernameEl.href = userData.html_url;
  usernameEl.textContent = userData.login;
  var imgEl = element.querySelector('img');
  imgEl.src = userData.avatar_url;
}

suggestion1Stream.subscribe(user => {
  renderSuggestion(user, '.suggestion1');
});

suggestion2Stream.subscribe(user => {
  renderSuggestion(user, '.suggestion2');
});

suggestion3Stream.subscribe(user => {
  renderSuggestion(user, '.suggestion3');
});