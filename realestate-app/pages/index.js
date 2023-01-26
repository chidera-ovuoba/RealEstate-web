import Header from '../sections/Header';
import Services from '../sections/Services';
import ExploreSection from '../sections/ExploreSection';
import { fetchApi,baseUrl } from '../../utils/fetchApi';
import Stats from '../sections/Stats';
import WhyChooseUs from '../sections/WhyChooseUs';
import Testimonial from '../sections/Testimonial';
import Footer from '../sections/Footer';
var page = 0 



export default function Home({ propertiesForRent, propertiesForSale }) {


 
  return (
    <>
    <Header/>
    <Services />
    <ExploreSection propertiesForRent={propertiesForRent} propertiesForSale={propertiesForSale} />
    <Stats/>
    <WhyChooseUs/>
    <Testimonial/>
    <Footer/>
    </>
      )
    }
// console.log(page);
// export async function getStaticProps({query}) {
//   const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
//   const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6&page=${query.page || 0}`);
//   return {
//     props: {
//       propertiesForSale: propertyForSale?.hits || null,
//       propertiesForRent:propertyForRent?.hits || null
//     }
//   }
// }


