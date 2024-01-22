import { Box, Typography } from "@mui/material";
import MobileDoCard from "./MobileDoCard";

function DoItMobile(){
    return(
        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center',marginTop:'5%'}}>
            <Typography sx={{textAlign:'center',fontSize:'2.2em',fontWeight:'600',color:'#153A5F'}}>
            How we do it
            </Typography>
            <Box sx={{display:'flex', flexDirection:'row',flexWrap:'wrap', justifyContent:'center',gap:'1%',marginTop:'2%'}}>
            <MobileDoCard background="aliceblue" title="Initial Consultation and Idea Refinement" des="We begin by understanding your app idea and business goals."/>
            <MobileDoCard background="#7A7A7A0A" title="Design and Prototyping" des="Our designers create wireframes and interactive prototypes."/>
            <MobileDoCard background="#7A7A7A0A" title="Development and Testing" des="Our experienced developers start coding your app using the latest technologies."/>
            <MobileDoCard background="#7A7A7A0A" title="Deployment and Ongoing Support" des="We help you publish your app on app stores like Google Play and Apple App Store."/>
            </Box>

        </Box>
    )
}
export default DoItMobile