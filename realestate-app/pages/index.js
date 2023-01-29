import Header from '../sections/Header';
import Services from '../sections/Services';
import ExploreSection from '../sections/ExploreSection';
import Stats from '../sections/Stats';
import WhyChooseUs from '../sections/WhyChooseUs';
import Testimonial from '../sections/Testimonial';


export default function Home({ propertiesForRent, propertiesForSale }) {


 
  return (
    <>
    <Header/>
    <Services />
    <ExploreSection propertiesForRent={propertiesForRent} propertiesForSale={propertiesForSale} />
    <Stats/>
    <WhyChooseUs/>
    <Testimonial/>
    </>
      )
    }



