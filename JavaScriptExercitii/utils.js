// ES6 syntax
const obiect = {
    key: "Valoare 1",
    key2: "Valoare 2"
};

function minmax(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    return {
        min,
        max
    }
}

function arrayMinMax(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    return [max, min];
}

const { max, min } = minmax(3, 5);

const [minArray, maxArray] = arrayMinMax(10, 18)
