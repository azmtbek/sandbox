// closure counter

function counter() {
  var _counter = 0;
  return {
    add: function (increment) {
      _counter += increment;
    },
    incrementByOne: () => ++_counter,
    retrieve: function () {
      return "The counter: " + _counter;
    },
  };
}
var c = counter();
c.add(5);
c.incrementByOne();
c.add(9);

const x = c.retrieve();
console.log(x);
