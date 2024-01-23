import React, { useState } from "react";
import { Box, Pagination } from "@mui/material";
import BlogsMainCard from "./BlogMainCard";
import blogData from "./BlogData";
import Link from "next/link";

function AllBlogs() {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogData.slice(indexOfFirstItem, indexOfLastItem);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", sm: "100%", md: "75%", lg: "64%", xl: "50rem" },
      }}
    >
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
            href={{
              pathname: "/BlogDescription",
              query: item,
            }}
            style={{ textDecoration: "none" }}
          >
            <BlogsMainCard
              key={index}
              image={item?.image}
              des={item?.title}
              date={item?.date}
            />
          </Link>
        ))}
      </Box>
      <Box sx={{ mt: "5%", display: "flex", justifyContent: "center" }}>
        <Pagination
          count={Math.ceil(blogData.length / itemsPerPage)}
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
