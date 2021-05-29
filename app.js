function renderMainPage() {
    const appTag = document.getElementById("app");
    const html = "dupa";
    appTag.innerHTML = html;
}



const coffeeParameters = {
    grindSize: ["coarse", "medium-fine", "medium-coarse", "super-coarse"],
    coffeeWaterRatio: ["60g to 100g", "75g to 100g"],
    bloomLength: ["0", "20", "30"],
    brewTime: [5, 4, 6, 7,8,10],
    temperature: ["boiling", "80", "90"],
    additionalSteps: [0,"Use filter on your press"],
    stirCrustTime: [0, 0.5]
}

function generateRecipe() {
    const steps = [];
    const {grindSize, coffeeWaterRatio, temperature, bloomLength, brewTime, stirCrustTime} = coffeeParameters;
    steps.push(`Grind size: ${grindSize[Math.floor(Math.random()*grindSize.length)]}`);
    steps.push(`Coffee to water ratio: ${coffeeWaterRatio[Math.floor(Math.random()*coffeeWaterRatio.length)]}`);
    const temperatureInfo = temperature[Math.floor(Math.random()* temperature.length)];
    steps.push(
        temperatureInfo === "boiling" ? 
        "For brewing use boiling water" :
        `Brew with water with temperature ${temperatureInfo} celsius degrees`
    );
    const bloomTime = bloomLength[Math.floor(Math.random()* bloomLength.length)];
    if (bloomTime !== "0") {
        steps.push(`Bloom length: ${bloomTime} s.`)
    }

    const brewingTime = brewTime[Math.floor(Math.random()*brewTime.length)]
    steps.push(`Brew time: ${brewingTime} minutes`);
    const stirCrust = stirCrustTime[Math.floor(Math.random()*stirCrustTime.length)];
    if (stirCrust !== 0) {
        steps.push(`Stir the crust after ${stirCrust * brewingTime} minute(s) of brewing time`);
    }


    return steps;
}

function renderRecipe() {
    const steps = generateRecipe();

    let listItems = ``;
    steps.forEach(element => {
        listItems += `<li>${element}</li>`
    })

    const list = `<ol>${listItems}</ol>`

    const listWrap = document.getElementById("list-wrap");
    listWrap.innerHTML = list;
}

document.getElementById("rollBtn").onclick = renderRecipe;