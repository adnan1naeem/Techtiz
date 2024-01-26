import { Box, Typography, Grid } from "@mui/material";
import AllBlogButton from "../../components/Blogs/AllBlogButtons";
import AllBlogs from "../../components/Blogs/AllBlogs";
import SalesTeam from "../../components/SalesTeam/SalesTeam";
import React, { useEffect, useState } from "react";
import SearchedBlogs from "../../components/Blogs/SearchedBlogs";
import Blogs from '../../components/Blogs/BlogData';

function Blog() {
  const [selectedTag, setSelectedTag] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    setSearchTerm("");
  };

  const searchAndSave = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    const results = Blogs.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);


  return (
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
        {searchResults?.length <= 1 ?
          <>
            <Grid sx={{
              width: '80.5%',
            }}>
              <Typography
                sx={{
                  fontSize: "2.4em",
                  color: "#153A5F",
                  fontWeight: "600",
                }}>
                {`Search Results for: ${searchTerm}`}
              </Typography>
            </Grid>
            <SearchedBlogs data={searchResults} />
          </>
          :
          <AllBlogs selectedTag={selectedTag} />}
        <AllBlogButton search={(e) => searchAndSave(e.target.value)} onTagClick={handleTagClick} />
      </Box>
      <SalesTeam />
    </Box>
  );
}

export default Blog;
