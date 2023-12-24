$(document).ready(function(){
    $(".filter").on("click", function(event){
        var buttonPressed = $(this).html();

        if(buttonPressed === "Python"){
            $(".webdevelopment").hide()
            $(".blog").hide()
            $(".python").show()
        }
        else if(buttonPressed === "Web Development"){
            $(".python").hide()
            $(".blog").hide()
            $(".webdevelopment").show()
        }
        else if(buttonPressed === "Blog"){
            $(".webdevelopment").hide()
            $(".python").hide()
            $(".blog").show()
        }
        else if(buttonPressed === "All"){
            $(".webdevelopment").show()
            $(".python").show()
            $(".blog").show()
        }
    })
    $(".card").hover(function(){
        $(this).animate({'fill': '#000000'}, 'slow');
    })
})