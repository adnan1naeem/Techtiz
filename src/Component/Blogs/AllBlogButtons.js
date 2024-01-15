import { Box, Typography } from "@mui/material";
import BlogButton from "./BlogButton";
import  './Blogs.css'

function AllBlogButton() {
  return (
    <Box sx={{width:{xs:'96%',md:'20%',lg:'22%',xl:'20rem'},marginTop:'1.5%'}}>
   
    <form class="nosubmit">
  <input class="nosubmit" type="search" placeholder="Search..."/>
</form>
      <Typography
        sx={{ color: "#153A5F", fontWeight: "600", fontSize:'30px' ,marginTop:'3%'}}
      >
        All Tags
      </Typography>
      <Box sx={{display:'flex',flexWrap:'wrap',gap:'5%',width:'100%'}}>
      <BlogButton />
      <BlogButton />
      <BlogButton />
      <BlogButton />
      <BlogButton />
      <BlogButton />
      </Box>
      
    </Box>
  );
}
export default AllBlogButton;
