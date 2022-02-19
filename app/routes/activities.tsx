import {commonHeaders} from "~/components/headers";

// TODO: remove after https://github.com/remix-run/remix/issues/1091
export function loader() {
    return {};
}

export const headers = commonHeaders;

export default function Activities () {
    return (
        <>
            <h2>Activities</h2>
            <ul>
                <li>プログラミングコンテスト

                    <ul>
                        <li>CODE FESTIVAL 2014裏方</li>
                        <li>リクルートプロコン5完(2013)</li>
                        <li>ICPC出場(2013)</li>
                    </ul></li>
                <li>将棋関連

                    <ul>
                        <li>将棋ウォーズニコ生に出演(2013, 2014)</li>
                        <li>第3回電王戦最終局で控え室へ応援しにいきニコ生に見切れる(2014)</li>
                        <li>関東学生リーグで東工大チームのレギュラー(弱い)(2009-2012)</li>
                        <li>高校将棋選手権男子団体 愛知県代表(2008)</li>
                    </ul></li>
                <li>勉強会

                    <ul>
                        <li>圏論とか</li>
                    </ul></li>
            </ul>
        </>
    )
}
