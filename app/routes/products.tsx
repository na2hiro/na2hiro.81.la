// TODO: remove after https://github.com/remix-run/remix/issues/1091
export function loader() {
    return {};
}
export default function Products () {
    return(
        <>
            <h2>Products</h2>
            <p>最近ではないものには年号を付けています．だいたい新しい順．</p>

            <h3 id="toc_5">Services</h3>

            <ul>
                <li><a href="http://doubutsushogiwars.heroz.jp">どうぶつしょうぎウォーズ</a>: HEROZにてバイト</li>
                <li><a href="http://shogitter.com">将棋ったー</a>(2010-): 100以上の変則将棋ルールが楽しめるオンライン対局サイト

                    <ul>
                        <li><a href="http://shogitter.com/rule/108">量子将棋</a>(2013-): 重ね合わせの原理を用いた斬新な将棋

                            <ul>
                                <li>バズった: <a href="http://nlab.itmedia.co.jp/nl/articles/1310/29/news097.html">動かすまで何の駒かは確定しない　可能性がヤバすぎるゲーム「量子将棋」が話題に - ねとらぼ</a></li>
                                <li>取材を受けた: <a href="http://www.chunichi.co.jp/article/junior/naruhodo/201311/CK2013112402000185.html">将棋のルーツ分かる「酔象」:なるほどランド:中日新聞(CHUNICHI Web)</a></li>
                            </ul></li>
                    </ul></li>
            </ul>

            <h3 id="toc_6">Open-source Activities</h3>

            <ul>
                <li><a href="https://github.com/na2hiro/Kifu-for-JS">Kifu for JS</a>: Java/Flash不要の将棋棋譜プレイヤー</li>
                <li><a href="https://github.com/na2hiro/json-kifu-format">JSON棋譜フォーマット(JKF)</a>: 汎用的な棋譜フォーマット</li>
            </ul>

            <h3 id="toc_7">Misc. Products</h3>

            <ul>
                <li><a href="http://monadianity.81.la/">モナド教</a>: モナドに基づいた天国を有する宗教</li>
                <li><a href="http://recruit-jinji.jp/code_fes2014/">CODE FESTIVAL 2014</a>のリレー順位表</li>
            </ul>

            <h3 id="toc_8">Other Websites</h3>

            <ul>
                <li><s><a href="http://na2hiro.blogspot.jp">na2hiro&#39;s Devlog(仮)</a>: あまり書いてない開発ブログ</s></li>
                <li><a href="http://shostakovi.ch">Shostakovi.ch</a>(2009-): ソ連の作曲家ショスタコーヴィチが映画音楽を担当した映画と自ら翻訳した字幕を公開</li>
                <li><a href="http://81.la">将棋のページ</a>(2001?-): スーパー正男というゲームの投稿サイト．保有ステージ数5000以上．</li>
            </ul>
        </>
    )
}
