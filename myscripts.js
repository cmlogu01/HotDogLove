$(function(){
    $('input').blur(function(){
        $('#container').html('<img alt="" src="'+$(this).val()+'">');
    });

        $('#star-rating').rating(); // Call the rating plugin
})

            // Start when document ready

