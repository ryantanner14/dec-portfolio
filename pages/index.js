import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from "react-icons/ai";
import Image from 'next/image';
import deved from "../public/dev-ed-wave.png";
import headshot from "../public/HeadshotBodyOnly.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ryan Tanner's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/HeadshotIcon.png" />
      </Head>

      <main className=' bg-white px-10 dark:bg-gray-800'>
        <section className='min-h-screen'>
          <nav className=' py-10 mb-12 flex justify-between'>
            <h1 className=' text-xl font-burtons dark:text-gray-100'>Ryan Tanner</h1>
            <ul className=' flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=' cursor-pointer text-2xl dark:text-gray-50'/>
              </li>
              <li>
                <a className=' bg-gradient-to-r from-[#2ec4b6] to-[#64f5e9] text-white px-4 py-2 rounded-md ml-8 ' href="https://www.linkedin.com/in/ryan-tanner-0b4b6b87/" target="_blank">LinkedIn</a>
              </li>
            </ul>
          </nav>
          <div className=' text-center p-10'>
            <h2 className='text-5xl py-2 text-[#2ec4b6] font-medium'>Ryan Tanner</h2>
            <h3 className='text-2xl py-2 dark:text-gray-100'>Frontend Web Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-100' >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptate aliquid mollitia ad obcaecati, delectus ut! Id iusto non saepe quidem incidunt quibusdam dicta, dolorem voluptates repellendus mollitia voluptatibus aliquid?
            </p>
          </div>
          <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-200'>
            <a href="https://www.linkedin.com/in/ryan-tanner-0b4b6b87/" target="_blank">
              <AiFillLinkedin/>
            </a>
            <a href="https://github.com/ryantanner14" target="_blank">
              <AiFillGithub/>
            </a>
            <a href="https://youtube.com" target="_blank">
              <AiFillYoutube/>
            </a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-[#ff9f1c] rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image className='object-cover object-top' src={headshot} fill />
          </div>
          <div>
            <h3 className=' text-3xl py-1 dark:text-gray-200'>Services I offer</h3>
            <p className=' text-md py-2 leading-8 text-gray-800'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, officia. Optio corporis adipisci ut molestiae aspernatur non? Natus, tenetur eos asperiores quaerat tempore corporis non facilis expedita veniam quod. Placeat.</p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-[#2ec4b6]">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-[#2ec4b6]">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-[#2ec4b6]">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-gray-200'>Portfolio</h3>
            <p className=' text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, officia. Optio corporis adipisci ut molestiae aspernatur non? Natus, tenetur eos asperiores quaerat tempore corporis non facilis expedita veniam quod. Placeat.</p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className=' flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'}  />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'}  />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'}  />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'}  />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'}  />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'}  />
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
