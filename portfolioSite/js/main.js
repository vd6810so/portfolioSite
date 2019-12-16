$(document).ready(function(){

    // Back to top function
    $('#back-to-top').click(function () {
        // Scrolling to top
        $('body,html').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    // Dark mode function
    var darkMode = false;
    $('#dark-mode').click(function () {
        darkMode = !darkMode;

        // Changing root color values
        if(darkMode) {
            $(':root').css('--c-primary', '#343434');
            $(':root').css('--c-secondary', '#E1E1E1');
        } else if(!darkMode) {
            $(':root').css('--c-primary', '#E1E1E1');
            $(':root').css('--c-secondary', '#343434');
        }

        return false;
    });

    // Mouse over websites
    $('.box#websites').on('mouseenter', function() {
        hideAll();
        
        // Removing blur
        $('#websiteone').css({
            'filter': 'none',
        });
        // Showing other images and hiding text
        $('.websitetext').hide();
        $('#websitetwo').fadeIn(800);

        // Changing width and color
        if(!darkMode) {
            $('.box#websites').animate({
                width: '99%',
                backgroundColor: '#343434'
            }, 300);
        } else if(darkMode) {
            $('.box#websites').animate({
                width: '99%',
                backgroundColor: '#E1E1E1'
            }, 300);
        }

        return false;

    }).on('mouseleave', function() {
        hideAll();
        // Adding blur
        $('#websiteone').css({
            'filter': 'blur(2px)'
        });
        // Hiding other images and showing text
        $('.websitetext').fadeIn(800);
        $('#websitetwo').hide();

        // Changing width and color
        if(!darkMode) {
            $('.box#websites').animate({
                width: '480px',
                backgroundColor: '#E1E1E1'
            }, 300);
        } else if(darkMode) {
            $('.box#websites').animate({
                width: '480px',
                backgroundColor: '#343434'
            }, 300);
        }

        return false;

    });

    // Mouse over games
    $('.box#games').on('mouseenter', function() {
        hideAll();

        // Removing blur
        $('.glass#gamesone').css({
            'filter': 'none',
        });
        // Showing other images and hiding text
        $('.gamestext').hide();
        $('.glass#gamestwo').fadeIn(800);

        // Changing width and color
        if(!darkMode) {
            $('.box#games').animate({
                width: '99%',
                backgroundColor: '#343434'
            }, 300);
        } else if(darkMode) {
            $('.box#games').animate({
                width: '99%',
                backgroundColor: '#E1E1E1'
            }, 300);
        }

        return false;

    }).on('mouseleave', function() {
        hideAll();

         // Adding blur
         $('.glass#gamesone').css({
            'filter': 'blur(2px)'
        });
        // Hiding other images and showing text
        $('.gamestext').fadeIn(800);
        $('.glass#gamestwo').hide();

        // Changing width and color
        if(!darkMode) {
            $('.box#games').animate({
                width: '480px',
                backgroundColor: '#E1E1E1'
            }, 300);
        } else if(darkMode) {
            $('.box#games').animate({
                width: '480px',
                backgroundColor: '#343434'
            }, 300);
        }

        return false;

    });

    // Mouse over other
    $('.box#other').on('mouseenter', function() {
        hideAll();

        // Removing blur
        $('.glass#otherone').css({
            'filter': 'none',
        });
        // Showing other images and hiding text
        $('.othertext').hide();
        $('.glass#othertwo').fadeIn(800);
        $('.glass#otherthree').fadeIn(800);

        // Changing width and color
        if(!darkMode) {
            $('.box#other').animate({
                width: '99%',
                backgroundColor: '#343434'
            }, 300);
        } else if(darkMode) {
            $('.box#other').animate({
                width: '99%',
                backgroundColor: '#E1E1E1'
            }, 300);
        }

        return false;

    }).on('mouseleave', function() {
        hideAll();

        // Adding blur
        $('.glass#otherone').css({
            'filter': 'blur(2px)'
        });
        // Hiding other images and showing text
        $('.othertext').fadeIn(800);
        $('.glass#othertwo').hide();
        $('.glass#otherthree').hide();

        // Changing width and color
        if(!darkMode) {
            $('.box#other').animate({
                width: '480px',
                backgroundColor: '#E1E1E1'
            }, 300);
        } else if(darkMode) {
            $('.box#other').animate({
                width: '480px',
                backgroundColor: '#343434'
            }, 300);
        }

        return false;

    });

    // Used to ensure all images are hidden after mouse leave
    function hideAll() {
        $('#websitetwo').hide();
        $('.glass#gamestwo').hide();
        $('.glass#othertwo').hide();
        $('.glass#otherthree').hide();
    }
});