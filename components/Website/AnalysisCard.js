import { Box, List, ListItemIcon, Typography } from "@mui/material";
import React from "react";
import { FaSquare } from "react-icons/fa";

function AnalysisCard({ title, lists, lgTop, xlTop, image, mt, width }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "10%",
        ml: { xs: 4, md: 0 },
        mr: { xs: 4, md: 0 },
        marginTop: "5%",
        flexWrap: "wrap",
        "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
          gap: '7%',
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: "17rem",
            sm: "19em",
            xl: "20em",
          },
          marginRight: { lg: "4.5rem" },
          mt: mt,
          "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
            width: width,
          },
        }}
      >
        <img src={image} alt="" style={{ width: "100%" }} />
      </Box>
      <Box
        sx={{
          marginTop: { xs: "5%", sm: "6%", md: "6%", lg: lgTop, xl: xlTop },
          width: { xs: "21rem", sm: "20em", md: "20em", lg: "28em" },
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5em",
            fontWeight: "600",
            color: "#153A5F",
            marginBottom: { xs: 2, md: 0 },
            fontFamily: "Mont-Bold, Sans-serif",
          }}
        >
          {title}
        </Typography>
        {lists.map((list, index) => (
          <List key={index}>
            <ListItemIcon>
              <FaSquare
                style={{
                  marginTop: "1.6%",
                  color: "#18B0E6",
                  fontSize: "12px",
                }}
              />
              <Typography
                sx={{
                  marginLeft: "2%",
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "#153A5F",
                  fontFamily: "Mont-Regular, Sans-serif",
                  width: {
                    xs: "18rem",
                    sm: "20em",
                    md: "20em",
                    lg: "28em",
                  },
                  "@media screen and (min-width: 1200px) and (max-width: 1300px)": {
                    fontSize: '14.4px'
                  },
                }}
              >
                {list}
              </Typography>
            </ListItemIcon>
          </List>
        ))}
      </Box>
    </Box>
  );
}

export default AnalysisCard;
