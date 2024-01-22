import { Box, Typography } from "@mui/material";
import React from "react";
import ServicesCard from "./ServicesCard";


function OurServices() {
  
  return (
    <Box sx={{background:'#F8F8F8'}}>
     <Typography sx={{color:'#153A5F', fontSize:'2.8em', textAlign:'center',fontWeight:'600',paddingTop:'5%'}}>
        Our Services
     </Typography>
     <Box sx={{display:'flex', justifyContent:'center',gap:'2.1%', flexWrap:'wrap',marginTop:'4%',paddingBottom:'6%'}} >
        <ServicesCard image="https://techtiz.co/wp-content/uploads/2023/10/Asset-21.svg" heading="Full Stack Development" text="Our full-stack experts use the most recent technology to create applications and integrate APIs for seamless end-to-end web development services from ideation to execution." />
        <ServicesCard image="https://techtiz.co/wp-content/uploads/2023/10/Asset-21.svg" heading="Full Stack Development" text="Our full-stack experts use the most recent technology to create applications and integrate APIs for seamless end-to-end web development services from ideation to execution." />
        <ServicesCard image="https://techtiz.co/wp-content/uploads/2023/10/Asset-21.svg" heading="Full Stack Development" text="Our full-stack experts use the most recent technology to create applications and integrate APIs for seamless end-to-end web development services from ideation to execution." />
        <ServicesCard image="https://techtiz.co/wp-content/uploads/2023/10/Asset-21.svg" heading="Full Stack Development" text="Our full-stack experts use the most recent technology to create applications and integrate APIs for seamless end-to-end web development services from ideation to execution." />
        <ServicesCard image="https://techtiz.co/wp-content/uploads/2023/10/Asset-21.svg" heading="Full Stack Development" text="Our full-stack experts use the most recent technology to create applications and integrate APIs for seamless end-to-end web development services from ideation to execution." />
        <ServicesCard image="https://techtiz.co/wp-content/uploads/2023/10/Asset-21.svg" heading="Full Stack Development" text="Our full-stack experts use the most recent technology to create applications and integrate APIs for seamless end-to-end web development services from ideation to execution." />
     </Box>
    </Box>
  );
}

export default OurServices;
