import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/CareerForm.module.css";
import axios from "axios";
import { Alert } from '@mui/material';
import { CheckCircleOutline as CheckIcon } from '@mui/icons-material';
import { IoMdArrowRoundUp } from "react-icons/io";

const ImgForm = () => {
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () =>
        ((result) => {
          setFile({ content: result });
        })(reader.result);
    }

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await axios.request({
        url: "/api/emailHandler",
        method: "post",
        data: { email: email, content: file?.content },
        maxBodyLength: Infinity,
      });
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail("");
      setFile(null);
      setTimeout(() => setIsSubmitted(false), 3000);
      event.target.reset();
      fileInputRef.current.value = "";

    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };



  return (
    <div className={styles.main}>
      <div className={styles.career}>Careers</div>

      <div className={styles.join_techtiz}>
        <h1 className={styles.first_name}>Join Techtiz's</h1>
        <h2 className={styles.last_name}>Flourishing Community.</h2>
      </div>

      <div className={styles.text_line}>
        <p>
          TechTiz seeks aspiring software engineers, nurturing them into
          professionals in months.
        </p>
      </div>

      <div className={styles.form_section}>
        <div>
          <form className={styles.Careers_form} onSubmit={handleSubmit}>
            <div className={styles.group_one}>
              <label htmlFor="email">Enter Your Email</label>
              <input
                className={styles.email}
                type="email"
                placeholder="abc@gmail.com"
                value={email}
                required
                onChange={handleEmailChange}
              />
            </div>
            <div className={styles.group_second}>
              <label for="fileUpload">Upload Your CV</label>
              <input
                id="fileUpload"
                required
                ref={fileInputRef}
                className={styles.file}
                type="file"
                onChange={handleFileChange}
                accept="application/pdf"
                style={{ marginRight: "5px", fontWeight: "500", lineHeight: "2px" }}
              />
            </div>
            <div className={styles.button}>
              <button type="submit" className={styles.submit_button} disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit'}
                <IoMdArrowRoundUp />
              </button>
            </div>
          </form>
        </div>
        <div>
          {isSubmitted && (
            <Alert
              sx={{
                mt: "110px", ml: "-39.5rem", width: "20rem",
                "@media screen and (min-width: 100px) and (max-width: 780px)": {
                  mt: "220px",
                  ml: "-38.5rem",
                },
                "@media screen and (min-width: 600px) and (max-width: 628px)": {
                  mt: "220px",
                  ml: "-36.5rem",
                },
                "@media screen and (min-width: 500px) and (max-width: 600px)": {
                  mt: "220px",
                  ml: "-30.5rem",
                },
                "@media screen and (min-width: 440px) and (max-width: 500px)": {
                  mt: "210px",
                  ml: "-24.5rem",
                },
                "@media screen and (min-width: 400px) and (max-width: 440px)": {
                  mt: "310px",
                  ml: "-24.5rem",
                },
                "@media screen and (min-width: 300px) and (max-width: 400px)": {
                  mt: "310px",
                  ml: "-21rem",
                },



              }}
              icon={<CheckIcon fontSize="inherit" />}
              severity="success"
            >
              Your Form Submitted Successfully
            </Alert>
          )}
        </div>


      </div>


    </div>
  );
};

export default ImgForm;
