console.log('hello world');

const isOpen: boolean = false;
const myName: string = "Kai";
const myAge: number = 29;

const list: number[] = [0, 1, 2];

const me: [string, number, boolean]= ["Kai", 29, false];

enum Job { 
    WebDev, 
    WebDesigner, 
    PM }
const job:Job = Job.WebDev;

const phone: any = "Pixel";
const tablet: any = 3;



// Functions in Typescript

//taking in a string type and return is also a string
//? question mark is for optional params
// const sayHello = (word?: string): string=> {
//     console.log(word || 'Hello');
//     return word || 'Hello';
// }

// sayHello("hi");
// sayHello(3 + ""); //make it into string type

//sayWord()
//Default params
//Rest params work as expected
const sayWord= (word = 'Hello', ...otherStuff: string[]): string => {
    console.log(otherStuff);
    return word;
}

sayWord('Kai', 'Zhu');

//typescript has default type as first input type, 
// this is call implicit types
let newName: string | number | boolean = 'Kaihua';
newName = 'Kai';


//get type from initial declaration
let newNameTwo = newName;
// newNameTwo = false;

//Union Types with |
const makeMargin = (x: string | number): string => {
    return `margin: ${x}px`;
}

makeMargin(10);
makeMargin('Kai');
// makeMargin(false);

//Null types
// null type is automatically added to normal types
let dog: string;
// dog = undefined;
// dog = "Lucie";
// dog = null;


//Interface

interface Person {
    name: string,
    age?: number // optional param
}
const sayName = ({ name, age } : Person): string => {
    console.log(name);
    return name;
} 
// this works too
// const sayName = ({ name, age } : Person): Person => {
//     console.log(name);
//     return {name, age};
// } 

// one param still work
sayName({
    name: "Kai"
});
// now the order of inputs doesnt matter;
sayName({
    age: 29,
    name: "Kai"
});


//Enums
// this is numeric enum, by default the vaule is a number
enum Type {
    Video, //0
    BlogPost, //1
    Quiz //2
}

const createContent = (contentType: Type) => {

}

//strings and enumtypes are not the same thing
// createContent('video');
createContent(Type.Video);

console.log(Type.Quiz);

enum Type2{
    Video = 'VIDEO',
    BlogPost = 'BLOGPOST', 
    Quiz = 'QUIZ'
}

const createContent2 = (contentType: Type2) => {

}
createContent2(Type2.Video);



//Classes

class Team {
    private teamName: string;
    // readonly private teamName: string; not changeable

    constructor(teamName) {
        this.teamName = teamName;
    }

    score(): string {
        console.log(this.teamName);
        return 'goal!';
    }
}

const redWings = new Team('Red Wings');
redWings.score;
// redWings.teamName; worng, this is private, you cant see