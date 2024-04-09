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

function BusinessCard({ fontSize, mb, data, onClick, activeButton }) {
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
          height: { xs: "62rem", sm: "35rem", md: "auto" },
          width: "100%",
          borderRadius: "3px",
          background: "#F8F8F8",
          marginTop: "8%",
          boxShadow: "none",
          paddingBottom: bottom,
        }}
      >
        <Typography
          sx={{
            fontSize: "2.2em",
            fontWeight: "bold",
            width: { xs: "100%", sm: "62%", md: "62%", lg: "62%" },
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
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
            display: "flex",
            marginLeft: "2%",
            mb: mb || 0,
            gap: "4%",
          }}
        >
          <Box
            sx={{
              marginTop: { xs: "-9%", sm: "-2%", md: '-2%', lg: "-2%" },
              width: { xs: "97%", sm: "50%", md: "35%", lg: "30%" },
              height: { xs: "20%", sm: "20%", md: "18%", lg: "20%", xl: '22rem' },
              // "@media screen and (min-width: 600px) and (max-width: 770px)": {
              //   width: "95%"
              // },
            }}
          >
            <img
              src={data?.image}
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "25rem", md: "30rem", lg: "28rem" },
              height: { xs: "18rem", sm: "18rem", md: "22rem", lg: "20rem", xl: '24rem' },
              // "@media screen and (min-width: 600px) and (max-width: 770px)": {
              //   width: "95%"
              // },
            }}
          >
            <List sx={{ mt: { xs: '1%', sm: '3%' } }}>
              <ListItemIcon>
                <FaSquare style={{ marginTop: "1%", color: "#153A5F", fontSize: fontSize || "12px" }} />
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
                <FaSquare style={{ marginTop: "1%", color: "#153A5F", fontSize: fontSize || "12px" }} />
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
                <FaSquare style={{ marginTop: "1%", color: "#153A5F", fontSize: fontSize }} />
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
                  // paddingLeft: "9%",
                  // paddingRight: "9%",
                  width: "12em",
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
