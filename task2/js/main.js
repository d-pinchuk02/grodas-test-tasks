let elements = [];
let tagsByName = {};
let tagsBySymbols = {};

function getChildren(parent) {
    Array.from(parent.children).forEach((element) => {
        elements.push(element);
        tagsByName[element.tagName] = {
            name: "",
            count: 0,
            elements: [],
        };
        tagsBySymbols[element.tagName.length] = {
            count: 0,
            symbols: 0,
            elements: [],
        };
        getChildren(element);
    });
}

function groupTagsByName() {
    Array.from(elements).forEach((element) => {
        let name = element.tagName;

        tagsByName[name].name = name;
        tagsByName[name].elements.push(element);
        tagsByName[name].count++;
    });
}

function groupTagsBySymbols() {
    Array.from(elements).forEach((element) => {
        let name = element.tagName;
        let symbols = name.length;

        tagsBySymbols[symbols].elements.push(element);
        tagsBySymbols[symbols].count++;
        tagsBySymbols[symbols].symbols = symbols;
    });
}

getChildren(document);
groupTagsByName();
groupTagsBySymbols();

console.log("Загальна кількість тегів:", elements.length);
console.log("Теги за назвою:", tagsByName);
console.log("Теги за кількістю символів", tagsBySymbols);

document.querySelector(".js-total-count").textContent = elements.length;
