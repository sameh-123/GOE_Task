import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="/logo1.png"
        alt="gates of egypt logo"
        width={100}
        height={100}
        className="w-30 hidden md:block"
      />
      <Image
        src="/logo2.png"
        alt="gates of egypt logo"
        width={100}
        height={100}
        className="w-30"
      />
    </div>
  );
}
