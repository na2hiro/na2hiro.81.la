import {commonHeaders} from "~/components/headers";
import {H1, H2, H3, Section, Ul} from "~/components/Elements";

export const headers = commonHeaders;

export default function Profile() {
    return (
        <>
            <H1>Profile</H1>
            <Section>
                <H2>Basics</H2>
                <Ul>
                    <li>誕生: 1990年</li>
                    <li>在住: 品川</li>
                    <li>言語: 🇯🇵 日本語, 🇺🇸 英語(ビジネスレベル?), 🇷🇺 ロシア語(できない)</li>
                    <li>職業: Senior Software Engineer (求人関連の会社)</li>
                    <li>学歴: 東工大院, 東工大, 東海高校</li>
                </Ul>
            </Section>

            <Section>
                <H2>Skills</H2>

                <Section>
                    <H3>Frameworks</H3>
                    <p>Webが好き</p>
                    <Ul>
                        <li>Remix 💿</li>
                        <li>React.js</li>
                        <li>Spring Framework</li>
                    </Ul>
                </Section>

                <Section>
                    <H3>Programming Languages</H3>
                    <p>最近は型がないと生きていけない</p>

                    <Ul>
                        <li>常用: TypeScript / JavaScript(ブラウザで動くもの), Java</li>
                        <li>実用経験: Node.js, Ruby, PHP</li>
                        <li>趣味: Rust, Haskell</li>
                    </Ul>
                </Section>

                <Section>
                    <H3>Tools</H3>
                    <Ul>
                        <li>Git / GitHub / GitLab</li>
                        <li>IntelliJ + IdeaVim</li>
                    </Ul>
                </Section>
            </Section>
        </>
    );
}
