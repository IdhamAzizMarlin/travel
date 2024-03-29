$(window).on("load", function () {
    var i = $(".projects-wrapper"),
        e = $("#filter");
    i.isotope({
        filter: "*",
        layoutMode: "masonry",
        animationOptions: {
            duration: 750,
            easing: "linear"
        }
    }), e.find("a").click(function () {
        var a = $(this).attr("data-filter");
        return e.find("a").removeClass("active"), $(this).addClass("active"), i.isotope({
            filter: a,
            animationOptions: {
                animationDuration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    })
}), $(".gallery-popup").magnificPopup({
    type: "image",
    closeOnContentClick: !0,
    mainClass: "mfp-fade",
    gallery: {
        enabled: !0,
        navigateByImgClick: !0,
        preload: [0, 1]
    }
});