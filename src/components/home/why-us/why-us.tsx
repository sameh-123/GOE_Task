import Title from '@/components/shared/title';
import Image from 'next/image';
import mouse from '@/images/why-us/mouse.svg';
import save from '@/images/why-us/save.svg';
import vr from '@/images/why-us/vr.svg';
export default function WhyUs() {
  return (
    <section className="container">
      <Title>
        Why choose <span className="text-secondary">Egy</span>Book?
      </Title>

      <div className="flex flex-col lg:flex-row  justify-between items-center lg:items-start gap-10 flex-wrap">
        <article className="flex flex-col items-center lg:items-start gap-2">
          <Image
            src={mouse}
            alt="mouse hover"
            width={1000}
            height={1000}
            className="w-12"
          />
          <h1 className="text-3xl my-4 text-center lg:text-start">
            <span className="font-semibold text-secondary">Seamless</span> &{' '}
            <span className="font-semibold text-green">Smart</span> Booking
          </h1>

          <p className="max-w-80 text-2xl text-center lg:text-start">
            Quick, user-friendly platform that simplifies the reservation
            process
          </p>
        </article>

        <article className="flex flex-col items-center lg:items-start gap-2">
          <Image
            src={vr}
            alt="vr"
            width={1000}
            height={1000}
            className="w-12"
          />
          <h1 className="text-3xl my-4 font-semibold text-center lg:text-start">
            <span className="italic text-green">Immersive</span> VR Previews
          </h1>

          <p className="max-w-80 text-2xl text-center lg:text-start">
            Explore hotels and rooms in 360° before you book—giving you total
            confidence.
          </p>
        </article>

        <article className="flex flex-col items-center lg:items-start gap-2">
          <Image
            src={save}
            alt="saving money"
            width={1000}
            height={1000}
            className="w-12"
          />
          <h1 className="text-3xl my-4 font-semibold text-center lg:text-start">
            <span className="text-green">Exclusive</span> Best-Price Deals
          </h1>

          <p className="max-w-80 text-2xl text-center lg:text-start">
            Save more with special offers and real-time price comparisons.
          </p>
        </article>
      </div>
    </section>
  );
}
