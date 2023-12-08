// components
import Cards from "@/app/components/cards/cards.component";
import Heading from "@/app/components/heading/heading.component";
import Hero from "@/app/components/hero/hero.component";
import TextArea from "@/app/components/text-area/text-area.component";

// data
import { cardMedia, caseStudyMedia, cases, images, services } from "@/app/data";

const Home = () => {
  return (
    <main className="home-page">
      <Hero images={ images }/>
      <section className="services">
        <Heading size={ 2 }>
          Services
        </Heading>
        <TextArea text={
          'With expertise and a proven track record in many of today\'s cutting edge technologies, as well as years of experience in the content creation business, World Headquarters will bring your ideas to life.'
        } />
        <Cards 
          cardEntryAnimation={{
            opacity: '1s ease-in-out',
            transform: '0.5s ease-in-out',
            translateY: 5
          }}
          cardMedia={ cardMedia }
          items={ services }
        />
      </section>
      <section className="case-studies">
        <Heading size={ 2 }>
          Portfolio Highlights
        </Heading>
        <TextArea text='Whether helping brands breathe life into existing websites or building out an entire brand presence from scratch, World Headquarters has the tools to meet your needs.'/>
        <Cards 
          cardEntryAnimation={{
            opacity: '0.5s ease-in',
            transform: '0.5s ease-in',
            translateX: -10
          }}
          cardIntersectionOptions={{
            threshold: 0.5
          }}
          cardMedia={ caseStudyMedia }
          cardType='horizontal'
          items={ cases } 
          layout='alternating'  
        />
        <a href="#">View Portfolio</a>
      </section>
      <section className="contact">
        <Heading size={ 2 }>
          Contact
        </Heading>
      </section>
    </main>
  )
};

export default Home;
