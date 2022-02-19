// TODO: remove after https://github.com/remix-run/remix/issues/1091
export function loader() {
    return {};
}
export default function Skills() {
    return (
        <>
            <h2>Skills</h2>

            <h3>Frameworks</h3>
            <p>Webが好き</p>
            <ul>
                <li>Remix 💿</li>
                <li>React.js</li>
                <li>Spring Framework</li>
            </ul>

            <h3>Programming Languages</h3>
            <p>最近は型がないと生きていけない</p>

            <ul>
                <li>常用: TypeScript / JavaScript(ブラウザで動くもの), Java</li>
                <li>実用経験: Node.js, Ruby, PHP</li>
                <li>趣味: Rust, Haskell</li>
            </ul>

            <h3>Tools</h3>
            <ul>
                <li>Git / GitHub / GitLab</li>
                <li>IntelliJ + IdeaVim</li>
            </ul>
        </>
    )
}
