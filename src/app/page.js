
import HeroSection from "./components/hero";
import ResponsiveAppBar from "./components/navbar";
import AboutUs from "./components/about";
import AnimatedNumbers from "./components/aninumb";
import InfoSection from "./components/info";
// import Cros from "./components/cros"
import ContactUs from "./components/contact";
import Footer from "./components/footer.js"
import Promotion from "./components/pormotion";
import AnimatedSection from "./components/more";
import MoreSection from "./components/morevi";
import NewsletterSignup from "./components/newsletter"
import LatestNews from "./components/news";
import CounterStats  from "./components/statistics";
// import FAQSection from "./components/qustions";
// import TextAnimation from "./components/slider";
export default function Home() {
  return (
 <div>

<ResponsiveAppBar/>
<AnimatedNumbers />
<HeroSection/>
<AboutUs />


<Promotion/>
{/* <CounterStats /> */}
<AnimatedSection/>
<MoreSection/>
{/* <FAQSection/> */}
{/* <TextAnimation /> */}
<InfoSection />
<LatestNews />
{/* <Cros/> */}
<NewsletterSignup />
<ContactUs />
<Footer />

 </div>
  );
}
