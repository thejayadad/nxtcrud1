

import { connectToDataBase } from "../../api-helpers/utils";
import { deletePost, getPostById, updatePost } from "../../api-helpers/controllers/postController";

export default async function handler(req, res){
    await connectToDataBase();

    if(req.method === "PUT"){
        return updatePost(req, res);
    } else if(req.method === "DELETE"){
        return deletePost(req, res);
    } else if(req.method === "GET"){
        return getPostById(req, res)
    }
}