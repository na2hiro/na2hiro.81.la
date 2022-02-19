import {commonHeaders} from "~/components/headers";


// TODO: remove after https://github.com/remix-run/remix/issues/1091
export function loader() {
    return {};
}

export const headers = commonHeaders;

export default function Index() {
  return (
    <div>
      <img src={"/twittericon.png"} alt="na2hiroのアイコン" style={{width: "200px", height: "200px"}}/>
    </div>
  );
}
