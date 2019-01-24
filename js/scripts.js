$(document).ready(function() {
  $("#formOne").submit(function(event){
    var listsArr = [];
    for (var i = 1; i <= 5; i++){
      listsArr.push($("#item"+i).val());
    }
    listsArr = listsArr.map(function(grow){
    return grow.toUpperCase();
    })
    listsArr = listsArr.sort();
    for (var i = 0; i < listsArr.length; i++) {
      $("ul").append("<li>" +listsArr[i] +"</li>");
    }
    $(".form-group").toggle();
    event.preventDefault();
    console.log(listsArr);
  });
});
