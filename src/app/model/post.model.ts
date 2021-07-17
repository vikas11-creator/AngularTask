import { CommentModel } from "./comment.model";

export class PostModel{
    id:number;
    user_id:number;
    title:string;
    body:string;
    isCommentOpen:Boolean;
    comments: CommentModel
}