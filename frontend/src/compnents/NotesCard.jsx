import { PenSquareIcon, Trash2Icon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { api } from '../lib/axios.js';
const NotesCard = ({ note, setNotes }) => {
  const handleDelete = async (event) => {
    event.preventDefault();
    await api.delete(`/route/${note._id}`);
    toast.success('Deleted successfully');
    setNotes((setNotes) => setNotes.filter((items) => items._id !== note._id));
  };
  return (
    <Link
      to={`/note/${note._id}`}
      div
      className="bg-black w-full pl-4 pt-5 pb-6 rounded-xl flex flex-col gap-4 text-white border-t-5 border-green-200"
    >
      <div>{note.title}</div>
      <div>{note.content}</div>
      <div className="flex justify-between">
        <div>{note.createdAt}</div>
        <div className="flex justify-between w-[10%]">
          {/* <PenSquareIcon/> */}
          <Trash2Icon onClick={handleDelete} className="text-red-400 ml-1" />
        </div>
      </div>
      <div></div>
    </Link>
  );
};

export default NotesCard;
