import mongoose from "mongoose"
import {connectToDataBase} from "../../api-helpers/utils"
import { getAllPosts, add, addPost } from "../../api-helpers/controllers/postController";

export default async function handler(req, res) {
    await connectToDataBase();

    if(req.method === "GET"){
        return getAllPosts(req, res)
    } else if(req.method === "POST"){
        return addPost(req, res)
    }


}