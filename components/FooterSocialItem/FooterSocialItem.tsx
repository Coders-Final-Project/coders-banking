import Link from "next/link";
import Image from "next/image";

interface IFooterSocialItem {
  location: string;
  icon: string;
}

const FooterSocialItem = ({ location, icon }: IFooterSocialItem) => {
  return (
    <Link href={location} className="footer__social__media__item">
      <Image
        src={`/assets/icons/general/${icon}.png`}
        alt={icon}
        width={20}
        height={20}
        className="footer__social__media__item__img"
      />
    </Link>
  );
};

export default FooterSocialItem;
