import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import React, { useState } from "react";

const Chat = () => {
    const [open, setOpen] = useState(false);
    const [text, setText] = useState("");

    const handlemoji = (e) => {
        setText((prev) => prev + e.emoji);
        setOpen(false);
    };

    return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="User" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>User Description</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" className="img1" />
                    <img src="./video.png" alt="" className="img1" />
                    <img src="./info.png" alt="" className="img1" />
                </div>
            </div>

            <div className="center">
                <div className="message">
                    <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="User"className="img4" />
                    <div className="text">
                        <p>Hello There.</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="messageown">
                   
                    <div className="text">
                        <img src="https://images.unsplash.com/photo-1422493757035-1e5e03968f95?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="chatimg"/>
                        <p>Hello There. hjfhwiehqtiuuyruwq jgrhjgheruo    rjgjrejkg erng engkner g en gebgkwbrwr</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="message">
                    <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="User" className="img4"/>
                    <div className="text">
                        <p>Hello There.</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="messageown">
                    <div className="text">
                        <p>Hello There.</p>
                        <span>1 min ago</span>
                    </div>
                </div>
            

            <div className="message">
                    <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="User" className="img4"/>
                    <div className="text">
                        <p>Hello There.</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="messageown">
                    <div className="text">
                        <p>Hello There.</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="message">
                    <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="User" className="img4"/>
                    <div className="text">
                        <p>Hello There.</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="messageown">
                    <div className="text">
                        <p>Hello There.</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className="message">
                    <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="User" className="img4"/>
                    <div className="text">
                        <p>Hello There.</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                </div>
                

            <div className="bottom">
                <div className="icon">
                    <img src="./img.png" alt="" className="img3" />
                    <img src="./camera.png" alt="" className="img3" />
                    <img src="./mic.png" alt="" className="img3" />
                </div>
                <input 
                    type="text" 
                    placeholder="Type a message..." 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                />
                <div className="emoji">
                    <img src="./emoji.png" alt="Emoji" onClick={() => setOpen((prev) => !prev)} />
                    {open && (
                        <div className="picker">
                            <EmojiPicker onEmojiClick={handlemoji} />
                        </div>
                    )}
                </div>
                <button className="sendbut">Send</button>
            </div>
        </div>
    );
};

export default Chat;
