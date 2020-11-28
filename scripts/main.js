document.addEventListener("DOMContentLoaded", function() {
    const root = document.getElementById("root");

    const data = [
        {
            city: "Guadalajara",
            hour: 13.30,
            currentWeather: 23,
            sun: "sunny",
            max: 25,
            min: 10,
            feelsLike: 20
        },
        {
            city: "Ciudad de México",
            hour: 13.30,
            currentWeather: 21,
            sun: "sunny",
            max: 22,
            min: 11,
            feelsLike: 21
        },
        {
            city: "Tequisquiapan",
            hour: 13.30,
            currentWeather: 19,
            sun: "sunny",
            max: 19,
            min: 7,
            feelsLike: 20
        },
        {
            city: "Toluca",
            hour: 13.30,
            currentWeather: 19,
            sun: "sunny",
            max: 19,
            min: 7,
            feelsLike: 20
        },
    ];

    appendChildren(root, data.map(createCard));
});

function createCard(info) {
    const card = createElement("section", "Card");

    const h4 = createElement("h4", undefined, undefined, info.city);
    const h5 = createElement("h5", undefined, undefined, info.hour);

    const divCurrentWeather = createElement("div", "CurrentWeather");

    const firstSection = createElement("section");
    const spanCurrent = createElement("span", "current", undefined, `${info.currentWeather}°`);
    const div = createElement("div", undefined, undefined, info.sun);

    const secondSection = createElement("section");
    const img = createElement("img", undefined, {src: 'imgs/day.svg', alt: 'weather icon'});
    const spanForecast = createElement("span", "forecast", undefined, `${info.max}°/${info.min}°`); 

    const h6 = createElement("h6", undefined, undefined, `feels like ${info.feelsLike}°`);

    appendChildren(firstSection, [spanCurrent, div]);
    appendChildren(secondSection, [img, spanForecast]);

    appendChildren(divCurrentWeather, [firstSection, secondSection]);

    appendChildren(card, [h4, h5, divCurrentWeather, h6]);

    return card;
};

function appendChildren(element, children) {
    children.forEach(function(e) {
        element.appendChild(e);
    });
};

function createElement(tag, classes, attrs, text){
    const element = document.createElement(tag);

    if (typeof classes !== 'undefined') {
        element.classList.add(classes);
    }
    
    if (typeof attrs !== 'undefined') {
        for (const attr in attrs) {
            element[attr] = attrs[attr];
        }
    }

    if (typeof text !== 'undefined') {
        element.innerText = text;
    }

    return element;
};