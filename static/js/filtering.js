document.addEventListener("DOMContentLoaded", function () {
  // Fetch JSON data on the client side
  fetch("data/data.json") // Assuming this endpoint returns the necessary data
    .then((response) => response.json())
    .then((data) => {
      // Do something with the data
      console.log("Fetched data:", data);

      // Get unique province names
      var uniqueProvinces = [...new Set(data.map((item) => item.province))];
      var uniqueLocations = [
        ...new Set(data.map((item) => item.location_name)),
      ];
      var uniqueIdentifications = [
        ...new Set(data.map((item) => item.identification_nl)),
      ];

      // Update the province dropdown
      var provinceDropdown = document.getElementById("provinceDropdown");
      uniqueProvinces.forEach((provinceName) => {
        var option = document.createElement("option");
        option.value = provinceName;
        option.textContent = provinceName;
        provinceDropdown.appendChild(option);
      });

      // Update the location dropdown initially with all locations
      var locationDropdown = document.getElementById("locationDropdown");
      populateDropdown(locationDropdown, uniqueLocations);

      // Update the identification dropdown initially with all identifications
      var identificationDropdown = document.getElementById(
        "identificationDropdown"
      );
      populateDropdown(identificationDropdown, uniqueIdentifications);

      // Add event listener to the province dropdown
      provinceDropdown.addEventListener("change", function () {
        var selectedProvince = provinceDropdown.value;
        // Filter locations and identifications based on the selected province
        var filteredData = data.filter(
          (item) => item.province === selectedProvince
        );
        var uniqueLocationsForProvince = [
          ...new Set(filteredData.map((item) => item.location_name)),
        ];
        var uniqueIdentificationsForProvince = [
          ...new Set(filteredData.map((item) => item.identification_nl)),
        ];

        // Update the location dropdown with filtered locations
        updateDropdown(locationDropdown, uniqueLocationsForProvince);

        // Update the identification dropdown with filtered identifications
        updateDropdown(
          identificationDropdown,
          uniqueIdentificationsForProvince
        );
      });

      // Add event listener to the button for applying filters
      var updateBtn = document.getElementById("updateBtn");
      updateBtn.addEventListener("click", function () {
        // Get the selected values
        var selectedProvince = provinceDropdown.value;
        var selectedLocation = locationDropdown.value;
        var selectedIdentification = identificationDropdown.value;

        // Update the filter summary
        updateFilterSummary(
          selectedProvince,
          selectedLocation,
          selectedIdentification
        );
      });
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
    });

  // Function to populate a dropdown with options
  function populateDropdown(dropdown, options) {
    options.forEach((value) => {
      var option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      dropdown.appendChild(option);
    });
  }

  // Function to update a dropdown with new options
  function updateDropdown(dropdown, options) {
    // Clear existing options
    dropdown.innerHTML = "";
    // Populate with new options
    populateDropdown(dropdown, options);
  }

  // Function to update the filter summary
  function updateFilterSummary(province, location, identification) {
    var summaryDiv = document.getElementById("filterSummary");
    summaryDiv.style.opacity = "1";
    summaryDiv.innerHTML = `<h3>Geselecteerde filters:</h3>`;

    if (province !== "All") {
      summaryDiv.innerHTML += `<p>Provincie: ${province}</p>`;
    }

    if (location !== "alle locaties") {
      summaryDiv.innerHTML += `<p>Locatie: ${location}</p>`;
    }

    if (identification !== "All") {
      summaryDiv.innerHTML += `<p>Soort: ${identification}</p>`;
    }
  }
});


function togglePage(page) {
    setTimeout(function () {
      window.location.href = page;
    }, 500); // 500 milliseconds delay
}

function toggleAccordion(accordion) {
  accordion.classList.toggle('open');
  var panel = accordion.nextElementSibling;
  if (panel.style.display === 'flex') {
    panel.style.display = 'none';
  } else {
    panel.style.display = 'flex';
  }
}

function addFilterItem() {
  var formField = document.querySelector('.form-field');
  var newItem = formField.cloneNode(true);
  var itemCount = document.querySelectorAll('.form-field').length + 1;
  var newId = 'item' + itemCount;
  newItem.id = newId;
  newItem.querySelector('.accordion').textContent = 'Item ' + itemCount;
  formField.parentNode.insertBefore(newItem, formField.nextSibling);
}