import {FC, SyntheticEvent} from "react";

export const H1: FC = ({children}) => {
    return (
        <h1 className={"font-bold text-4xl mt-6 mb-2"}>
            {children}
        </h1>
    );
}
export const H2: FC = ({children}) => {
    return (
        <h2 className={"font-bold text-2xl mt-5 mb-1"}>
            {children}
        </h2>
    );
}
export const H3: FC = ({children}) => {
    return (
        <h2 className={"font-bold text-lg mt-4 mb-1"}>
            {children}
        </h2>
    );
}

export const Section: FC = ({children}) => {
    return (
        <section className={"ml-4"}>
            {children}
        </section>
    );
}

export const Ul: FC = ({children}) => {
    return (
        <ul className={"list-disc pl-6"}>
            {children}
        </ul>
    );
}

export const A: FC<{ href: string, className?: string, onClick?: (e: SyntheticEvent) => void }> = ({children, href, className, onClick = () => {}}) => {
    return (
        <a className={"link link-primary " + (className ?? "")} href={href} onClick={onClick} target="_blank">
            {children}
        </a>
    );
}