import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem: FunctionComponent<{
  active: string;
  setActive: Function;
  name: string;
  route: string;
}> = ({ active, setActive, name, route }) => {
  return active !== name ? (
    <Link href={route}>
      <a>
        <span
          className="mx-2 cursor-pointer hover:border-b-4"
          onClick={() => setActive(name)}
        >
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

const Navbar = () => {
  const { pathname } = useRouter();

  const [active, setActive] = useState("");

  useEffect(() => {
    if (pathname === "/") setActive("About");
    else if (pathname === "/projects") setActive("Projects");
    else if (pathname === "/resume") setActive("Resume");
  }, []);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-blue-500 border-b-4 border-purple-400 md:text-2xl">
        {active}
      </span>
      <div className="flex space-x-3 text-blue-600 hover:text-red-500 font-lg">
        <NavItem active={active} setActive={setActive} name="About" route="/" />
        <NavItem
          active={active}
          setActive={setActive}
          name="Projects"
          route="/projects"
        />
        <NavItem
          active={active}
          setActive={setActive}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
