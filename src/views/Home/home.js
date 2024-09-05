import React from 'react'
import './home.css'
import HomeImg from './home-illus.png'
import TimeImg from './../../img/time.png'
import StorageImg from './../../img/storage.png'
import InterfaceImg from './../../img/interface.png'
import FeatureCard from './../../components/FeatureCard/FeatureCard'

function home() {
    return (
        <div>
            <div class="secondary">
                <h1 class="text-center highlight"><u>Note Box</u></h1>
                <p class="text-center text">
                    "Your Organized Space for Every Thought"
                </p>
            </div>
            <div class="content">
                <div>
                    <img class="home-img" src={HomeImg} alt="img" />
                </div>
                <div>
                    <p class="text text-center content-txt">
                        Note Box is a simple yet powerful note-taking app designed to effortlessly capture, organize, and manage your ideas. Whether it is quick thoughts, to-do lists, or detailed notes, everything stays neatly stored and accessible. With intuitive features and a clean interface, Note Box is your go-to space for inspiration and tasks—always ready when you need it.</p>
                    <p class="text text-center ">
                        <b>Start making notes by clicking here...</b>
                    </p>
                    <div class="btn-container">
                        <button class="action-btn">Add Task</button>
                        <button class="action-btn">Show Task</button>
                    </div>
                </div>
            </div>
            <div>
                <h3 class="text-center highlight">
                    Key features
                </h3>

                <div class="feature-container">
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
                            <div dangerouslySetInnerHTML={{ __html: `<b>Clean Interface</b><br/>A simple, intuitive design that keeps you focused on your notes.` }} />
                        }
                    />
                </div>
            </div>
        </div>

    )
}

export default home