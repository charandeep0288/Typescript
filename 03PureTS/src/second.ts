// interface TakePhoto {
//     cameraMode: string
//     filter: string
//     burst: number
// }

// interface Story{
//     createStory(): void
// }

// class Instagram implements TakePhoto {

//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     ) {}
// }

// class Youtube implements TakePhoto, Story {

//     // we must have all variables defined of Interface, If we want more variable we can add them.
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number,
//         public short: string
//     ) {}

//     createStory(): void { // we need to have this fn defination here, that was there in Story interface
//         console.log("Story is created");
//     }
// }