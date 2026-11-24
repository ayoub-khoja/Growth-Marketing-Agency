import { Hero } from "@/components/sections/hero";
import { Channels } from "@/components/sections/channels";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Work } from "@/components/sections/work";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Manifesto } from "@/components/sections/manifesto";
import { Offers } from "@/components/sections/offers";
import { Extras } from "@/components/sections/extras";
import { Contact } from "@/components/sections/contact";
import { JsonLd } from "@/components/seo/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Channels />
      <Manifesto />
      <Services />
      <WhyUs />
      <Offers />
      <Extras />
      <Work />
      <Process />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
