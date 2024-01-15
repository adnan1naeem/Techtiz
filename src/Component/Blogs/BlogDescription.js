import { Box, Typography } from "@mui/material";
import Navbar from "../NavBar/NavBar";
import { Link, useLocation } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";
import BlogLightText from "./BlogLightText";
import BlogBlodText from "./BlogBlodText";
import React from "react";
import BlogSecondCard from "./BlogSecondCard";
import blogData from "./BlogData";
import RelatedCard from "./RelatedCard";
import SalesTeam from "../SalesTeam/SalesTeam";
import Footer from "../Footer/Footer";

function BlogDescription() {
  const location = useLocation();
  const item = location.state;

  const renderContent = () => {
    const keys = Object.keys(item);
    const contentArray = [];

    const filteredKeys = keys.filter(
      (key) => !["title", "image", "date"].includes(key.toLowerCase())
    );

    const uniquePrefixLetters = Array.from(
      new Set(filteredKeys.map((key) => key.charAt(0).toUpperCase()))
    );

    uniquePrefixLetters.forEach((prefix, index) => {
      const contentKeys = filteredKeys.filter((key) => key.startsWith(prefix));
      const content = contentKeys.map((key) => item[key]);

      if (prefix === "B" || prefix === "J") {
        contentArray.push(<BlogBlodText key={index} text={content} />);
      } else {
        contentArray.push(<BlogLightText key={index} text={content} />);
      }
    });

    return contentArray.map((content, index) => (
      <React.Fragment key={index}>{content}</React.Fragment>
    ));
  };

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          marginTop: {
            xs: "25%",
            sm: "12%",
            md: "8%",
            lg: "6.5%",
            xl: "4%",
          },
        }}
      >
        <Box position="relative">
          <img src={item?.image} alt="" style={{ width: "100%" }} />
          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#FFFFFF",
              width: "85%",
              textAlign: "center",
              fontSize: { xs: "25px", lg: "55px" },
              fontWeight: "100",
            }}
          >
            {item?.title}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "5%",
            justifyContent: "center",
            flexWrap: "wrap",
            mt: "2%",
          }}
        >
          <Box sx={{ width: { xs: "80%", md: "50%", lg: "43em" } }}>
            <Link
              to="/blogs-date"
              style={{ textDecoration: "none" }}
              state={item}
            >
              <Typography
                sx={{
                  backgroundColor: "#E9E9E9",
                  borderTop: "2px solid #BBBBBB",
                  borderBottom: "2px solid #BBBBBB",
                  padding: "14px",
                  color: "#54595F",
                  mb: "5%",
                  mt: "5%",
                }}
              >
                <FaCalendar
                  style={{
                    color: "#6EC1E4",
                    marginRight: "1%",
                    fontSize: "14px",
                  }}
                />
                {item?.date}
              </Typography>
            </Link>
            {renderContent()}
          </Box>
          <Box sx={{ mt: "3%" }}>
            <BlogSecondCard />
            <BlogSecondCard />
            <BlogSecondCard />
          </Box>
        </Box>
        <Box sx={{ marginTop: "10%" }}>
          <Typography
            sx={{
              color: "#153A5F",
              fontSize: "1.7em",
              fontWeight: "600",
              borderLeft: "3px solid #18B0E6",
              height: "24px",
              lineHeight: "25px",
              paddingLeft: "10px",
              ml: "11%",
            }}
          >
            Related Stories
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4%",
              justifyContent: "center",
            }}
          >
            <RelatedCard />
            <RelatedCard />
            <RelatedCard />
          </Box>
        </Box>
        <SalesTeam />
        <Footer />
      </Box>
    </Box>
  );
}

export default BlogDescription;
