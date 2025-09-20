import { Button } from "../ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import LinkElem from "../main/LinkElem";
import isValidUrl from "../../utils/isValidUrl";

const Main = () => {
  const [newUrls, setNewUrls] = useState<string[]>([]);
  const [longLinks, setLongLinks] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const saveLinksToLocalStorage = (longUrls: string[], shortUrls: string[]) => {
    const links = {
      longUrls,
      shortUrls,
    };
    // const existingLinks = JSON.parse(localStorage.getItem("links") || "[]");
    localStorage.setItem("links", JSON.stringify(links));
  };
  const loadLinksFromLocalStorage = () => {
    const savedLinks = JSON.parse(localStorage.getItem("links") || "[]");
    return savedLinks;
  };

  useEffect(() => {
    const savedLinks = loadLinksFromLocalStorage();
    if (savedLinks.longUrls && savedLinks.shortUrls) {
      setLongLinks(savedLinks.longUrls);
      setNewUrls(savedLinks.shortUrls);
    }
  }, []);

  const shortenUrl = async (url: string) => {
    setLoading(true);
    setError("");
    if (!url) {
      setError("Please add a link");
      setLoading(false);
      return;
    }
    if (!isValidUrl(url)) {
      setError("Please enter a valid URL");
      setLoading(false);
      return;
    }
    try {
      const res = await axios.post(
        "api/v1/shorten",
        new URLSearchParams({
          url,
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (res.data && res.data.result_url) {
        setNewUrls((prev) => [...prev, res.data.result_url]);
        setLongLinks((prev) => [...prev, url]);
        saveLinksToLocalStorage(
          [...longLinks, url],
          [...newUrls, res.data.result_url]
        );
        setInputValue("");
      } else {
        console.error("Unexpected API response", res.data);
      }
    } catch (err: any) {
      console.error("Error shortening url: ", err.message);
      setError("An error occurred while shortening the URL");
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="flex flex-col gap-2 md:mx-6 mx-2">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-5 mb-10">
        <div className="justify-center items-center flex flex-col text-center">
          <h3 className="font-bold text-[44px]  lg:mb-4 ">
            More than just shorter links
          </h3>
          <div className="text-gray-400 mb-4">
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </div>
          <Button className="rounded-full hover:opacity-70 transition-all px-6">
            Get Started
          </Button>
        </div>
        <img src="/images/illustration-working.svg" alt="" />
      </div>
      <div className="bg-[#3b3054] relative flex flex-col p-5 max-w-[800px] w-full mx-auto overflow-hidden rounded-lg">
        <div className="absolute z-0 inset-0">
          <img
            src="/images/bg-shorten-desktop.svg"
            alt=""
            className="object-cover w-full inset-0 h-full"
          />
        </div>
        <div className="z-10 flex flex-col md:flex-row md:px-8 md:py-6  my-4 gap-3 items-center">
          <div className="flex relative py-2 px-4 gap-2 bg-gray-100 rounded-lg flex-1 w-full items-center">
            <img
              src="/images/icon-search.svg"
              alt=""
              className="invert w-[16px]"
            />
            <input
              type="text"
              placeholder="Shorten a link here..."
              className="flex-1 cursor-pointer text-gray-700"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            {error && (
              <p className="absolute bottom-10 md:-bottom-6 left-0 text-red-500 italic text-sm">
                {error}
              </p>
            )}
          </div>
          <Button
            className={`w-full md:w-auto ${loading && "pointer-events-none"}`}
            onClick={() => {
              shortenUrl(inputValue);
            }}
          >
            {!loading ? (
              "Shorten URL"
            ) : (
              <div className="flex gap-1  loader">
                <small className="w-2 h-2 rounded-full bg-white"></small>
                <small className="w-2 h-2 rounded-full bg-white"></small>
                <small className="w-2 h-2 rounded-full bg-white"></small>
              </div>
            )}
          </Button>
        </div>
      </div>
      <div className="max-w-[800px] mx-auto w-full">
        {newUrls.map((url, idx) => {
          const longLink = longLinks[idx];
          // const [isCopied, setIsCopied] = useState<boolean>(false);
          //@ts-ignore
          return <LinkElem key={idx} longLink={longLink} url={url} />;
        })}
      </div>
      <div className="mt-12">
        <h1 className="text-center text-2xl font-semibold mb-4">
          Advanced Statistics
        </h1>
        <div className="text-center text-gray-400">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </div>
        <section className="bg-gray-100 py-10">
          <div className="container mx-auto px-6">
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-6">
              <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 w-[80%] h-2 bg-primary z-0"></div>

              <div className="bg-white shadow-lg p-6 rounded-md relative z-10 text-center md:text-left">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-slate-900  -mt-12 mb-4 mx-auto md:mx-0">
                  <img
                    src="images/icon-brand-recognition.svg"
                    alt="icon"
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">Brand Recognition</h3>
                <p className="text-gray-400 text-sm">
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instill confidence in
                  your content.
                </p>
              </div>

              <div className="bg-white shadow-lg p-6 rounded-md relative z-10 lg:mt-8 text-center md:text-left">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-slate-900 -mt-12 mb-4  mx-auto md:mx-0">
                  <img
                    src="/images/icon-detailed-records.svg"
                    alt="icon"
                    className="w-6 h-6 "
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">Detailed Records</h3>
                <p className="text-gray-400 text-sm">
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>

              <div className="bg-white shadow-lg p-6 rounded-md relative z-10 lg:mt-16 text-center md:text-left">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-slate-900 -mt-12 mb-4 mx-auto md:mx-0">
                  <img
                    src="/images/icon-fully-customizable.svg"
                    alt="icon"
                    className="w-6 h-6"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">Fully Customizable</h3>
                <p className="text-gray-400 text-sm">
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
export default Main;
