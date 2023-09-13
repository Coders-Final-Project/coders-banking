import Link from "next/link";
import Image from "next/image";

import "@/sass/components/_footer.scss";

import MainLogo from "../MainLogo/MainLogo";
import FooterSocialItem from "../FooterSocialItem/FooterSocialItem";

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
          <div className="footer__social__groups__text">
            ©2023. All Rights Reserved.
          </div>
          <div className="footer__social__groups__text">Privacy Policy</div>
          <div className="footer__social__groups__text">Terms of Service</div>
        </div>
        <div className="footer__social__media">
          <FooterSocialItem location="#" icon="facebook" />
          <FooterSocialItem location="#" icon="instagram" />
          <FooterSocialItem location="#" icon="linkedin" />
          <FooterSocialItem location="#" icon="twitter" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
