import Grid from "@mui/material/Grid";
import Sidebar from "../../Components/Sidebar";
import Cards from "../../Components/Cards"
import Typography from "@mui/material/Typography";
import React from "react";

export default function Produtos() {
    const sidebar = {
        title: 'Sobre',
        description:
            'Somos uma empresa especializada em eletrônicos e focada em atender o melhor possivel.',
        categories: [
            {title: 'Eletrodomésticos', url: '#'},
            {title: 'Telemóveis', url: '#'},
            {title: 'Casa', url: '#'},

        ],
    };

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
                    <Typography variant="h4">Lista de Produtos</Typography>
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