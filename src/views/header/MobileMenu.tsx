import React, {CSSProperties, ReactNode, useState} from "react";
import {Hidden, IconButton, Menu, MenuItem, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import InfoIcon from '@material-ui/icons/Info';
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import {HashLink} from "react-router-hash-link";


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
                    <GetMenuItem handleClose={handleClose}
                                 linkName={'Home'}
                                 linkPath={'#topOfThePage'}
                                 svg={<HomeIcon style={svgStyles}/>}/>

                    <GetMenuItem handleClose={handleClose}
                                 linkName={'Skills'}
                                 linkPath={'#skillSection'}
                                 svg={<LibraryBooksIcon style={svgStyles}/>}/>

                    <GetMenuItem handleClose={handleClose}
                                 linkName={'Projects'}
                                 linkPath={'#projectSection'}
                                 svg={<AccountTreeIcon style={svgStyles}/>}/>

                    <GetMenuItem handleClose={handleClose}
                                 linkName={'About Me'}
                                 linkPath={'#aboutMeSection'}
                                 svg={<InfoIcon style={svgStyles}/>}/>

                </Menu>
            </div>
        </>
    )
}

export {MobileMenu}

interface Props {
    handleClose: Function,
    linkPath: string,
    linkName: string,
    svg: ReactNode
}

function GetMenuItem(props: Props) {
    return (
        <MenuItem onClick={() => props.handleClose()}
                  component={HashLink}
                  to={props.linkPath}>
            <Typography variant={'h6'}
                        className={'ml-1'}>
                {props.svg} {props.linkName}
            </Typography>
        </MenuItem>
    )
}
