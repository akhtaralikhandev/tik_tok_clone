import "./login.css";
const LoginComponent = () => {
  return (
    <div className="loginComponent">
      <div className="loginComponentWrapper">
        <form action="" className="form">
          <span className="loginSpan">Login</span>
          <div className="inputdiv">
            <input type="text" placeholder="username" className="input" />
            <input type="password" placeholder="password" className="input" />
            <span className="forgetPasswordSpan">forget password</span>
            <button className="button">LOGIN</button>
          </div>
          <div className="loginUsing">
            <span>or login using</span>
            <ul className="iconsList">
              <li>
                <i className="fa fa-facebook facebook" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-google google" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-twitter twitter" aria-hidden="true"></i>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
