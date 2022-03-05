import {commonHeaders} from "~/components/headers";
import {A, H1, H2, H3, Section, Ul} from "~/components/Elements";

export const headers = commonHeaders;

export default function Hobbies() {
    return (
        <>

            <H1>Hobbies</H1>
            <Section>
                <H2>What I like</H2>
                <Section>
                    <H3>ショスタコーヴィチ，ロシア (2006-)</H3>
                    <Section>
                        <Ul>
                            <li>生誕100年の日からファン</li>
                            <li>シベリア・極東ロシアへ一度，カムチャッカへ一度個人旅行</li>
                        </Ul>
                    </Section>

                    <H3>将棋 (1999?-)</H3>
                    <Section>
                        <Ul>
                            <li>最近指してなくて弱い</li>
                            <li>将棋ウォーズ四段(最高五段)</li>
                            <li>東海研修会D1 (2002?-2006)</li>
                        </Ul>
                    </Section>
                    <H3>ラーメンズ(小林賢太郎, 片桐仁)</H3>
                    <Section>
                        <Ul>
                            <li>美しい</li>
                        </Ul>
                    </Section>
                    <H3>型システム</H3>
                    <Section>
                        <Ul>
                            <li>言語を型システムで見る．最近はRustがキテる模様</li>
                        </Ul>
                    </Section>
                    <H3>外貨収集</H3>
                    <Section>
                        <Ul>
                            <li><A
                                href="https://twitter.com/na2hiro/status/598105338420727808">旅行した国の紙幣・貨幣を集め，額縁に入れて対数展示</A>
                                <Ul>
                                    <li>もはや外貨預金</li>
                                </Ul>
                            </li>
                            <li><A href="https://twitter.com/na2hiro/status/604645446196170752">初任給でジンバブエ・ドルを購入</A>
                                <Ul>
                                    <li><A
                                        href="https://twitter.com/na2hiro/status/605023753848897536">ジンバブエ・ドルを対数展示してみた</A>
                                    </li>
                                </Ul>
                            </li>
                            <li><A href="https://twitter.com/na2hiro/status/880084529846689794">5000兆ペンゲー欲しい!</A></li>
                        </Ul>
                    </Section>
                </Section>
            </Section>

            <Section>
                <H2>Activities</H2>
                <Section>
                    <H3>プログラミングコンテスト</H3>
                    <Section>
                        <Ul>
                            <li>CODE FESTIVAL 2014裏方</li>
                            <li>リクルートプロコン5完 (2013)</li>
                            <li>ICPC出場 (2013)</li>
                        </Ul>
                    </Section>
                    <H3>将棋関連</H3>
                    <Section>
                        <Ul>
                            <li>将棋ウォーズニコ生に出演 (2013, 2014)</li>
                            <li>第3回電王戦最終局で控え室へ応援しにいきニコ生に見切れる (2014)</li>
                            <li>関東学生リーグで東工大チームのレギュラー(弱い) (2009-2012)</li>
                            <li>高校将棋選手権男子団体 愛知県代表 (2008)</li>
                        </Ul>
                    </Section>
                    <H3>勉強会</H3>
                    <Section>
                        <Ul>
                            <li>圏論とか</li>
                        </Ul>
                    </Section>
                </Section>

            </Section>
        </>
    )
}
