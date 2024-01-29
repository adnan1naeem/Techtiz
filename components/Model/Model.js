import { Box, Typography } from '@mui/material';
import ModelsCard from '../ModelsCard/ModelsCard';

function Model({onPress}) {
  return (
    <Box sx={{marginTop:'3%'}}>
         <Typography sx={{color:'#153A5F', fontSize:'43px', fontWeight:'600', textAlign:'center'}}>Engagement Models</Typography>
        <Box sx={{display:'flex',flexWrap:'wrap', justifyContent:'center',gap:'5%',marginTop:'2%'}}>
            <ModelsCard maintitle="Dedicated Resources" backgroundImage ="url('https://techtiz.co/wp-content/uploads/2023/10/team.jpg')" onPress={onPress}/>
            <ModelsCard maintitle="Fixed Cost Projects" backgroundImage= "url('https://techtiz.co/wp-content/uploads/2023/10/price-paper.jpg')" onPress={onPress}/>
        </Box>
    </Box>
       
    
  );
}

export default Model;
