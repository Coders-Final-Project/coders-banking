import Image from "next/image";
import Link from "next/link";

import "@/sass/components/_navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link href="/" className="nav__logo">
        <Image
          src="/assets/icons/nav/nav-logo.png"
          alt="nav_logo"
          width={24}
          height={24}
          className="nav__logo__item"
        />
        <div className="nav__logo__text">Payrole</div>
      </Link>
      <div className="nav__links">
        <Link href="/" className="nav__links__item">
          How it works
        </Link>
        <Link href="/" className="nav__links__item">
          <div className="nav__links__item__text">Features</div>
          <Image
            src="/assets/icons/nav/down-arrow.png"
            alt="down_arrow"
            width={16}
            height={16}
            className="nav__links__item__icon"
          />
        </Link>
        <Link href="/pricing" className="nav__links__item">
          Pricing
        </Link>
        <Link href="/" className="nav__links__item">
          Resources
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
