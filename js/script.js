// Review slider Script
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            },
              1300: {
                items: 3
            }
        }
    });
});


// MODAL
$(document).ready(function(){
    $('.open-modal').click(function(){
        $('#myModal').removeClass('hidden');
    });
    
    // Close Modal
    $('.close').click(function(){
        $('#myModal').addClass('hidden');
    });
    
    // Close Modal on outside click
    $(window).click(function(event) {
        if (event.target.id === "myModal") {
            $('#myModal').addClass('hidden');
        }
    });
});



// Show and Hide the menu of mobile size
function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Check if the menu is currently closed
    if (mobileMenu.classList.contains('closeMenu')) {
        mobileMenu.classList.remove('closeMenu'); // Remove closeMenu class
        mobileMenu.classList.add('openMenu'); // Add openMenu class
    } else {
        mobileMenu.classList.remove('openMenu'); // Remove open class
        mobileMenu.classList.add('closeMenu'); // Add closeMenu class
    }
}

