import mongoose from "mongoose"

export const connectToDataBase = async () => {
    await mongoose.connect("mongodb+srv://thejayadad:Football123@cluster0.cs6z8qe.mongodb.net/test"
    ).then(( ) => console.log("DB COnnected"))
    .catch((err) => console.log("err"))
}