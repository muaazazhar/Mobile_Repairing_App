document.addEventListener("DOMContentLoaded", function () {
  // Get the card container
  var cardContainer = document.querySelector(".phone-card-container");

  // Add click event listener to the card container
  cardContainer?.addEventListener("click", function (event) {
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
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
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

/**############################################################# */
/** Code for Rendering details on the page of every phone */

// Get the phone name from the URL
const params = new URLSearchParams(window.location.search);
const phoneName = params.get("phone");
const name_container = document.querySelector(".phone_name");
if (name_container) name_container.innerHTML = phoneName;

const renderDetails = (name, data) => {
  const image_container = document.querySelector(".phone-img-cont");
  const image = document.createElement("img");
  image.setAttribute("src", data.img + name.replace(/\s/g, "") + ".png");
  image.setAttribute("alt", name);
  image_container.appendChild(image);
  const first_div = document.querySelector(".breakages_list");
  const services_div = document.querySelector(".services_list");
  const ul = document.createElement("ul");
  ul.setAttribute("class", "list-unstyled");
  const ul2 = document.createElement("ul");
  ul2.setAttribute("class", "list-unstyled");
  delete data.img;

  Object.entries(data).forEach(([key, val]) => {
    if (key === "Services") {
      Object.entries(val).forEach(([key, val]) => {
        const li = createList(key, val);
        ul2.appendChild(li);
      });
      services_div.appendChild(ul2);
    } else {
      const li = createList(key, val);
      if (key === "Other breakdowns") {
        const breakdown_div = document.querySelector(".breakdown_list");
        breakdown_div.appendChild(li);
      } else {
        ul.appendChild(li);
      }
    }
  });
  first_div.appendChild(ul);
};

const createList = (key, val) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const span = document.createElement("span");
  a.innerHTML = key;
  a.setAttribute("href", "#");
  span.innerHTML = `$${val}`;
  span.setAttribute("class", "list_style");
  a.appendChild(span);
  li.appendChild(a);
  return li;
};

// Use phoneName to render details
if (phoneName) {
  if (phoneName.toLowerCase().includes("iphone")) {
    renderDetails(phoneName, phones.iphone[phoneName]);
  } else if (phoneName.toLowerCase().includes("galaxy")) {
    renderDetails(phoneName, phones.samsung[phoneName]);
  } else if (phoneName.includes("MI")) {
    renderDetails(phoneName, phones.xiaomi[phoneName]);
  } else if (phoneName.toLowerCase().includes("oppo")) {
    renderDetails(phoneName, phones.oppo[phoneName]);
  } else if (phoneName.toLowerCase().includes("pixel")) {
    renderDetails(phoneName, phones.google[phoneName]);
  } else {
    renderDetails(phoneName, phones.honor[phoneName]);
  }
}
