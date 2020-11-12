var oz = 0;
var amira = 0;
var brian = 0;
var vicky = 0;
var miranda = 0;
var damien = 0;
var scott = 0;
var liam = 0;
var polly = 0;
var vera = 0;
var calcu = 0;
var zoe = 0;
var char1, char2, char3, char4, char5, char6, char7, char8;
var p1, p2, p3, p4;
var back;
var first, second, third, pcFave;
var monsterNames = ["Placeholder","Miranda", "Damien", "Scott", "Liam", "Polly", "Vera", "Zoe", "Calculester"]
var monsterScores = [];
var playerNames = ["Placeholder","Oz", "Amira", "Brian", "Vicky"];
var playerScores = [];
let state = 0;


var bubbles = [];

function setup() {
  p1 = loadImage("OzMP.png");
  p2 = loadImage("AmiraMP.png");
  p3 = loadImage("BrianMP.png");
  p4 = loadImage("VickyMP.png");
  char1 = loadImage("MirandaMP.png");
  char2 = loadImage("DamienMP.png");
  char3 = loadImage("ScottMP.png");
  char4 = loadImage("LiamMP.png");
  char5 = loadImage("PollyMP.png");
  char6 = loadImage("VeraMP.png");
  char8 = loadImage("CalculesterMP.png");
  char7 = loadImage("ZoeMP.png");
  back = loadImage("SchoolMP.png");


  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1W9NfsGrHdDHP_UWStmScO59Uh7icQzTm-h9UbOdKhxc'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 400);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    if (data[i].char == "Oz") oz++;
    else if (data[i].char == "Amira") amira++;
    else if (data[i].char == "Brian") brian++;
    else if (data[i].char == "Vicky") vicky++;

    if (data[i].world == "Nobody ends the world but me! I'll end the world today.") damien++;
    else if (data[i].world == "I'll finish my novel... whoever comes after the end should know my legacy!") liam++;
    else if (data[i].world == "It's okay! We invented the apocalypse to take care of the overpopulation of commoners.") miranda++;
    else if (data[i].world == "I always party as if there were no tomorrow... so who cares?") polly++;
    else if (data[i].world == "100 push-ups! No, no... 200 push-ups!") scott++;
    else if (data[i].world == "They always tell you the world is ending... I'll profit on other people's hysteria.") vera++;
    else if (data[i].world == "Netflix and chill.") zoe++;
    else if (data[i].world == "I would panic, because that's what real organic people do and I am real organic person.") calcu++;

    if (data[i].dnd == "Gun Haver") damien++;
    else if (data[i].dnd == "Obscure Instrgrammer") liam++;
    else if (data[i].dnd == "The Prettiest One") miranda++;
    else if (data[i].dnd == "Partysmith") polly++;
    else if (data[i].dnd == "Good Boy") scott++;
    else if (data[i].dnd == "Moneymaker") vera++;
    else if (data[i].dnd == "Fanfic Bard") zoe++;
    else if (data[i].dnd == "Automation") calcu++;

    if (data[i].prod == "Extra flammable.") damien++;
    else if (data[i].prod == "You won't understand me, and that's how you know I'm cool.") liam++;
    else if (data[i].prod == "I command you to enjoy me.") miranda++;
    else if (data[i].prod == "Be ready for a long trip.") polly++;
    else if (data[i].prod == "Buy me, I'm good.") scott++;
    else if (data[i].prod == "Too expensive for you.") vera++;
    else if (data[i].prod == "For fans by fans.") zoe++;
    else if (data[i].prod == "Objectively better than the other options.") calcu++;

    if (data[i].date == "Damien") damien += 2;
    else if (data[i].date == "Liam") liam += 2;
    else if (data[i].date == "Miranda") miranda += 2;
    else if (data[i].date == "Polly") polly += 2;
    else if (data[i].date == "Scott") scott += 2;
    else if (data[i].date == "Vera") vera += 2;
    else if (data[i].date == "Zoe") zoe += 2;
    else if (data[i].date == "Calculester") calcu += 2;

  }
}


function draw() {
  switch (state) {
    case 0:
      // // iterate through the bubbles and display the objects!

      state = 1;
      break;
    case 1:
      image(back, width / 2, height / 2, 600, 400)
      textSize(35);
      fill(0);
      text("The MOST popular monsters", 230, 30);
      textSize(10);
      text("There's no such thing as a bias, what are you talking about?", 230, 50);
      first = 0;
      second = 0;
      third = 0;
      pcFave = 0;
      monsterScores = [-1, miranda, damien, scott, liam, polly, vera, zoe, calcu];
      playerScores = [-1, oz, amira, brian, vicky];
      for (let i = 0; i < playerScores.length; i++) {
        if (playerScores[pcFave] < playerScores[i]) pcFave = i;
      }
      for (let i = 0; i < monsterScores.length; i++) {
        if (monsterScores[first] < monsterScores[i]) first = i;
      }
      for (let i = 0; i < monsterScores.length; i++) {
        if ((monsterScores[second] < monsterScores[i]) && !(i == first)) second = i;
      }
      for (let i = 0; i < monsterScores.length; i++) {
        if ((monsterScores[third] < monsterScores[i]) && !(i == first) && !(i == second)) third = i;
      }
      fill("gold");
      if (monsterNames[first] == "Miranda") {
        text("First Place: Miranda", 60, 80);
        image(char1, 50, 250, 150, 300);
      } else if (monsterNames[first] == "Damien") {
        text("First Place: Damien", 60, 80);
        image(char2, 50, 250, 150, 300);
      } else if (monsterNames[first] == "Scott") {
        text("First Place: Scott", 60, 80);
        image(char3, 50, 250, 150, 300);
      } else if (monsterNames[first] == "Liam") {
        text("First Place: Liam", 60, 80);
        image(char4, 50, 250, 150, 300);
      } else if (monsterNames[first] == "Polly") {
        text("First Place: Polly", 60, 80);
        image(char5, 50, 250, 150, 300);
      } else if (monsterNames[first] == "Vera") {
        text("First Place: Vera", 60, 80);
        image(char6, 50, 250, 150, 300);
      } else if (monsterNames[first] == "Zoe") {
        text("First Place: Zoe", 60, 80);
        image(char7, 50, 250, 150, 300);
      } else if (monsterNames[first] == "Calculester") {
        text("First Place: Calculester", 60, 80);
        image(char8, 50, 250, 150, 300);
      }




      fill("silver");
      if (monsterNames[second] == "Miranda") {
        text("Second Place: Miranda", 175, 80);
        image(char1, 175, 250, 150, 300);
      } else if (monsterNames[second] == "Damien") {
        text("Second Place: Damien", 175, 80);
        image(char2, 175, 250, 150, 300);
      } else if (monsterNames[second] == "Scott") {
        text("Second Place: Scott", 175, 80);
        image(char3, 175, 250, 150, 300);
      } else if (monsterNames[second] == "Liam") {
        text("Second Place: Liam", 175, 80);
        image(char4, 175, 250, 150, 300);
      } else if (monsterNames[second] == "Polly") {
        text("Second Place: Polly", 175, 80);
        image(char5, 175, 250, 150, 300);
      } else if (monsterNames[second] == "Vera") {
        text("Second Place: Vera", 175, 80);
        image(char6, 175, 250, 150, 300);
      } else if (monsterNames[second] == "Zoe") {
        text("Second Place: Zoe", 175, 80);
        image(char7, 175, 250, 150, 300);
      } else if (monsterNames[second] == "Calculester") {
        text("Second Place: Calculester", 175, 80);
        image(char8, 175, 250, 150, 300);
      }




      fill(183, 88, 4);
      if (monsterNames[third] == "Miranda") {
        text("Third Place: Miranda", 325, 80);
        image(char1, 325, 250, 150, 300);
      } else if (monsterNames[third] == "Damien") {
        text("Third Place: Damien", 325, 80);
        image(char2, 325, 250, 150, 300);
      } else if (monsterNames[third] == "Scott") {
        text("Third Place: Scott", 325, 80);
        image(char3, 325, 250, 150, 300);
      } else if (monsterNames[third] == "Liam") {
        text("Third Place: Liam", 325, 80);
        image(char4, 325, 250, 150, 300);
      } else if (monsterNames[third] == "Polly") {
        text("Third Place: Polly", 325, 80);
        image(char5, 325, 250, 150, 300);
      } else if (monsterNames[third] == "Vera") {
        text("Third Place: Vera", 325, 80);
        image(char6, 325, 250, 150, 300);
      } else if (monsterNames[third] == "Zoe") {
        text("Third Place: Zoe", 325, 80);
        image(char7, 325, 250, 150, 300);
      } else if (monsterNames[third] == "Calculester") {
        text("Third Place: Calculester", 325, 80);
        image(char8, 325, 250, 150, 300);
      }

      if (playerNames[pcFave] == "Oz") {
        fill("yellow");
        text("Favorite Playable Character: Oz", 500, 260);
        image(p1, 500, 350, 70, 150);
      } else if (playerNames[pcFave] == "Amira") {
        fill("red");
        text("Favorite Playable Character: Amira", 500, 260);
        image(p2, 500, 350, 70, 150);
      } else if (playerNames[pcFave] == "Brian") {
        fill("green");
        text("Favorite Playable Character: Brian", 500, 260);
        image(p3, 500, 350, 70, 150);
      } else if (playerNames[pcFave] == "Vicky") {
        fill("blue");
        text("Favorite Playable Character: Vicky", 500, 260);
        image(p4, 500, 350, 70, 150);
      }
      break;
  }
}
