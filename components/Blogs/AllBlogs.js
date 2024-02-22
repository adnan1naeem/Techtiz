import React, { useState } from "react";
import { Box, Pagination, Typography } from "@mui/material";
import BlogsMainCard from "./BlogMainCard";
import blogData from "./BlogData";
import TagCard from "./TagCard";
import { useRouter } from 'next/router';


function AllBlogs({ selectedTag }) {
  const router = useRouter();
  const itemsPerPage = 6;
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

  const handleLinkClick = (item) => {
    router.push({
      pathname: '/BlogDescription',
      query: { state: JSON.stringify(item) },
    });
  };
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", sm: "100%", md: "75%", lg: "65%", xl: "50rem" },
      }}
    >
      <Typography
        sx={{
          ml: {xs:'10%',sm:'12%',md:'10%',lg:'8%',xl:"2%"},
          fontSize: "1.6em",
          color: "#153A5F",
          fontWeight: "600",
          transition: "opacity 1s ease-in-out",
          opacity: isVisible ? 1 : 0,
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
          <div
            onClick={() => handleLinkClick(item)}
            style={{ textDecoration: "none" }}
            state={item}
            key={index}
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
          </div>
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
