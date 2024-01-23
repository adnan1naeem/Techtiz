import { Box, Typography } from "@mui/material";

import { useRouter } from 'next/router'
import DateCard from "../../components/Blogs/DateCard";


function DateBlogs() {
    const router = useRouter();
  const item =  router.query;

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
          },
          
        }}
      >
        <Typography sx={{fontSize:'2.5rem',color:'#000000',fontWeight:'500',ml:'10%',lineHeight:'45px'}}>
            Day: {item?.date}
        </Typography>
        <DateCard/>
      </Box>
    </Box>
  );
}
export default DateBlogs;
