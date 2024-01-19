import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/CareerForm.module.css";
import image from "../../public/up-arrow.png";

const ImgForm = () => {
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
        <form className={styles.Careers_form}>
          <div className={styles.group_one}>
            <label for="email">Enter Your Email</label>
            <input
              className={styles.email}
              type="text"
              placeholder="abc@gmail.com"
            />
          </div>
          <div className={styles.group_second}>
            <label for="email">Upload Your CV</label>
            <input className={styles.file} type="file" />
          </div>
          <div className={styles.button}>
            <button className={styles.submit_button}>
              Submit&nbsp; <Image src={image} width={20} height={15} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImgForm;
