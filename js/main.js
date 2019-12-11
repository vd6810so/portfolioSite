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
            $('#websites, #games, #other').animate({
                color: '#E1E1E1',
                backgroundColor: '#343434'
            }, 300);
        } else if(!darkMode) {
            $(':root').css('--c-primary', '#E1E1E1');
            $(':root').css('--c-secondary', '#343434');
            $('#websites, #games, #other').animate({
                color: '#343434',
                backgroundColor: '#E1E1E1'
            }, 300);
        }

        return false;
    });

    // Hovering website
    $('#websites').mouseover(function () {
        if(!darkMode) {
            $('#websites').animate({
                width: '100%',
                backgroundColor: '#343434'
            }, 300);
        } else if(darkMode) {
            $('#websites').animate({
                width: '100%',
                backgroundColor: '#E1E1E1'
            }, 300);
        }

        $('.glass#websites').css({
            'filter': 'none'
        });
        $('span#websites').fadeOut();
        return false;
    });

    $('#websites').mouseleave(function () {
        if(!darkMode) {
            $('#websites').animate({
                width: '480px',
                backgroundColor: '#E1E1E1'
            }, 300);
        } else if(darkMode) {
            $('#websites').animate({
                width: '480px',
                backgroundColor: '#343434'
            }, 300);
        }

        $('.glass#websites').css({
            'filter': 'blur(2px)'
        });
        $('span#websites').fadeIn();
        return false;
    });

    // Hovering games
    $('#games').mouseover(function () {
        if(!darkMode) {
            $('#games').animate({
                width: '100%',
                backgroundColor: '#343434'
            }, 300);
        } else if(darkMode) {
            $('#games').animate({
                width: '100%',
                backgroundColor: '#E1E1E1'
            }, 300);
        }

        $('.glass#games').css({
            'filter': 'none'
        });
        $('span#games').fadeOut();
        return false;
    });

    $('#games').mouseleave(function () {
        if(!darkMode) {
            $('#games').animate({
                width: '480px',
                backgroundColor: '#E1E1E1'
            }, 300);
        } else if(darkMode) {
            $('#games').animate({
                width: '480px',
                backgroundColor: '#343434'
            }, 300);
        }

        $('.glass#games').css({
            'filter': 'blur(2px)'
        });
        $('span#games').fadeIn();
        return false;
    });

    // Hovering other
    $('#other').mouseover(function () {
        if(!darkMode) {
            $('#other').animate({
                width: '100%',
                backgroundColor: '#343434'
            }, 300);
        } else if(darkMode) {
            $('#other').animate({
                width: '100%',
                backgroundColor: '#E1E1E1'
            }, 300);
        }

        $('.glass#other').css({
            'filter': 'none'
        });
        $('span#other').fadeOut();
        return false;
    });

    $('#other').mouseleave(function () {
        if(!darkMode) {
            $('#other').animate({
                width: '480px',
                backgroundColor: '#E1E1E1'
            }, 300);
        } else if(darkMode) {
            $('#other').animate({
                width: '480px',
                backgroundColor: '#343434'
            }, 300);
        }

        $('.glass#other').css({
            'filter': 'blur(2px)'
        });
        $('span#other').fadeIn();
        return false;
    });
});