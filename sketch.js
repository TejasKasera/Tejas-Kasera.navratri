var bg;
var flower, flowerImage , flowersGroup;
var navratriIMG, navratri;
var tejas, tejasIMG;
var ki, kiIMG;
var taraf, tarafIMG;
var se, seIMG;
var hi, hiIMG;
var sub, subIMG;
var ki1;
var confetti , confettiGroup;

function preload(){
bg = loadImage("navratri.jpg"); 

flowerImage =loadImage("flowerImage.png");

tejasIMG = loadImage("tejas1Image.png");
	kiIMG = loadImage("ki-Image.png");
	tarafIMG = loadImage("tarafImage.png");
	seIMG = loadImage("seImage.png");
	hiIMG = loadImage("hardikImage.png");
	subIMG = loadImage("subkamnaImage.png");

}

function setup(){

	var canvas = createCanvas(displayWidth, displayHeight);

	flowersGroup = new Group();
	confettiGroup = new Group();


	tejas = createSprite(200,70,10,10);
	tejas.addImage(tejasIMG);
	tejas.scale = 0.4;

	ki = createSprite(415,90,10,20);
	ki.addImage(kiIMG);
	ki.scale = 0.5;

	taraf = createSprite(600,80,20,20);
	taraf.addImage(tarafIMG);
	taraf.scale = 0.6;

	se = createSprite(300,190,20,10);
	se.addImage(seIMG);
	se.scale = 0.6;

	hi = createSprite(160,420,20,10);
	hi.addImage(hiIMG);
	hi.scale = 0.399;

	sub = createSprite(390,540,20,10);
	sub.addImage(subIMG);
	sub.scale = 0.64;

	ki1 = createSprite(620,330,20,10);
	ki1.addImage(kiIMG);
	ki1.scale = 0.5;

	
}

function draw(){

	if(bg){
		background(bg);
	}
	else{
		background("black")
	}
	spawnFlowers();

	spawnConfetti();

	drawSprites();
}

function spawnFlowers(){

         if(frameCount % 10 === 0){


		var randomNumber = Math.round(random( 3, displayWidth));
		var flower = createSprite(randomNumber , -5,5,5);
		flower.addImage(flowerImage);
		flower.scale = 0.3;
		flower.velocityY = 5;
		flower.lifetime = 800;
		flowersGroup.add(flower);
	
	   }

}

function spawnConfetti(){

	if(frameCount % 3 === 0){


	   var randomNumber2 = Math.round(random( 3, displayWidth));

	   var randomWidth = Math.round(random(6,18));
	   var randomHeight = Math.round(random(6,18));
	   var confetti= createSprite(randomNumber2 , -5,randomWidth,randomHeight);
	  var randomColor = Math.round(random(1,8));
	   confetti.velocityY = 5;
	   confetti.lifetime = 500;
	   confettiGroup.add(confetti);

	   switch(randomColor){
		   case 1 : confetti.shapeColor = "red";
		   break;

		   case 2 : confetti.shapeColor = "blue ";
		   break;

		   case 3: confetti.shapeColor = "yellow ";
		   break;

		   case 4: confetti.shapeColor = " green";
		   break;

		   case 5: confetti.shapeColor = "orange ";
		   break;

		   case 6 : confetti.shapeColor = "purple ";
		   break;

		   case 7: confetti.shapeColor = "gold ";
		   break;

		   case 8: confetti.shapeColor = " pink";
		   break;

		   default : console.log("no color applied");
		   break;
;	   }
   
	}

}