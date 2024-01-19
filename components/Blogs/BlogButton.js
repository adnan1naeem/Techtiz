import { Box, Button } from "@mui/material";

function BlogButton({ text }) {
    return (
        <Box>
            <Button
                variant="contained"
                sx={{
                    marginTop: '6%',
                    bgcolor: "#18B0E6",
                    color: "white",
                    paddingTop: "9%",
                    paddingBottom: "9%",
                    fontSize: "19px",
                    boxShadow: "none",
                    textTransform: "none",
                    borderRadius: '0',

                    "&:hover": {
                        bgcolor: "#153A5F",
                        boxShadow: "none",
                    },
                }}
            >
                {text}
            </Button>
        </Box>
    );
}
export default BlogButton;
