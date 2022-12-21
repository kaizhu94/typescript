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
const sayHello = (word: string): string=> {
    console.log(word);
    return word;
}

sayHello("hi");
sayHello(3 + "");
