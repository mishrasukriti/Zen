/**
This is base class to have attributes and functionalities related to Television.
*/
class TV {
	constructor(brand,price,inches,onOffStatus){
		this.brand= brand;
		this.channel= 1;
		this.price=  price;
		this.inches= inches;
		this.onOffStatus= onOffStatus;
		this.volume=50;
	}

	//Increases volume by given value in input
	increaseVolume(n){
		if(this.volume+n>100) this.volume=100;
		else this.volume= this.volume+n;
	}

	//Decreases volume by given value in input
	decreaseVolume(n){
		if(this.volume-n<0) this.volume=0;
		else this.volume= this.volume-n;
	}

	//Sets channel to given number in input
	setChannel(c){
		if(c<=50) this.channel=c;
 	}
 	//Resets channel and volume to default values.
 	reset(){
 		this.channel=1;
 		this.volume=50;
 	}
 	//Returns current status of various TV attributes.
 	status(){
 		console.log(`${this.brand} at channel ${this.channel}, Volume ${this.volume}`)
 	}
}

/**
This is child class of TV and has additional attributes and functionalities related to LED TV.
*/
class LED_TV extends TV{
	constructor(brand,price,inches,onOffStatus,energyUsed,screenThickness,lifespan,refreshRate){
		super(brand,price,inches,onOffStatus);
		this.energyUsed= energyUsed;
		this.screenThickness= screenThickness;
		this.lifespan= lifespan;
		this.refreshRate= refreshRate;
	}
	//Returns current status of various LED TV attributes.
	status(){
 		console.log(`${this.brand} at channel ${this.channel}, Volume ${this.volume}, ScreenThickness ${this.screenThickness}, RefreshRate ${this.refreshRate}`);
 	}

}

/**
This is child class of TV and has additional attributes and functionalities related to Plasma TV.
*/
class Plasma_TV extends TV{
	constructor(brand,price,inches,onOffStatus,viewAngle,backLight,resolution){
		super(brand,price,inches,onOffStatus);
		this.viewAngle= viewAngle;
		this.backLight= backLight;
		this.resolution= resolution;
	}
	//Returns current status of various Plasma TV attributes.
	status(){
 		console.log(`${this.brand} at channel ${this.channel}, Volume ${this.volume}, ViewAngle:  ${this.viewAngle}, BackLight: ${this.backLight}, Resolution: ${this.resolution}`);
 	}
}

//Creating object of LED TV and printing status after increasing volume by 50 points
let LED_TV_obj= new LED_TV("LG", 20000,42,"On","1000KW","1.5 cm","5 years","1 minutes");
LED_TV_obj.status();
LED_TV_obj.increaseVolume(50);
LED_TV_obj.status();

//Creating object of Plasma TV and printing status after decreasing volume by decreasing 10 points.
let plasma_TV_obj= new Plasma_TV("Samsung", 25000,42,"On","45 degree","100 Hertz","1060*780");
plasma_TV_obj.decreaseVolume(10);
plasma_TV_obj.status();

