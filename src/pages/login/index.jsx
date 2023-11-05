import React, { useEffect, useState } from "react";
import "./style.css";
import fgslogo from "../../assets/img/fgs-logo.jpeg";
import { useNavigate } from "react-router-dom";
import ReactSwitch from "react-switch";
import { ThemeContextProvider } from "../../components/ThemeContext";

function Login() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Retrieve theme choice from local storage or any other persistence mechanism
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Set default theme if no theme is stored
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // Store the theme choice in localStorage
    localStorage.setItem("theme", newTheme);
  };

  const navigate = useNavigate();
  //menyimpan pesan error
  const [errorMessages, setErrorMessages] = useState({});
  //menyimpan login berhasil
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [loggedInUser, setLoggedInUser] = useState(null);
  // const themeChange = useContext(ChangeTheme);

  console.log(theme);

  //database
  const usersData = [
    {
      username: "dery",
      email: "muhammaddery65@gmail.com",
      password: "123456",
    },
    {
      username: "fajar",
      email: "fajar@gmail.com",
      password: "123456",
    },
  ];

  // error message
  const errors = {
    email: "Invalid email or password",
  };

  //submit
  const handleSubmit = (event) => {
    event.preventDefault();

    //email and passwd from doc forms
    let { email, password } = document.forms[0];

    const userActive = usersData.find(
      (user) => user.email === email.value && user.password === password.value
    );

    if (userActive) {
      localStorage.setItem("username", userActive.username);
      // setLoggedInUser(userActive);
      setIsSubmitted(true);
      navigate("/app");
    } else {
      setErrorMessages({ name: "email", message: errors.email });
    }
  };

  // function handleChangeTheme() {
  //   setTheme("dark");
  // }

  // const ChangingTheme = useContext(ChangeTheme);
  // console.log(ChangingTheme);

  return (
    <ThemeContextProvider value={{ theme, toggleTheme }}>
      <div className="helpdesk-login">
        <div className="lgn-left-side">
          <h2>Real Time Trading Spesialist</h2>
          <p>
            We Are a Market Leader In IDX Trading System Specialist in Realtime
            Trading System IDX Official Vendor
          </p>
        </div>
        <div className="lgn-right-side" id={theme}>
          <div className="lgn-right-side-head">
            <img src={fgslogo} alt="fgs" className="fgs" />
            <h1>Helpdesk Ticketing System</h1>
            <p>Signing to your account</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div
              className={isSubmitted && errorMessages ? "hide" : "showError"}
            >
              {errorMessages.message && errorMessages.message}
            </div>

            <input
              type="text"
              name="email"
              placeholder="Email"
              className="lgn-input"
              required
            />
            <br />
            <br />
            <div className={isSubmitted ? "hide" : "showError"}>
              {errorMessages.message}
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="lgn-input"
              required
            />
            <br />
            <br />
            <button className="btn-login">Login</button>
            {isSubmitted}

            <br />
            <br />
            <p>
              Having trouble logging in? contact us{" "}
              <a href="admin" className="anchor">
                admin@fgsinfotama.com
              </a>
            </p>
            <div className="switch">
              <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
              <label>{theme === "dark" ? "Dark Mode" : "Light Mode"}</label>
            </div>
          </form>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default Login;
