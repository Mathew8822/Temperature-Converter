function convertToCelsius(fehrenheit) {
    return fehrenheit - 32 * 5 / 9
}

function createMessage(fehrenheit, celsius) {
    let message = '';
    const numFehrenheit = fehrenheit - 32 * 5 / 9;

    if (numFehrenheit < 32) {
        message = 'Very cold'
    } else if (numFehrenheit < 64) {
        message = 'cold';
    } else if (numFehrenheit < 86) {
        message = 'Warm';
    } else if (numFehrenheit < 100) {
        message = 'Hot';
    }

    return `${fehrenheit} fehrenheit is ${celsius} celsius. ${message}`;
}

function rand(limit) {
    return Math.round(Math.random() * limit);
