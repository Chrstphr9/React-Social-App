import "./login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <div className="loginLogo">Somto Social</div>
                    <span className="loginDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, cumque!</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="Email" className="loginInput" placeholder="Enter Your Email"/>
                        <input type="password" className="loginInput" placeholder="Enter Your Password"/>
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegisterButton">
                            Create A New Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
