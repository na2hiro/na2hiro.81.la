import {
    Links, LinksFunction,
    LiveReload,
    Meta, NavLink,
    Outlet,
    Scripts,
    ScrollRestoration
} from "remix";
import type {MetaFunction} from "remix";
import {FC} from "react";
import StickySocials from "~/components/StickySocials";

// TODO: animation during transition

export const meta: MetaFunction = () => {
    return {title: "@na2hiro"};
};

export const links: LinksFunction = () => {
    return [
        {rel: "stylesheet", href: "/build/output.css"}
    ];
};
const BoldNavLink: FC<{ to: string }> = ({to, children}) => {
    return <NavLink to={to} prefetch="intent">{children}</NavLink>;
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
        <body className="font-serif">
        <div className="navbar bg-base-100 bg-gray-100">
            <div className="flex-1">
                <NavLink prefetch="intent" to="/" className="btn btn-ghost normal-case text-xl">
                    <div className="avatar">
                        <div className={`w-8 h-8 transition mr-1`}>
                            <img src="/icon-100.png" alt="na2hiro"/>
                        </div>
                    </div>
                    <span className={"font-mono"}>@na2hiro</span>
                </NavLink>
            </div>
            <div className="flex-none">
                <ul className="menu menu-vertical md:menu-horizontal p-0">
                    <li><BoldNavLink to="/products">Products</BoldNavLink></li>
                    <li><BoldNavLink to="/hobbies">Hobbies</BoldNavLink></li>
                    <li><BoldNavLink to="/profile">Profile</BoldNavLink></li>
                </ul>
            </div>
        </div>
        <div className="m-4 mb-32">
            <Outlet/>
        </div>
        <StickySocials/>
        <ScrollRestoration/>
        <Scripts/>
        {process.env.NODE_ENV === "development" && <LiveReload port={8012}/>}
        </body>
        </html>
    );
}
