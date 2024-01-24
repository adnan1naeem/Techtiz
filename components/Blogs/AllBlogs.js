import React, { useState } from "react";
import { Box, Pagination, Typography } from "@mui/material";
import BlogsMainCard from "./BlogMainCard";
import blogData from "./BlogData";
import Link from "next/link";
import TagCard from "./TagCard";

function AllBlogs({ selectedTag }) {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredBlogs = selectedTag
    ? blogData.filter((blog) => blog.tags === selectedTag)
    : blogData;
  const currentItems = filteredBlogs.slice(indexOfFirstItem, indexOfLastItem);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", sm: "100%", md: "75%", lg: "55%", xl: "50rem" },
      }}
    >
      <Typography
        sx={{
          ml: "2%",
          fontSize: "2.4em",
          color: "#153A5F",
          fontWeight: "600",
        }}
      >
        {selectedTag ? `Tag: ${selectedTag}` : "Blogs"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "3%",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {currentItems.map((item, index) => (
          <Link
            href="/BlogDescription"
            style={{ textDecoration: "none" }}
            state={item}
            key={index} // Ensure each element has a unique key
          >
            {selectedTag ? (
              <TagCard
                key={index}
                image={item?.image}
                des={item?.title}
                date={item?.date}
              />
            ) : (
              <BlogsMainCard
                key={index}
                image={item?.image}
                des={item?.title}
                date={item?.date}
              />
            )}
          </Link>
        ))}
      </Box>
      <Box sx={{ mt: "5%", display: "flex", justifyContent: "center" }}>
        <Pagination
          count={Math.ceil(filteredBlogs.length / itemsPerPage)}
          page={currentPage}
          onChange={handleChangePage}
          hideNextButton
          hidePrevButton
          sx={{
            "& .Mui-selected": {
              color: "#18B0E6",
              background: "none",
              boxShadow: "none",
              borderBlockColor: "none",
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default AllBlogs;
