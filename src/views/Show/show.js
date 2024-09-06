import React, { useEffect, useState } from 'react';
import './show.css'
import HomeButton from '../../components/HomeButton/HomeButton'
import NodeCard from '../../components/NoteCard/NodeCard';

function Show() {
  const [notes,setNotes] = useState([]);

  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem("notes"))||[];
    setNotes(savedNotes);

  },[]);

  return (
    <div>
    <div className="secondary">
      <h2 className="text-center highlight">🧾Show Note</h2><hr></hr>
    </div>
    <div className="notes-container">
    {
      notes.map((note ,index)=>{
        const{title, description, category,emoji} = note;
        return(
            <NodeCard 
            index={index}
            title={title}
            description={description}
            category={category} 
            emoji={emoji}/>
        )
      })
    }
    </div>
    <HomeButton/>
    </div>
    )
}

export default Show