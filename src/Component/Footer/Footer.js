import { Box, Typography } from "@mui/material";
import React from "react";
import FooterLogoCard from "../FooterCard/FooterLogoCard";
import FooterCard from "../FooterCard/FooterCard";
import FooterReach from "../FooterCard/FooterReach";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <Box sx={{ background: "#F8F8F8", paddingTop: "3%", marginTop: "4%" }}>
      <Box
        sx={{
          display: "flex",
          gap: "6%",
          justifyContent: "center",
          flexWrap: "wrap",
          paddingBottom: "5%",
        }}
      >
        <FooterLogoCard />
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <FooterCard
            title="Company"
            text1="About"
            text2="Industry"
            text3="Case Study"
            text4="Contact Us"
            text5="Privacy Policy"
          />
          <FooterCard
            title="Services"
            text1="Mobile App Development"
            text2="Web Development"
            text3="UI/UX Design"
            text4="SQA"
          />
          <FooterCard title="Resources" text1="Careers" text2="Blog" />
          <FooterReach />
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "2%",
          borderTop: "1px solid #ccc",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          paddingLeft: "10%",
          paddingRight: "10%",
          paddingTop: "5%",
          paddingBottom: "2.5%",
        }}
      >
        <Box>
          <Typography sx={{ color: "#153A5F", fontWeight: "100" }}>
            © 2023 Techtiz. All Rights Reserved.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          {" "}
          <FaLinkedinIn style={{ fontSize: "28px", color: "#153A5F" }} />
          <FaFacebookF style={{ fontSize: "24px", color: "#153A5F" }} />
          <AiFillInstagram style={{ fontSize: "28px", color: "#153A5F" }} />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
