// OS is a interface for hardware, we don't know that insites(what's happening inside the software to connect to hardware) instead we just know this would happen when I would click on this.( INTERFACES are same in Typescript)



// Q. Let's take a case, Creating new user -> user have email, userId, discount etc

// interface is loose form of class 
interface User { // we could also created "type" but we would discuss difference later between "type" and "interface"
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string

    // defination of function
    // startTrial: () => string // return type is :string"
    startTrial(): string // preffered to use this way of defining function 
    getCoupon(couponname: string, off: number): number
}

// -----------------------------------------------
// Reopening of interfaces(adding more properties OR values to the interface).

// Q. Let's say the "User" interface that we have defined up there at line 8 have "githubToken" but doesn't have "githubId" login id and we want it. lets assume we have imported this User interface here and now we are working on it.

interface User { // Reopening of interfaces
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner";
}

const karan: Admin = { dbId: 22, email: "c@c.com", 
    userId: 2211,
    // role: "Admin",
    role: "admin",
    githubToken: "github",
    startTrial: () => {
        return "trail stared";
    },
    getCoupon: (name: "charan10", value: 10) => {
        return 10;
    }
}

const charandeep: User = { dbId: 22, email: "c@c.com", 
    userId: 2211,
    githubToken: "github",
    startTrial: () => {
        return "trail stared";
    },
    getCoupon: (name: "charan10", value: 10) => { // name specify that we are providing a "name" and that is "couponname", same for "value" which maps upto "off"
        return 10;
    }
}

charandeep.email = "cs@cs.com"
// charandeep.dbId = 33 // not allowed because its readonly




// "interfaces" VS "type"
