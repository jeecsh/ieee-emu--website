
import HeroSection from "./components/hero";
import ResponsiveAppBar from "./components/navbar";
import AboutUs from "./components/about";
import ContactUs from "./components/contact";
import Footer from "./components/footer.js"
import Promotion from "./components/pormotion";
import AnimatedSection from "./components/more";
import NewsletterSignup from "./components/newsletter"
import LatestNews from "./components/news";
import HeroSec from "./components/hero2";
import Quote from "./components/qoute";
import "./font.css";
import JoinSection from "./components/member";
export default function Home() {
  return (
 <div>
<HeroSec/>
<ResponsiveAppBar/>
<HeroSection/>
<Quote/>
<AboutUs />

<Promotion/>
{/* <CounterStats /> */}
<AnimatedSection/>

{/* <FAQSection/> */}
{/* <TextAnimation /> */}

<LatestNews />
<JoinSection/>
{/* <Cros/> */}
<NewsletterSignup />
<ContactUs />
<Footer />

 </div>
  );
}
