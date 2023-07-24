$(document).ready(function () {
    // category carousel
    $(".categoryCarousel").owlCarousel(
        {
            loop: true,
            margin: 20,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2
                },
                991: {
                    items: 4
                }
            }
        }
    );

    $(".productCarousel").owlCarousel(
        {
            loop: true,
            margin: 20,
            nav: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2
                },
                991: {
                    items: 3
                }
            }
        }
    );
});