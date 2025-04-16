import Link from 'next/link';

export default function MainNav() {
  const links = [
    {
      title: 'Book',
      link: '/',
    },
    {
      title: 'Explore',
      link: '/',
    },
    {
      title: 'Tales',
      link: '/',
    },
    {
      title: 'Treasure',
      link: '/',
    },
  ];
  return (
    <nav className='hidden md:flex items-center xl:gap-8 gap-4 lg:text-xl text-lg'>
      <Link href="/" className='text-secondary'>GOE</Link>
      {links.map((link, index) => (
        <Link href={link.link} key={index}>
            <span className='text-secondary'>Egy</span>
          {link.title}
        </Link>
      ))}
    </nav>
  );
}
