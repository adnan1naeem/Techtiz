import { Button } from '@mui/material'
import React from 'react'

export default function BannerButton({ onClick }) {
    return (
        <Button
            variant="outlined"
            type="submit"
            onClick={onClick}
            sx={{
                color: '#153A5F',
                fontWeight: 600,
                fontFamily: "'Mont-Regular', sans-serif",
                borderRadius: 1,
                fontSize: "17px",
                border: '3px solid #ffffff !important',
                textTransform: "none",
                background: '#ffffff',
                height: { xs: 50, sm: 55, md: 60 },
                paddingLeft: { xs: "26px", md: "40px" },
                paddingRight: { xs: "26px", md: "40px" },
                marginTop: "12px",
                "&:hover": {
                    backgroundColor: "#153A5F",
                    color: "white",
                    border: '3px solid #ffffff !important',

                },
            }}
        >
            About Us
        </Button>
    )
}
