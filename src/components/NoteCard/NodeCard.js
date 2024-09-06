import React from 'react'
import "./NodeCard.css"
import DeleteImg from "./delete-img.png"

function deleteNote(index){
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(savedNotes));

    window.location.reload()
}

function NoteCategory({category}){

    const CATEGORY_EMOJIS = {
        "shopping":"🛒",
        "work":"💼",
        "personal":"🙎",
        "learning":"📖",
        "health":"💪",
    }

    const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();


    return(
        <div className={`note-card-category bg-${category}`}> <span className="note-category-emoji">
            {CATEGORY_EMOJIS[category]}</span>
            {formattedCategory}
        </div>
    )
}

function NodeCard({index, title, description, category, emoji}) {
  return (
    <div className="note-card">
        <div className="note-card-emoji">{emoji}
        </div>
        <div>
            <h2 className="note-card-title">{title}</h2>
            <p className="note-card-description">{description}</p>
            <NoteCategory category={category}/>
            <img 
            src={DeleteImg}
            className="del-img"
            onClick={()=>{
                deleteNote(index);
            }}/>
        </div>
    </div>
  )
}

export default NodeCard