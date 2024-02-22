"use client";

import Image from "next/image";
import Link from "next/link";

import MainLogo from "../MainLogo/MainLogo";

import "@/sass/components/_navbar.scss";
import { MouseEventHandler, useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  const openCloseMenu = (e: React.MouseEvent<HTMLElement>): any => {
    setClicked((prev) => !prev);
  };

  return (
    <nav className="nav">
      <MainLogo />

      <div className="nav__links">
        <Link href="/about" className="nav__links__item">
          About
        </Link>
        <Link href="/blog" className="nav__links__item">
          Blog
        </Link>
        <div className="nav__links__item" onClick={openCloseMenu}>
          <div className="dropdown__btn">
            <div className="nav__links__item__text">Features</div>
            <div className={clicked ? "caret caret-rotate" : "caret"}></div>
          </div>

          <div
            className={
              clicked ? "dropdown__content" : "dropdown__content--none"
            }
          >
            <p className="dopwdown-title">FEATURES</p>

            <ul>
              <li>
                <Image
                  src="/assets/dropdownfeature/hire.png"
                  alt="hire"
                  width={48}
                  height={48}
                />
                <div className="dropdown__desc">
                  <p>Hire Globally</p>
                  <p>
                    Hire employees and contractors globally without local
                    entities
                  </p>
                </div>
              </li>
              <Link href={"/taxes"}>
                <li>
                  <Image
                    src="/assets/dropdownfeature/payroll.png"
                    alt="hire"
                    width={48}
                    height={48}
                  />
                  <div className="dropdown__desc">
                    <p>Payroll</p>
                    <p>Manage payroll and taxes simplified</p>
                  </div>
                </li>
              </Link>
              <li>
                <Image
                  src="/assets/dropdownfeature/compliance.png"
                  alt="hire"
                  width={48}
                  height={48}
                />
                <div className="dropdown__desc">
                  <p>Compliance</p>
                  <p>Ensure compliance for all your employees</p>
                </div>
              </li>
              <Link href={"integration"}>
                <li>
                  <Image
                    src="/assets/dropdownfeature/integrate.png"
                    alt="hire"
                    width={48}
                    height={48}
                  />
                  <div className="dropdown__desc">
                    <p>Integrations</p>
                    <p>Integrate your entire HR tech stack</p>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <Link href="/pricing" className="nav__links__item">
          Pricing
        </Link>
        <Link href="/integration" className="nav__links__item">
          Integration
        </Link>
        <Link href="/taxes" className="nav__links__item">
          Taxes
        </Link>
      </div>

      <div className="nav__auth">
        <Link href="/" className="nav__auth__login">
          Log in
        </Link>
        <Link href="/" className="nav__auth__learnmore">
          Learn More
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
