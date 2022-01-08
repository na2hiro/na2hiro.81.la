import {useEffect, useRef, VFC} from "react";

export default function Social() {
    return (
        <div>
            <h2>Social Accounts</h2>

            <ul className="unstyled" style={{display: "flex", flexWrap: "wrap"}}>
                <li><h3>twitter: <a href="https://twitter.com/na2hiro">na2hiro</a></h3>
                    <Twitter/>
                </li>
                <li><h3>github: <a href="https://github.com/na2hiro">na2hiro</a></h3>
                    <div className="github-widget" data-username="na2hiro"></div>
                    <RemixableScript src="https://unpkg.com/github-card@1.2.1/dist/widget.js"></RemixableScript>
                </li>
                <li><h3>hatenablog: <a href={"https://na2hiro.hatenablog.com/"}>na2hiro</a></h3></li>
                <li><h3>discord: na2hiro#2460</h3></li>
                <li><h3>skype: na2hiro</h3></li>
                <li><h3>gmail: na2hiro</h3></li>

            </ul>
        </div>
    )
}

type RemixableScriptProps = {
    src: string;
}
const RemixableScript: VFC<RemixableScriptProps> = ({src}) => {
    const ref = useRef<HTMLSpanElement>(null);
    useEffect(() => {
        ref.current?.appendChild((() => {
            const script = document.createElement("script");
            script.src = src;
            return script;
        })());
        return () => {
            ref.current?.firstChild?.remove();
        }
    }, [ref.current]);
    return (
        <span ref={ref}/>
    )
}

const Twitter = () => {
    return (
        <>
            <a className="twitter-timeline" data-width="300" data-height="500"
               href="https://twitter.com/na2hiro?ref_src=twsrc%5Etfw">Tweets by na2hiro</a>
            <RemixableScript src={`https://platform.twitter.com/widgets.js`}/>
        </>
    )
}
