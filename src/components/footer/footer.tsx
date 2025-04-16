import React from 'react';
import Description from './description';
import SocialAndCopyRights from './social-copy';

export default function Footer() {
  return (
    <footer className="container flex flex-col lg:flex-row lg:items-end justify-between gap-10 py-16 bg-radial bg-bottom from-secondary/10 to-70%">
      <Description />
      <SocialAndCopyRights />
    </footer>
  );
}
