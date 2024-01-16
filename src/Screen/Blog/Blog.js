import AllBlogButton from "../../Component/Blogs/AllBlogButtons";
import AllBlogs from "../../Component/Blogs/AllBlogs";
import Footer from "../../Component/Footer/Footer";

import Navbar from "../../Component/NavBar/NavBar";
import SalesTeam from "../../Component/SalesTeam/SalesTeam";

const { Box } = require("@mui/material");

function Blog() {
  return (
    <Box>
      <Navbar />
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
      
        <Box sx={{ display: "flex",flexWrap:'wrap',gap:'1%',justifyContent:'center' }}>
          <AllBlogs />
          <AllBlogButton />
        </Box>
        <SalesTeam/>
        <Footer/>
      </Box>
    </Box>
  );
}
export default Blog;
