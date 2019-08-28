const breakfast = {
    item: "French Toast",
    quantity: 4,
    topping: "syrup",
    sides: {
        side1: {
            item: "Eggs",
            style: "sunny side up",
            quantity: 2,
        },
        side2: {
            item: "Bacon",
            style: "fried in syrup",
            quantity: 20,
        }
    }
}

const myBreakfast = (item) => {
    return `
    <div>
        <h1><u>My Breakfast</u>b</h1>
        <h2>Main: ${item.quantity} pieces of ${item.item} drippin in ${item.topping}</h2>
        <p>Side 1: ${item.sides.side1.quantity} ${item.sides.side1.item} ${item.sides.side1.style}</p>
        <p>Side 2: ${item.sides.side2.quantity} pieces of carmalized ${item.sides.side2.item} ${item.sides.side2.style}</p>
    </div>
    `
}

let domInj = document.querySelector("#container");

domInj.innerHTML += myBreakfast(breakfast);

