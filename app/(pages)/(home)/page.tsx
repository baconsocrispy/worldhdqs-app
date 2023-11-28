// components
import Cards from "@/app/components/cards/cards.component";
import Hero from "@/app/components/hero/hero.component";

// types
import { Case, Service } from "@/app/types";

const Home = () => {
  const services: Service[] = [
    { 
      id: 1,
      name: 'Custom Software Development',
      description: 'Websites and applications tailor-made to your specifications.'
    },
    {
      id: 2, 
      name: 'Branding & Graphic Design',
      description: 'Creative elements that speak to the core values and target audience of your business'
    },
    {
      id: 3,
      name: 'Content Creation',
      description: 'Let us bring your video and photographic ideas to life'
    }
  ];

  const cases: Case[] = [
    { 
      id: 1,
      name: 'BB&S Lighting',
      description: 'Tailor-made, full stack  website for US industrial lighting distributor'
    },
    {
      id: 2, 
      name: 'King Scooters',
      description: 'Web Development, Branding, and Content Creation for electric scooter startup'
    },
    {
      id: 3,
      name: 'Improv Comedy Club',
      description: 'Production management and budgeting for commercial video shoot'
    }
  ];

  return (
    <main className="home-page">
      <Hero />
      <section className="services">
        <h2>Our Services</h2>
        <Cards items={ services }/>
      </section>
      <section className="case-studies">
        <h2>Case Studies</h2>
        <Cards items={ cases } layout='alternating' />
      </section>
    </main>
  )
};

export default Home;
