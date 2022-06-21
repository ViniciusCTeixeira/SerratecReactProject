import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface FooterProps {description: string; title: string;}

export default function Footer(props: FooterProps) {
    const { description, title } = props;

    return (
        <Box component="footer" sx={{ bgcolor: 'grey.200', py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    {title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    {description}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    {'Copyright © NEXT Eletronicos '+ new Date().getFullYear() + '.'}
                </Typography>
            </Container>
        </Box>
    );
}