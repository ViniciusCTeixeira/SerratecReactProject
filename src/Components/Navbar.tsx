import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";

interface HeaderProps {
    sections: ReadonlyArray<{
        title: string;
        url: string;
    }>;
    img: string;
}

export default function Navbar(props: HeaderProps) {
    const {sections, img} = props;

    return (
        <React.Fragment>
            <Toolbar sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Grid container direction="row" alignItems="center" justifyContent="space-around">
                    <Grid item>
                        <Button variant="outlined" size="small" href="/register">
                            Cadastro
                        </Button>
                    </Grid>
                    <Grid item>
                        <Link color="inherit" href="/">
                            <img src={img} alt="logo"/>
                        </Link>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" size="small" href="/login">
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
            <Toolbar component="nav" variant="dense" sx={{justifyContent: 'space-evenly', overflowX: 'auto'}}>
                {sections.map((section) => (
                    <Link color="inherit" noWrap key={section.title} variant="body2" href={section.url} sx={{p: 1, flexShrink: 0}}>
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}