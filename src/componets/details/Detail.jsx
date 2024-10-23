import "./details.css";

const Detail = () => {
    return (
        <div className="detail">
            <div className="userDetails">
                <img src="./avatar.png" alt="User Avatar" className="profileimg" />
                <h2>Jane Doe</h2>
                <p>Some information about the user can be displayed here.</p>
            </div>

            <div className="option">
                <div className="title">
                    <span>Chat Settings</span>
                    <img src="./arrowUp.png" alt="Arrow Icon" />
                </div>
            </div>

            <div className="option">
                <div className="title">
                    <span>Privacy & Help</span>
                    <img src="./arrowUp.png" alt="Arrow Icon" />
                </div>
            </div>

            <div className="option">
                <div className="title">
                    <span>Shared Photos</span>
                    <img src="./arrowUp.png" alt="Arrow Icon" />
                </div>
                </div>

            <div className="option">
                <div className="title">
                    <span>Shared Files</span>
                    <img src="./arrowUp.png" alt="Arrow Icon" />
                </div>
               
            </div>
            <button className="block">Block user</button>
        </div>
    );
}

export default Detail;
