import React, { useState } from 'react'
import './add.css'
import HomeButton from '../../components/HomeButton/HomeButton'
import EmojiPicker, { Emoji } from 'emoji-picker-react';
import toast, { Toaster } from 'react-hot-toast';

function Add() {
  const [title, setTitle] = useState("");
  const [decription, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [emoji, setEmoji] = useState("");
  const [openEmojiDialog, setOpenEmojiDialog] = useState(false);

  const addNote = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    const noteObject = {
      title,
      decription,
      category,
      emoji,
    };

    notes.push(noteObject);

    localStorage.setItem("notes", JSON.stringify(notes));

    toast.success("Note added succesfully!");

    setTitle("");
    setCategory("");
    setDescription("");
    setEmoji("");
  };

  return (
    <div>
      <div className="secondary">
        <h2 className="text-center highlight">📝Add Note</h2><hr></hr>
      </div>
      <div className="user-input-container">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            console.log(e.target.value);
            setTitle(e.target.value);
          }}
          className="user-input"
        />

        <input
          type="text"
          placeholder="Description"
          value={decription}
          onChange={(e) => {
            console.log(e.target.value);
            setDescription(e.target.value);
          }}
          className="user-input"
        />

        <select className="user-input user-input-category"
          value={category}
          onChange={(e) => {
            console.log(e.target.value);
            setCategory(e.target.value);
          }}
        >
          <option value="">Category</option>
          <option value="shopping">Shopping</option>
          <option value="health">Health</option>
          <option value="learning">Learning</option>
          <option value="personal">Personal</option>
          <option value="work">Work</option>
        </select>

        <div className="user-input" onClick={() => setOpenEmojiDialog(true)}
        >
          {emoji ? emoji : "Select Emoji"}
        </div>

        <EmojiPicker
          open={openEmojiDialog}
          height={"350px"}
          width={""}
          Theme={"dark"}
          onEmojiClick={(emojiObject) => {
            setEmoji(emojiObject.emoji)
            setOpenEmojiDialog(false)
          }}
          className="emoji-picker" />


        <button
          type="button"
          onClick={addNote}
          className="action-btn add-action-btn">
          +Add Note
        </button>
      </div>
      <HomeButton />
    </div>
  );
}

export default Add