import { Button } from "@/components/ui/button";
const Footer = () => {
  return (
    <footer>
      <section className="relative w-full bg-[#3b3054] flex flex-col items-center gap-4 py-12">
        <img
          src="images/bg-boost-desktop.svg"
          alt=""
          className="absolute z-0 inset-0 object-cover w-full h-full"
        />
        <div className="z-10 flex flex-col gap-5 items-center">
          <div className="text-3xl font-semibold text-white ">
            Boost your links today
          </div>
          <Button className="rounded-full px-6 w-fit">Get Started</Button>
        </div>
      </section>
      <section className="bg-[#232127] pt-10 pb-16 px-20 text-gray-400 flex md:flex-row flex-col items-center md:items-start justify-around gap-6">
        <div className="flex-2 mb-4">
          <img src="images/logo.svg" alt="" className="invert" />
        </div>
        <div className="flex flex-col gap-1 items-center md:items-start">
          <h2 className="mb-2 text-white">Features</h2>
          <div>Link Shortening</div>
          <div>Branded Links</div>
          <div>Analytics</div>
        </div>
        <div className="flex flex-col gap-1 items-center md:items-start">
          <h2 className="mb-2 text-white">Resources</h2>
          <div>Blog</div>
          <div>Developers</div>
          <div>Support</div>
        </div>
        <div className="flex flex-col gap-1 items-center md:items-start">
          <h2 className="mb-2 text-white">Company</h2>
          <div>About</div>
          <div>Our Team</div>
          <div>Careers</div>
          <div>Contact</div>
        </div>
        <div className="flex gap-4 items-center w-full max-w-[200px] md:w-auto justify-evenly">
          <img src="images/icon-facebook.svg" alt="" className="w-[16px]" />
          <img src="images/icon-twitter.svg" alt="" className="w-[16px]" />
          <img src="images/icon-instagram.svg" alt="" className="w-[16px]" />
          <img
            src="/images/github-brands-solid-full.svg"
            alt=""
            className="invert w-[22px]"
          />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
