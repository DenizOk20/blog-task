import React from "react";
import FooterLinks from "./components/links";
import NewsInput from "./components/NewsInput";
import Image from "next/image";
import DocsLinks from "./components/DocsLinks";
export default function Footer() {
  
  return (
    <div className="flex flex-col gap-16">
      <div className="flex gap-5 flex-wrap justify-center lg:justify-start">
        <div className="flex flex-col gap-6">
          <div className="max-w-[289px] flex flex-col gap-3">
            <h2 className={`font-semibold font-plus`}>About</h2>
            <p className="font-plus text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="flex flex-col font-plus">
            <span>
              <b>Email</b> : info@jstemplate.net
            </span>
            <span>
              <b>Phone</b> : 880 123 456 789
            </span>
          </div>
        </div>
        <FooterLinks />
        <div className="p-8 flex flex-col gap-[30px] md:min-w-[392px] max-w-[400px]">
          <div className="flex flex-col items-center min-w-[380px]">
            <h2 className="font-semibold font-plus text-xl">Weekly Newsletter</h2>
            <span className="font-worksans">Get blog articles and offers via email</span>
          </div>
          <NewsInput />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-start md:justify-between">
        <div>
            <Image alt="logo" src="/footer-logo.png" width={363} height={54} className="w-[290px] md:w-[363px]"/>
        </div>
        <div>
          <DocsLinks/>
        </div>
      </div>
    </div>
  );
}
