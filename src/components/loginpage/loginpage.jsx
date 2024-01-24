import React from "react";
import "./loginpage.scss";
import Facebooktextlogo from "../../asssets/facebooktextlogo.svg";
import userImage from "../../asssets/createStoryUserImage.jpg";
import { GrFormClose } from "react-icons/gr";
import { FaPlus } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function Loginpage({onLogin}) {
    const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'password') setPassword(value);
    if (name === 'email') setEmail(value);
    setShowPassword(!!value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginClick = () => {
    onLogin(email, password);
  };
  return (
    <div className="loginWrapper">
      <div className="logInContainerWrapper">
        <div className="logInContainer">
          <div className="leftSideLogInSection">
            <div className="textLogo">
              <img src={Facebooktextlogo} alt="" />
            </div>
            <div className="logInTexts">
              <h2>Recent Logins</h2>
              <p>Click your picture or add an account.</p>
            </div>
            <div className="userAccountsWrapper">
              <ul>
                <li>
                  <a href="">
                    <div className="accountCard1">
                      <div className="userImage">
                        <img src={userImage} alt="" />
                      </div>
                      <div className="notificationCounter">
                        <span>
                          <p>5</p>
                        </span>
                      </div>
                      <div className="closeBtn">
                        <i>
                          <GrFormClose />
                        </i>
                      </div>
                      <div className="cardBottomText">
                        <p>Ani</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="addaccount">
                      <div className="plusIcon">
                        <i>
                          <FaPlus />
                        </i>
                      </div>
                      <div className="cardBottomText">
                        <p>Add account</p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="rightSideLogInSection">
            <div className="logInforms">
              <div className="emailInput ">
              <input
              className="logInInputs"
              type="text"
              placeholder="Email or phone number"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
              </div>
              <div className="passwordInput ">
              <input
              className="logInInputs"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
        {password && (
          <button onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
              </div>
              <div className="logInBtn">
          <button onClick={handleLoginClick}>Log In</button>
        </div>  
              <div className="forgotPassword">
                <button>Forgot password?</button>
              </div>
              <div className="logIndivider"></div>
              <div className="createNewAccount">
                <button>Create new account</button>
              </div>
            </div>
            <div className="createPage">
              <p>
                <a href="#">Create a page </a>for a celebrity, brand or
                business.
              </p>
            </div>
          </div>
        </div>
        <div className="logInFotter"></div>
      </div>
    </div>
  );
}
