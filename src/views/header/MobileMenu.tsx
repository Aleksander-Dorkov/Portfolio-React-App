import React, {CSSProperties, useState} from "react";
import {Hidden, IconButton, Menu} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import InfoIcon from '@material-ui/icons/Info';
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import ContactMailIcon from '@material-ui/icons/ContactMail';
import {MobileMenuLink} from "./MobileMenuLink";


function MobileMenu() {
    const svgStyles = {position: 'relative', top: '5px'} as CSSProperties
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div>
                <Hidden lgUp={true}>
                    <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <MenuIcon fontSize={'large'}/>
                    </IconButton>
                </Hidden>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MobileMenuLink handleClose={handleClose}
                                 linkName={'Home'}
                                 linkPath={'#topOfThePage'}
                                 svg={<HomeIcon style={svgStyles}/>}/>

                    <MobileMenuLink handleClose={handleClose}
                                 linkName={'Skills'}
                                 linkPath={'#skillSection'}
                                 svg={<LibraryBooksIcon style={svgStyles}/>}/>

                    <MobileMenuLink handleClose={handleClose}
                                 linkName={'Projects'}
                                 linkPath={'#projectSection'}
                                 svg={<AccountTreeIcon style={svgStyles}/>}/>

                    <MobileMenuLink handleClose={handleClose}
                                 linkName={'About Me'}
                                 linkPath={'#aboutMeSection'}
                                 svg={<InfoIcon style={svgStyles}/>}/>

                    <MobileMenuLink handleClose={handleClose}
                                 linkName={'Contacts'}
                                 linkPath={'#contactMe'}
                                 svg={<ContactMailIcon style={svgStyles}/>}/>

                </Menu>
            </div>
        </>
    )
}

export {MobileMenu}
