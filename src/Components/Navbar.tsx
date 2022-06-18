import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface HeaderProps {
    sections: ReadonlyArray<{
        title: string;
        url: string;
    }>;
    img: string;
}

export default function Navbar(props: HeaderProps) {
    const { sections, img } = props;

    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Button variant="outlined" size="small" href="/login">
                    Sign up
                </Button>
                <Typography component="h2" variant="h5" color="inherit" align="center" noWrap sx={{ flex: 1 }}>
                    <Link color="inherit" href="/">
                        <img src={img} alt="logo"/>
                    </Link>
                </Typography>
                <Button variant="outlined" size="small" href="/login">
                    Sign up
                </Button>
            </Toolbar>
            <Toolbar component="nav" variant="dense" sx={{ justifyContent: 'space-evenly', overflowX: 'auto' }}            >
                {sections.map((section) => (
                    <Link color="inherit" noWrap key={section.title} variant="body2" href={section.url} sx={{ p: 1, flexShrink: 0 }}>
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}