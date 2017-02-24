//  BACK END
var integers = [];

$(function() {
  $("form#formNumber").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#inputNumber").val());
    console.log(numberInput);

//  PUSH VALUES TO EMPTY ARRAY
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

//  FRONT END
//  SENDS VALUES TO <UL> ON HTML.
    integers.forEach(function(fill) {
      $("ul#outputList").append("<li>"+fill+"</li>");
    });

//  SHOWS OUTPUT PANEL
    $(".panel").show();
    $("#outputList").show();
  });

// WILL REFRESH PAGE
  $("form#clear").submit(function(event) {
    console.log("cleared");
  });
});
