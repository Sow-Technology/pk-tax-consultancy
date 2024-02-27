"use client";

import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitterX,
  BsWhatsapp,
} from "react-icons/bs";

const FooterComp = () => {
  return (
    <Footer container id="contact">
      <div className="w-full my-16">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="/"
              src="/logo.webp"
              alt=" Logo"
              name=""
              className="h-[100px] w-[100px] scale-[200%] ml-10"
            />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="CALL" />
              <Footer.LinkGroup col>
                <Footer.Link href="tel:+917904745652">
                  +91 79047 45652
                </Footer.Link>
                <Footer.Link href="tel:+917092759515">
                  +91 70927 59515
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="EMAIL" />
              <Footer.LinkGroup col>
                <Footer.Link href="mailto:info@pktaxconsultancy.in">
                  info@pktaxconsultancy.in
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="MESSAGE" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="PK TAX CONSULTANCY™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://x.com/PK_Tax_Services"
              icon={BsTwitterX}
            />
            <Footer.Icon
              href="https://instagram.com/pk_tax_consultancy/"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="https://wa.me/message/XFPYDNZZISVBM1"
              icon={BsWhatsapp}
            />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};
export default FooterComp;
