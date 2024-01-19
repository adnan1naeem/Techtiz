import { Box, Typography } from "@mui/material";

function Welcoming() {
  return (
    <Box sx={{marginTop:'0%',background:'#F8F8F8',paddingBottom:'8%'}}>
      <Typography sx={{textAlign:'center',paddingTop:'7%',color:'#153A5F',fontSize:'2.2em',fontWeight:'600'}}>Welcoming Diversity and Competency with Open Arms</Typography>
      <Box sx={{display:'flex',justifyContent:'center',flexWrap:'wrap', gap:'1%',marginTop:'5%'}}>
        <Box sx={{width:{xs:'21em',sm:'30em',md:'30em',lg:'35rem'}}}>
          <img
            src="https://techtiz.co/wp-content/uploads/2023/10/welcoming-team.webp"
            alt=""
            style={{width:'100%'}}
          />
        </Box>
        <Box sx={{width:{xs:'21em',sm:'30em',md:'30em',lg:'30rem'}}}>
          <Typography sx={{color:'#000000'}}>
            At TechTiz, we believe our employees are our greatest asset.
          </Typography>
          <Typography sx={{color:'#153A5F',fontSize:'1.1em',fontWeight:'400',marginTop:'5%'}}>
            We strive to provide opportunities to young and rising tech talent
            and enable them to grow by learning expert skills with experienced
            Software developers. Having web and mobile application developers
            from diverse backgrounds enables us to tap into a vast array of
            ideas that lead to the creation of innovative digital products for
            our clients. TechTiz appreciates highly skilled professionals
            looking to give their best for the benefit of the company and
            provides performance-based bonuses regardless of gender, color,
            religion, or age.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default Welcoming;
