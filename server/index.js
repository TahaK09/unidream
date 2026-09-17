import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app=express(); app.use(cors()); app.use(express.json());
const leadSchema=new mongoose.Schema({name:{type:String,required:true},phone:{type:String,required:true},email:{type:String,required:true},country:String},{timestamps:true});
const Lead=mongoose.model('Lead',leadSchema);
app.get('/api/health',(req,res)=>res.json({ok:true,service:'UniDream API'}));
app.post('/api/leads',async(req,res)=>{try{if(!process.env.MONGODB_URI)return res.status(503).json({message:'MongoDB is not configured'}); const lead=await Lead.create(req.body); res.status(201).json({ok:true,id:lead._id});}catch(e){res.status(400).json({ok:false,message:e.message});}});
app.get('/api/testimonials',async(req,res)=>{if(!process.env.MONGODB_URI)return res.json([]); try{const rows=await Lead.find().limit(0);res.json(rows)}catch(e){res.status(500).json({message:e.message})}});
const port=process.env.PORT||5000;
if(process.env.MONGODB_URI){mongoose.connect(process.env.MONGODB_URI).then(()=>console.log('MongoDB connected')).catch(e=>console.error('MongoDB connection error:',e.message));}
app.listen(port,()=>console.log(`UniDream API running on http://localhost:${port}`));
