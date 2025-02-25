import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="relative h-[500px] w-full">
      {/* Background Image */}
      <div className="relative h-full w-full">
        <Image
          src="/images/background/banner-blue.png"
          alt="Hero Banner"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-4 max-w-3xl text-center mx-auto">
        <h1 className="text-5xl  font-bold">JM Tech</h1>
        <p>
          Empowering businesses with cutting-edge technology solutions. From web
          and mobile app development to SEO and cloud services, we drive
          innovation to elevate your digital presence and streamline your
          success.
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
