
$( document ).ready(function() {

  $.ajax({
    url: "getPagamenti.php",
    method: "GET",
    success: function(data){


      for (var i = 0; i < data.length; i++) {
        $("#price").append("<li>" + data[i].price + "</li>");
        $("#status").append("<li>" + data[i].status + "</li>");

        // console.log(data[i].status);
      }

      $("#status li").each(function(){
        var statusHtml = $(this).html();
        console.log(statusHtml);
        if (statusHtml === "accepted"){
          $(this).addClass("green");
        } else if (statusHtml === "rejected") {
          $(this).addClass("red");
        } else {
          $(this).addClass("grey");
        }

      });
    },
    error: function(error){
      console.log(error);
    },


  });


});
