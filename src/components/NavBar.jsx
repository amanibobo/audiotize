import { Link, Route, Router } from "react-router-dom";
import MobileNav from "./MobileNav";
import NavWidthWrapper from "./NavWidthWrapper";
import audiot from "../assets/audiot2.svg";

export default function NavBar() {
  return (
    <>
      <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <NavWidthWrapper>
          <navoth className="flex h-16 items-center justify-between border-b border-zinc-200">
            <a href="/">
              <img src={audiot} />
            </a>

            <div className="hidden items-center space-x-4 sm:flex">
              <a href="https://youtu.be/3zdfTIXepKk" target={"_blank"}>
                <button className="bg-green-400 hover:bg-green-500 text-white px-4 py-1 rounded-md">
                  Youtube Congressional App Challenge Video
                </button>
              </a>
            </div>
          </navoth>
        </NavWidthWrapper>
      </nav>
    </>
  );
}
