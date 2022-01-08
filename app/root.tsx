import {
    Link,
    Links, LinksFunction,
    LiveReload,
    Meta, NavLink,
    Outlet,
    Scripts,
    ScrollRestoration
} from "remix";
import type {MetaFunction} from "remix";

export const meta: MetaFunction = () => {
    return {title: "na2hiro"};
};

export const links: LinksFunction = () => {
    return [
        {rel: "stylesheet", href: "/styles.css"},
        // { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" }
    ];
};
const BoldNavLink = ({to, children}) => {
    return <NavLink style={({isActive})=>({fontWeight: isActive?"bold":"normal"})} to={to}>{children}</NavLink>;
}

export default function App() {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <Meta/>
            <Links/>
        </head>
        <body>
        <h1><Link to="/">About na2hiro</Link></h1>
        <ul className="unstyled">
            <li><BoldNavLink to="/products">Products</BoldNavLink></li>
            <li><BoldNavLink to="/skills">Skills</BoldNavLink></li>
            <li><BoldNavLink to="/hobbies">Hobbies & Likes</BoldNavLink></li>
            <li><BoldNavLink to="/activities">Activities</BoldNavLink></li>
            <li><BoldNavLink to="/social">Social accounts</BoldNavLink></li>
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
