// components
import Cards from "@/app/components/cards/cards.component";
import Hero from "@/app/components/hero/hero.component";

// data
import { cardMedia, caseStudyMedia, cases, images, services } from "@/app/data";

const Home = () => {
  return (
    <main className="home-page">
      <Hero images={ images }/>
      <section className="services">
        <h2>Our Services</h2>
        <Cards 
          cardEntryAnimation={{
            opacity: '1s ease-in-out',
            transform: '0.5s ease-in-out',
            translateY: '5rem'
          }}
          cardMedia={ cardMedia }
          items={ services }
        />
      </section>
      <section className="case-studies">
        <h2>Case Studies</h2>
        <Cards 
          cardEntryAnimation={{
            opacity: '0.5s ease-in',
            transform: '0.5s ease-in',
            translateX: '-5rem'
          }}
          cardIntersectionOptions={{
            threshold: 0.75
          }}
          cardMedia={ caseStudyMedia }
          cardType='horizontal'
          items={ cases } 
          layout='alternating'  
        />
        <a href="#">View Portfolio</a>
      </section>
      <section className="">

      </section>
    </main>
  )
};

export default Home;
