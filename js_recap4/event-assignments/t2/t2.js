const restaurants = [
  {
    location: {type: 'Point', coordinates: [25.018456, 60.228982]},
    _id: '6470d38ecb12107db6fe24c1',
    companyId: 68,
    name: 'Ravintola Ladonlukko',
    address: 'Latokartanonkaari 9 A',
    postalCode: '00790',
    city: 'Helsinki',
    phone:
      '+358 50 4653899 Ravintolan esimies +358 50 435 8072 Kokoustarjoilut /ravintola',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.903147, 60.221729]},
    _id: '6470d38ecb12107db6fe24c2',
    companyId: 1580536,
    name: 'Ravintola Stadin AO Ilkantie',
    address: 'Ilkantie 3',
    postalCode: '00400',
    city: 'Helsinki',
    phone: '+358 (0) 50 4710 211',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.95576, 60.196672]},
    _id: '6470d38ecb12107db6fe24c3',
    companyId: 85,
    name: 'Stadin AO - Hattulantie 2',
    address: 'Hattulantie 2',
    postalCode: '00550',
    city: 'Helsinki',
    phone: '050 401 6867',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.94886, 60.218638]},
    _id: '6470d38ecb12107db6fe24c4',
    companyId: 179,
    name: 'Stadin AO Kullervonkatu',
    address: 'Kullervonkatu 11',
    postalCode: '00610',
    city: 'Helsinki',
    phone: '+358 50 472 4652',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.946847, 60.194701]},
    _id: '6470d38ecb12107db6fe24c5',
    companyId: 157,
    name: 'Stadin AO TK 23',
    address: 'Teollisuuskatu 23-25',
    postalCode: '00510',
    city: 'Helsinki',
    phone: '0503274920',
    company: 'Sodexo',
    __v: 0,
  },
  {
    location: {type: 'Point', coordinates: [24.950631, 60.169096]},
    _id: '6470d38ecb12107db6fe24bf',
    companyId: 1045996,
    name: 'Helsingin yliopisto Päärakennus',
    address: 'Aleksanterinkatu 5',
    postalCode: '00170',
    city: 'Helsinki',
    phone: '+358 50 411 8325 Kokous- ja juhlapalvelut ',
    company: 'Sodexo',
    __v: 0,
  },

  // ... তোমার দেওয়া বাকি সব restaurant data exactly একই থাকবে ...

  {
    location: {type: 'Point', coordinates: [24.829696, 60.188222]},
    _id: '6470d857a7309cc578e0180b',
    companyId: 86,
    name: 'Ravintola Aalto Kvarkki ',
    address: 'Otakaari 3',
    postalCode: '02150',
    city: 'Espoo',
    phone: 'Keittiö puh.+358505336952',
    company: 'Sodexo',
    __v: 0,
  },
];

// ================================
// YOUR CODE STARTS HERE
// ================================

const table = document.querySelector('table');


// 1. Sort restaurants alphabetically by name

restaurants.sort((a, b) => {
  return a.name.localeCompare(b.name);
});


// 2. Display restaurants in the table

const nameCells = [];

for (const restaurant of restaurants) {

  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = restaurant.name;

  const addressCell = document.createElement('td');
  addressCell.textContent = restaurant.address;

  row.appendChild(nameCell);
  row.appendChild(addressCell);

  table.appendChild(row);

  nameCells.push(nameCell);


  // 3. Click restaurant name

  nameCell.addEventListener('click', () => {

    // Remove highlight from all restaurant names

    for (const cell of nameCells) {
      cell.classList.remove('highlight');
    }

    // Add highlight to clicked restaurant

    nameCell.classList.add('highlight');


    // 4. Show restaurant information in modal

    const dialog = document.querySelector('dialog');

    dialog.innerHTML = `
      <h2>${restaurant.name}</h2>
      <p><strong>Address:</strong> ${restaurant.address}</p>
      <p><strong>Postal Code:</strong> ${restaurant.postalCode}</p>
      <p><strong>City:</strong> ${restaurant.city}</p>
      <p><strong>Phone:</strong> ${restaurant.phone}</p>
      <p><strong>Company:</strong> ${restaurant.company}</p>
      <button class="close-btn">Close</button>
    `;

    dialog.showModal();


    // Close button

    const closeButton = dialog.querySelector('.close-btn');

    closeButton.addEventListener('click', () => {
      dialog.close();
    });

  });

}