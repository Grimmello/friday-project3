var integers = [];
$(function() {
  $("form#formNumber").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#inputNumber").val());
    for (var i = 1; i <= numberInput; i++) {
      integers.push(i);
    };
    console.log(integers);
  });
});
