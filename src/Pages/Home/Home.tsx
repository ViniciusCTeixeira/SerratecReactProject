import Grid from "@mui/material/Grid";
import Sidebar from "../../Components/Sidebar";
import Banner from "../../Components/Banner"
import Cards from "../../Components/Cards"
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";



export function Home() {
    const sidebar = {
        title: 'About',
        description:
            'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
        archives: [
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
        social: [
            {name: 'GitHub', icon: GitHubIcon},
            {name: 'Twitter', icon: TwitterIcon},
            {name: 'Facebook', icon: FacebookIcon},
        ],
    };



    const mainFeaturedPost = {
        title: 'Title of a longer featured blog post',
        description:
            "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
        image: 'https://source.unsplash.com/random',
        imageText: 'main image description',
        linkText: 'Continue reading…',
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
    ];

    return (
        <main>
            <Banner post={mainFeaturedPost}/>
            <Grid container spacing={4}>
                {featuredPosts.map((post) => (
                    <Cards key={post.title} post={post}/>
                ))}
            </Grid>
            <Grid container spacing={5} sx={{mt: 3}}>
                <Grid item xs={12} md={8}>
                    <h1>Home</h1>
                </Grid>
                <Sidebar
                    title={sidebar.title}
                    description={sidebar.description}
                    categories={sidebar.archives}
                />
            </Grid>
        </main>
    );
}