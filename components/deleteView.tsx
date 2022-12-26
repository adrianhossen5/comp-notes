import React, { useState } from 'react';
import DeleteModal from './deleteModal';

const DeleteView = (props: { notes: any }) => {
  const [deleteView, setDeleteView] = useState(false);
  const note = props.notes;

  return (
    <button
      onClick={() => {
        setDeleteView(!deleteView);
      }}
    >
      <div>
        <div className={`${deleteView ? '' : 'hidden'}`}>
          <DeleteModal notes={note} />
        </div>
        <div
          className="h-[17rem] outline bg-stone-50
            p-7 transition-transform hover:-translate-y-2 rounded-lg"
        >
          <div className="text-right break-all">{note.date}</div>
          <div className="mb-1 text-lg font-bold">{note.title}</div>
          <p className="mb-4 text-md text-left break-all">{note.note}</p>
        </div>
      </div>
    </button>
  );
};

export default DeleteView;
