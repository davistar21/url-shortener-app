import { useState } from "react";
import copyToClipboard from "../../utils/copyToClipboard";
import { Button } from "../ui/button";

const LinkElem = ({
  idx,
  longLink,
  url,
}: {
  idx: number;
  longLink: string;
  url: string;
}) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const handleCopy = () => {
    copyToClipboard(url);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  return (
    <div
      key={idx}
      className="flex p-4 flex-col md:flex-row bg-white rounded-sm gap-4 md:items-center shadow-md"
    >
      <div className="flex-1 max-w-full overflow-x-auto whitespace-nowrap text-ellipsis break-words scrollbar">
        <div>{longLink}</div>
      </div>
      <a
        className="text-[#2acfcf]"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {url}
      </a>
      <Button
        className={`w-full md:w-auto bg-secondary ${
          isCopied ? "bg-[#3b3054]" : "bg-primary"
        }`}
        onClick={handleCopy}
      >
        {isCopied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
};

export default LinkElem;
