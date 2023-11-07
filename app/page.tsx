"use client"
import { Phone, Text, Mail, Heart } from "lucide-react";
import Image from 'next/image'
import { Navigation } from "./components/nav";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react'
import BlurText from './components/BlurText';
import { prototype } from 'events';
import { Console } from 'console';


export default function Home() {

  const triggerRef1 = useRef<HTMLDivElement>(null);
  const triggerRef2 = useRef<HTMLDivElement>(null);
  const triggerRef3 = useRef<HTMLDivElement>(null);
  const triggerRef4 = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  const elementRef2 = useRef<HTMLDivElement>(null);
  const elementRef3 = useRef<HTMLDivElement>(null);
  const elementRef4 = useRef<HTMLDivElement>(null);
  const elementRef5 = useRef<HTMLDivElement>(null);
  const elementRef6 = useRef<HTMLDivElement>(null);
  const [isLandscape, setIsLandscape] = useState(true);

  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
      console.log(`checked orientation landscape:${isLandscape}`);
    };
    // Initial check
    checkOrientation();
    // Listen for resize events
    window.addEventListener('resize', checkOrientation);
    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When the trigger is in view, show and animate the element
          if(elementRef.current){
          // elementRef.current.style.opacity = '0';
          // elementRef.current.style.filter = 'blur(30px)';
          isLandscape? [elementRef.current.style.top = '-20%', elementRef.current.style.left = '50%']: [elementRef.current.style.top = '50%', elementRef.current.style.left = '-100%'] ;
        }
          if(elementRef2.current){
          // elementRef.current.style.opacity = '0';
          // elementRef.current.style.filter = 'blur(30px)';
          isLandscape? [elementRef2.current.style.top = '50%', elementRef2.current.style.left = '50%']: [elementRef2.current.style.top = '50%', elementRef2.current.style.left = '40%'] ;
        }
        } else {
          // When the trigger is out of view, hide and animate the element
          if (elementRef.current){
          // elementRef.current.style.opacity = '1';
          // elementRef.current.style.filter = 'blur(0)';
          isLandscape? [elementRef.current.style.top = '50%', elementRef.current.style.left = '50%']: [elementRef.current.style.top = '50%', elementRef.current.style.left = '40%'];
        }
        if (elementRef2.current){
          // elementRef.current.style.opacity = '1';
          // elementRef.current.style.filter = 'blur(0)';
          isLandscape? [elementRef2.current.style.top = '120%', elementRef2.current.style.left = '50%']: [elementRef2.current.style.top = '50%', elementRef2.current.style.left = '180%'];
        }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.4,
      }
    );
    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When the trigger is in view, show and animate the element
          if(elementRef.current){
          // elementRef.current.style.opacity = '0';
          // elementRef.current.style.filter = 'blur(30px)';
          // elementRef.current.style.top = '50%';
          isLandscape? [elementRef.current.style.transform = 'translateX(-100%) translateY(-50%)', elementRef.current.style.left='50%'] : [elementRef.current.style.left='30%', elementRef.current.style.transform = 'translateX(-0%) translateY(25%)'];
          // elementRef.current.style.left = '20%';
        }
          if(elementRef3.current){
          elementRef3.current.style.opacity = '1';
          // elementRef3.current.style.filter = 'blur(30px)';
          // elementRef3.current.style.top = '50%';
          // isLandscape? [elementRef3.current.style.transform = 'translateX(-100%) translateY(-50%)', elementRef3.current.style.left='50%'] : [elementRef3.current.style.left='20%', elementRef3.current.style.transform = 'translateX(-0%) translateY(25%)'];
          // elementRef3.current.style.left = '20%';
        }
          if(elementRef6.current){
          elementRef6.current.style.opacity = '1';
          // elementRef3.current.style.filter = 'blur(30px)';
          // elementRef3.current.style.top = '50%';
          // isLandscape? [elementRef3.current.style.transform = 'translateX(-100%) translateY(-50%)', elementRef3.current.style.left='50%'] : [elementRef3.current.style.left='20%', elementRef3.current.style.transform = 'translateX(-0%) translateY(25%)'];
          // elementRef3.current.style.left = '20%';
        }
        } else {
          // When the trigger is out of view, hide and animate the element
          if (elementRef.current){
          // elementRef.current.style.opacity = '1';
          // elementRef.current.style.filter = 'blur(0)';
          isLandscape? [elementRef.current.style.transform = 'translateX(0%) translateY(-50%)', elementRef.current.style.left = '50%'] : [elementRef.current.style.transform = 'translateX(0%) translateY(25%)', elementRef.current.style.left = '40%'];
          // elementRef.current.style.left = '50%';
        }
          if (elementRef3.current){
          elementRef3.current.style.opacity = '0';
          // elementRef3.current.style.filter = 'blur(0)';
          // isLandscape? [elementRef3.current.style.transform = 'translateX(0%) translateY(-50%)', elementRef3.current.style.left = '50%'] : [elementRef3.current.style.transform = 'translateX(0%) translateY(25%)', elementRef3.current.style.left = '40%'];
          // elementRef3.current.style.left = '50%';
        }
          if (elementRef6.current){
          elementRef6.current.style.opacity = '0';
          // elementRef3.current.style.filter = 'blur(0)';
          // isLandscape? [elementRef3.current.style.transform = 'translateX(0%) translateY(-50%)', elementRef3.current.style.left = '50%'] : [elementRef3.current.style.transform = 'translateX(0%) translateY(25%)', elementRef3.current.style.left = '40%'];
          // elementRef3.current.style.left = '50%';
        }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
      }
    );
    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When the trigger is in view, show and animate the element
          if(elementRef4.current){
          elementRef4.current.style.opacity = '1';
          // elementRef3.current.style.filter = 'blur(30px)';
          // elementRef3.current.style.top = '50%';
          // isLandscape? [elementRef3.current.style.transform = 'translateX(-100%) translateY(-50%)', elementRef3.current.style.left='50%'] : [elementRef3.current.style.left='20%', elementRef3.current.style.transform = 'translateX(-0%) translateY(25%)'];
          // elementRef3.current.style.left = '20%';
        }
        } else {
          if (elementRef4.current){
          elementRef4.current.style.opacity = '0';
          // elementRef3.current.style.filter = 'blur(0)';
          // isLandscape? [elementRef3.current.style.transform = 'translateX(0%) translateY(-50%)', elementRef3.current.style.left = '50%'] : [elementRef3.current.style.transform = 'translateX(0%) translateY(25%)', elementRef3.current.style.left = '40%'];
          // elementRef3.current.style.left = '50%';
        }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
      }
  );
  const observer4 = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // When the trigger is in view, show and animate the element
        if(elementRef5.current){
        elementRef5.current.style.opacity = '1';
        // elementRef3.current.style.filter = 'blur(30px)';
        // elementRef3.current.style.top = '50%';
        // isLandscape? [elementRef3.current.style.transform = 'translateX(-100%) translateY(-50%)', elementRef3.current.style.left='50%'] : [elementRef3.current.style.left='20%', elementRef3.current.style.transform = 'translateX(-0%) translateY(25%)'];
        // elementRef3.current.style.left = '20%';
      }
      } else {
        if (elementRef5.current){
        elementRef5.current.style.opacity = '0';
        // elementRef3.current.style.filter = 'blur(0)';
        // isLandscape? [elementRef3.current.style.transform = 'translateX(0%) translateY(-50%)', elementRef3.current.style.left = '50%'] : [elementRef3.current.style.transform = 'translateX(0%) translateY(25%)', elementRef3.current.style.left = '40%'];
        // elementRef3.current.style.left = '50%';
      }
      }
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
    }
);
  
    if (triggerRef1.current) {
      observer1.observe(triggerRef1.current);
    }
    if (triggerRef2.current) {
      observer2.observe(triggerRef2.current);
    }
    if (triggerRef3.current) {
      observer3.observe(triggerRef3.current);
    }
    if (triggerRef4.current) {
      observer4.observe(triggerRef4.current);
    }

    return () => {
      if (triggerRef1.current) {
        observer1.unobserve(triggerRef1.current);
      }
      if (triggerRef2.current) {
        observer2.unobserve(triggerRef2.current);
      }
      if (triggerRef3.current) {
        observer3.unobserve(triggerRef3.current);
      }
      if (triggerRef4.current) {
        observer4.unobserve(triggerRef4.current);
      }
    };
  }, [isLandscape]);

  return (isLandscape? <> 
  <div className="h-screen w-screen overflow-y-scroll overflow-x-hidden scroll-smooth snap snap-y snap-mandatory">
  <div id="byron" className="snap-start h-screen w-full bg-cover bg-center flex items-center" style={{backgroundImage:"url('/byronphotos-4.jpg')"}}>
    <div className="w-1/2 flex justify-end">
      <div className="flex text-white text-3xl sm:text-4xl " >
        <BlurText text="byron"/>
      </div>
    </div>
  </div>
  <div className="snap-start h-screen w-full bg-cover bg-center-bottom flex items-center" style={{backgroundImage: "url('/byronphotos-14.jpg')"}}>
    <div className="w-1/2 flex justify-end">
      <Link
        href="/architectural"
        className="flex link link-underline link-underline-black text-white text-3xl sm:text-4xl"
      >
        <BlurText text="architectural" />
      </Link>
    </div>
  </div>
  <div className="snap-start h-screen w-full bg-cover bg-center flex items-center" style={{backgroundImage: "url('/byronphotos-13.jpg')"}}>
    <div className="w-1/2 flex justify-end">
      <Link
        href="/commercial"
        className="flex link link-underline link-underline-black text-white text-3xl sm:text-4xl"
      >
        <BlurText text="commercial" />
      </Link>
    </div>
  </div>
  <div className="snap-start h-screen w-full bg-cover bg-center flex items-center" style={{backgroundImage: "url('/byronphotos-9.jpg')"}}>
    <div className="w-1/2 flex justify-end">
      <Link
        href="/event"
        className="flex link link-underline link-underline-black text-white text-3xl sm:text-4xl"
      >
        <BlurText text="event" />
      </Link>
    </div>
  </div>

  <div id="rates" ref={triggerRef2} className="snap-start h-screen w-full bg-cover bg-center grid grid-cols-6 grid-rows-5 gap-4 items-center" style={{backgroundImage: "url('/byronphotos-2.jpg')"}}>
    <div className="col-start-4 col-end-6 row-start-3">
      <div className="flex text-white text-3xl sm:text-4xl"
      >
        <BlurText text="rates" />
      </div>
    </div>
    <div ref={elementRef3} style={{ transition: 'left 0.5s ease 0.5s, transform 0.5s ease 0.5s, opacity 0.8s ease 0.8s' }} className=" w-full mt-4 col-start-1 col-end-4 row-start-4 w-full grid justify-center items-center text-xl p-3 sm:text-2xl opacity-0">
      <ul className="grid col-start-1 col-end-4 justify-center">
        <li className="transform translate-x-[10%]"><span className="font-['UbuntuLightItalic']" >events</span> 110/hr</li>
        <li className=""><span className="font-['UbuntuLightItalic']" >architectural</span> 130/hr</li>
        <li className="transform translate-x-[5%]"><span className="font-['UbuntuLightItalic']" >commercial</span> 150/hr</li>
      </ul>
    </div>
    <div ref={elementRef6}  style={{ transition: 'left 0.5s ease 0.5s, transform 0.5s ease 0.5s, opacity 0.8s ease 1.6s' }} className=" w-full p-6 col-start-4 col-end-7 row-start-4 w-full grid justify-center items-center text-xl p-3 sm:text-2xl opacity-0">
    <div className="text-center font-['UbuntuLight'] text-base pt-2 sm:text-lg" >rates include editing and taxes,<br/><a
        href="#contact"
        className="font-['UbuntuLightItalic']"
      > contact me{'\u00A0'}
      </a> for a quote or to customize<br/> a plan for your project.</div>
    </div>
  </div>
  <div ref={triggerRef1}>
    <div ref={triggerRef3}>
  <div id="about" className="snap-start h-screen w-full bg-cover bg-center-bottom grid grid-cols-6 grid-rows-5 gap-4 items-center" style={{backgroundImage: "url('/byronphotos-81.jpg')"}}>
    <div className="grid items-end justify-end col-start-3 col-end-4 row-start-3 ">
      <div className="text-white text-3xl sm:text-4xl"
      >
        <BlurText text="about" />
      </div>
    </div>
    <div ref={elementRef4} style={{ transition: 'left 0.5s ease 0.5s, transform 0.5s ease 0.5s, opacity 0.8s ease 0.8s' }} className=" text-white w-full col-start-1 col-end-7 row-start-4 mt-8 w-full grid justify-center items-center text-base p-3 sm:text-l opacity-0">
      <ul className="grid justify-center">
        <li className="transform -translate-x-[2%] text-center"><span className="font-['UbuntuLightItalic']" >Located{'\u00A0'}</span>Abbotsford BC</li>
        <li className="text-center">Shot Weddings<span className="font-['UbuntuLightItalic']" >{'\u00A0'}7 years</span></li>
        <li className="transform translate-x-[3%] text-center"><span className="font-['UbuntuLightItalic']" >New focus{'\u00A0'}</span>Event, Commercial, Architectual</li>
        <li className="transform -translate-x-[2%] text=center"><span className="font-['UbuntuLightItalic']" >Studied{'\u00A0'}</span>Cinematography<span className="font-['UbuntuLightItalic']" >{'\u00A0'}Capilano University</span></li>
        <li className="text-center"><span className="font-['UbuntuLightItalic']" >Interests:{'\u00A0'}</span>Art, Fitness, Gaming, Sports</li>
      </ul>
    </div>
    </div>
  </div>
  <div ref={triggerRef4} id="contact" className="snap-start h-screen w-full bg-cover bg-center grid grid-cols-6 grid-rows-5 gap-4 items-center" style={{backgroundImage: "url('/byronphotos-3.jpg')"}}>
    <div className="grid items-end justify-end col-start-3 col-end-4 row-start-3">
      <div className="text-white text-3xl sm:text-4xl"
      >
        <BlurText text="contact" />
      </div>
    </div>
    <div ref={elementRef5} style={{ transition: 'left 0.5s ease 0.5s, transform 0.5s ease 0.5s, opacity 0.8s ease 0.8s' }} className="text-white w-full col-start-1 col-end-7 row-start-4 mt-10 w-full grid justify-center items-center text-xl p-3 sm:text-2xl opacity-0">
    <ul className="grid justify-center">
        <li className="flex justify-center font-['UbuntuLightItalic']" ><a href="sms:+604-626-7038">text</a>{'\u00A0'}/{'\u00A0'}<a href="tel:+604-626-7038">phone</a></li>
        <li className="text-center"><a href="tel:+604-626-7038"> 604 626 7038</a></li>
        <li className="flex justify-center font-['UbuntuLightItalic']" ><a href="mailto:byronoren@gmail.com">e-mail</a></li>
        <li className="text-center pb-1"><a href="mailto:byronoren@gmail.com">byronoren@gmail.com</a></li>
      </ul>
    </div>
  </div>
  </div>
</div>
<div ref={elementRef} style={{ transition: 'top 0.5s, left 0.5s, transform 0.5s' }} className="fixed flex p-1 z-10 text-3xl sm:text-4xl items-end justify-between top-1/2 left-1/2 transform -translate-y-1/2 font-['UbuntuLightItalic']">photography</div>
<div ref={elementRef2} style={{ transition: 'left 0.5s, top 0.5s, ease 0.5s' }} className="fixed flex z-20 text-3xl sm:text-4xl items-end justify-between top-[120%] left-1/2 transform -translate-y-1/2 font-['UbuntuLightItalic']">byron</div>

    <main className="fixed flex overflow-auto min-h-screen w-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between lg:flex">
        <Navigation/>
      </div>
    </main>
    </> :
     <>
     <div className="h-screen w-screen overflow-y-scroll overflow-x-hidden scroll-smooth snap snap-y snap-mandatory">
  <div id="byron" className="snap-start h-screen w-full bg-cover bg-center flex items-center" style={{backgroundImage: "url('/byronphotos-43.jpg')"}}>
    <div className="w-4/5 flex justify-center">
      <div className="flex text-white text-3xl sm:text-4xl drop-shadow-md"
      >
        <BlurText text="byron"/>
      </div>
    </div>
  </div>
  <div className="snap-start h-screen w-full bg-cover bg-center flex items-center" style={{backgroundImage: "url('/byronphotos-84.jpg')"}}>
    <div className="w-4/5 flex justify-center">
      <Link
        href="/architectural"
        className="flex link link-underline link-underline-black text-white text-3xl sm:text-4xl drop-shadow-md"
      >
        <BlurText text="architectural" />
      </Link>
    </div>
  </div>
  <div className="snap-start h-screen w-full bg-cover bg-center flex items-center " style={{backgroundImage: "url('/byronphotos-82.jpg')"}}>
    <div className="w-4/5 flex justify-center">
      <Link
        href="/commercial"
        className="flex link link-underline link-underline-black text-white text-3xl sm:text-4xl drop-shadow-md"
      >
        <BlurText text="commercial" />
      </Link>
    </div>
  </div>
  <div className="snap-start h-screen w-full bg-cover bg-center flex items-center" style={{backgroundImage: "url('/byronphotos-63.jpg')"}}>
    <div className="w-4/5 flex justify-center">
      <Link
        href="/event"
        className="flex link link-underline link-underline-black text-white text-3xl sm:text-4xl"
      >
        <BlurText text="event" />
      </Link>
    </div>
  </div>
  <div id="rates" ref={triggerRef2} className="snap-start h-screen w-full bg-cover bg-center grid grid-cols-6 grid-rows-6 gap-4 items-center" style={{backgroundImage: "url('/byronphotos-44.jpg')"}}>
    {/* transform translate-x-1/2 translate-y-[170%] w-full pl-1 items-end justify-start */}
    <div className="col-start-4 col-end-6 row-start-4">
      <div className="text-white text-3xl sm:text-4xl"
      >
        <BlurText text="rates" />
      </div>
      </div>
    <div ref={elementRef3} style={{ transition: 'left 0.5s ease 0.5s, transform 0.5s ease 0.5s, opacity 0.5s ease 0.5s' }} className="bg-white text-black w-full col-start-1 col-end-7 row-start-5 w-full grid justify-center items-center text-xl p-3 sm:text-2xl opacity-0">
      <ul className="grid justify-center">
        <li className="transform translate-x-[10%]"><span className="font-['UbuntuLightItalic']" >events</span> 110/hr</li>
        <li className=""><span className="font-['UbuntuLightItalic']" >architectural</span> 130/hr</li>
        <li className="transform translate-x-[5%]"><span className="font-['UbuntuLightItalic']" >commercial</span> 150/hr</li>
      </ul>
        <div className="text-center font-['UbuntuLight'] text-base pt-2 sm:text-lg" >rates include editing and taxes,<a
        href="#contact"
        className="font-['UbuntuLightItalic']"
      > contact me{'\u00A0'}
      </a> for a quote or to customize a plan for your project.</div>
    </div>
  </div>
  <div ref={triggerRef1}>
    <div ref={triggerRef3}>
  <div id="about" className="snap-start h-screen w-full bg-cover bg-center grid grid-cols-6 grid-rows-6 gap-4 items-center" style={{backgroundImage: "url('/byronphotos-49.jpg')"}}>
    <div className="grid items-end justify-center col-start-3 col-end-4 row-start-4 row-end-5 transform -translate-y-[175%]">
      <div className="text-white text-3xl sm:text-4xl"
      >
        <BlurText text="about" />
      </div>
    </div>
    <div ref={elementRef4} style={{ transition: 'left 0.5s ease 0.5s, transform 0.5s ease 0.5s, opacity 0.5s ease 0.5s' }} className="bg-white text-black w-full col-start-1 col-end-7 row-start-5 mt-8 w-full grid justify-center items-center text-base p-3 sm:text-l opacity-0">
      {/* <p className="grid justify-cente font-['UbuntuLight']">
        studied cinematography Capilano University, I've enjoyed near 10 years of capturing weddings and have gradually shifted to other genres of photography, in particular, events, commercial and architectural.
      </p> */}
      <ul className="grid justify-center">
        <li className="transform -translate-x-[2%] text-center"><span className="font-['UbuntuLightItalic']" >Located{'\u00A0'}</span>Abbotsford BC</li>
        <li className="text-center">Shot Weddings<span className="font-['UbuntuLightItalic']" >{'\u00A0'}7 years</span></li>
        <li className="transform translate-x-[3%] text-center"><span className="font-['UbuntuLightItalic']" >New focus{'\u00A0'}</span>Event, Commercial, Architectual</li>
        <li className="transform -translate-x-[2%] text=center"><span className="font-['UbuntuLightItalic']" >Studied{'\u00A0'}</span>Cinematography<span className="font-['UbuntuLightItalic']" >{'\u00A0'}Capilano University</span></li>
        <li className="text-center"><span className="font-['UbuntuLightItalic']" >Interests:{'\u00A0'}</span>Art, Fitness, Gaming, Sports</li>
      </ul>
    </div>
    </div>
  </div>
  <div ref={triggerRef4} id="contact" className="snap-start h-screen w-full bg-cover bg-center grid grid-cols-6 grid-rows-6 gap-4 items-center" style={{backgroundImage: "url('/byronphotos-10.jpg')"}}>
    <div className="grid items-end justify-center col-start-3 col-end-4 row-start-4 row-end-5 transform -translate-y-[175%]">
      <div className="text-white text-3xl sm:text-4xl"
      >
        <BlurText text="contact" />
      </div>
    </div>
    <div ref={elementRef5} style={{ transition: 'left 0.5s ease 0.5s, transform 0.5s ease 0.5s, opacity 0.5s ease 0.5s' }} className="bg-white text-black w-full col-start-1 col-end-7 row-start-5 mt-8 w-full grid justify-center items-center text-xl p-3 sm:text-2xl opacity-0">
    <ul className="grid justify-center">
        <li className="flex justify-center font-['UbuntuLightItalic']" ><a href="sms:+604-626-7038">text</a>{'\u00A0'}/{'\u00A0'}<a href="tel:+604-626-7038">phone</a></li>
        <li className="text-center"><a href="tel:+604-626-7038"> 604 626 7038</a></li>
        <li className="flex justify-center font-['UbuntuLightItalic']" ><a href="mailto:byronoren@gmail.com">e-mail</a></li>
        <li className="text-center pb-1"><a href="mailto:byronoren@gmail.com">byronoren@gmail.com</a></li>
      </ul>
    </div>
  </div>
  </div>
</div>
<div ref={elementRef} style={{ transition: 'left 0.5s, transform 0.5s' }} className="fixed flex p-1 z-10 text-3xl sm:text-4xl items-center justify-between top-1/2 left-2/5 transform translate-y-1/4 font-['UbuntuLightItalic'] drop-shadow-md">photography</div>
<div ref={elementRef2} style={{ transition: 'left 0.5s ease 0.5s' }} className="fixed flex p-1 z-20 text-3xl sm:text-4xl items-center justify-between left-[180%] top-1/2 transform translate-y-1/4 font-['UbuntuLightItalic'] drop-shadow-md">byron</div>

    <main className="fixed flex overflow-auto min-h-screen w-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between lg:flex">
        <Navigation/>
      </div>
    </main>
  </>   
  )
}
