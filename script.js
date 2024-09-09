// JavaScript for handling menu behavior
document.querySelectorAll('.menu-title').forEach(menuTitle => {
    menuTitle.addEventListener('click', function() {
        // Get the corresponding sub-menu
        const subMenu = this.nextElementSibling;

        // Toggle the active class on the clicked title
        this.classList.toggle('active');

        // Show/Hide the clicked sub-menu
        if (subMenu.style.display === 'block') {
            subMenu.style.display = 'none';
        } else {
            // Hide all other sub-menus before showing the clicked one
            document.querySelectorAll('.sub-menu').forEach(menu => {
                menu.style.display = 'none';
            });
            subMenu.style.display = 'block';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Select all the links from the side menu that need scrolling
    const menuLinks = document.querySelectorAll(".side-menu .sub-item");

    // Add a click event listener to each link
    menuLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default behavior of the link

            // Get the href attribute of the clicked link
            const sectionId = link.getAttribute("href").substring(1);

            // Get the target section element by its ID
            const targetSection = document.getElementById(sectionId);

            // Scroll to the target section smoothly
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to each sub-menu link
    document.getElementById('what-is-database').addEventListener('click', function() {
        showContent('content-what-is-database');
    });
    
    document.getElementById('types-of-databases').addEventListener('click', function() {
        showContent('content-types-of-databases');
    });

    // Add similar listeners for other sub-menu items

    // Function to show selected content and hide others
    function showContent(contentId) {
        // Hide all content sections
        var contentSections = document.querySelectorAll('#content-area > div');
        contentSections.forEach(function(section) {
            section.style.display = 'none';
        });

        // Show the selected content
        var selectedContent = document.getElementById(contentId);
        selectedContent.style.display = 'block';
    }
});

// Prevent the page from reloading when clicking sub-menu links
document.querySelectorAll('.sub-menu a').forEach(subMenuLink => {
    subMenuLink.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent page reload
        // Remove the active state from all links
        document.querySelectorAll('.sub-menu a').forEach(link => {
            link.classList.remove('active');
        });
        // Add active state to the clicked link
        this.classList.add('active');
    });
});

