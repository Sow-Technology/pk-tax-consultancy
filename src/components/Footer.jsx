"use client";

import { Footer } from "flowbite-react";
import Link from "next/link";
import Script from "next/script";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitterX,
  BsWhatsapp,
} from "react-icons/bs";
import Gmap from "./Gmap";

const FooterComp = () => {
  return (
    <Footer container id="contact">
      <div className="w-full my-4">
        <div className="grid w-full  sm:flex sm:justify-between lg:flex lg:grid-cols-1 overflow-clip">
          <div>
            <Footer.Brand
              href="/"
              src="/logo.png"
              alt=" Logo"
              name=""
              className="h-[150px] w-[150px] scale-[300%] ml-40"
            />
          </div>
          <div className="grid grid-cols-1 min-w-[80%] gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="CALL" />
              <Footer.LinkGroup col>
                <Footer.Link href="tel:+917904745652">
                  +91 79047 45652
                </Footer.Link>
                <Footer.Link href="tel:+91044 4790 2783">
                  +91 044 4790 2783
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
            <div className="lg:-ml-20">
              <Footer.Title title="REACH US" />
              <Gmap />
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
          </div>
        </div>
        <div className="w-full bg-blue-400/60 text-center my-5 py-10">
          Designed and Developed by&nbsp;
          <Link href="https://sowtech.in/contact" className="font-bold">
            SOW TECH🔗
          </Link>
        </div>
      </div>
    </Footer>
  );
};
export default FooterComp;
