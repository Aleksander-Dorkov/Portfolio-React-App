import React from "react";
import {AppBar, Hidden, Toolbar} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import InfoIcon from '@material-ui/icons/Info';
import {TopNavLink} from "./TopNavLink";
import {MobileMenu} from "./MobileMenu";
import ContactMailIcon from '@material-ui/icons/ContactMail';

function TopNav() {
    return (
        <>
            <span id={'topOfThePage'}></span>
            <AppBar position="fixed" color={'inherit'}>
                <Toolbar>
                    <MobileMenu/>
                    <Hidden mdDown={true}>
                        <TopNavLink svg={<HomeIcon/>}
                                    linkName={'Home'}
                                    linkPath={'#topOfThePage'}/>
                        <TopNavLink svg={<LibraryBooksIcon/>}
                                    linkName={'Skills'}
                                    linkPath={'#skillSection'}/>
                        <TopNavLink svg={<AccountTreeIcon/>}
                                    linkName={'Projects'}
                                    linkPath={'#projectSection'}/>
                        <TopNavLink svg={<InfoIcon/>}
                                    linkName={'About Me'}
                                    linkPath={'#aboutMeSection'}/>
                        <TopNavLink svg={<ContactMailIcon/>}
                                    linkName={'Contacts'}
                                    linkPath={'#contactMe'}/>
                    </Hidden>
                </Toolbar>
            </AppBar>
        </>
    )
}

export {TopNav}
