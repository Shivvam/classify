import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Why Classify"
        title=" Why should you choose classify"
      >
        Classify transforms coaching class assessments with automated test creation, professional test paper generation, and in-depth performance analysis. This saves time, boosts student engagement with interactive online tests, and provides valuable insights to improve outcomes, all within a scalable and cost-effective platform.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Watch a video"
        title="Learn how Classify Helps"
      >
        AI-powered testing for coaching classes: smarter assessments, better results.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Testimonials"
        title={`Here's why teachers love us`}
      >
        {`Our teachers rave about the time saved and the improved student performance they've seen using our platform.`}
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
