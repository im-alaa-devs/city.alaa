var buttons = document.querySelectorAll(".city-btn");

var cities = document.querySelectorAll(".bg-primary, .bg-danger, .bg-success");

var remove = document.querySelector(".btn-danger");

buttons.forEach((btn, index) => {

    btn.addEventListener("click", () => {

        // Hide all cities
        cities.forEach((city) => {
            city.style.display = "none";
        });

        // Show selected city
        cities[index].style.display = "block";

    });

});

remove.addEventListener("click", () => {

    cities.forEach((city) => {

        city.style.display = "none";

    });

});