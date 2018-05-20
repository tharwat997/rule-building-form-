$(document).ready(function(){

    var maxGroup = 10;
    //adds more containers
    $("body").on("click",".add-rule",function(){
        if($('body').find('#input-button-container').length < maxGroup){
            var containerHTML = '<div id="input-button-container">'+$("#input-button-container2").html()+'</div>';
            $(this).parents("#input-button-container").after(containerHTML);
        }else{
            alert('Maximum '+maxGroup+' rules are allowed.');
        }
    });

    //removes containers
    $("body").on("click",".remove",function(){
        $(this).parents("#input-button-container").remove();
    });


    $("body").on("click",".add",function(){
        if($('body').find('#dark-background').length < maxGroup){
            var mainCountainerHTML = '<div class="form-group container-fluid" id="dark-background">'+$("#dark-background2").html()+'</div>';
            $('body').find('#dark-background:last').after(mainCountainerHTML);
            $('.remove2').attr("display","block");
        }else{
            alert('Maximum '+maxGroup+' rules are allowed.');
        }
    });

    $("body").on("click",".remove2",function(){
        $(this).parents("#dark-background").remove();
    });

});
