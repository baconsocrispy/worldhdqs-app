import { ListItem } from "../types";

export const processItems: ListItem[] = [
  {
    image: { id: 0, src: './graphics/SVG/mittens_1.svg' },
    textHighlight: 'Meet & Greet',
    text: 'Whatever your problem is, we want to hear about it and see if we can\'t help you find a creative solution.'
  },
  {
    image: { id: 1, src: './graphics/SVG/blueprint_2.svg' },
    textHighlight: 'Proposal & Pricing',
    text: 'Based on your requirements, the type of project, and the scope of the work, we\'ll draft a proposal outlining our ideas along with a transparent pricing structure and timing estimate.'
  },
  {
    image: { id: 2, src: './graphics/SVG/blueprint_4.svg' },
    textHighlight: 'Architecture & Construction',
    text: 'With an agreed upon proposal, we will formalize any software blueprints, including database schema and tech stack, and begin to build out the project.'
  },
  {
    image: { id: 3, src: './graphics/SVG/testing_1.svg' },
    textHighlight: 'Testing & Revision',
    text: 'When we have a version of the project that satisfies all of your requirements, we will put it through it\'s paces and send it back to you for comments and revisions.'
  },
  {
    image: { id: 4, src: './graphics/SVG/production.svg' },
    textHighlight: 'Final Delivery & Production',
    text: 'After polishing the project based on the revision round  and sealing it with your approval, we will deploy it to a production environment that is sensitive to ongoing costs and future maintenance'
  },
];