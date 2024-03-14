import { useState } from 'react';
import './App.css'
import Hero from './sections/Hero';
import PopularProduct from './sections/PopularProduct';
import SuperQuality from './sections/SuperQuality';
import Services from './sections/Services';
import SpecialOffer from './sections/SpecialOffer';
import Subsribe from './sections/Subsribe';
import Footer from './sections/Footer';
import Navbar from './components/Navbar';
import CustomerReview from './sections/CustomerReview';

const App = ()=> {
  
  return (
    <main className='relative'>
     <Navbar/>
     <section className='xl:padding-l wide:padding-r padding-b'>
       <Hero/>
       <section className='padding'>
        <PopularProduct/>
       </section>
       <section className='padding'>
        <SuperQuality/>
       </section>
       <section className='padding-x'>
        <Services/>
       </section>
       <section className='padding'>
       <SpecialOffer/>
       </section>
       <section className='bg-pale-blue padding'>
        <CustomerReview/>
       </section>
       <section className='padding-x sm:py-32 py-16 w-full'>
        <Subsribe/>
       </section>
       <section className='bg-black padding-x padding-t pb-8'>
        <Footer/>
       </section>
     </section>
    </main>
  )
}

export default App
