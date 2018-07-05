// using the input to add todos
$("input[type  = 'text']").keypress(function(i) { 
    if(i.which === 13) {
        var toDoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-minus-square'></i></span> " + toDoText + "</li>");
    }
});

// this will turn the text grey and strike through it when clicked, or return it to normal if not.
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// click on X to remove todo
$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(250, function () {
        $(this).remove();
    });
    e.stopPropagation();
})


// toggle input field with icon click
$(".fa-plus").on("click", function() {
    $("input[type = 'text']").fadeToggle();
})