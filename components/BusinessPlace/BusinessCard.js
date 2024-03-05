import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  List,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaSquare } from "react-icons/fa";

function BusinessCard({ data, onClick,activeButton }) {
  const bottomMap = {
    StartUps: 0,
    SMEs: "3%",
  };
  const defaultBottom = "5%";
  const bottom = bottomMap[activeButton] || defaultBottom;
  return (
    <Box>
      <Card
        sx={{
          height: { xs: "62rem", sm: "36rem", md: "30rem", lg: "100%" },
          width: { xs: "100%", sm: "100%", md: "36rem", lg: "100%" },
          borderRadius: "3px",
          background: "#F8F8F8",
          marginTop: "8%",
          boxShadow: "none",
          paddingBottom:bottom,
        }}
      >
        <Typography
          sx={{
            fontSize: "2.2em",
            fontWeight: "bold",
            width: { xs: "100%", sm: "64%", md: "64%", lg: "64%" },
            marginTop: "2%",
            color: "#153A5F",
            fontFamily: "'Mont-Bold', sans-serif",
            textAlign: { xs: "center", sm: "start", md: "start", lg: "start" },
            marginLeft: 'auto', // Move the box to the right
          }}
        >
          {data?.title}
        </Typography>

        <CardContent
          sx={{
            display: "flex",
            marginLeft: "2%",
            gap: "3%",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          }}
        >
          <Box
            sx={{
              marginTop: {md:'5%',lg:"1%"},
              width: { xs: "100%", sm: "40%", md: "13rem", lg: "15rem" },
              height: { xs: "28rem", sm: "22rem", md: "18rem", lg: "22rem", xl: '22rem' },
              "@media screen and (min-width: 450px) and (max-width: 600px)": {
              height:'33rem'
            },
            }}
          >
            <img
              src={data?.image}
              alt=""
              style={{ height: "80%", width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "25rem", md: "30rem", lg: "28rem" },
              height: { xs: "18rem", sm: "18rem", md: "22rem", lg: "20rem" ,xl:'24rem'},
            }}
          >
            <List sx={{ mt: {xs:'1%',sm:'3%'} }}>
              <ListItemIcon>
                <FaSquare style={{ marginTop: "1%", color: "#153A5F", fontSize: '12px' }} />
                <Typography
                  sx={{
                    marginLeft: "2%",
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "#54595F",
                    fontFamily: "'Mont-Regular', sans-serif"
                  }}
                >
                  {data?.point1}
                </Typography>
              </ListItemIcon>
            </List>
            <List>
              <ListItemIcon>
                <FaSquare style={{ marginTop: "1%", color: "#153A5F", fontSize: '12px' }} />
                <Typography
                  sx={{
                    marginLeft: "2%",
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "#54595F",
                    fontFamily: "'Mont-Regular', sans-serif"
                  }}
                >
                  {data?.point2}
                </Typography>
              </ListItemIcon>
            </List>
            <List>
              <ListItemIcon>
                <FaSquare style={{ marginTop: "1%", color: "#153A5F", fontSize: '12px' }} />
                <Typography
                  sx={{
                    marginLeft: "2%",
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "#54595F",
                    fontFamily: "'Mont-Regular', sans-serif"
                  }}
                >
                  {data?.point3}
                </Typography>
              </ListItemIcon>
            </List>

            <CardActions sx={{ marginTop: "6%" }}>
              <Button
                variant="contained"
                onClick={onClick}
                endIcon={<IoMdArrowRoundForward />}
                sx={{
                  padding: "2.8%",
                  paddingLeft: "9%",
                  paddingRight: "9%",
                  fontFamily: "'Mont-Regular', sans-serif",
                  background: "#18B0E6",
                  boxShadow: 'none',
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#153A5F", // Set the desired background color on hover
                  },
                }}
              >
                Get Started
              </Button>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default BusinessCard;
