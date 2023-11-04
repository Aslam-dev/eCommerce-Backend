import mongoose from "mongoose";
import Product from "../models/products";

const getProduct = async (req: any,res: any) => {
    const product =await Product.find();
    console.log(product);
    try{
        res.status(200).jason(product);
    } catch (error){

    }

}

const createProduct = (req:any,res:any) =>{
    try{

    } catch(error){

    }
}

export {getProduct,createProduct};