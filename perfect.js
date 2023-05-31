function createCarCards(containerId) {
    const container = document.getElementById(containerId);
    const featuredCarList = container.querySelector('.featured-car-list');
  
    const cars = [
      // Car objects
      {
        image: './assets/images/carnival.jpeg',
        alt: 'Kia Carnival 2022',
        title: 'Kia Carnival',
        year: 2022,
        capacity: '8 People',
        type: 'Gasoline',
        fuel: '10.0 L / 100km',
        transmission: 'Automatic',
        price: '$350',
        link: 'https://turo.com/ca/en/minivan-rental/canada/edmonton-ab/kia/carnival/1873829?endDate=06%2F02%2F2023&endTime=10%3A00&startDate=05%2F30%2F2023&startTime=10%3A00'
      },
      {
        image: './assets/images/tesla.JPG',
        alt: 'Tesla Model 3 2023',
        title: 'Tesla Model 3',
        year: 2023,
        capacity: '5 People',
        type: 'Electric',
        fuel: '',
        transmission: 'Automatic',
        price: '$350',
        link: 'https://turo.com/ca/en/car-rental/canada/edmonton-ab/tesla/model-3/1964887?endDate=06%2F02%2F2023&endTime=10%3A00&startDate=05%2F30%2F2023&startTime=10%3A00'
      },
      {
        image: './assets/images/rvr.jpeg',
        alt: 'Mitsubishi RVR 2023',
        title: 'Mitsubishi RVR',
        year: 2023,
        capacity: '5 People',
        type: 'Gasoline',
        fuel: '7.5 L / 100km',
        transmission: 'Automatic',
        price: '$350',
        link: 'https://turo.com/ca/en/suv-rental/canada/edmonton-ab/mitsubishi/rvr/2036150?endDate=06%2F02%2F2023&endTime=10%3A00&startDate=05%2F30%2F2023&startTime=10%3A00'
      },
      {
        image: './assets/images/corolla.JPG',
        alt: 'Toyota Corolla 2017',
        title: 'Toyota Corolla',
        year: 2017,
        capacity: '5 People',
        type: 'Gasoline',
        fuel: '7.5 L / 100km',
        transmission: 'Automatic',
        price: '$350',
        link: 'https://turo.com/ca/en/car-rental/canada/edmonton-ab/toyota/corolla/2007407?endDate=06%2F02%2F2023&endTime=10%3A00&startDate=05%2F30%2F2023&startTime=10%3A00'
      },
      {
        image: './assets/images/caravan.JPG',
        alt: 'Dodge Grand Caravan 2017',
        title: 'Dodge Grand Caravan',
        year: 2017,
        capacity: '7 People',
        type: 'Gasoline',
        fuel: '9.4 L / 100km',
        transmission: 'Automatic',
        price: '$350',
        link: 'https://turo.com/ca/en/minivan-rental/canada/edmonton-ab/dodge/grand-caravan/1996958?endDate=06%2F02%2F2023&endTime=10%3A00&startDate=05%2F30%2F2023&startTime=10%3A00'
      },
      {
        image: './assets/images/rio.JPG',
        alt: 'Kia Rio 2014',
        title: 'Kia Rio ',
        year: 2014,
        capacity: '5 People',
        type: 'Gasoline',
        fuel: '6.0 L / 100km',
        transmission: 'Automatic',
        price: '$350',
        link : 'https://turo.com/ca/en/car-rental/canada/edmonton-ab/kia/rio/1898970?endDate=06%2F02%2F2023&endTime=10%3A00&startDate=05%2F30%2F2023&startTime=10%3A00'
      },  
      {
        image: './assets/images/beetle.jpeg',
        alt: 'Volkswagen Beetle 2015',
        title: 'Volkswagen Beetle',
        year: 2015,
        capacity: '4 People',
        type: 'Gasoline',
        fuel: '6.6 L / 100km',
        transmission: 'Automatic',
        price: '$440',
        link : 'https://turo.com/ca/en/car-rental/canada/edmonton-ab/volkswagen/beetle/2001413?endDate=06%2F02%2F2023&endTime=10%3A00&startDate=05%2F30%2F2023&startTime=10%3A00'
        },
        {
        image: './assets/images/ford.png',
        alt: 'Volkswagen Beetle 2015',
        title: 'Fort Transit-350 Wagon 2019',
        year: 2019,
        capacity: '12 People',
        type: 'Gasoline',
        fuel: '12.5 L / 100km',
        transmission: 'Automatic',
        price: '$440',
        link : 'https://turo.com/ca/en/van-rental/canada/beaumont-ab/ford/transit-350-wagon/1670351'
        },
        {
        image: './assets/images/forte.jpeg',
        alt: 'Volkswagen Beetle 2015',
        title: 'Kia Forte',
        year: 2016,
        capacity: '5 People',
        type: 'Gasoline',
        fuel: '7.0 L / 100km',
        transmission: 'Automatic',
        price: '$440',
        link : ''
        },
        {
        image: './assets/images/rvr2.jpeg',
        alt: 'Volkswagen Beetle 2015',
        title: 'Mitsubishi RVR',
        year: 2023,
        capacity: '5 People',
        type: 'Gasoline',
        fuel: '7.5 L / 100km',
        transmission: 'Automatic',
        price: '$440',
        link : ''
        },
      

      // Add more car objects here if needed
    ];
  
    cars.forEach(car => {
      const carCard = document.createElement('li');
      carCard.classList.add('featured-car-card');
  
      const cardBanner = document.createElement('figure');
      cardBanner.className = 'card-banner';
  
      const carImage = document.createElement('img');
      carImage.src = car.image;
      carImage.alt = car.alt;
      carImage.loading = 'lazy';
      carImage.width = 440;
      carImage.height = 300;
      carImage.classList.add('w-100');
  
      cardBanner.appendChild(carImage);
      carCard.appendChild(cardBanner);
  
      const cardContent = document.createElement('div');
      cardContent.className = 'card-content';
  
      const cardTitleWrapper = document.createElement('div');
      cardTitleWrapper.className = 'card-title-wrapper';
  
      const cardTitle = document.createElement('h3');
      cardTitle.className = 'h3 card-title';
      const carLink = document.createElement('a');
      carLink.href = '#';
      carLink.textContent = car.title;
      cardTitle.appendChild(carLink);
  
      const carYear = document.createElement('data');
      carYear.className = 'year';
      carYear.value = car.year;
      carYear.textContent = car.year;
  
      cardTitleWrapper.appendChild(cardTitle);
      cardTitleWrapper.appendChild(carYear);
      cardContent.appendChild(cardTitleWrapper);
  
      const cardList = document.createElement('ul');
      cardList.className = 'card-list';
  
      const cardListItems = [
        { icon: 'people-outline', text: car.capacity },
        { icon: 'flash-outline', text: car.type },
        { icon: 'speedometer-outline', text: car.fuel },
        { icon: 'hardware-chip-outline', text: car.transmission }
    ];

    cardListItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.className = 'card-list-item';

      const icon = document.createElement('ion-icon');
      icon.name = item.icon;

      const text = document.createElement('span');
      text.className = 'card-item-text';
      text.textContent = item.text;

      listItem.appendChild(icon);
      listItem.appendChild(text);
      cardList.appendChild(listItem);
    });

    cardContent.appendChild(cardList);

    const cardPriceWrapper = document.createElement('div');
    cardPriceWrapper.className = 'card-price-wrapper';

    // const cardPrice = document.createElement('p');
    // cardPrice.className = 'card-price';
    // cardPrice.innerHTML = `<strong>${car.price}</strong> / month`;

    // const favButton = document.createElement('button');
    // favButton.className = 'btn fav-btn';
    // favButton.setAttribute('aria-label', 'Add to favorite list');

    // const favIcon = document.createElement('ion-icon');
    // favIcon.name = 'heart-outline';

    // favButton.appendChild(favIcon);

    if (car.link) {
        const rentButton = document.createElement('button');
        rentButton.className = 'btn';
        rentButton.textContent = 'Rent now';
        rentButton.addEventListener('click', () => {
          window.location.href = car.link; // Navigate to the specific link for each car
        });
    
        cardPriceWrapper.appendChild(rentButton);
      } else {
        const comingSoonLabel = document.createElement('p');
        comingSoonLabel.className = 'coming-soon-label';
        comingSoonLabel.textContent = 'Coming Soon';
    
        cardPriceWrapper.appendChild(comingSoonLabel);
      }
    

    // const rentButton = document.createElement('button');
    // rentButton.className = 'btn';
    // rentButton.textContent = 'Rent now';
    // rentButton.addEventListener('click', () => {
    //     window.location.href = car.link; // Navigate to the specific link for each car
    //   });

    // cardPriceWrapper.appendChild(cardPrice);
    // cardPriceWrapper.appendChild(favButton);

    // cardPriceWrapper.appendChild(rentButton);

    cardContent.appendChild(cardPriceWrapper);
    carCard.appendChild(cardContent);

    featuredCarList.appendChild(carCard);
  });
}

// Call the function with the container ID
// createCarCards('featured-car');  

