import React, { useState } from 'react'
import './add.css'
import HomeButton from '../../components/HomeButton/HomeButton'
import EmojiPicker, { Emoji } from 'emoji-picker-react';

function Add() {
  const [title, setTitle] = useState("");
  const [decription, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [emoji, setEmoji] = useState("");
  const [openEmojiDialog, setOpenEmojiDialog] = useState(false);

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

      <select className="user-input user-input-category">
        <option>category</option>
        <option value="shopping">Shopping</option>
        <option value="health">Health</option>
        <option value="learning">Learning</option>
        <option value="personal">Personal</option>
        <option value="work">Work</option>
      </select>

      <div className="user-input" onClick={() => setOpenEmojiDialog(true)}
       >
        {emoji? emoji:"Select Emoji"}
      </div>

      <EmojiPicker
          open={openEmojiDialog}
          height={"400px"}
          Theme={"dark"}
          onEmojiClick={(emojiObject) => {
            setEmoji(emojiObject.emoji)
            setOpenEmojiDialog(false)
          }}
          className="emoji-picker"/>

      <div className="addpge-btn-container">
        <button
          type="button"
          onClick={() => {
            setTitle("");
            setCategory("");
            setDescription("");
            setEmoji("");
          }}
          className="action-btn">
          Add Note
        </button>
        
      </div>

      <HomeButton />
    </div>
  );
}

export default Add