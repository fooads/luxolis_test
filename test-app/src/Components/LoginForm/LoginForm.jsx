import "./LoginForm.css";

export default function LoginForm(){
    return (
        <div className="form">
            
            <span className='icon'></span>


            <div className="input-box">
            <span className="icon-user"></span>
                <input type="text" placeholder="USERNAME" required />
            </div>

            <div className="input-box">
            <span className="icon-password"></span>
                <input type="password" placeholder="PASSWORD" required />
            </div>

            <button type="submit">LOGIN</button>

            <div className="forgot-password">
                <a href="#">Forgot password?</a>
            </div>

        </div>
    );
}