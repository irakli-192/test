export interface item{
    id:number;
    content:string;
    createdAt:string;
    score:number;
    user:user;
    replies:object[];
}
// interface replies{
//     content:string;
//     createAt:string;
//     id:number;
//     replyingTo:string;
//     score:number;
    
// }
interface user{
    image:image;
    username:string;
}

interface image{
    png:string;
    webp:string
}