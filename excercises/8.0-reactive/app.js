var Rx = require('rx');

// 1. na podwojne klikniecie przycisku (250ms) labelka ma sie zmieniac na napis "double click"
// hint: https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/buffer.md
// hint: https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/debounce.md
// 2. po sekundzie napisa ma znikac
// hint:  https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/delay.md


var button = document.querySelector('.button');
var label = document.querySelector('h4');
