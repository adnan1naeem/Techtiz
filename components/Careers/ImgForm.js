import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/CareerForm.module.css";
import image from "../../public/up-arrow.png";

const ImgForm = () => {
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFileChange = (event) => {
    console.log('==>', (event.target))
    if (event.target.files.length > 0) {
      const path = (event.target.files[0])
      console.log(event.target.files)
      setFile(path);
    }
  };

  const handleSubmit = async (event) => {

    event.preventDefault();
    const formData = new FormData();
    console.log(file)
    formData.append('path', file);
    formData.append('email', email);

    try {
      const response = await fetch('/api/emailHandler', {
        method: 'POST',
        body: formData,
      });
      console.log("response:: ", response);
      if (response.ok) {
        alert('Submitted!');
      } else {
        throw new Error('Failed to upload file and send email.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.career}>Careers</div>

      <div className={styles.join_techtiz}>
        <h1 className="first_name">Join Techtiz's</h1>
        <h2 className="last_name">Flourishing community</h2>
      </div>

      <div className={styles.text_line}>
        <p>
          TechTiz seeks aspiring software engineers, nurturing them into
          professionals in months.
        </p>
      </div>

      <div className={styles.form_section}>
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
            <label htmlFor="file">Upload Your CV</label>
            <input
              required
              className={styles.file}
              type="file"
              onChange={handleFileChange}
              accept="application/pdf"
            />
          </div>
          <div className={styles.button}>
            <button type="submit" className={styles.submit_button}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImgForm;
