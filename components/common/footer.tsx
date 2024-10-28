// Copyright hassankhodabakhshi  2021,2022. All Rights Reserved.
// Project: folio "https://www.linkedin.com/in/hassan-khodabakhshi-495743a0/",
// Author contact: 
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { EMAIL, MENULINKS, SOCIAL_LINKS } from "../../constants";
import Image from "next/image";
import Button, { ButtonTypes } from "./button";

const Footer = () => {
  const renderSocialIcons = (): React.ReactNode => {
    return Object.keys(SOCIAL_LINKS).map((el: keyof typeof SOCIAL_LINKS) => (
      <a
        href={SOCIAL_LINKS[el]}
        key={el}
        className="link hover:opacity-80 duration-300 md:px-2 px-1"
        rel="noreferrer"
        target="_blank"
      >
        <Image src={`/social/${el}.svg`} alt={el} width={40} height={40} />
      </a>
    ));
  };

  const renderFooterContent = (): React.ReactNode => (
    <>
      <h1 className="font-medium text-3xl md:text-4xl text-center">
      .با من در شبکه‌های اجتماعی ارتباط برقرار کنید
      </h1>
      <div className="flex mt-8">{renderSocialIcons()}</div>
      <div className="flex mt-8">
        <Button
          classes="mr-3"
          type={ButtonTypes.OUTLINE}
          name="رزومه"
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
          href="/hassankhodabakhshi_Resume.pdf"
        ></Button>
        <Button
  classes="ml-3"
  type={ButtonTypes.PRIMARY}
  name="وبلاگ"
  href="https://blog.isonetwork.ir/"  // اینجا لینک مورد نظر خود را قرار دهید
  otherProps={{
    target: "_blank",
    rel: "noreferrer",
  }}
></Button>

      </div>
      <h2 className="text-center text-sm sm:text-base mt-8">
      .طراحی و توسعه داده شده با ❤️ توسط حسن خدابخشی
      </h2>
    </>
  );

  const { ref: footerRef } = MENULINKS[4];

  return (
    <footer
      className="w-full relative select-none bg-cover flex flex-col items-stretch"
      id={footerRef}
    >
      <img
        src="/footer-curve.svg"
        alt="Footer"
        className="w-full"
        loading="lazy"
        height={290}
        role="presentation"
        width={1440}
      />
      <div className="h-full w-full">
        <div className="section-container flex-col flex h-full justify-end z-10 items-center py-12">
          {renderFooterContent()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
