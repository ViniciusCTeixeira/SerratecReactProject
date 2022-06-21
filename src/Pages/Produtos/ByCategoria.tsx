import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Cards from "../../Components/Cards";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";

export default function ByCategoria() {
    const [categorias, setCategorias] = useState([
        {id: 0, title: 'Eletrodomésticos', url: '#'},
        {id: 1, title: 'Casa', url: '#'},
        {id: 2, title: 'Telemóveis', url: '#'},

    ]);
    const [categoria, setCategoria] = useState("");

    const featuredPosts = [
        {
            title: 'Celular',
            date: 'Nov 12',
            description:
                'Um produto NextStore feito especialmete para você!',
            image: 'https://source.unsplash.com/random',
            imageLabel: 'Image Text',
        },
        {
            title: 'Computador',
            date: 'Nov 11',
            description:
                'Um produto NextStore feito especialmete para você!',
            image: 'https://source.unsplash.com/random',
            imageLabel: 'Image Text',
        },
        {
            title: 'Tv',
            date: 'Nov 11',
            description:
                'Um produto NextStore feito especialmete para você!',
            image: 'https://source.unsplash.com/random',
            imageLabel: 'Image Text',
        },
        {
            title: 'Geladeira',
            date: 'Nov 11',
            description:
                'Um produto NextStore feito especialmete para você!',
            image: 'https://source.unsplash.com/random',
            imageLabel: 'Image Text',
        },
        {
            title: 'Microondas',
            date: 'Nov 11',
            description:
                'Um produto NextStore feito especialmete para você!',
            image: 'https://source.unsplash.com/random',
            imageLabel: 'Image Text',
        },
        {
            title: 'Tablet',
            date: 'Nov 11',
            description:
                'Um produto NextStore feito especialmete para você!',
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