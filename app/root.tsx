import {
    Links, LinksFunction,
    LiveReload,
    Meta, NavLink,
    Outlet,
    Scripts,
    ScrollRestoration
} from "remix";
import type {MetaFunction} from "remix";
import {RemixableScript} from "~/components/RemixableScript";
import {FC} from "react";

export const meta: MetaFunction = () => {
    return {title: "na2hiro"};
};

export const links: LinksFunction = () => {
    return [
        {rel: "stylesheet", href: "/styles.css"}
    ];
};
const BoldNavLink: FC<{ to: string }> = ({to, children}) => {
    return <NavLink style={({isActive}) => ({fontWeight: isActive ? "bold" : "normal"})} to={to}>{children}</NavLink>;
}

const TwitterFollow = () => {
    return (
        <div style={{display: "inline-flex", marginLeft: "8px", verticalAlign: "middle"}}>
            <a href="https://twitter.com/na2hiro?ref_src=twsrc%5Etfw" className="twitter-follow-button"
               data-size="large"
               data-show-count="false" style={{display: "none"}}>Follow @na2hiro</a>
            <RemixableScript src="https://platform.twitter.com/widgets.js"/>
        </div>
    )
}

export default function App() {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <meta name="favicon" content="/favicon.ico"/>
            <Meta/>
            <Links/>
        </head>
        <body>
        <h1><NavLink to="/" className={({isActive}) => isActive ? "" : "with-icon"}>About na2hiro</NavLink>
            <TwitterFollow/>
        </h1>
        <ul className="unstyled">
            <li><BoldNavLink to="/products">Products</BoldNavLink></li>
            <li><BoldNavLink to="/hobbies">Hobbies & Likes</BoldNavLink></li>
            <li><BoldNavLink to="/skills">Skills</BoldNavLink></li>
            <li><BoldNavLink to="/social">Social accounts</BoldNavLink></li>
            <li><BoldNavLink to="/activities">Activities</BoldNavLink></li>
            <li><BoldNavLink to="/profile">Profile</BoldNavLink></li>
        </ul>
        <Outlet/>
        <ScrollRestoration/>
        <Scripts/>
        {process.env.NODE_ENV === "development" && <LiveReload port={8012}/>}
        </body>
        </html>
    );
}
