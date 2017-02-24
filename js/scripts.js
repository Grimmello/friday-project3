var integers = [];
$(function() {
  $("form#formNumber").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#inputNumber").val());
    console.log(numberInput);
  });
});
