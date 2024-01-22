import AllBlogButton from "../../components/Blogs/AllBlogButtons";
import AllBlogs from "../../components/Blogs/AllBlogs";
import SalesTeam from "../../components/SalesTeam/SalesTeam";

const { Box } = require("@mui/material");

function Blog() {
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

                <Box sx={{ display: "flex", flexWrap: 'wrap', gap: '1%', justifyContent: 'center' }}>
                    <AllBlogs />
                    <AllBlogButton />
                </Box>
                <SalesTeam />
            </Box>
        </Box>
    );
}
export default Blog;
