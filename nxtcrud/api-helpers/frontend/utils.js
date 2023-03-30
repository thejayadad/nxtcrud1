

import axios from "axios"

//FRONTEND GET ALL POST
export const getAllPost = async() => {
    const res = await axios.get("http://localhost:3000/api/posts")
    if(res.status !== 200){
        return new Error("Internal Server Error")
    }
    const data = await res.data?.posts;
    return data;
}

//FRONTEND GET FEATURED POST
export const getFeaturedPosts = async () => {
    const posts = await getAllPost();
    if(posts.length == 0){
        return [];
    }
    const featuredPosts = posts.filter((post) => post.featured === true)

    return featuredPosts;
}

//SEND A POST
export const sendPost = async (data) => {
    const res = await axios.post("http://localhost:3000/api/posts", {
        title: data.title,
        content: data.content,
        featured: data.featured
    })

    if(res.status !== 200){
        return new Error("Rejected by Database sorry")
    }
    const resData = await res.data;
    return resData;
}

//GET POST BY ID
export const getPostFromId = async (id) => {
    const res = await axios.get(`http://localhost:3000/api/${id}`)
    if(res.status !== 200){
        return new Error("Unable to locate ID")
    }
    const data = await res.data;
    return data.post;
}

//UPDATE POST
export const updatePost = async (id, data) => {
    const res = await axios.put(`http://localhost:3000/api/${id}`, {
        title: data.title,
        content: data.content,
        featured: data.featured
    })
    if(res.status !== 200){
        return new Error("Unable to update")
    }
    const resData = await res.data;
    return resData;
}

//DELETE POST
export const deletePost = async (id) => {
    const res = await axios.delete(`http://localhost:3000/api/${id}`)
    if(res.status !== 200){
        return new Error("Unable to delete")
    }
    const resData = await res.data;
    return resData
}