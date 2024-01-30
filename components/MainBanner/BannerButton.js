import { Button } from '@mui/material'
import React from 'react'

export default function BannerButton({ onClick }) {
    return (
        <Button
            variant="outlined"
            type="submit"
            onClick={onClick}
            sx={{
                //fontFamily: 'Mont-Regular, Acme-Regular',
                color: '#153A5F',
                fontWeight: "500",
                borderRadius: 1,
                fontSize: "17px",
                border: '3px solid #ffffff !important',
                textTransform: "none",
                background: '#ffffff',
                paddingTop: "12px",
                paddingBottom: "12px",
                paddingLeft: '40px',
                paddingRight: '40px',
                marginTop: "8px",
                "&:hover": {
                    backgroundColor: "#153A5F",
                    color: "white",
                    border: '3px solid #ffffff !important',
                    borderRadius: 1,
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    paddingLeft: '40px',
                    paddingRight: '40px',
                    marginTop: "8px",
                },
            }}
        >
            About Us
        </Button>
    )
}
