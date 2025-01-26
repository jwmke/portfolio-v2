"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Grain from "../components/Grain"
import DiagonalCornerContainer from "../components/DiagonalCornerContainer";

import { Lato } from "next/font/google";

const text = Lato({
  subsets: ['latin'],
  weight: ["100", "400"]
});

const Page = () => {
    const [goats, setGoats] = useState(['Paul Weller', 'Michelle Weller', 'Joseph Carey', 'Nathan DuPont', 'Trenton Bowser', 'Julian Singkham', 'Hannah Marron', 'Joel Frank', 'Cassie Viol', 'Brian Kim', 'William Chen', 'Grace Fleming', 'Christian Hennig', 'Seth Fenske', 'Isaac Ballone', 'Sabrina Stangler', 'Paul Rinaldi', 'Tony Zhang', 'Tony Tong', 'Ryan Erdman', 'John Osmanski', 'Drew Talo', 'Cody Daniels', 'Ethan Hindes', 'Cody Friso', 'Matthew Schmidt', 'Andrew Kempen', 'Jacob Voller', 'James Lembke', 'Ben Kraft', 'Mark Medinger', 'Meiling He', 'Kyle Rodrigues', 'Dwight Diercks', 'Brittany Kaehn', 'Ivan Moreno', 'Isaiah Zupke', 'Andrew Wojciechowski', 'Walter Schilling', 'Ben Felda', 'John Bukowy', 'Ronald Nowling', 'Fahim Mahmood', 'Britney Flores', 'Nathan Johnson', 'Sohum Sohoni', 'David Koper', 'Dylan Critz', 'Xander Neuwirth', 'Michael Spence', 'Michael Anderson', 'Isaiah Rondeau', 'Tou Tong Xiong', 'James Rector', 'Derek Riley', 'Kyler Johnson', 'Jason Jang', 'John Deng', 'Francisco Maturana', 'Alex Blackman', 'Morgan Patch', 'Matej Koncos', 'Karl Schwerin', 'Lucas Adrian', 'Julia Sajdowitz', 'Jorge Gutierrez', 'Garrett Bachmann', 'Albert Meng', 'Crystal Smith', 'Steven Mose', 'Jonathon Magaña', 'Nathan Nolte', 'Lex Fridman', 'Michael Hinder', 'George Hotz', 'Michael Holley', 'Tommy Jungwirth', 'Trey Guise', 'Kier Anderson', 'Ben Stern', 'Tim Bentz', 'Nathan Rothe', 'Carl Malagodi', 'Erick Johnson', 'Alex Kempen', 'Mike Novotny', 'Aaron Strong', 'Christian Abegglen', 'Supun Dewaraja', 'James Alumkal', 'Omer Saeday', 'Travis Ottelien','Todd Atkinson', 'Augustin Calderon', 'Sven Broman', 'Sundar Venkat', 'AJ Whitney', 'Steven Mendelsohn', 'Kael Adair', 'Ted Feldmann', 'Yash Sawhney', 'Noah Haile']); // Eric, Carrie, Aman, Eitan, Ian 

    const shuffle = (array) => {
      let currentIndex = array.length,  randomIndex;
    
      while (currentIndex != 0) {
    
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
    
      return array;
    }
  
    useEffect(()=> {
      setGoats(shuffle(goats));
    }, [goats]);

    return (
      <div className="bg-black">
        <div
          className="w-full min-h-screen relative"
          style={{
            background: `linear-gradient(135deg,
              rgb(31, 31, 31) 0%,
              rgb(57, 173, 161, .5) 50%,
              rgb(31, 31, 31) 100%)`
          }}
        >
          <Grain opacity={.95} blendMode="multiply" />
          <div className="w-full min-h-[100vh] flex justify-center p-4">
            <DiagonalCornerContainer className="w-[60rem]" size={32}>
              <div className='mx-auto pt-8'>
                <div className={text.className}>
                  <div className='text-white text-left sm:mx-5'>
                    <span className='text-4xl font-bold'>
                      Welcome to The Dojoe&nbsp;
                    </span>
                    <span className='text-4xl'>
                      (My Hall of Fame)
                    </span>
                      <p className='md:text-xl sm:leading-9 mt-8'>
                        I&apos;ve been fortunate to meet some fantastic people throughout my life. These people have been the Mr. Miyagis in my journeys who have all impacted who I am today. They&apos;ve taught me technical skills and life lessons, given me opportunities, and have been there when I needed help.
                      </p>
                      <p className='md:text-xl my-5 sm:leading-9'>
                      The Dojoe not only exists to show my appreciation to these folks; but it&apos;s also for you, the reader, to reflect on who would be in your hall of fame.
                      </p>
                      <p className='md:text-xl mt-5 mb-8'>
                        To everyone here, thank you for everything.
                      </p>
                    </div>
                    <Image width={720} height={200} src={"/img/dojoe.png"} alt="the_dojoe_logo" priority className="mx-auto"/>
                    <div className='md:text-xl text-left mb-24 mx-5'>
                      <div className='text-left md:text-xl text-teal-700 mb-4'>
                        {"// The ordering of names is random"}
                      </div>
                      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {shuffle(goats).map((name) => <p suppressHydrationWarning key={name} className='text-white mt-3'>{name}</p>)}
                      </div>
                    </div>
                </div>
              </div>
            </DiagonalCornerContainer>
          </div>
        </div>
      </div>
    )
}

export default Page;