function receivesAFunction(callback) {
  callback();
}
receivesAFunction(function() {
  console.log('Im a function!');
});


function returnsANamedFunction() {
  return function namedFunction() {
    return "I'm a named function!"
  };
}


function returnsAnAnonymousFunction() {
  return function() {
    return "I'm an anonymous function!"
  }
}
