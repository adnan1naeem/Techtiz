import React, { useRef } from "react";

import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import styles from "../../styles/HomeForm.module.css";

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
        paddingLeft: "5px",
        paddingRight: "5px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <div style={{ marginBottom: "7px" }}>
            <select className={styles.select} id="selection" name="question">
              <option value="how">How Can we help you?</option>
              <option value="web">Web Application</option>
              <option value="ui/ux">UI/UX</option>
              <option value="mob-app">Mobile Application</option>
              <option value="mob-app">SQA</option>
            </select>
          </div>

          <div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                gap: "4%",
              }}
            >
              <input
                className={styles.input}
                type="text"
                placeholder="First Name"
                name="from_name"
              />

              <input
                className={styles.input}
                type="text"
                placeholder="Last Name"
                name="from_lastname"
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                gap: "4%",
              }}
            >
              <input
                className={styles.input}
                type="text"
                placeholder="E-mail Address"
                name="from_email"
              />
              <input
                className={styles.input}
                type="text"
                placeholder="Phone"
                name="from_phone"
              />
            </div>

            <textarea
              className={styles.textarea}
              placeholder="Message"
              rows={8}
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
      </div>

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
