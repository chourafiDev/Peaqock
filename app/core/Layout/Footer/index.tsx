import { FiMapPin } from "react-icons/fi";
import { BiEnvelope } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { africa } from "../../../../assets";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-forth-gray px-20">
      <div className="py-12">
        <div className="grid grid-cols-4">
          <div className="col-span-2 pr-36">
            <h3 className="text-primary font-bold text-xl pb-6">Contact Us</h3>
            <p className="base-gray font-light text-[15px] pr-28">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              itaque magni nisi doloribus voluptatem nostrum ad ex quidem?
            </p>
            <ul className="flex flex-col gap-4 mt-10 text-[15px]">
              <li className="flex gap-3">
                <FiMapPin size={20} className="text-primary mt-0" />
                <p className="base-gray font-light text-sm">
                  Imm le Zenith II, Lotissement Attaoufik, Route de Nouacer,
                  Sidi Maarouf, Casablanca, 20640, Maroc
                </p>
              </li>
              <li className="flex items-center gap-3">
                <BiEnvelope className="text-primary" />
                <p className="base-gray font-light text-sm">nfo@peaqock.com</p>
              </li>
              <li className="flex items-center gap-3">
                <BsTelephone className="text-primary" />
                <p className="base-gray font-light text-sm">
                  +20-2-24564100/1/2/3
                </p>
              </li>
              <li className="flex items-center gap-3">
                <BsTelephone className="text-primary" />
                <p className="base-gray font-light text-sm">+20-2-24515201/2</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-primary font-bold text-xl pb-6">
              About Peaqock
            </h3>
            <ul className="flex flex-col gap-3 text-[15px] text-base-gray">
              <li className="flex gap-3">
                <Link href="#">
                  <a className="link-hover">Privacy Statement</a>
                </Link>
              </li>
              <li className="flex gap-3">
                <Link href="#">
                  <a className="link-hover">Term and condition</a>
                </Link>
              </li>
              <li className="flex gap-3">
                <Link href="#">
                  <a className="link-hover">Accessibility</a>
                </Link>
              </li>
              <li className="flex gap-3">
                <Link href="#">
                  <a className="link-hover">F.A.Q</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-primary font-bold text-xl pb-4">Locations</h3>
            <Image src={africa} alt="africa" width={170} height={170} />
          </div>
        </div>
      </div>

      <div className="text-center py-6">
        <p className="font-bold text-base-gray">
          Copyright © 2022 . All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
