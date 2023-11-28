// components
import Grid from "@/app/components/grid/grid.component";
import Hero from "@/app/components/hero/hero.component";
import Cards from "@/app/components/cards/cards.component";
import { Service } from "@/app/types";

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
  ]
  return (
    <main className="home-page">
      <Hero />
      <section className="services">
        <Cards items={ services }/>
      </section>
    </main>
  )
};

export default Home;
