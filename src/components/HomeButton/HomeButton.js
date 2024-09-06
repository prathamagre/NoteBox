import React from 'react'
import "./HomeButton.css"
import HomeBtnImg from "./../../assets/home-btn.png"
import { Link } from 'react-router-dom'

function HomeButton() {
  return (
    <Link to={"/"}>
        <img src= {HomeBtnImg} alt="home-btn-img" className="homebtn-img"/>
    </Link>
  )
}

export default HomeButton