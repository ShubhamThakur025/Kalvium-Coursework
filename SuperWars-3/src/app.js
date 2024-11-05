const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = []
    detailedPlayers = players.map(function(item,index){
        if(index%2==0){
            var type = "hero"
        }else{
            var type = "villain"
        }
        return {
            name: item,
            strength: getRandomStrength(),
            image: `images/super-${index+1}.png`,
            type: type
        }
    })
    return detailedPlayers;
}


// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';
    let players1 = players.filter(function(item){
        return item.type === type;
    })
    console.log(players1)
    let list = players1.map(function(item){
        return `
        <div class="player">
        <img src="${item.image}" alt="">
        <div class="name">${item.name}</div>
        <div class="strength">${item.strength}</div>
        </div>`
    })
    fragment = list.join('')
    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}