import { Box, Typography } from "@mui/material";
import { useRouter } from 'next/router'
import DateCard from "../../components/Blogs/DateCard";
import SalesTeam from "../../components/SalesTeam/SalesTeam";


function DateBlogs() {
  const router = useRouter();

  const parsedItem = (JSON.parse(router?.query?.state || "{}"))
  // const { date } = JSON.parse(parsedItem?.state);


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
          Day:
        </Typography>
        <DateCard />

      </Box>
      <Box>
        <SalesTeam />
      </Box>
    </Box>
  );
}
export default DateBlogs;
