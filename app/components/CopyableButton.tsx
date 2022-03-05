import {FC, useState} from "react";

const CopyableButton: FC<{ textToCopy: string, className?: string }> = ({textToCopy, children, className}) => {
    const [copied, setCopied] = useState(false);
    return (
        <div className="tooltip" data-tip={copied ? "Copied!" : textToCopy}>
            <button className={(className ?? "")} onClick={() => {
                setCopied(true);
                navigator.clipboard.writeText(textToCopy);
                setTimeout(() => setCopied(false), 1000);
            }}>
                {children}
            </button>
        </div>
    )
}

export default CopyableButton;