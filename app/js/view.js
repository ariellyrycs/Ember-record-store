(function ($) {
    var hideAndShow = function (elementToShow) {
        $.when($('section').animate({
            'opacity': '0.0'
        },500)).done(function () {
            $('section').addClass('notToShow');
            $(elementToShow).removeClass('notToShow').animate({
                'opacity':'1'
            }, 500);
        });
    },
    mouseIn = function () {
        $(this).find('img').addClass('image-opacity').end()
            .find('.icon-trashcan, .icon-pencil').removeClass('hide-item');
    },
    mouseOut = function () {
        $(this).find('img').removeClass('image-opacity').end()
            .find('.icon-trashcan, .icon-pencil').addClass('hide-item');
    };
    $('.frame')
        .on('mouseover', '#artist-list li', mouseIn)
        .on('mouseout', '#artist-list li', mouseOut)
        .on('click', '.icon-trashcan, .icon-pencil, .input-edit', function (event) {
        event.stopPropagation();
    });
}(jQuery));