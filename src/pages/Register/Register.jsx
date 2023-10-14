import "./register.css"

export default function Register() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <div className="loginLogo"> Welcome To Somto Social</div>
                    <span className="loginDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, cumque!</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                    <input type="text" className="loginInput" placeholder="Enter Your Username"/>
                        <input type="Email" className="loginInput" placeholder="Enter Your Email"/>
                        <input type="password" className="loginInput" placeholder="Enter Your Password"/>
                        <input type="password" className="loginInput" placeholder="Enter Your Password Again"/>
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">
                            Log Into Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
