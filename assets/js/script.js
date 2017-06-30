window.width = jQuery(window).width(), jQuery("#preloader").length > 0 && jQuery(window).on('load', function () {
    jQuery("#preloader").fadeOut(1e3, function () {
        jQuery("#preloader").remove()
    })
});