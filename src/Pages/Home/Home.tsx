import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import Sidebar from "../../Components/Sidebar";
import Banner from "../../Components/Banner"
import Cards from "../../Components/Cards"
import ApiProdutos from "../../Controllers/ProdutosControlle"
import ApiCategorias from "../../Controllers/CategoriasController"

export default function Home() {
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

    const mainFeaturedPost = {
        title: 'Next Store',
        description:
            "Os melhores produtos do mercado!",
        image: 'https://source.unsplash.com/random',
        imageText: 'main image description',
        linkText: 'Ler Mais...',
        link: '/'
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
            <Banner post={mainFeaturedPost}/>
            <Grid container spacing={4} sx={{mt: 3}}>
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