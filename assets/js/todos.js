// Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Event bubbling
// Deleting TODOs
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
    // Check for enter
    if(event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        console.log(todoText);
    }
});

// Hide or unhide input
$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle();
});