const restaurantList = document.getElementById('restaurant-list');

const modal = document.getElementById('restaurant-modal');

const restaurantDetails = document.getElementById('restaurant-details');

const closeModal = document.getElementById('close-modal');

const restaurantUrl =
    'https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants';


async function getRestaurants() {
    try {
        const response = await fetch(restaurantUrl);

        if (!response.ok) {
            throw new Error('Failed to get restaurants');
        }

        const restaurants = await response.json();

        console.log(restaurants);

        showRestaurants(restaurants);

    } catch (error) {
        console.error('Error:', error);

        restaurantList.innerHTML =
            '<p>Could not load restaurants.</p>';
    }
}


function showRestaurants(restaurants) {

    restaurants.forEach(function (restaurant) {

        const restaurantItem = document.createElement('div');

        restaurantItem.classList.add('restaurant');

        restaurantItem.innerHTML = `
            <h2>${restaurant.name}</h2>
            <p>${restaurant.address}</p>
            <p>${restaurant.postalCode}, ${restaurant.city}</p>
        `;

        restaurantItem.addEventListener('click', function () {
            showRestaurantDetails(restaurant);
        });

        restaurantList.appendChild(restaurantItem);
    });
}


async function showRestaurantDetails(restaurant) {

    modal.style.display = 'block';

    restaurantDetails.innerHTML = `
        <h2>${restaurant.name}</h2>

        <p>
            <strong>Address:</strong>
            ${restaurant.address}
        </p>

        <p>
            <strong>City:</strong>
            ${restaurant.city}
        </p>

        <p>
            <strong>Phone:</strong>
            ${restaurant.phone}
        </p>

        <p>Loading today's menu...</p>
    `;


    try {

        const menuUrl =
            restaurantUrl + '/' + restaurant._id + '/menu';

        const response = await fetch(menuUrl);

        if (!response.ok) {
            throw new Error('Failed to get menu');
        }

        const menu = await response.json();

        console.log(menu);

        let menuHTML = `
            <h2>${restaurant.name}</h2>

            <p>
                <strong>Address:</strong>
                ${restaurant.address}
            </p>

            <p>
                <strong>City:</strong>
                ${restaurant.city}
            </p>

            <p>
                <strong>Phone:</strong>
                ${restaurant.phone}
            </p>

            <h3>Today's Menu</h3>
        `;


        if (menu.length === 0) {

            menuHTML += `
                <p>No menu available for today.</p>
            `;

        } else {

            menu.forEach(function (item) {

                menuHTML += `
                    <div class="menu-item">
                        <h4>${item.name}</h4>
                        <p>${item.description || ''}</p>
                        <p>${item.price || ''}</p>
                    </div>
                `;

            });
        }


        restaurantDetails.innerHTML = menuHTML;

    } catch (error) {

        console.error('Menu error:', error);

        restaurantDetails.innerHTML = `
            <h2>${restaurant.name}</h2>

            <p>
                <strong>Address:</strong>
                ${restaurant.address}
            </p>

            <p>
                <strong>City:</strong>
                ${restaurant.city}
            </p>

            <p>
                <strong>Phone:</strong>
                ${restaurant.phone}
            </p>

            <p>Could not load today's menu.</p>
        `;
    }
}


closeModal.addEventListener('click', function () {

    modal.style.display = 'none';

});


window.addEventListener('click', function (event) {

    if (event.target === modal) {
        modal.style.display = 'none';
    }

});

console.log("JavaScript is working");
getRestaurants();