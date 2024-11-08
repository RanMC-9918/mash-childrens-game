console.log("Starting...")

let result = mash();
console.log(result);

let homeData = getHome();
let travelData = getTravelCount();
let petData = getPet();
let kidsData = randNumGenerator(10);
let placeData = getPlace();
let jobData = getJob();



function mash() {
    document.addEventListener("DOMContentLoaded", () => {
        let home = document.getElementById("home");
        let travel = document.getElementById("travel");
        let pet = document.getElementById("pet");
        let kids = document.getElementById("kids");
        let place = document.getElementById("place");
        
        home.innerHTML = homeData;
        travel.innerHTML = travelData + " countries";
        pet.innerHTML = petData;
        kids.innerHTML = kidsData + " children";
        place.innerHTML = placeData;
        job.innerHTML = jobData;
        
        
        
        let answers = document.getElementsByClassName("game-objects");
        for(let i = 0; i < answers.length; i++){
            if(answers[i].nodeName === "DIV"){
            let time = i/15;
            console.log(time);
            answers[i].style.animation = `fade-in 1s ${time}s 1 forwards`;
            }
        }
        });
    return `You will live in a ${getHome()} and travel to ${getTravelCount()} countries, and have a pet ${getPet()}. You will have ${randNumGenerator(10)} kids and live in ${getPlace()}!`;
}

function randNumGenerator(x){
    return Math.floor(Math.random() * x+1);
}

function getHome() {
    let home = ["house", "mansion", "apartment", "shed", "condo", "hotel", "townhouse"];
    return home[randNumGenerator(home.length-1)];
}

function getTravelCount(){
    return randNumGenerator(100);
}

function getPet(){
    let home = ["dog", "cat", "nothing 😭", "fish", "bear", "spider", "bird", "Lizard", "Rabbit", "Sheep", "Gecko", "Chinese Water Dragon?"];
    return home[randNumGenerator(home.length-1)];
}

function getPlace(){
    let home = ["New York", "London", "Paris", "Tokyo", "Berlin", "Sydney", "Bangkok", "Beijing", "Seoul", "Moscow"];
    return home[randNumGenerator(home.length-1)];
}

function getJob(){
    let home = ["software engineer", "teacher", "doctor", "engineer", "influencer", "neurosurgeon", "programmer", "tennis player", "music producer", "party clown", "Brawl Stars Gamer"];
    return home[randNumGenerator(home.length-1)];
}
