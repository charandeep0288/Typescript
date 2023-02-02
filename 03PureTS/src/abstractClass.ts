// Abstract classes are like blueprints.
// And cannot create object of abstact classes own their own, it is the responsibility of the class who extends it to create object of abstract class.

abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSpepia(): void // we currently don't know the what this fn defination would be, when some other class is going to extends it then they must define what this fn do

    // This is the DIFFERENCE btn "interfaces" and "abstract classes", that we can define function here in abstract class.  
    getReelTime():number { // we can also override this function in its child class, this is also totally allowed. OR we can use this one also.
        // some complex calculation
        return 8;
    }
}

// const cs = new TakePhoto("test", "test"); // Cannot create an instance of an abstract class

class Instagram extends TakePhoto {

    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSpepia(): void {
        console.log("Sepia");
    }
}

const cs0 = new Instagram("test", "test", 10);

cs0.getReelTime();
