import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

import "./Input.css";

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bjonnc9",
        "template_abgkrjh",
        form.current,
        "eEcJ_I0U5N3991inc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 7000);
  };

  const [showAlert, setShowAlert] = React.useState(false);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <select id="selection" name="question">
            <option value="how">How Can we help you?</option>
            <option value="web">Web Application</option>
            <option value="ui/ux">UI/UX</option>
            <option value="mob-app">Mobile Application</option>
            <option value="mob-app">SQA</option>
          </select>
        </div>

        <div style={{ width: "100%" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              gap: "4%",
            }}
          >
            <input type="text" placeholder="First Name" name="from_name" />

            <input type="text" placeholder="Last Name" name="from_lastname" />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              gap: "4%",
            }}
          >
            <input type="text" placeholder="E-mail Address" name="from_email" />
            <input type="text" placeholder="Phone" name="from_phone" />
          </div>

          <textarea
            placeholder="Message"
            rows={12}
            cols={60}
            name="message"
          ></textarea>
        </div>

        <Button
          type="submit"
          variant="contained"
          onClick={handleClick}
          sx={{
            marginTop: "5px",
            marginBottom: "3px",
            width: "27%",
            height: "45px",
            fontSize: "15px",
            fontWeight: "bold",
            color: "#18B0E6",
            border: "2px solid #18B0E6",
            background: "white",
            boxSizing: "border-box",
            boxShadow: "none",
            borderRadius: "5px",
            marginLeft: "72%",

            "&:hover": {
              backgroundColor: "#303846",
              border: "2px solid #303846 ",
              color: "white ",
              boxShadow: "none",
            },
          }}
        >
          Submit
        </Button>
      </form>

      {showAlert && (
        <Alert
          sx={{ mt: "20px" }}
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
        >
          Your Form Submitted Successfully
        </Alert>
      )}
    </div>
  );
}

export default Form;