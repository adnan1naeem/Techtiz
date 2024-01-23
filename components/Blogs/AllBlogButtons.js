import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import BlogButton from "./BlogButton";
import styles from "../../styles/Blog.module.css";
import SmallTagCard from "./SmallTagCard";

function AllBlogButton({ onTagClick }) {
  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagClick = (tag) => {
    onTagClick(tag);
    setSelectedTag(tag);
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "20%", lg: "22%", xl: "20rem" },
        marginTop: "1%",
        // marginLeft: { xs: "20%", sm: "0%" },

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <form className={styles.nosubmit}>
          <input
            className={styles.inputsubmit}
            type="search"
            placeholder="Search..."
          />
        </form>
        <Typography
          sx={{
            color: "#153A5F",
            fontWeight: "600",
            fontSize: "30px",
            marginTop: "3%",
          }}
        >
          All Tags
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "5%", width: "100%" }}>
        {selectedTag ? (
          <Box sx={{ mt: "-5%", ml: "-15%" }}>
            <SmallTagCard />
            <SmallTagCard />
            <SmallTagCard />
            <SmallTagCard />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",

              flexDirection: {
                xs: "row",
                sm: "row",
                md: "column",
                lg: "column",
              },
            }}
          >
            <BlogButton
              text="Best Practices"
              onClick={() => handleTagClick("Best Practices")}
            />
            <BlogButton
              text="Business Strategy"
              onClick={() => handleTagClick("Business Strategy")}
            />
            <BlogButton
              pr="75px"
              text="Case Study"
              onClick={() => handleTagClick("Case Study")}
            />
            <BlogButton
              text="Flutter"
              pr="68px"
              onClick={() => handleTagClick("Flutter")}
            />
            <BlogButton
              text="Guides"
              pr="62px"
              onClick={() => handleTagClick("Guides")}
            />
            <BlogButton
              text="Latest News"
              onClick={() => handleTagClick("Latest News")}
            />
            <BlogButton
              text="Mobile Apps"
              onClick={() => handleTagClick("Mobile Apps")}
            />
            <BlogButton
              text="MVPs"
              pr="75px"
              onClick={() => handleTagClick("MVPs")}
            />
            <BlogButton
              text="Myth Buster Series"
              onClick={() => handleTagClick("Myth Buster Series")}
            />
            <BlogButton
              text="Project Management"
              onClick={() => handleTagClick("Project Management")}
            />
            <BlogButton
              text="React Native"
              onClick={() => handleTagClick("React Native")}
            />
            <BlogButton
              text="Software Development"
              onClick={() => handleTagClick("Software Development")}
            />
            <BlogButton
              text="Staff Augmentation"
              onClick={() => handleTagClick("Staff Augmentation")}
            />
            <BlogButton
              text="Tech Trends"
              onClick={() => handleTagClick("Tech Trends")}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default AllBlogButton;
