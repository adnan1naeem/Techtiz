import { Box, Typography } from "@mui/material";
import { useRouter } from 'next/router';
import DateCard from "../../components/Blogs/DateCard";
import SalesTeam from "../../components/SalesTeam/SalesTeam";
import blogData from "../../components/Blogs/BlogData";

function DateBlogs() {
  const router = useRouter();
  const item = router?.query;
  const parsedItem = JSON.parse(router?.query?.state || "{}");

  const handleLinkClick = (item) => {
    router.push({
      pathname: '/BlogDescription',
      query: { state: JSON.stringify(item) },
    });
  };

  // Filter blogData based on parsedItem.date
  const filteredBlogs = blogData.filter(blog => blog.date === parsedItem?.date);

  return (
    <Box>
      <Box
        sx={{
          marginTop: {
            xs: "40%",
            sm: "17%",
            md: "12%",
            lg: "9.5%",
            xl: "8%",
          }
        }}>
        <Typography sx={{ fontSize: '2.5rem', color: '#000000', fontWeight: '500', ml: '10%', lineHeight: '45px' }}>
          Day: {parsedItem?.date}
        </Typography>
        {/* Map filteredBlogs array to render DateCard components */}
        {filteredBlogs.map((blog, index) => (
          <div
            onClick={() => handleLinkClick(blog)}
            style={{ textDecoration: "none" }}
            state={blog}
            key={index}
          >
          <DateCard key={index} title={blog.title} image={blog.image} des={blog.Sub_discription} />
          </div>
        ))}
      </Box>
      <Box>
        <SalesTeam />
      </Box>
    </Box>
  );
}
export default DateBlogs;
