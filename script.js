// Check if the page was redirected from preview.html
const urlParams = new URLSearchParams(window.location.search);
const fromPreview = urlParams.get('fromPreview');

if (fromPreview !== 'true') {
    window.location.href = "./preview/preview.html"; // Redirect to preview.html
} else {
    window.history.replaceState({}, document.title, window.location.pathname);
}

// Rest of your JavaScript code
document.addEventListener("DOMContentLoaded", function() {
    const heroText = document.querySelector(".hero-text");
    const cornerImages = document.querySelectorAll(".corner-image");
    const imageContainers = document.querySelectorAll(".image-container");

    // Original image paths
    const originalImages = [
        "./public/two.png", // Top-left
        "./public/one.png", // Top-right
        "./public/three.png", // Bottom-left
        "./public/four.jpg", // Bottom-right
    ];

    // Vector box images to replace the non-hovered images
    const vectorBoxImages = [
        "./public/vector.png", // Replace with your vector box image paths
        "./public/vector.png",
        "./public/vector.png",
        "./public/vector.png",
    ];

    // Radius for cursor movement (in pixels)
    const radius = 100;

    // Function to check if the screen size is 1024px or above
    function isLargeScreen() {
        return window.matchMedia("(min-width: 1024px)").matches;
    }

    // Function to check if the screen size is less than 426px
    function isSmallScreen() {
        return window.matchMedia("(max-width: 425px)").matches;
    }

    // Function to apply hover/click effect
    function applyHoverEffect(image, index) {
        // Bring the hovered/clicked image above the text
        gsap.to(image, { zIndex: 1000, duration: 0.5 });

        // Add vector effect to text
        heroText.classList.add("vector-effect");

        // Replace the other three images with vector boxes
        cornerImages.forEach((img, i) => {
            if (img !== image) {
                img.src = vectorBoxImages[i]; // Replace with vector box image
                gsap.to(img, { opacity: 1, duration: 0.5 }); // Ensure they are visible
            }
        });
    }

    // Function to reset hover/click effect
    function resetHoverEffect(image) {
        // Reset the hovered/clicked image's z-index
        gsap.to(image, { zIndex: 1, duration: 0.5 });

        // Remove vector effect from text
        heroText.classList.remove("vector-effect");

        // Restore all images to their original state
        cornerImages.forEach((img, i) => {
            img.src = originalImages[i]; // Restore original image
        });
    }

    // Apply hover and click effect only for large screens
    if (isLargeScreen()) {
        cornerImages.forEach((image, index) => {
            // Hover effect
            image.addEventListener("mouseenter", () => {
                applyHoverEffect(image, index);
            });

            image.addEventListener("mouseleave", () => {
                resetHoverEffect(image);
            });
        });

        // Add click event listeners to the image containers
        imageContainers.forEach((container, index) => {
            const image = container.querySelector(".corner-image");

            // Click effect
            container.addEventListener("click", () => {
                applyHoverEffect(image, index);
            });
        });

        // Add cursor movement logic for image and hover text
        imageContainers.forEach((container) => {
            const image = container.querySelector(".corner-image");
            const hoverText = container.querySelector(".hover-text");

            // Store original positions
            const originalPosition = {
                x: parseFloat(getComputedStyle(image).left),
                y: parseFloat(getComputedStyle(image).top),
            };

            // Mouse move event
            container.addEventListener("mousemove", (e) => {
                const rect = container.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                // Calculate mouse position relative to the center of the image
                const mouseX = e.clientX - centerX;
                const mouseY = e.clientY - centerY;

                // Calculate distance from the center
                const distance = Math.sqrt(mouseX * mouseX + mouseY * mouseY);

                // Limit movement within the radius
                const scale = Math.min(distance, radius) / distance;

                // Apply movement to the image and hover text
                gsap.to(image, {
                    x: mouseX * scale,
                    y: mouseY * scale,
                    duration: 0.5,
                    ease: "power2.out",
                });

                gsap.to(hoverText, {
                    x: mouseX * scale,
                    y: mouseY * scale,
                    duration: 0.5,
                    ease: "power2.out",
                });
            });

            // Mouse leave event
            container.addEventListener("mouseleave", () => {
                // Return image and hover text to their original positions
                gsap.to(image, {
                    x: 0,
                    y: 0,
                    duration: 2,
                    ease: "power2.out",
                });

                gsap.to(hoverText, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                });
            });
        });
    }

    // Check if the screen width is between 426px and 800px
    if (window.innerWidth <= 800 && window.innerWidth >= 426) {
        // Select all image containers
        const topLeft = document.querySelector(".top-left");
        const topRight = document.querySelector(".top-right");
        const bottomLeft = document.querySelector(".bottom-left");
        const bottomRight = document.querySelector(".bottom-right");

        // Define target positions (x and y coordinates)
        const moveDistance = 50; // Distance to move in pixels
        const animationDuration = 1; // Animation duration in seconds
        const resetDelay = 2000; // Delay before resetting (in milliseconds)

        // Function to move and reset an image
        function moveAndReset(container, targetX, targetY) {
            // Move the image to the target position
            gsap.to(container, {
                x: targetX,
                y: targetY,
                duration: animationDuration,
                ease: "power6.out",
                onComplete: () => {
                    // Reset the image to its original position after a delay
                    setTimeout(() => {
                        gsap.to(container, {
                            x: 0,
                            y: 0,
                            duration: animationDuration,
                            ease: "power2.out",
                        });
                    }, resetDelay);
                },
            });
        }

        // Add click event listeners to each image container
        topLeft.addEventListener("click", function() {
            moveAndReset(topLeft, -moveDistance, -moveDistance); // Move top-left
        });

        topRight.addEventListener("click", function() {
            moveAndReset(topRight, moveDistance, -moveDistance); // Move top-right
        });

        bottomLeft.addEventListener("click", function() {
            moveAndReset(bottomLeft, -moveDistance, moveDistance); // Move bottom-left
        });

        bottomRight.addEventListener("click", function() {
            moveAndReset(bottomRight, moveDistance, moveDistance); // Move bottom-right
        });
    }

    // Disable all animations for screens less than 426px
    if (isSmallScreen()) {
        // Remove all event listeners and animations
        cornerImages.forEach((image) => {
            image.style.pointerEvents = "none"; // Disable interactions
        });

        // Reset all images to their original state
        cornerImages.forEach((img, i) => {
            img.src = originalImages[i]; // Restore original image
        });

        // Remove vector effect from text
        heroText.classList.remove("vector-effect");
    }
});