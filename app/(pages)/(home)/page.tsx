// components
import Cards from "@/app/components/cards/cards.component";
import Footer from "@/app/components/footer/footer.component";
import Heading from "@/app/components/heading/heading.component";
import Hero from "@/app/components/hero/hero.component";
import Link from "@/app/components/link/link.component";
import List from "@/app/components/list/list.component";
import Page from "@/app/components/page/page.component";
import Section from "@/app/components/section/section.component";
import TextBlock from "@/app/components/text-block/text-block.component";
import Video from "@/app/components/video/video.component";

// forms
import ContactForm from "@/app/forms/contact-form/contact-form.component";

// data
import { cardMedia, caseStudyMedia, cases, heroContent, processItems, services } from "@/app/data";

const Home = () => {
  return (
    <Page name="home">
      <Section id='welcome'>
        <Hero 
          content={ heroContent }
          heading='World Headquarters' 
          leadIn='You Have Reached'
          subHeading="Creative Workshop"
        />
        <TextBlock 
          text={
            "Ideas. \nStorytelling. \nCraftsmanship."
          }
        />
      </Section>

      <Section id="services">
        <Heading size={ 2 } position={ 'center' } underlineType="converge">
          Services
        </Heading>
        <Cards 
          cardHref="#contact"
          cardIntersectionOptions={{ 
            intersectionObserverInit: { threshold: 0.5 },
            transitionClass: 'fade-in-up' 
          }}
          cardLinkText="Inquire"
          cardMedia={ cardMedia }
          items={ services }
        />
      </Section>

      <Section id="process">
        <Heading size={ 2 } position={ 'center' } underlineType="converge">
          Process
        </Heading>
        <div className="center-wrapper">
          <List 
            listItems={ processItems } 
            intersectionOptions={{
              intersectionObserverInit: { threshold: .25 },
              transitionClass: 'fade-blur-in-drop-100',
              transitionDelay: 0.2
            }}
          />
        </div>
      </Section>

      <Section
        id="selected-works" 
        intersectionObserverOptions={{ 
          intersectionObserverInit: { threshold: 0.15 },
          transitionClass: 'bg-color-change',
          transitionRepeat: true
        }}
      >
        <Heading size={ 2 } position={ 'center' } underlineType="converge">
          Selected Works
        </Heading>
        <Cards 
          cardIntersectionOptions={{ 
            intersectionObserverInit: {
              threshold: 0.5
            },
            transitionClass: 'fade-in-alternate'
          }}
          cardMedia={ caseStudyMedia }
          cardType='horizontal'
          items={ cases } 
          layout='alternating'  
        />
        <Link type='cta'>
          View Portfolio
        </Link>
      </Section>
      
      <Section id="contact">
        <Heading size={ 2 } position={ 'center' } underlineType="converge">
          Contact
        </Heading>

        <div className="center-wrapper">
          <p>Please leave a message</p>
        </div>

        <ContactForm />
        <Video 
          src="/vid/winter/noble-winter-1.mp4" 
          type="background"
        />
      </Section>
      <Footer />
    </Page>
  )
};

export default Home;
