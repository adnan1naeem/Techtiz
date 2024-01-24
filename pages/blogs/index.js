import { Box } from "@mui/material";
import AllBlogButton from "../../components/Blogs/AllBlogButtons";
import AllBlogs from "../../components/Blogs/AllBlogs";
import SalesTeam from "../../components/SalesTeam/SalesTeam";
import React from "react";

function Blog() {
  const [selectedTag, setSelectedTag] = React.useState("");

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };
  return (
    <Box>
      <Box
        sx={{
          marginTop: {
            xs: "30%",
            sm: "18%",
            md: "14%",
            lg: "11%",
          },
          bg: "#abb8c3",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1%",
            justifyContent: "center",
          }}
        >
     <AllBlogs selectedTag={selectedTag} />
          <AllBlogButton onTagClick={handleTagClick} />
        </Box>
        <SalesTeam />
      </Box>
    </Box>
  );
}
export default Blog;
