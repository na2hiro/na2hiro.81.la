import {commonHeaders} from "~/components/headers";
import {A, H1, H2, H3, Section, Ul} from "~/components/Elements";

export const headers = commonHeaders;

export default function Products() {
    return (
        <>
            <H1>Products</H1>
            <p>最近ではないものには年号を付けています．だいたい新しい順．</p>

            <Section>
                <H2>Apps</H2>
                <Section>
                    <div className="flex flex-wrap gap-6 -ml-8 lg:ml-0 my-4 justify-center xl:justify-start">
                        <a href="https://shogitter.com" target="_blank"
                           className="card  card-compact w-96 bg-base-100 shadow-md hover:shadow-xl transition-shadow">
                            <figure className="bg-gray-100"><img src="/shogitter.png"
                                                                 className="aspect-[800/450] w-full" aria-hidden/>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">将棋ったー</h2>
                                <p>100以上の変則将棋ルールが楽しめるオンライン対局サイト</p>
                            </div>
                        </a>
                        <div onClick={() => open("https://shogitter.com/rule/108", "_blank")}
                           className="card card-compact w-96 bg-base-100 shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                            <figure className="bg-gray-100"><img src="/quantum-shogi.png"
                                                                 className="aspect-[800/450] w-full" alt="Shoes"/>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title"><a href="https://shogitter.com/rule/108" target="_blank">量子将棋</a></h2>
                                <p>重ね合わせの原理を用いた斬新な将棋</p>
                            <Ul>
                                <li>バズった: <A href="http://nlab.itmedia.co.jp/nl/articles/1310/29/news097.html" className="italic" onClick={(e)=>e.stopPropagation()}>動かすまで何の駒かは確定しない
                                    可能性がヤバすぎるゲーム「量子将棋」が話題に - ねとらぼ</A></li>
                                <li>取材を受けた: <A
                                    href="http://www.chunichi.co.jp/article/junior/naruhodo/201311/CK2013112402000185.html"
                                    className="italic" onClick={(e)=>e.stopPropagation()}>将棋のルーツ分かる「酔象」:なるほどランド:中日新聞(CHUNICHI Web)</A></li>
                            </Ul>
                            </div>
                        </div>
                        <a href="https://doubutsushogiwars.heroz.jp" target="_blank"
                           className="card  card-compact w-96 bg-base-100 shadow-md hover:shadow-xl transition-shadow">
                            <figure className="bg-yellow-50"><img src="/doubutsu.png"
                                                                  className="aspect-[580/290] w-full"
                                                                  aria-hidden/></figure>
                            <div className="card-body">
                                <h2 className="card-title">どうぶつしょうぎウォーズ</h2>
                                <p>HEROZにてバイト</p>
                            </div>
                        </a>
                        <a href="https://toolbox.shogitter.com/" target="_blank"
                           className="card card-compact w-96 bg-base-100 shadow-md hover:shadow-xl transition-shadow">
                            <figure className="bg-blue-100 h-48"><img src="/shogi-toolbox.png"
                                                                      className="aspect-[800/450] w-full"
                                                                      aria-hidden/></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shogi Toolbox!</h2>
                                <p>将棋好きのためのツール集です（予定）</p>
                            </div>
                        </a>
                    </div>
                </Section>
            </Section>

            <Section>
                <H2>Open Source Software</H2>
                <Section>
                    <H3>Author / Maintainer</H3>
                    <Section>
                        <div className="flex flex-wrap gap-6 items-start -ml-12 lg:ml-0 overflow-x-auto">
                            <object type="image/svg+xml" className="shadow-md hover:shadow-xl transition-shadow w-[442px]"
                                    data="https://gh-card.dev/repos/na2hiro/remix-auth-twitter.svg?link_target=_blank"/>
                            <object type="image/svg+xml" className="shadow-md hover:shadow-xl transition-shadow w-[442px]"
                                    data="https://gh-card.dev/repos/na2hiro/Kifu-for-JS.svg?link_target=_blank"/>
                            <object type="image/svg+xml" className="shadow-md hover:shadow-xl transition-shadow w-[442px]"
                                    data="https://gh-card.dev/repos/na2hiro/json-kifu-format.svg?link_target=_blank"/>
                        </div>
                    </Section>
                </Section>

                <Section>
                    <H3>Contributor</H3>
                    <Section>
                        <div className="flex flex-wrap gap-6 items-start -ml-12 lg:ml-0 overflow-x-auto">
                            <object type="image/svg+xml" className="shadow-md hover:shadow-xl transition-shadow w-[442px]"
                                    data="https://gh-card.dev/repos/remix-run/remix.svg?link_target=_blank"/>
                        </div>
                    </Section>
                </Section>
            </Section>

            <Section>
                <H2>Miscellaneous</H2>
                <Ul>
                    <li><A href="http://monadianity.81.la/">モナド教</A>: モナドに基づいた天国を有する宗教</li>
                    <li><A href="http://recruit-jinji.jp/code_fes2014/">CODE FESTIVAL 2014</A>のリレー順位表</li>
                    <li><A href="http://shostakovi.ch">Shostakovi.ch</A> (2009-):
                        ソ連の作曲家ショスタコーヴィチが映画音楽を担当した映画と自ら翻訳した字幕を公開
                    </li>
                    <li><A href="http://81.la">将棋のページ</A> (2001?-): スーパー正男というゲームの投稿サイト．保有ステージ数5000以上．</li>
                </Ul>
            </Section>
        </>
    )
}
