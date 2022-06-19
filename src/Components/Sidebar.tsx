import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface SidebarProps {
    title: string;
    description: string;
    categories: ReadonlyArray<{
        url: string;
        title: string;
    }>;
}

export default function Sidebar(props: SidebarProps) {
    const { title, description, categories  } = props;

    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography>{description}</Typography>
            </Paper>
            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Categorias
            </Typography>
            {categories.map((category) => (
                <Link display="block" variant="body1" href={category.url} key={category.title}>
                    {category.title}
                </Link>
            ))}
        </Grid>
    );
}