import React from "react";
import {AppBar, Hidden, Toolbar} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import InfoIcon from '@material-ui/icons/Info';
import {HeaderLink} from "./HeaderLink";
import {MobileMenu} from "./MobileMenu";

function Header() {
    return (
        <>
            <span id={'topOfThePage'}></span>
            <AppBar position="fixed" color={'inherit'}>
                <Toolbar>
                    <MobileMenu/>
                    <Hidden mdDown={true}>
                        <HeaderLink svg={<HomeIcon/>}
                                    linkName={'Home'}
                                    linkPath={'#topOfThePage'}/>
                        <HeaderLink svg={<LibraryBooksIcon/>}
                                    linkName={'Skills'}
                                    linkPath={'#skillSection'}/>
                        <HeaderLink svg={<AccountTreeIcon/>}
                                    linkName={'Projects'}
                                    linkPath={'#projectSection'}/>
                        <HeaderLink svg={<InfoIcon/>}
                                    linkName={'About Me'}
                                    linkPath={'#aboutMeSection'}/>
                    </Hidden>
                </Toolbar>
            </AppBar>
        </>
    )
}

export {Header}
