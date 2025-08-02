import { request } from 'express';
import Note from '../models/note.js'

export const getAllNotes = async (req,res) =>{
  try{
  let notes = await Note.find();
  res.json(notes)
  }
  catch(err){
    console.error("error in getAllNotes controller ",err)
    res.json({message:"internal server error"})
  }
}

export async function getNoteByID(req,res){
   try{
      let note = await Note.findById(req.params.id)
      res.send(note)
   }catch(err){
       res.json({message:"error occured finding the note"})
   }
}

export const createNotes = async (req, res) => {
   try{
      const {title,content} = req.body
      const newNote = new Note({title,content})
      await newNote.save()
      res.json({message:"note created successfully"})
   }
   catch(err){
    console.error("error in createNotes ", err)
    res.json({message:"internal server error"})
   }
}

export const updateNotes =  async (req, res) => {
  try{
    const {title,content} = req.body
    let updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{new:true})
    res.json(updatedNote)
  }
  catch(err){
    console.log("error in updating the note")
    res.json({message:"error in updating the note"})
  }
}

export const deleteNotes = async (req, res) => {
  try{
    let deletedNote = await Note.findByIdAndDelete(req.params.id)
    if(!deletedNote) return res.json({message:"Note not found"});
    res.json(deletedNote);
  }catch(err){
    console.log("error occured deleting the notes")
    res.json({message:"error in deleting the note"})
  }
}