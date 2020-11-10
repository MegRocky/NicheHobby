

const relationship = ["Your favourite","Your next","Your last","Your least favourite", "Your friend's", "Your friend's favourite", "Your mums friend's", "Your mums least favourite"]
const item = ["Doughnut Shop","Tattoo Artist","Yarn Maker","Artisanal Knifemaker","Podcast Host", "Twitch Streamer","'Ethical' Clothing Brand", "Online Dungeon Master", "Blogger","Vegan Chef", "Streetfood Stall", "Craft Brewery", "Vintage shop","Indie band", "Childrens Author","Classic Rockstar", "Voice actor", "Fantasy Author"]
const problem = ["is a Nazi"," is Racist"," is a Sex Offender","is Fatphobic"," is a TERF","is a Covid conspiricy theorist", " is a flat earther", " is a trump supporter", "are Anti-vax", " is a SWERF", "is transphobic", "is homophobic","is biphobic","is an MRA", "is an Incel"];

const getRandomNumber = (max) => Math.floor(Math.random()* max);

const getRandomName = () => 
`${relationship[getRandomNumber(relationship.length)]} ${item[getRandomNumber(item.length)]} ${problem[getRandomNumber(problem.length)]}`;

const setRandomName = () =>{
document.getElementById('randomProb').innerText = getRandomName();
}

setRandomName();

document.getElementById('generate').addEventListener('click', setRandomName);