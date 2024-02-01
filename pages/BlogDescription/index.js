import { Box, Grid, Typography } from "@mui/material";
import { FaCalendar } from "react-icons/fa";
import React from "react";
import BlogSecondCard from "../../components/Blogs/BlogSecondCard";
import RelatedCard from "../../components/Blogs/RelatedCard";
import BlogBlodText from "../../components/Blogs/BlogBlodText";
import BlogLightText from "../../components/Blogs/BlogLightText";
import { useRouter } from "next/router";
import SalesTeam from "../../components/SalesTeam/SalesTeam";
import styles from "../../styles/Blog.module.css";
import blogData from "../../components/Blogs/BlogData";

function BlogDescription() {
  const router = useRouter();
  const item = router.query;
  const parsedItem = JSON.parse(router?.query?.state || "{}");

  const openBlogTitle = parsedItem?.title;
  const filteredBlogData = blogData.filter(
    (blog) => blog.title !== openBlogTitle
  );
  const blogSecondCards = filteredBlogData.slice(0, 3);
  const relatedCards = filteredBlogData.slice(3, 6);
  const handleLinkClick = (item) => {
    router.push({
      pathname: "/BlogDateFilter",
      query: item,
    });
  };

  const handleLinkDes = (item) => {
    router.push({
      pathname: "/BlogDescription",
      query: { state: JSON.stringify(item) },
    });
  };

  const renderContent = () => {
    const keys = Object.keys(parsedItem);
    const contentArray = [];

    const filteredKeys = keys.filter(
      (key) =>
        !["title", "image", "date", "tags", "id", "Sub_discription"].includes(
          key.toLowerCase()
        )
    );

    filteredKeys.forEach((prefix, index) => {
      if (Array.isArray(parsedItem[prefix])) {
        parsedItem[prefix].forEach((paragraph, paragraphIndex) => {
          contentArray.push(
            <BlogLightText
              key={`${index}_${paragraphIndex}`}
              text={paragraph}
            />
          );
        });
      } else if (prefix.includes("heading")) {
        contentArray.push(
          <BlogBlodText key={index} text={parsedItem[prefix]} />
        );
      } else if (prefix.includes("dot")) {
        contentArray.push(
          <Grid sx={{ mb: "2%" }}>
            <Typography sx={{ color: "#153A5F", fontSize: "16px" }} key={index}>
              • {parsedItem[prefix]}
            </Typography>
          </Grid>
        );
      } else {
        contentArray.push(
          <BlogLightText key={index} text={parsedItem[prefix]} />
        );
      }
    });

    return contentArray.map((content, index) => (
      <React.Fragment key={index}>{content}</React.Fragment>
    ));
  };

  return (
    <Box>
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
          <img src={parsedItem?.image} alt="" style={{ width: "100%" }} />
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
            {parsedItem?.title}
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
            <div
              onClick={() => handleLinkClick(item)}
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
                {parsedItem?.date}
              </Typography>
            </div>
            {renderContent()}
          </Box>
          <Box sx={{ mt: "2.1%" }}>
            <form className={styles.nosubmit}>
              <input
                className={styles.inputsubmit1}
                type="search"
                placeholder="Search..."
              />
            </form>
            {blogSecondCards.map((blog, index) => (
              <div
                onClick={() => handleLinkDes(blog)}
                style={{ textDecoration: "none" }}
                state={blog}
                key={index}
              >
                <BlogSecondCard
                  key={index}
                  image={blog.image}
                  des={blog.title}
                  date={blog.date}
                />
              </div>
            ))}
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
            {relatedCards.map((blog, index) => (
              <div
                onClick={() => handleLinkDes(blog)}
                style={{ textDecoration: "none" }}
                state={blog}
                key={index}
              >
                <RelatedCard
                  key={index}
                  image={blog.image}
                  des={blog.title}
                  date={blog.date}
                />
              </div>
            ))}
          </Box>
        </Box>
        <SalesTeam />
      </Box>
    </Box>
  );
}

export default BlogDescription;
