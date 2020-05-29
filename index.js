$(function(){
    $("input.help-button").click(function(){

      if($("#help-content").height() > 0){
        $("#help-content").css("height","0px");
        $("input.help-button").css("padding-bottom","60px");

        $("input.help-button").val("Possible Disturbances                                                                               +");


      } else{
        $("#help-content").css("height","500px");
        $("input.help-button").css("padding-bottom","560px");
        $("input.help-button").val("Possible Disturbances                                                                               -");
      }

    });
  });


