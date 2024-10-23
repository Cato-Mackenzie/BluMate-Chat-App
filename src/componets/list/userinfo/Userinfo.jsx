import "./userinfo.css"

const Userinfo = () =>{
    return (
        <div className="userinfo">
            <div className="user">
                <img src ="./avatar.png"></img>
                <h4 className="username">Cato Mackenzie</h4>
            </div>
            <div className="icon">
                <img src="./more.png" alt="user icon" />
                <img src="./video.png" alt="user icon" />
                <img src="./edit.png" alt="user icon" />
            </div>
        </div>
    )
}

export default Userinfo;