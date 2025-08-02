import { NotebookIcon } from "lucide-react";
import { Link } from "react-router-dom";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-black rounded-full p-8">
        <NotebookIcon className="size-10 text-white" />
      </div>
      <h3 className="text-2xl font-bold">No notes yet</h3>
      <p className="text-base-content/70">
        Ready to organize your thoughts? Create your first note to get started on your journey.
      </p>
      <Link to="/create" className="btn bg-black text-white pl-3 pr-3 pt-2 pb-3 rounded-xl">
        Create Your First Note
      </Link>
    </div>
  );
};
export default NotesNotFound;
