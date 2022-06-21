import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Cards from "../../Components/Cards";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";

export default function ByCategoria() {
    const [categorias, setCategorias] = useState([
        {id: 0, title: 'March 2020', url: '#'},
        {id: 1, title: 'February 2020', url: '#'},
        {id: 2, title: 'January 2020', url: '#'},
        {id: 3, title: 'November 1999', url: '#'},
        {id: 4, title: 'October 1999', url: '#'},
        {id: 5, title: 'September 1999', url: '#'},
        {id: 6, title: 'August 1999', url: '#'},
        {id: 7, title: 'July 1999', url: '#'},
        {id: 8, title: 'June 1999', url: '#'},
        {id: 9, title: 'May 1999', url: '#'},
        {id: 10, title: 'April 1999', url: '#'},
    ]);
    const [categoria, setCategoria] = useState("");

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
                    <Typography variant="h4">Produtos por Categoria</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item>
                    <React.Fragment>
                        <Toolbar component="nav" variant="dense" sx={{justifyContent: 'space-evenly', overflowX: 'auto'}}>
                            {categorias.map((cat) => (
                                <Link color="inherit" noWrap key={cat.id} variant="body2" href={cat.url} sx={{p: 1, flexShrink: 0}}>
                                    {cat.title}
                                </Link>
                            ))}
                        </Toolbar>
                    </React.Fragment>
                </Grid><Grid item>
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <Cards key={post.title} post={post}/>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </main>
    );
}