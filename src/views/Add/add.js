import React, { useState} from 'react'
import './add.css'
import HomeButton from '../../components/HomeButton/HomeButton'

function Add() {
  const [title, setTitle] = useState("");

  return (
    <div>
      <div className="secondary">
        <h2 className="text-center highlight">📝Add Note</h2><hr></hr>
      </div>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => {
          console.log(e.target.value);
          setTitle(e.target.value);
        }}
      />
      <button 
      type="button" 
      onClick={()=>{
        setTitle("");
      }}>
        clear
      </button>

      <HomeButton />
    </div>
  );
}

export default Add