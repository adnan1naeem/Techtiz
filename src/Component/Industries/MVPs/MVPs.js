import { Box } from "@mui/material"
import MVPsStartup from "./MVPsStartup"

function MVPs(){
return(
    <Box
    sx={{
      background: "#153A5F",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "3%",
      paddingTop: "5%",
      paddingBottom: "2%",
      marginTop: "1%",
      pt:'6%'
    }}
  >
    <Box
      sx={{
        width: { xs: "100%", sm: "80%", md: "50%", lg: "40%", xl: "35%" },
      }}
    >
      <img
        src="https://techtiz.co/wp-content/uploads/2023/12/mvp.webp"
        alt=""
        style={{ width: "100%" }}
      />
    </Box>
    <MVPsStartup />
  </Box>
)
}
export default MVPs