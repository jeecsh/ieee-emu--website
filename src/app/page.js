
import HeroSection from "./components/hero";
import ResponsiveAppBar from "./components/navbar";
import AboutUs from "./components/about";
import AnimatedNumbers from "./components/aninumb";
import InfoSection from "./components/info";
import Cros from "./components/cros"
// import TextAnimation from "./components/slider";
export default function Home() {
  return (
 <div>

<ResponsiveAppBar/>
<AnimatedNumbers />
<HeroSection/>
<AboutUs />
<Cros/>
{/* <TextAnimation /> */}
<InfoSection />


 </div>
  );
}
