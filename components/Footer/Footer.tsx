import Link from "next/link";
import Image from "next/image";

import "@/sass/components/_footer.scss";

import MainLogo from "../MainLogo/MainLogo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__overview">
        <div className="footer__overview__column">
          <MainLogo />
        </div>
        <div className="footer__overview__column">
          <div className="footer__overview__column__title">How It Works</div>
          <ul className="footer__overview__column__body">
            <li className="footer__overview__column__body__item">
              Hire Employees
            </li>
            <li className="footer__overview__column__body__item">
              Hire Contractors
            </li>
            <li className="footer__overview__column__body__item">
              Global Payroll
            </li>
            <li className="footer__overview__column__body__item">
              Integrations
            </li>
          </ul>
        </div>
        <div className="footer__overview__column">
          <div className="footer__overview__column__title">Company</div>
          <ul className="footer__overview__column__body">
            <li className="footer__overview__column__body__item">About</li>
            <li className="footer__overview__column__body__item">Contact Us</li>
            <li className="footer__overview__column__body__item">Contries</li>
            <li className="footer__overview__column__body__item">Careers</li>
          </ul>
        </div>
        <div className="footer__overview__column">
          <div className="footer__overview__column__title">Solutions</div>
          <ul className="footer__overview__column__body">
            <li className="footer__overview__column__body__item">
              Compliances
            </li>
            <li className="footer__overview__column__body__item">Payments</li>
            <li className="footer__overview__column__body__item">Taxes</li>
            <li className="footer__overview__column__body__item">
              Enterprises
            </li>
          </ul>
        </div>
        <div className="footer__overview__column">
          <div className="footer__overview__column__title">Resources</div>
          <ul className="footer__overview__column__body">
            <li className="footer__overview__column__body__item">FAQ</li>
            <li className="footer__overview__column__body__item">Blog</li>
            <li className="footer__overview__column__body__item">Open API</li>
            <li className="footer__overview__column__body__item">Guide</li>
          </ul>
        </div>
      </div>
      <div className="footer__social">
        <div className="footer__social__groups">
          <div className="footer__social__groups__item">
            ©2023. All Rights Reserved.
          </div>
          <div className="footer__social__groups__item">Privacy Policy</div>
          <div className="footer__social__groups__item">Terms of Service</div>
        </div>
        <div className="footer__social__media">
          <Link href="#" className="footer__social__media__item">
            <Image
              src="/assets/icons/general/facebook.png"
              alt="facebook"
              width={20}
              height={20}
              className="footer__social__media__item__img"
            />
          </Link>
          <Link href="#" className="footer__social__media__item">
            <Image
              src="/assets/icons/general/instagram.png"
              alt="facebook"
              width={20}
              height={20}
              className="footer__social__media__item__img"
            />
          </Link>
          <Link href="#" className="footer__social__media__item">
            <Image
              src="/assets/icons/general/linkedin.png"
              alt="facebook"
              width={20}
              height={20}
              className="footer__social__media__item__img"
            />
          </Link>
          <Link href="#" className="footer__social__media__item">
            <Image
              src="/assets/icons/general/twitter.png"
              alt="facebook"
              width={20}
              height={20}
              className="footer__social__media__item__img"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
