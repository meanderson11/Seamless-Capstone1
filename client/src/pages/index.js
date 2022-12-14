import React, {useState} from 'react'
import Footer from '../components/Footer';
import FrontSection from '../components/FrontSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <FrontSection />
    <InfoSection {...homeObjOne} />
    <Services />
    <InfoSection {...homeObjTwo} />
    <InfoSection {...homeObjThree} />
    <Footer />
    </>
  );
};

export default Home;