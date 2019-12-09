$(document).ready(function(){
    // Back to top function
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    // Dark mode function
    var darkMode = false;
    $('#dark-mode').click(function () {
        darkMode = !darkMode;

        if(darkMode) {
            $(':root').css('--c-primary', '#343434');
            $(':root').css('--c-secondary', '#E1E1E1');
        } else if(!darkMode) {
            $(':root').css('--c-primary', '#E1E1E1');
            $(':root').css('--c-secondary', '#343434');
        }

        return false;
    });

    // Hovering website
    $('#websites').mouseover(function () {
        $('#websites').animate({
            width: '100%',
            backgroundColor: '#343434'
        }, 500);
        return false;
    });

    $('#websites').mouseleave(function () {
        $('#websites').animate({
            width: '480px',
            backgroundColor: '#E1E1E1'
        }, 500);
        return false;
    });

    // Hovering games
    $('#games').mouseover(function () {
        $('#games').animate({
            width: '100%',
        }, 500);
        return false;
    });

    $('#games').mouseleave(function () {
        $('#games').animate({
            width: '480px'
        }, 500);
        return false;
    });

    // Hovering website
    $('#other').mouseover(function () {
        $('#other').animate({
            width: '100%',
        }, 500);
        return false;
    });

    $('#other').mouseleave(function () {
        $('#other').animate({
            width: '480px'
        }, 500);
        return false;
    });

});