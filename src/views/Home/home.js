import React from 'react'
import './home.css'
import HomeImg from './home-illus.png'
import TimeImg from './../../views/Home/home-imgs/time.png'
import StorageImg from './../../views/Home/home-imgs/storage.png'
import InterfaceImg from './../../views/Home/home-imgs/interface.png'
import FeatureCard from './../../components/FeatureCard/FeatureCard'
import { Link } from 'react-router-dom'

function home() {
    return (
        <div>
            <div className="secondary">
                <h1 className="text-center highlight"><u>Note Box</u></h1>
                <p className="text-center text">
                    "Your Organized Space for Every Thought"
                </p><hr></hr>
            </div>
            <div className="content">
                <div>
                    <img className="home-img" src={HomeImg} alt="img" />
                </div>
                <div className="description">
                    <p className="text text-center content-txt">
                        Note Box is a simple yet powerful note-taking app designed to effortlessly capture, organize, and manage your ideas. <span className="content-part">Whether it is quick thoughts, to-do lists, or detailed notes, everything stays neatly stored and accessible. With intuitive features and a clean interface, Note Box is your go-to space for inspiration and tasks—always ready when you need it.</span></p>
                    <p className="text text-center ">
                        <b>Start making notes by clicking here...</b>
                    </p>
                    <div class="btn-container">
                        <Link to={"/add"}>
                        <button className="action-btn">📝Add Note</button>
                        </Link>
                        <Link to={"/show"}>
                        <button className="action-btn">🧾Show Note</button>
                        </Link>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div>
                <h3 className="text-center highlight">
                    Key features
                </h3>

                <div className="feature-container">
                    <FeatureCard
                        featureImg={TimeImg}
                        featureText={
                            <div dangerouslySetInnerHTML={{ __html: `<b>Quick Capture</b><br/>Easily jot down ideas, thoughts, or tasks in seconds.` }} />
                        }
                    />
                    <FeatureCard
                        featureImg={StorageImg}
                        featureText={
                            <div dangerouslySetInnerHTML={{ __html: `<b>Organized Storage</b><br/>Categorize and organize your notes for easy access anytime.` }} />
                        }
                    />
                    <FeatureCard
                        featureImg={InterfaceImg}
                        featureText={
                            <div dangerouslySetInnerHTML={{ __html: `<b>Clean Interface</b><br/>A simple design that keeps you focused on your notes.` }} />
                        }
                    />
                </div>
            </div>
        </div>

    )
}

export default home