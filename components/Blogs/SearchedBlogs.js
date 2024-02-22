import { Card, CardContent, CardMedia, Grid, Typography, Box } from '@mui/material'
import React, { useEffect } from 'react'


function SearchedBlogs({ data }) {




    console.log();
    return (
        <Grid sx={{
            width: { xs: "100%", sm: "100%", md: "75%", lg: "55%", xl: "50rem" },
            mr: '2rem',
            mt: '1rem',
            
        }}>

            <Box>
                {data.map((blog, index) => (
                    <Card
                        key={index}
                        sx={{
                            borderRadius: "3px",
                            background: "white",
                            cursor: "pointer",
                            transition: 'all 0.3s ease',
                   
                            "&:hover": {
                                transform: "scale(1.01) ",
                            }
                        }}>
                        <CardMedia image={blog.image} sx={{ height: '280px', width: '100%' }} />
                        <CardContent>
                            <Typography
                                sx={{
                                    width: "90%",
                                    ml: "2%",
                                    color: "#153A5F",
                                    fontWeight: "100",
                                    fontSize: "25px",
                                    fontFamily: 'Mont Regular, Sans-serif'
                                }}
                            >
                                {blog.title}
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography
                                sx={{
                                    color: "#777777",
                                    ml: "3%",
                                    fontSize: "15px",
                                    fontWeight: "100",
                                    fontFamily: 'Mont Regular", Sans-serif',
                                    marginTop: "0%",
                                }}>
                                {blog.Sub_discription}
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography
                                sx={{
                                    color: "#18B0E6",
                                    fontSize: "14px",
                                    fontWeight: "500",
                                    textTransform: "uppercase",
                                    ml: "3%",
                                }}
                            >
                                Read More »
                            </Typography>
                        </CardContent>
                        <CardContent
                            sx={{
                                borderTop: "1px solid #eaeaea",
                                marginTop: "0%",
                            }}>
                            <Typography
                                sx={{
                                    color: "#ADADAD",
                                    ml: "3%",
                                    fontSize: "12px",
                                    fontWeight: "400",
                                    width: "100%",
                                }}>
                                {blog.date}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>

        </Grid>
    )
}

export default SearchedBlogs