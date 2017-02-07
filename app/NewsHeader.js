import React from 'react';
import imageLogo from '../img/y18.gif';
import '../css/NewsHeader.css';

export default class NewsHeader extends React.Component {
    getLogo() {
        return (
            <div className="newsHeader-logo">
                <a href="http://www.niunaiweb.com/"><img src={imageLogo} /></a>
            </div>
        )
    }
    getTitle() {
        return (
            <div className="newsHeader-title">
                <div className="newsHeader-link" href="http://www.niunaiweb.com/">Hacker News</div>
            </div>
        )
    }
    getNav() {
        var navLinks = [
            {
                name: 'new',
                url: 'newest'
            },
            {
                name: 'comments',
                url: 'newcomments'
            },
            {
                name: 'show',
                url: 'show'
            },
            {
                name: 'ask',
                url: 'ask'
            },
            {
                name: 'jobs',
                url: 'jobs'
            },
            {
                name: 'submit',
                url: 'submit'
            }
        ];
        return (
            <div className="newsHeader-nav">
                {
                    navLinks.map(function (navLink) {
                        return (
                            <a key={navLink.url} className="newsHeader-navLink newsHeader-textLink" href={"http://www.niunaiweb.com/" + navLink.url} >
                                {navLink.name}
                            </a>
                        )
                    })
                }
            </div>
        )
    }
    getLogin() {
        return (
            <div className="newsHeader-login">
                <div className="newsHeader-textLink" href="http://www.niunaiweb.com/login?goto=news">login</div>
            </div>
        )
    }
    render() {
        return (
            <div className="newsHeader">
                {this.getLogo()}
                {this.getTitle()}
                {this.getNav()}
                {this.getLogin()}
            </div>
        );
    }
}