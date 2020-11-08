// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
var temperature = 0;
var humidity = 0;
var name;
var img1, img2, img3, img4;
var img5, img6, img7;
var font;
var timer = 0;
let drops = [];
let flakes = [];


function setup() {
  createCanvas(600, 400);
  imageMode(CENTER);
  img1 = loadImage("Castform.png");
  img2 = loadImage("CastformR.png");
  img3 = loadImage("CastformI.png");
  img4 = loadImage("CastformS.png");
  img5 = loadImage("Raindrop.png");
  img6 = loadImage("Snowflake.png");
  img7 = loadImage("Sun.png");

  font = loadFont("PokemonSolid.ttf");

  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?q=Bloomington,IL,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=1564242ef7c45f1a9fd9c5b54fac3438'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;
  name = weather.name;

}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(200);

      if ((weather.weather[0].main == "Rain") || (weather.weather[0].main == "Drizzle") || (weather.weather[0].main == "Thunderstorm")) {
        image(img2, width/2, height/2);
      } else if (weather.weather[0].main == "Snow" || weather.weather[0].main == "Cloudy") {
        background(238,255,250);
        image(img3, width/2, height/2);
      } else if (temperature > 80) {
        background(255,200,154);
        image(img7, 500,50);
        image(img4, width/2, height/2);
      } else {
        background(242);
        image(img1, width/2, height/2);
      }

      if ((weather.weather[0].main == "Rain")||(weather.weather[0].main == "Drizzle")||(weather.weather[0].main == "Thunderstorm")) {
        if (drops.length < 60 && timer % 60 == 0) {
          drops.push(new Rain);
        }
      }
      if (weather.weather[0].main == "Snow") {
        if (flakes.length < 60 && timer % 60 == 0) {
          flakes.push(new Snow);
        }
      }
      for (let i = 0; i < drops.length; i++) {
        drops[i].display();
        drops[i].move();
      }
      for (let i = 0; i < flakes.length; i++) {
        flakes[i].display();
        flakes[i].move();
      }
      timer++;
      textFont(font);
      fill('black');
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text("Temperature is " + temperature + " degrees F", 20, 60);
      text("Humidity is " + humidity + " Percent", 20, 80);

      break;

  }
}

class Rain {
  //where attributes go (variables and such)
  constructor() {
    this.pos = createVector(random(width), 0);
    this.vel = createVector(random(-windspeed / 2, windspeed / 2),random(10));


  }
  //this is where methods go
  display() {
    image(img5, this.pos.x, this.pos.y, 5, 5);


  }
  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }
}

class Snow {
  //where attributes go (variables and such)
  constructor() {
    this.pos = createVector(random(width), 0);
    this.vel = createVector(random(-windspeed / 2, windspeed / 2),random(5));


  }
  //this is where methods go
  display() {
    image(img6, this.pos.x, this.pos.y, 5, 5);


  }
  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }
}
