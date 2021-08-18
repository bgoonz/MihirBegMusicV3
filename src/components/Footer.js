import React from 'react';
import _ from 'lodash';

import { classNames, Link, withPrefix, htmlToReact } from '../utils';
import Action from './Action';
import ActionIcon from './ActionIcon';
import ActionLink from './ActionLink';

export default class Footer extends React.Component {
    renderNav(navLinks, navTitle) {
        return (
            <div className="site-footer__menu cell-12 cell-md my-3 my-md-4">
                {navTitle && <h2 className="h4 mb-3 mb-md-4">{navTitle}</h2>}
                <ul className="menu">
                    {_.map(navLinks, (action, index) => (
                        <li key={index} className="menu__item mb-1">
                            <Action action={action} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    render() {
        const config = _.get(this.props, 'config');
        const footer = _.get(config, 'footer');
        const logo = _.get(footer, 'logo');
        const logoAlt = _.get(footer, 'logo_alt', '');
        const hasPrimaryNav = _.get(footer, 'has_primary_nav');
        const primaryNavTitle = _.get(footer, 'primary_nav_title');
        const primaryNavLinks = _.get(footer, 'primary_nav_links');
        const hasSecondaryNav = _.get(footer, 'has_secondary_nav');
        const secondaryNavTitle = _.get(footer, 'secondary_nav_title');
        const secondaryNavLinks = _.get(footer, 'secondary_nav_links');
        const hasTertiaryNav = _.get(footer, 'has_tertiary_nav');
        const tertiaryNavTitle = _.get(footer, 'tertiary_nav_title');
        const tertiaryNavLinks = _.get(footer, 'tertiary_nav_links');
        const hasSocial = _.get(footer, 'has_social');
        const socialLinks = _.get(footer, 'social_links');
        const copyright = _.get(footer, 'content');
        const links = _.get(footer, 'links');

        return (
            <footer className="site-footer">

            <!-- start of freefind search box html -->
<table cellpadding=0 cellspacing=0 border=0 >
<tr>
	<td  style="font-family: Arial, Helvetica, sans-serif; font-size: 7.5pt;">
		<center><table width="90%" cellpadding=0 cellspacing=0 border=0  style="font-family: Arial, Helvetica, sans-serif; font-size: 7.5pt;">
		<tr>
			<td style="font-family: Arial, Helvetica, sans-serif; font-size: 7.5pt;" align=left ><a href="https://search.freefind.com/siteindex.html?si=10862521">index</a></td>
			<td style="font-family: Arial, Helvetica, sans-serif; font-size: 7.5pt;" align=center><a href="https://search.freefind.com/find.html?si=10862521&amp;m=0&amp;p=0">sitemap</a></td>
			<td style="font-family: Arial, Helvetica, sans-serif; font-size: 7.5pt;" align=right><a href="https://search.freefind.com/find.html?si=10862521&amp;pid=a">advanced</a></td>
		</tr>
		</table></center>
		<form style="margin:0px; margin-top:4px;" action="https://search.freefind.com/find.html" method="get" accept-charset="utf-8" target="_self">
		<input type="hidden" name="si" value="10862521">
		<input type="hidden" name="pid" value="r">
		<input type="hidden" name="n" value="0">
		<input type="hidden" name="_charset_" value="">
		<input type="hidden" name="bcd" value="&#247;">
		<input type="text" name="query" size="15"> 
		<input type="submit" value="search">
		</form>
	</td>
</tr>
<tr>
	<td style="text-align:center; font-family: Arial, Helvetica, sans-serif;	font-size: 7.5pt; padding-top:4px;">
		<a style="text-decoration:none; color:gray;" href="https://www.freefind.com"  rel="nofollow">search engine</a><a style="text-decoration:none; color:gray;" href="https://www.freefind.com" rel="nofollow" > by
		<span style="color: #606060;">freefind</span></a>
	</td>
</tr>
</table>
<!-- end of freefind search box html -->

                {(logo || (hasPrimaryNav && !_.isEmpty(primaryNavLinks)) || (hasSecondaryNav && !_.isEmpty(secondaryNavLinks)) || (hasTertiaryNav && !_.isEmpty(tertiaryNavLinks))) && (
                    <div className="site-footer__nav py-5 py-md-6">
                        <div className="container">
                            <div
                                className={classNames('grid', {
                                    'justify-md-center': logo
                                })}
                            >
                                {logo && <Link className="site-footer__logo cell-12 cell-md-5 my-4" href={withPrefix('/')}><img src={withPrefix(logo)} alt={logoAlt} /></Link>}
                                {hasPrimaryNav && !_.isEmpty(primaryNavLinks) && this.renderNav(primaryNavLinks, primaryNavTitle)}
                                {hasSecondaryNav && !_.isEmpty(secondaryNavLinks) && this.renderNav(secondaryNavLinks, secondaryNavTitle)}
                                {hasTertiaryNav && !_.isEmpty(tertiaryNavLinks) && this.renderNav(tertiaryNavLinks, tertiaryNavTitle)}
                            </div>
                        </div>
                    </div>
                )}
                
                {(copyright || !_.isEmpty(links) || (hasSocial && !_.isEmpty(socialLinks))) && (
                    <div className="site-footer__info py-3 py-sm-4">
                        <div className="container">
                            <div className="grid items-center">
                                {(copyright || !_.isEmpty(links)) && (
                                    <div
                                        className={classNames('site-footer__copyright', 'cell-12', {
                                            'cell-sm': hasSocial && !_.isEmpty(socialLinks)
                                        })}
                                    >
                                        {copyright && <span>{htmlToReact(copyright)}</span>}
                                        {_.map(links, (action, index) => (
                                            <ActionLink key={index} action={action} />
                                        ))}
                                    </div>
                                )}
                                {hasSocial && !_.isEmpty(socialLinks) && (
                                    <div
                                        className={classNames('site-footer__social', 'cell-12', {
                                            'cell-sm-auto': copyright || !_.isEmpty(links)
                                        })}
                                    >
                                        {_.map(socialLinks, (action, index) => (
                                            <ActionIcon key={index} action={action} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </footer>
        );
    }
}
