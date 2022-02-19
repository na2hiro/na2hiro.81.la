import {HeadersFunction} from "remix";

// TODO: specify in root after the bug is fixed
const MAX_AGE = 60*60;
const S_MAXAGE = 60*60;
const STALE_WHILE_REVALIDATE = 60*60*24;
export const commonHeaders: HeadersFunction = () => {
    // throw new Error("Headers is called actually");
    return {
        "Cache-Control": `max-age=${MAX_AGE}, s-maxage=${S_MAXAGE}, stale-while-revalidate=${STALE_WHILE_REVALIDATE}`,
    }
}
