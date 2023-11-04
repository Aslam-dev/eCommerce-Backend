import mongoose from "mongoose";
import Product from "../models/products";

const getProduct = async (req: any,res: any) => {
    const product =await Product.find();
    console.log(product);
    try{
        res.status(200).jason(product);
    } catch (error){
        res.status(404).json({ error: error });
    }

}

const createProduct = async (req:any,res:any) =>{
    const body = req.body;
    const newProduct = new Product({
        ...body
    });

    try{
       await newProduct.save();
       res.status(201).jason(newProduct);
    } catch(error){
        res.status(409).json({ error: error });
    }
}

export {getProduct,createProduct};