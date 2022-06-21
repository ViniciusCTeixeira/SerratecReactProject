import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import Sidebar from "../../Components/Sidebar";
import Banner from "../../Components/Banner"
import Cards from "../../Components/Cards"
import ApiProdutos from "../../Controllers/ProdutosControlle"
import ApiCategorias from "../../Controllers/CategoriasController"

export default function Home() {
    const [categorias, setCategorias] = useState([])
    const sidebar = {
        title: 'About',
        description: 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    };

    const mainFeaturedPost = {
        title: 'Title of a longer featured blog post',
        description:
            "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
        image: 'https://source.unsplash.com/random',
        imageText: 'main image description',
        linkText: 'Continue reading…',
        link: '/'
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

    useEffect(() => {
        async function getCategorias() {
            const ListCategorias = await ApiCategorias.getList();
            console.log(ListCategorias)
            let categoriaList = [];
            await ListCategorias.data.map((categoria) => {
                categoriaList.push({
                    title: categoria.nome,
                    url: "#"
                });
            })
            setCategorias(categoriaList);
        }
        getCategorias();
    }, [categorias]);

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
                    categories={categorias}
                />
            </Grid>
        </main>
    );
}