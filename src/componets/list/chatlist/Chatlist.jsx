import "./chatlist.css"
import { useState } from "react";
const Chatlist = () => {
    const [addMode, setAddMode] =useState(false);
    return(
        <div className="chatlist">
            <div className="search">
                <div className="searchbar">
                <img src="./search.png" alt="Search"/>
            <input type="text" placeholder="Search for chats"/>
                </div>
            <img src={addMode ? "./minus.png" : "./plus.png" }alt="Search" className="add"
            onClick = {() => setAddMode((prev) => !prev)}
            />
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" className="img2"/>
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello There.</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" className="img2"/>
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello There.</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" className="img2"/>
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello There.</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" className="img2"/>
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello There.</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" className="img2"/>
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello There.</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" className="img2"/>
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello There.</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" className="img2"/>
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello There.</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" className="img2"/>
                <div className="texts">
                    <span>Jane Doe</span>
                    <p>Hello There.</p>
                </div>
            </div>
        </div>
    )
}

export default Chatlist