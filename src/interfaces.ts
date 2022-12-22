
export interface Person {
    name: string,
    age?: number // optional param
}

enum Job { 
    WebDev, 
    WebDesigner, 
    PM }

export default Job;

export enum Type2{
    Video = 'VIDEO',
    BlogPost = 'BLOGPOST', 
    Quiz = 'QUIZ'
}