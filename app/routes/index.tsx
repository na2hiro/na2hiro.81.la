import {commonHeaders} from "~/components/headers";

export const headers = commonHeaders;

export default function Index() {
    return (
        <div className="flex justify-center items-center">
            <div className="avatar">
                <div className="w-60 rounded">
                    <img src={"/icon.png"} alt="na2hiroのアイコン"/>
                </div>
            </div>
        </div>
    );
}
