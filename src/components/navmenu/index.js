import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import './navmenu_style.css';
import SideNav, { Nav, NavText } from 'react-sidenav';

class NavMenu extends Component {
    menuItems = [
        {name: "Selvbetjening", link: "/", children: [
            {name: "Booking", link: "/"}, 
            {name: "Support", link: "/"}, 
            {name: "Registrer nøglebrik", link: "/"}, 
            {name: "Formular til support", link: "/"}, 
            {name: "Lån af LAN switch", link: "/"}, 
        ]}, 
        {name: "Udvalg", link: "/", children: [
            {name: "Formandskabet", link: "/"}, 
            {name: "InTech", link: "/"}, 
            {name: "DISC", link: "/"}, 
            {name: "Værkstedsklubben", link: "/"}, 
            {name: "Sportsklubben", link: "/"},
            {name: "Musikklubben", link: "/"}, 
            {name: "Nonstars", link: "/"}, 
            {name: "Introfest", link: "/"}, 
            {name: "Badmintonklubben", link: "/"}, 
            {name: "Ottos piger", link: "/"}, 
            {name: "Baren", link: "/"}, 
        ]},
        {name: "Kollegianersamfundet", link: "/", children: [
            {name: "OMK velkomst brochure", link: "/"}, 
            {name: "OMK vedtægter", link: "/"}, 
            {name: "Årsplan", link: "/"}, 
            {name: "Regnskab", link: "/"}, 
            {name: "Beboerliste", link: "/"}, 
            {name: "Kalender", link: "/"}, 
        ]},
        {name: "Regulativer", link: "/", children: [
            {name: "Fremleje", link: "/"}, 
            {name: "Baren", link: "/"}, 
            {name: "Brandudvalget", link: "/"}, 
            {name: "Parlamentariske revisorer", link: "/"}, 
            {name: "Revisorer", link: "/"},
            {name: "Eforen", link: "/"}, 
            {name: "Nonstars", link: "/"}, 
            {name: "Formandskavet", link: "/"}, 
            {name: "Hovednøgleindehavere", link: "/"}, 
            {name: "Husorden ", link: "/"}, 
            {name: "Øl-kælderen", link: "/"},
            {name: "§8-udvalget", link: "/"}, 
            {name: "Fondsøgningsstilling", link: "/"}, 
            {name: "Festivalsudvaglet", link: "/"},
            {name: "Gæsteværelser (Spejlsalen)", link: "/"}, 
            {name: "Arrangement", link: "/"}, 
            {name: "Bodegaen", link: "/"}, 
            {name: "Klubber", link: "/"}, 
            {name: "Læsesalsudvalget ", link: "/"}, 
            {name: "Motorcykelkælderen", link: "/"},
            {name: "Grupperum ", link: "/"}, 
            {name: "Ladcykel", link: "/"},    
        ]},
        {name: "Guides/Blanketter", link: "/", children: [
            {name: "Fremlejekontrakt", link: "/"}, 
            {name: "Studiekontrol", link: "/"}, 
            {name: "Opsigelse", link: "/"}, 
            {name: "Biograf", link: "/"},     
        ]},
        {name: "Links", link: "/", children: [
            {name: "Vasketider", link: "/"}, 
            {name: "OMK Facebook", link: "/"}, 
            {name: "Ottos Trøst Facebook", link: "/"}, 
            {name: "Kollegiet's eksterne side", link: "/"},
            {name: "Washcam", link: "/"},       
        ]},
        {name: "Kontakt", link: "/"},  
        {name: "Login", link: "/"},  
    ];
    render() {
        return (
            <div style={{ background: '#162756', color: '#FFF', width: '100%', height: '100vh' }}>
                <SideNav highlightColor='#white' highlightBgColor='#061439'>
                {this.menuItems.map(item => this.renderMenuItem(item))}
                </SideNav>
            </div >
        )
    }

    renderMenuItem(item) {
        return (
            <Nav id={item.name} key={item.name}>
                <NavText> {item.name} </NavText>
                {item.children && item.children.map(i => this.renderMenuItem(i))}
            </Nav>
        )
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(NavMenu);

