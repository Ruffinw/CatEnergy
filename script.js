document
    .getElementById("slider").max = document.getElementById("sliderWrapper").getBoundingClientRect().width

document
    .getElementById("slider")
    .addEventListener('input', (change) => {
        document.getElementById("sliderCut").style.clipPath 
            = `inset(0 0 0 ${Number(change.target.value)}px)`
    })


function initMap() {
    const coordinates = [59.938656, 30.323058];
    const mapCenter = [59.938439, 30.319246];
    const myMap = new ymaps.Map('yandex-map', {
        center: document.body.clientWidth > 768 ? mapCenter : coordinates,
        zoom:  document.body.clientWidth > 768 ? 16 : 14,
        controls: ['zoomControl']
    });

    const logoPlacemark = new ymaps.Placemark(coordinates, {}, {
        iconLayout: 'default#image',
        iconImageHref: './assets/icon-logo.svg',
        iconImageSize: [60, 60],
        iconImageOffset: [-25.5, -65]
    });

    const backgroundPlacemark = new ymaps.Placemark(coordinates, {}, {
        iconLayout: 'default#image',
        iconImageHref: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
            <svg width="34" height="44" viewBox="0 0 34 44" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 1C25.84 1 33 8.16 33 17C33 25.84 17 43 17 43C17 43 1 25.84 1 17C1 8.16 8.16 1 17 1Z" 
                    fill="white" stroke="#e6e6e6" stroke-width="1.5"/>
            </svg>
        `),
        interactivityModel: 'default#silent',
        iconImageSize: [70, 70],
        iconImageOffset: [-30, -60]
    });

    myMap.geoObjects.add(backgroundPlacemark);
    myMap.geoObjects.add(logoPlacemark);
}

ymaps.ready(initMap);
