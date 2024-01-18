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

function BusinessCard({ title }) {
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
        }}
      >
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: 700,
            marginTop: "3%",
            color: "#153A5F",
            fontFamily: "Mont bold, Sans-serif",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        <CardContent
          sx={{
            display: "flex",
            marginLeft: "2%",
            gap: "2%",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
          }}
        >
          <Box
            sx={{
              marginTop: "1%",
              width: { xs: "18rem", sm: "14rem", md: "13rem", lg: "14rem" },
              height: { xs: "22rem", sm: "20rem", md: "20rem", lg: "20rem" },
            }}
          >
            <img
              src="https://techtiz.co/wp-content/uploads/2023/10/sme.png"
              alt=""
              style={{ height: "90%", width: "100%" }}
            />
          </Box>
          <Box
            sx={{
              marginTop: "4%",
              width: { xs: "18rem", sm: "25rem", md: "30rem", lg: "28rem" },
              height: { xs: "20rem", sm: "20rem", md: "24rem", lg: "22rem" },
            }}
          >
            <List>
              <ListItemIcon>
                <FaSquare style={{ marginTop: "1%", color: "#153A5F" }} />
                <Typography
                  sx={{
                    marginLeft: "2%",
                    fontSize: "17px",
                    fontWeight: "400",
                    color: "#7A7A7A",
                  }}
                >
                  Development of innovative digital applications to turn the
                  idea behind your business into a reality
                </Typography>
              </ListItemIcon>
            </List>
            <List>
              <ListItemIcon>
                <FaSquare style={{ marginTop: "1%", color: "#153A5F" }} />
                <Typography
                  sx={{
                    marginLeft: "2%",
                    fontSize: "17px",
                    fontWeight: "400",
                    color: "#7A7A7A",
                  }}
                >
                  Team augmentation with technical training and expert
                  assistance to boost business development and growth
                </Typography>
              </ListItemIcon>
            </List>
            <List>
              <ListItemIcon>
                <FaSquare style={{ marginTop: "1%", color: "#153A5F" }} />
                <Typography
                  sx={{
                    marginLeft: "2%",
                    fontSize: "17px",
                    fontWeight: "400",
                    color: "#7A7A7A",
                  }}
                >
                  Implementation of a client-centric approach with superlative
                  technologies for web and mobile applications development
                </Typography>
              </ListItemIcon>
            </List>

            <CardActions sx={{ marginTop: "10%" }}>
              <Button
                variant="contained"
                endIcon={<IoMdArrowRoundForward />}
                sx={{
                  padding: "3%",
                  paddingLeft: "6%",
                  paddingRight: "6%",
                  background: "#18B0E6",
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
