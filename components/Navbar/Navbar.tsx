import Image from "next/image";

import "@/sass/components/_navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Image
          src="/assets/icons/nav/nav-logo.png"
          alt="nav_logo"
          width={24}
          height={24}
          className="nav__logo__item"
        />
        <div className="nav__logo__text">Payrole</div>
      </div>
      <div className="nav__links">
        <div className="nav__links__item">How it works</div>
        <div className="nav__links__item">
          <div className="nav__links__item__text">Features</div>
          <Image
            src="/assets/icons/nav/down-arrow.png"
            alt="down_arrow"
            width={16}
            height={16}
            className="nav__links__item__icon"
          />
        </div>
        <div className="nav__links__item">Pricing</div>
        <div className="nav__links__item">Resources</div>
      </div>
      <div className="nav__auth">
        <button className="nav__auth__login">Log in</button>
        <button className="nav__auth__learnmore">Learn More</button>
      </div>
    </nav>
  );
};

export default Navbar;
