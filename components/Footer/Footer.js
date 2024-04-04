import { Box, Typography } from "@mui/material";
import React from "react";
import FooterLogoCard from "../FooterCard/FooterLogoCard";
import FooterCard from "../FooterCard/FooterCard";
import FooterReach from "../FooterCard/FooterReach";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

function Footer() {
  return (
    <Box sx={{ background: "#F8F8F8", paddingTop: "3%", marginTop: "4%" }}>
      <Box
        sx={{
          display: "flex",
          ml: { xs: "0", sm: "5%", md: "1%" },
          gap: { xs: "2%", md: "2%", lg: "4%" },
          justifyContent: "center",
          flexWrap: "wrap",
          paddingBottom: "5%",
        }}>
        <FooterLogoCard />
        <Box sx={{ marginTop: { xs: "-10%", lg: 0 }, display: "flex", flexWrap: "wrap", gap: "0%" }}>
          <FooterCard
            title="Company"
            text1="About"
            href_one="/about"
            text2="Industries"
            href_two="/industries"
            text3="Case Studies"
            href_three="/portfolios"
            text4="Contact Us"
            href_four="/contact-us"
            text5="Privacy Policy"
            href_five="/"
            mt={{ xs: '10%', sm: 0 }}
          />
          <FooterCard
            title="Services"
            text1="Mobile App Development"
            href_one="/mobile-application"
            text2="Web Development"
            href_two="/website"
            text3="UI/UX Design"
            href_three="/ui-ux-design"
            text4="SQA"
            href_four="/sqa"
          />
          <FooterCard
            title="Resources"
            text1="Careers"
            href_one="/career"
            text2="Blog"
            href_two="/blogs"
            mt={{ xs: '12%', sm: 0 }}
          />
          <FooterReach />
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "-4%",
          borderTop: "1px solid #ccc",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          paddingLeft: { xs: "8%", lg: "10.5%", xl: "18%" },
          paddingRight: { xs: "10%", lg: "10.5%" },
          paddingTop: "3%",
          paddingBottom: "1.5%",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#153A5F",
              fontWeight: 400,
              fontSize: "14px",
              fontFamily: "Mont-Regular, Sans-serif",
              fontWeight: 600,
              "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                fontSize: "13px",
                ml: '-10%',
              },
            }}>
            © 2024 Techtiz. All Rights Reserved.
          </Typography>
        </Box>
        <Box sx={{
          display: "flex", gap: "1rem",
          "@media screen and (min-width: 100px) and (max-width: 467px)": {
            marginTop: "3%",
          },
        }}>
          <Link href="https://www.linkedin.com/company/techtiz/">
            <FaLinkedinIn style={{ fontSize: "24px", color: "#153A5F" }} />
          </Link>
          <Link href="https://www.facebook.com/techtiz">
            <FaFacebookF style={{ fontSize: "20px", color: "#153A5F" }} />
          </Link>
          <Link href="https://www.instagram.com/techtiz.co/">
            <AiFillInstagram style={{ fontSize: "24px", color: "#153A5F" }} />
          </Link>
          <Link href="https://clutch.co/profile/techtiz-0#highlights">
            <img
              src="https://seeklogo.com/images/C/clutch-co-logo-CE7F48313C-seeklogo.com.png"
              style={{ width: "24px", borderRadius: "30px" }}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
