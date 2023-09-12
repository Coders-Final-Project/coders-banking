import Link from "next/link";
import Image from "next/image";

import "@/sass/components/_mainLogo.scss";

const MainLogo = () => {
  return (
    <Link href="/" className="main__logo">
      <Image
        src="/assets/icons/nav/nav-logo.png"
        alt="nav_logo"
        width={24}
        height={24}
        className="main__logo__item"
      />
      <div className="main__logo__text">Payrole</div>
    </Link>
  );
};

export default MainLogo;
