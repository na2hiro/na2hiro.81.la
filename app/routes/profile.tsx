import {commonHeaders} from "~/components/headers";

// TODO: remove after https://github.com/remix-run/remix/issues/1091
export function loader() {
    return {};
}
export const headers = commonHeaders;

export default function Profile() {
  return (
    <div>
      <h2>Profile</h2>
        <ul>
            <li>誕生: 1990年</li>
            <li>在住: 品川</li>
            <li>言語: 🇯🇵 日本語, 🇺🇸 英語(ビジネスレベル?), 🇷🇺 ロシア語(できない)</li>
            <li>職業: Senior Software Engineer (求人関連の会社)</li>
            <li>学歴: 東工大院, 東工大, 東海高校</li>
        </ul>
    </div>
  );
}
