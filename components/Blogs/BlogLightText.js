import { Box, Typography } from "@mui/material";

function BlogLightText({ text }) {
    return (
        <Box >
            <Typography sx={{ color: '#153A5F', fontSize: '16px', mb: '2%' }}>
                {text}
            </Typography>
        </Box>
    );
}
export default BlogLightText;
