// import React from "react";
// import { Box, Typography, Card, CardContent, Button, FormControlLabel, Switch, Slide } from "@mui/material";

// function MobileServices({ image, title, des, onPress }) {
//   const [checked, setChecked] = React.useState(false);

//   const handleChange = () => {
//     setChecked((prev) => !prev);
//   };
//   return (
//     <Box
//       sx={{
//         marginTop: "2%",
//       }}
//     >
//       <Card
//         sx={{
//           width: { xs: "20rem", sm: "18rem", md: "19rem", lg: "17rem" },
//           height: { xs: "22rem", sm: "22rem", md: "20rem", lg: "17rem" },
//           background: "#153A5F",
//           cursor: "pointer",
//           boxShadow: "none",
//           border: "1px solid white",
//         }}
//       >
//         {!checked && (
//           <CardContent
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//               marginTop: "8%",
//               marginBottom: "5%",
//               transition: "all 0.5s ease",
//             }}
//             onMouseEnter={() => handleChange()}
//           >
//             <img src={image} alt="" style={{ width: "45%" }} />
//             <Typography
//               sx={{
//                 color: "white",
//                 fontWeight: "600",
//                 fontSize: "1.1em",
//                 marginTop: "10%",
//                 lineHeight: "24px",
//                 textAlign: "center",
//                 width: "60%",
//               }}
//             >
//               {title}
//             </Typography>
//           </CardContent>
//         )}

//         {checked && (
//           <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
//             <CardContent
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 marginTop: "10%",
//                 marginBottom: "5%",
//                 textAlign: "center",
//               }}
//               onMouseLeave={() => handleChange()}
//             > <Box
//               sx={{
//                 height: 150,
//                 position: 'relative',
//                 zIndex: 1,
//               }}
//             >
//                 <Typography
//                   color="white"
//                   sx={{ marginTop: "4%", fontSize: "15px" }}
//                 >
//                   {des}
//                 </Typography>

//               </Box>
//               <Button
//                 sx={{
//                   // marginTop: "5%",
//                   color: "white",
//                   transition: "background-color 0.3s ease",
//                   border: '2px soild #6EC1E4',
//                   "&:hover": {
//                     backgroundColor: "#6EC1E4",
//                   },
//                 }}
//                 onClick={onPress}
//                 variant="outlined"
//               >
//                 GET STARTED
//               </Button>
//             </CardContent>
//           </Slide>
//         )}
//       </Card>
//     </Box>
//   );
// }

// export default MobileServices;


import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import Slide from "@mui/material/Slide";

function AnimatedContent({ scrollUp, des, onPress }) {
  return (
    <Slide direction="up" in={scrollUp} mountOnEnter unmountOnExit>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
          marginBottom: "5%",
          textAlign: "center",
        }}
      >
        <Box sx={{ height: 150, position: "relative", zIndex: 1 }}>
          <Typography color="white" sx={{ marginTop: "4%", fontSize: "15px" }}>
            {des}
          </Typography>
        </Box>
        <Button
          sx={{
            mt: '1.3rem',
            color: "white",
            transition: "background-color 0.3s ease",
            border: "2px solid #6EC1E4",
            "&:hover": {
              backgroundColor: "#6EC1E4",
            },
          }}
          onClick={onPress}
          variant="outlined"
        >
          GET STARTED
        </Button>
      </CardContent>
    </Slide>
  );
}

function MobileServices({ image, title, des, onPress }) {
  const [scrollUp, setScrollUp] = React.useState(false);

  const handleMouseEnter = () => {
    setScrollUp(true);
  };

  const handleMouseLeave = () => {
    setScrollUp(false);
  };

  return (
    <Box sx={{ marginTop: "2%" }}>
      <Card
        sx={{
          width: { xs: "20rem", sm: "18rem", md: "19rem", lg: "17rem" },
          height: { xs: "22rem", sm: "22rem", md: "20rem", lg: "17rem" },
          background: "#153A5F",
          cursor: "pointer",
          boxShadow: "none",
          border: "1px solid white",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "8%",
            marginBottom: "5%",
            textAlign: "center",
            transition: "transform 0.5s ease",
            transform: scrollUp ? "translateY(-220px)" : "translateY(0)",
          }}
        >
          <img src={image} alt="" style={{ width: "45%" }} />
          <Typography
            sx={{
              color: "white",
              fontWeight: "600",
              fontSize: "1.1em",
              marginTop: "10%",
              lineHeight: "24px",
              textAlign: "center",
              width: "60%",
            }}
          >
            {title}
          </Typography>
          <AnimatedContent scrollUp={scrollUp} des={des} onPress={onPress} />
        </CardContent>
      </Card>
    </Box>
  );
}

export default MobileServices;
