// components
import Cards from "@/app/components/cards/cards.component";
import Footer from "@/app/components/footer/footer.component";
import Heading from "@/app/components/heading/heading.component";
import Hero from "@/app/components/hero/hero.component";
import Link from "@/app/components/link/link.component";
import Page from "@/app/components/page/page.component";
import Section from "@/app/components/section/section.component";
import TextArea from "@/app/components/text-area/text-area.component";

// forms
import ContactForm from "@/app/forms/contact-form/contact-form.component";

// data
import { cardMedia, caseStudyMedia, cases, heroContent, processItems, services } from "@/app/data";
import List from "@/app/components/list/list.component";
import Video from "@/app/components/video/video.component";

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
      </Section>

      <Section id="departments">
        <Heading size={ 2 } position={ 'center' } underlineType="converge">
          Departments
        </Heading>
        <TextArea text={
          'With expertise in many of today\'s cutting edge technologies, as well as years of experience in the content creation business, World Headquarters will bring your ideas to life.'
        } />
        <Cards 
          cardIntersectionOptions={{ 
            intersectionObserverInit: { threshold: 0.5 },
            transitionClass: 'fade-in-up' 
          }}
          cardLinkText="Learn More"
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
        <TextArea text='Whether helping businesses and individuals breathe life into existing websites or building out an entire brand presence from scratch, World Headquarters has the tools to meet your needs.'/>
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
        <TextArea text='Please leave a message' />
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
