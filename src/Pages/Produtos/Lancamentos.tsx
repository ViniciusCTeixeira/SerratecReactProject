import Grid from "@mui/material/Grid";
import Sidebar from "../../Components/Sidebar";
import Cards from "../../Components/Cards"
import Typography from "@mui/material/Typography";
import React from "react";

export default function Lancamentos() {
    const sidebar = {
        title: 'About',
        description:
            'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
        categories: [
            {title: 'March 2020', url: '#'},
            {title: 'February 2020', url: '#'},
            {title: 'January 2020', url: '#'},
            {title: 'November 1999', url: '#'},
            {title: 'October 1999', url: '#'},
            {title: 'September 1999', url: '#'},
            {title: 'August 1999', url: '#'},
            {title: 'July 1999', url: '#'},
            {title: 'June 1999', url: '#'},
            {title: 'May 1999', url: '#'},
            {title: 'April 1999', url: '#'},
        ],
    };

    const featuredPosts = [
        {
            title: 'Featured post',
            date: 'Nov 12',
            description:
                'This is a wider card with supporting text below as a natural lead-in to additional content.',
            image: 'https://source.unsplash.com/random',
            imageLabel: 'Image Text',
        },
        {
            title: 'Post title',
            date: 'Nov 11',
            description:
                'This is a wider card with supporting text below as a natural lead-in to additional content.',
            image: 'https://source.unsplash.com/random',
            imageLabel: 'Image Text',
        },
        {
            title: 'Post title',
            date: 'Nov 11',
            description:
                'This is a wider card with supporting text below as a natural lead-in to additional content.',
            image: 'https://source.unsplash.com/random',
            imageLabel: 'Image Text',
        },
        {
            title: 'Post title',
            date: 'Nov 11',
            description:
                'This is a wider card with supporting text below as a natural lead-in to additional content.',
            image: 'https://source.unsplash.com/random',
            imageLabel: 'Image Text',
        },
        {
            title: 'Post title',
            date: 'Nov 11',
            description:
                'This is a wider card with supporting text below as a natural lead-in to additional content.',
            image: 'https://source.unsplash.com/random',
            imageLabel: 'Image Text',
        },
        {
            title: 'Post title',
            date: 'Nov 11',
            description:
                'This is a wider card with supporting text below as a natural lead-in to additional content.',
            image: 'https://source.unsplash.com/random',
            imageLabel: 'Image Text',
        },
    ];

    return (
        <main>
            <Grid container sx={{mb: 3}}>
                <Grid item>
                    <Typography variant="h4">Ultimos Lançamentos</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={4}>
                <Grid item md={8}>
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <Cards key={post.title} post={post}/>
                        ))}
                    </Grid>
                </Grid>
                <Sidebar
                    title={sidebar.title}
                    description={sidebar.description}
                    categories={sidebar.categories}
                />
            </Grid>
        </main>
    );
}