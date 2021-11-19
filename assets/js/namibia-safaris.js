const destinations = {
    Sossusvlei : {
        image: '<img src="./assets/images/sossusvlei.jpg" alt="Sossusvlei" class="destination-image">',
        description: 'Sossusvlei is a salt and clay pan surrounded by high red dunes.',
        info: 'Sossusvlei is a salt and clay pan surrounded by high red dunes, located in the southern part of the Namib Desert.' 
    },
    Swakopmund : {
        image: '<img src="./assets/images/swakopmund.jpg" alt="Swakopmund" class="destination-image">',
        description: 'Swakopmund is a coastal city in Namibia, west of the capital.',
        info: 'Swakopmund is a coastal city in Namibia, west of the capital, Windhoek. Its sandy beaches face the Atlantic Ocean. ' 
    },
     Damaraland : {
        image: '<img src="./assets/images/damaraland.jpg" alt="Damaraland" class="destination-image">',
        description: 'Damaraland was a name given to the north-central part of what later became Namibia',
        info: 'Damaraland was a name given to the north-central part of what later became Namibia, inhabited by the Damaras. It was bounded roughly by Ovamboland in the north,' 
    },
    "Skeleton Coast" : {
        image: '<img src="./assets/images/skeleton_coast.jpg" alt="Skeleton Coast" class="destination-image">',
        description: 'The Skeleton Coast is the northern part of the Atlantic.',
        info: 'The Skeleton Coast is the northern part of the Atlantic coast of Namibia and south of Angola from the Kunene River south to the Swakop River' 
    },
    "Cape Cross Sea seal colony" : {
        image: '<img src="./assets/images/Cape_Cross_Seal_Colony.jpg" alt="Cape Cross Sea seal colony" class="destination-image">',
        description: 'Cape Cross is a small headland in the South Atlantic in Skeleton ',
        info: 'Cape Cross is a small headland in the South Atlantic in Skeleton Coast, western Namibia, on the C34 highway some 60 kilometres north of Hentiesbaai and 120 km north of Swakopmund' 
    },
    "Fish river canyon" : {
        image: '<img src="./assets/images/fish_river.jpg" alt="Fish river canyon" class="destination-image">',
        description: 'The Fish River Canyon, is located in the south of Namibia. It is the largest canyon in Africa.',
        info: 'The Fish River Canyon, is located in the south of Namibia. It is the largest canyon in Africa, as well as the second most visited tourist attraction in Namibia.' 
    },
}

let destinations_html = '';
Object.keys(destinations).forEach((key) => {
    
    destinations_html += `<section class="destination-wrapper">
                            <div class="destination-image-wrapper">
                                ${destinations[key].image}
                            </div>
                            <div class="destination-info">                                
                                <span class="destination-title color-dark"><strong>${key}</strong></span>
                                <p class="destination-description primary-color">
                                    <em>${destinations[key].description}</em>
                                </p>
                                <hr class="horizontal-rule-10">
                                <div>
                                    ${destinations[key].info}
                                </div>
                            </div>
                        </section>`;
});
try {
   document.getElementById('destination-wrapper').innerHTML = destinations_html;
} catch (error) {
}

const closeMenu = document.querySelectorAll('.mobile-menu-toggle');

closeMenu.forEach((element) => {
  element.addEventListener('click', () => {
    const overlay = document.querySelector('.menu-overlay');
    overlay.classList.toggle('hide-menu');

    const hamburgerMenu = document.querySelector('.mobile-menu');
    hamburgerMenu.classList.toggle('hide-menu');
  });
});
