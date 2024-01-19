document.addEventListener("DOMContentLoaded", function () {
    // Get the card container
    var cardContainer = document.querySelector(".phone-card-container");

    // Add click event listener to the card container
    cardContainer.addEventListener("click", function (event) {
        // Check if a card was clicked
        if (event.target.classList.contains("phone-card")) {
            // Get the phone name from the clicked card
            var phoneName = event.target.querySelector("h3").textContent;

            // Load details based on the phone name
            loadPhoneDetails(phoneName);
        }
    });

    // Function to load phone details
    function loadPhoneDetails(phoneName) {
        // Fetch details from a server or use predefined data
        getPhoneDetails(phoneName)
            .then(function (details) {
                // Display details in the details container
                displayDetails(details);
            })
            .catch(function (error) {
                console.error("Error fetching details:", error);
            });
    }

    // Function to fetch phone details (replace this with your data fetching logic)
    function getPhoneDetails(phoneName) {
        // Example: Replace this with your data or fetch details from a server
        // Simulating an asynchronous request using a Promise
        return new Promise(function (resolve, reject) {
            var details = {
                name: phoneName,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                // Add more details as needed
            };

            // Simulate a delay to simulate an asynchronous request
            setTimeout(function () {
                resolve(details);
            }, 500);
        });
    }

    // Function to display details in the details container
    function displayDetails(details) {
        // You can customize this part to update your HTML with the details
        var detailsContainer = document.getElementById("phoneDetailsContainer");

        // Create HTML for details
        var html = `
            <h2>${details.name}</h2>
            <p>${details.description}</p>
            <!-- Add more details as needed -->
        `;

        // Display details in the container
        detailsContainer.innerHTML = html;
    }
});
