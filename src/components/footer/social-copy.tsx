import Link from 'next/link';
import { BiCopyright } from 'react-icons/bi';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from 'react-icons/fa';

export default function SocialAndCopyRights() {
  const social = [
    {
      link: 'facebook.com',
      icon: <FaFacebook size={40} />,
    },
    {
      link: 'instagram.com',
      icon: <FaInstagram size={40} />,
    },
    {
      link: 'tiktok.com',
      icon: <FaTiktok size={40} />,
    },
    {
      link: 'twitter.com',
      icon: <FaTwitter size={40} />,
    },
    {
      link: 'linkedin.com',
      icon: <FaLinkedin size={40} />,
    },
  ];
  return (
    <div className="text-xl">
      <div className="flex items-center gap-5">
        {social.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="bg-secondary text-white size-14 rounded-lg flex items-center justify-center"
          >
            {item.icon}
          </Link>
        ))}
      </div>

      <p className="flex items-center gap-1 mt-4">
        Copyright Gates of Egypt <BiCopyright /> {new Date().getFullYear()}
      </p>

      <p>All rights reserved</p>
    </div>
  );
}
