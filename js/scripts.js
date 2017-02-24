var integers = [];
$(function() {
  $("form#formNumber").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#inputNumber").val());
    for (var i = 1; i <= numberInput; i++) {
      if (i % 15 === 0) {
        integers.push("pingpong");
      } else if (i % 3 === 0) {
        integers.push("ping");
      } else if (i % 5 === 0) {
        integers.push("pong");
      } else {
        integers.push(i);
      }
    };
    console.log(integers);
  });
});
