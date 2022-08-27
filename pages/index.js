/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import Image from 'next/image';
import { Input } from 'postcss';
import React, { useEffect } from 'react';
import images from '../public/assets';
import Banner from '../components/Banner';
import 'aos/dist/aos.css';
import Aos from 'aos';

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="flex relative min-w-327 minlg:max-w-2100 bg-meta-gray justify-center">
      <div className="w-full relative h-full max-w-max">
        <div className="flex relative mt-72 md:mt-32 nm:mt-42 sm:mt-10 px-32 md:px-8 nm:px-12  flex-row md:flex-col-reverse ">
          <div data-aos="fade-up" className="flex max-w-full md:items-center flex-col">
            <h1 className="text-black font-integral md:mt-10 p-8 md:p-0 text-left text-5xl  minmd:text-7xl md:text-2xl md:text-center ">
              HACIENDO EL FUTURO ACCESIBLE PARA TODOS
            </h1>
            <p className="font-sfpro md:mt-5 font-normal md:text-center text-xl md:text-base px-8 nm:px-6 text-black ">Te ayudamos a encontrar y compartir tu verdadera esencia a través de la Web3.</p>
            <div className="px-6">
              <button
                type="button"
                className=" border mt-4 bg-black text-xl nm:text-xl md:text-md py-2 px-8 nm:px-6  minlg:px-8 rounded-full font-sfpro text-left text-white"
                onClick={() => {}}
              >
                Conócenos

              </button>
            </div>
          </div>
          <div data-aos="fade-left" className="flex md:items-center md:justify-center -mt-20 md:mt-20">
            <Image
              src={images.nakedmeta}
              height={628}
              width={628}
              objectFit="contain"
              className="overflow-visible"
            />
          </div>
        </div>
        <div className="flex mt-60 nm:mt-20 px-40 sm:px-4 sm:mt-32 md:px-12 nm:px-10 flex-col m-0 justify-center">
          <div data-aos="flip-left" className='relative md:hidden z-1  max-w-full flex w-full sm:w-full sm:h-275 nm:h-[320px] h-[500px] rounded-3xl items-center justify-center  bg-cover bg-repeat-x lg:bg-cover md:bg-cover m-0 mb-6"'>
            <Image src={images.banner} className="rounded-3xl" layout="fill" objectFit="cover" priority />
            <div className="flex absolute flex-col">
              <p className="flex-1 text-white  text-6xl font-sfpro font-bold text-center">CONCIENCIA</p>
              <p className="flex-1 text-white font-sfpro text-lg px-[15rem]   text-center">Naked Meta nace para acompañarte en la exploración del mundo Web3. Nuestro objetivo es que puedas comprenderlo para sumergirte de forma consciente, sencilla y eficaz.</p>
            </div>
          </div>
          <div className="flex nm:flex-row md:flex-col nm:-mt-6">
            <div className="flex relative sm:space-y-10 md:flex-col mt-10 nm:mt-0 md:mt-[10rem] sm:mt-[5rem] xs:mt-[2rem] justify-between md:items-center md:bg-cover md:justify-center">
              <div data-aos="zoom-in" className="flex items-center justify-center md:py-4 h-317 md:w-full md:h-275  md:max-h-[275px] nm:w-full w-full px-2 nm:px-2 rounded-3xl minmd:bg-cover lg:bg-cover md:bg-contain z-1  bg-no-repeat">
                <Image src={images.banner1} className="rounded-3xl md:max-w-[339px] md:max-h-[275px]" layout="" objectFit="cover" priority />
                <p className="absolute flex-1 text-white font-sfnormal md:text-7xl sm:text-5xl text-6xl lg:text-4xl md:justify-self-center text-center">Creatividad</p>
              </div>
            </div>
            <div data-aos="zoom-in" className="flex relative sm:space-y-10 md:flex-col z-1 mt-10 nm:mt-0 md:mt-[16rem] sm:mt-[7rem] xs:mt-[1rem] justify-between md:items-center md:bg-cover md:justify-center">
              <div className="flex items-center justify-center md:py-4 31 h-317 md:w-full md:h-275  md:max-h-[275px] nm:w-full nm:px-2 w-full px-2 rounded-3xl minmd:bg-cover lg:bg-cover md:bg-contain  bg-no-repeat">
                <Image src={images.banner2} className="rounded-3xl md:max-w-[339px] md:max-h-[275px]" layout="" objectFit="cover" priority />
                <p className="absolute flex-1 text-white font-sfnormal md:text-7xl sm:text-5xl text-6xl lg:text-4xl md:justify-self-center text-center">Conexión</p>
              </div>
            </div>
            <div data-aos="zoom-in" className="flex z-1 relative sm:space-y-10 md:flex-col mt-10 nm:mt-0 md:mt-[16rem] sm:mt-[7rem] xs:mt-[1rem] justify-between md:items-center md:bg-cover md:justify-center">
              <div className="flex  items-center justify-center md:py-4 h-317 md:w-full md:h-275  md:max-h-[275px] nm:px-2 nm:w-full w-full px-2 rounded-3xl minmd:bg-cover lg:bg-cover md:bg-contain bg-no-repeat">
                <Image src={images.banner3} w={31} className="rounded-3xl md:w-357 md:h-275" layout="" objectFit="cover" priority />
                <h1 className="absolute flex-1  text-white font-sfnormal text-6xl sm:text-5xl lg:text-4xl md:text-7xl md:justify-self-center text-center">Curiosidad</h1>
              </div>
            </div>
          </div>

        </div>
        <div className="flex mt-60 nm:mt-32 md:mt-5 min-w-full flex-col justify-center nm:mb-32">
          <div className="flex relative nm:space-y-10 nm:flex-col mt-10 md:mt-16 justify-between md:items-center md:justify-center">
            <div className="flex ml-[10rem] md:ml-0 nm:ml-6 items-start justify-start w-[650px] nm:w-full nm:h-[100px] h-662 z-1 nm:items-start nm:justify-start rounded-3xl">
              <div data-aos="fade-up" className="flex">
                <p className="text-left text-black font-integral font-bold px-0 uppercase mt-[2rem] md:mt-16 md:text-xl md:text-center text-3xl">¿Por qué trabajar con nosotros?</p>
              </div>
              <div className="flex absolute  mt-[26rem] nm:hidden ">
                <Image src={images.number1} className="p-2" />
                <Image src={images.line2} width={250} height={0} />
                <Image src={images.number3} />
              </div>
              <div className="flex absolute w-430  nm:hidden mt-[30rem]">
                <div className="absolute cursor-pointer left-[2rem]">
                  <Image src={images.arrowleft} width={60} height={60} className="absolute" />
                </div>
                <div className="absolute cursor-pointer nm:hidden right-[10rem]">
                  <Image src={images.arrowright} width={60} height={60} className="absolute" />
                </div>
              </div>
            </div>
            <div className="flex ml-[4rem] nm:ml-0 z-0 nm:z-1 px-14  w-screen top-48 flex-row overflow-scroll no-scrollbar select-none">
              <div className="relative items-center md:z-1 flex flex-col ml-10 bg-cover nm:min-w-240 nm:min-h-327 min-w-[360px] min-h-[480px] nm:w-[246px] nm:h-[380px]">
                <Image src={images.card1} className="nm:w-[246px] nm:h-[380px]" height={662} width={430} layout="" objectFit="cover" priority />
                <h1 className=" absolute nm:text-xl lg:text-4xl font-integral text-center mt-[24rem] nm:mt-[16rem] m text-white">VISIÓN</h1>
                <p className="absolute text-base sm:text-xs text-center px-2 mt-[27rem] nm:mt-[18rem] text-white">Analizamos la naturaleza de tu proyecto, imaginamos y planificamos a gran escala.</p>
              </div>
              <div className="relative items-center z-1 flex flex-col ml-10 bg-cover  nm:min-w-240 nm:min-h-327 min-w-[360px] min-h-[480px] nm:w-[246px] nm:h-[380px]">
                <Image src={images.card2} className="nm:w-[246px] nm:h-[380px]" height={662} width={430} layout="" objectFit="cover" priority />
                <h1 className=" absolute nm:text-xl lg:text-4xl font-integral text-center mt-[24rem] nm:mt-[16rem] m text-white">Impulso</h1>
                <p className="absolute text-base sm:text-xs text-center px-2 mt-[27rem] nm:mt-[18rem] text-white">Desarrollamos un plan e introducimos tu proyecto en la tecnología del futuro.</p>
              </div>
              <div className="relative items-center z-1 flex flex-col ml-10 bg-cover  nm:min-w-240 nm:min-h-327 min-w-[360px] min-h-[480px] nm:w-[246px] nm:h-[380px] ">
                <Image src={images.card2} className="nm:w-[246px] nm:h-[380px]" height={662} width={430} layout="" objectFit="cover" priority />
                <h1 className=" absolute nm:text-xl lg:text-4xl font-integral text-center mt-[24rem] nm:mt-[16rem] m text-white">Valor</h1>
                <p className="absolute text-base sm:text-xs text-center px-2 mt-[27rem] nm:mt-[18rem] text-white">Nos encargamos de crear toda la infraestructura web3 para que tu te dediques a lo que te apasiona.</p>
              </div>
              <div className="relative items-center z-1 flex flex-col ml-10 bg-cover  nm:min-w-240 nm:min-h-327 min-w-[360px] min-h-[480px] nm:w-[246px] nm:h-[380px] ">
                <Image src={images.card2} className="nm:w-[246px] nm:h-[380px]" height={662} width={430} layout="" objectFit="cover" priority />
                <h1 className=" absolute nm:text-xl lg:text-4xl font-integral text-center mt-[24rem] nm:mt-[16rem] m text-white">Estrategia</h1>
                <p className="absolute text-base sm:text-xs text-center px-2 mt-[27rem] nm:mt-[18rem] text-white">Creamos una estrategia de comunicación a medida para llegar a todas las personas que puedan interesarse..</p>
              </div>
            </div>
            <div className="absolute z-0 block -top-[50rem] -left-[75rem]">
              <Image src={images.image1} width={1822} height={1822} className="overflow-hidden absolute" />
            </div>
          </div>
        </div>
        <div className="md:hidden h-full w-screen mt-[20rem] m-0">
          <div className="flex relative justify-start max-w-screen items-center">
            <Image src={images.section4} layout="" objectFit="fill" priority />
            <div data-aos="fade-up" className="flex absolute  justify-center flex-col items-start minmd:ml-[68rem] lg:ml-[55rem] nm:px-10 nm:ml-[40rem] h-317">
              <h1 className="font-integral text-black  text-left text-3xl minmd:text-6xl">
                NUESTROS PROYECTOS
              </h1>
              <p className="text-left text-black minlg:mr-[20rem] minmd:mr-[10rem] lg:mr-[10rem] nm:mr-[1rem] text-sm">
                A través de nuestra experiencia hemos creado proyectos especiales para introducir distintas ideas, empresas, artistas y deportistas en la Web3. Desde colecciones de NFTs a Shows en el Metaverso, desde Naked Meta no dejamos de innovar, y ojalá tú puedas ser parte de ese proceso.
              </p>
              <button
                className="border mt-4 bg-black text-xl md:text-md ml-0 py-2 minlg:px-8 rounded-full font-sf text-left text-white px-6"
                type="button"
              >
                Conocenos

              </button>
            </div>
          </div>
        </div>
        <div className="hidden h-full overflow-hidden md:w-full bg-section5 md:bg-cover bg-no-repeat sm:mt-[6rem] md:z-1 m-0 md:flex md:flex-col">
          <Image src={images.section5} className="" layout="" objectFit="cover" priority />
          <div data-aos="fade-up" className="flex absolute sm:mt-8 md:mt-10 flex-col minmd:mt-44 justify-start items-center h-317 md:w-full md:h-275 md:z-1">
            <h1 className="font-integral text-black mt-4 text-center text-2xl ">
              NUESTROS PROYECTOS
            </h1>
            <p className="text-center text-black mt-2 sm:px-4 md:px-10 text-sm">
              A través de nuestra experiencia hemos creado proyectos especiales para introducir distintas ideas, empresas, artistas y deportistas en la Web3. Desde colecciones de NFTs a Shows en el Metaverso, nuestro objetivo es innovar, y ojalá tú puedas ser parte de ese proceso.
            </p>
            <button
              className="border mt-4 bg-black text-base md:text-md py-2 sm:py-1 minlg:px-8 rounded-full font-sf text-left text-white px-6 sm:px-6"
              type="button"
            >
              Contáctanos

            </button>
          </div>
        </div>
        <div className="h-screen w-full">
          <div className="flex flex-row sm:mt-4 nm:flex-col sm:py-0 py-[15rem]">
            <div data-aos="fade-right" className="flex sm:mt-2 mt-[10rem] nm:mt-0 justify-start px-[6rem] nm:px-0 items-start flex-col sm:justify-start sm:items-start">
              <h1 className="font-integral text-black mt-10 nm:text-left nm:ml-10 text-7xl nm:text-2xl">HECHOS REALES</h1>
              <p className="font-sf text-left text-black nm:ml-10 mt-3 text-sm">Conoce los proyectos en los que estamos trabajando.</p>
            </div>
            <div className="hidden nm:flex  md:justify-start md:ml-[2rem] sm:ml-0 nm:px-8 nm:mt-10  w-full top-[6rem] z-1 flex-row overflow-scroll no-scrollbar select-none">
              <div data-aos="flip-right" className="flex relative flex-col rounded-3xl mr-10 bg-cover  min-w-240 w-[289] h-[344px]">
                <Image src={images.pepe} className="flex " height={344} width={289} layout="" objectFit="cover" priority />
                <h1 className="absolute text-xl ml-[2rem] px-2 mt-[12rem] m text-white">Pepe Aguilar</h1>
                <p className="absolute text-xs px-2 ml-[2rem] text-left mt-[14rem] text-white">Naked Meta es la mejor empresa del sector web3</p>
              </div>
              <div data-aos="fade-left" data-aos-duration="3000" className="flex relative flex-col rounded-3xl mr-10 bg-cover  min-w-240 w-[289] h-[344px] ">
                <Image src={images.pepe} className="" height={344} width={289} layout="" objectFit="cover" priority />
                <h1 className=" absolute text-xl ml-[2rem] px-2 mt-[12rem] m text-white">Pepe Aguilar</h1>
                <p className="absolute text-xs px-2 ml-[2rem] text-left mt-[14rem] text-white">Naked Meta es la mejor empresa del sector web3</p>

              </div>
              <div className="relative flex flex-col rounded-3xl mr-10 bg-cover  min-w-240 w-[289] h-[344px] ">
                <Image src={images.pepe} className="" height={344} width={289} layout="" objectFit="cover" priority />
                <h1 className=" absolute text-xl ml-[2rem] px-2 mt-[12rem] m text-white">Pepe Aguilar</h1>
                <p className="absolute text-xs px-2 ml-[2rem] text-left mt-[14rem] text-white">Naked Meta es la mejor empresa del sector web3</p>
              </div>
            </div>

            <div className="flex mt-[5rem] h-full min-h-full nm:hidden  md:mt-10 top-48 z-1 flex-row overflow-scroll no-scrollbar select-none">
              <div data-aos="flip-right" className="flex relative flex-col rounded-3xl mr-10 min-h-[500px] min-w-[436px] bg-cover w-[436px] h-[500px]">
                <Image src={images.pepe2} className="flex rounded-[2rem] " height={500} width={436} layout="" objectFit="cover" priority />
                <h1 className=" absolute text-3xl ml-[2rem] px-2 mt-[22rem] m text-white">Pepe Aguilar</h1>
                <p className="absolute text-base px-2 ml-[2rem] text-left mt-[24rem] text-white">Naked Meta es la mejor empresa del sector web3</p>
              </div>
              <div data-aos="fade-left" data-aos-offset="500" className="flex relative items-start justify-center flex-col rounded-3xl mr-10 bg-cover min-h-[500px] min-w-[100px] w-[100px] h-[500px]">
                <Image src={images.pepe2} className="flex rounded-[2rem] " height={500} width={100} layout="" objectFit="cover" priority />
                <h1 className=" absolute -rotate-90 mt-[18rem] -ml-[2rem] text-2xl text-white">Pepe Aguilar</h1>
                <p className="absolute hidden text-base ml-[2rem] text-left mt-[31rem] text-white">Naked Meta es la mejor empresa del sector web3</p>
              </div>
              <div data-aos="fade-left" data-aos-offset="500" className="flex relative items-start justify-center flex-col rounded-3xl mr-10 bg-cover min-h-[500px] min-w-[100px] w-[100px] h-[500px]">
                <Image src={images.pepe2} className="flex rounded-[2rem] " height={500} width={100} layout="" objectFit="cover" priority />
                <h1 className=" absolute -rotate-90 mt-[18rem] -ml-[2rem] text-2xl text-white">Pepe Aguilar</h1>
                <p className="absolute hidden text-base ml-[2rem] text-left mt-[31rem] text-white">Naked Meta es la mejor empresa del sector web3</p>
              </div>
              <div data-aos="fade-left" data-aos-offset="500" className="flex relative items-start justify-center flex-col rounded-3xl mr-10 bg-cover min-h-[500px] min-w-[100px] w-[100px] h-[500px]">
                <Image src={images.pepe2} className="flex rounded-[2rem] " height={500} width={100} layout="" objectFit="cover" priority />
                <h1 className=" absolute -rotate-90 mt-[18rem] -ml-[2rem] text-2xl text-white">Pepe Aguilar</h1>
                <p className="absolute hidden text-base ml-[2rem] text-left mt-[31rem] text-white">Naked Meta es la mejor empresa del sector web3</p>
              </div>
              <div data-aos="fade-left" data-aos-offset="500" className="flex relative items-start justify-center flex-col rounded-3xl mr-10 bg-cover min-h-[500px] min-w-[100px] w-[100px] h-[500px]">
                <Image src={images.pepe2} className="flex rounded-[2rem] " height={500} width={100} layout="" objectFit="cover" priority />
                <h1 className=" absolute -rotate-90 mt-[18rem] -ml-[2rem] text-2xl text-white">Pepe Aguilar</h1>
                <p className="absolute hidden text-base ml-[2rem] text-left mt-[31rem] text-white">Naked Meta es la mejor empresa del sector web3</p>
              </div>
              <div data-aos="fade-left" data-aos-offset="500" className="flex relative items-start justify-center flex-col rounded-3xl mr-10 bg-cover min-h-[500px] min-w-[100px] w-[100px] h-[500px]">
                <Image src={images.pepe2} className="flex rounded-[2rem] " height={500} width={100} layout="" objectFit="cover" priority />
                <h1 className=" absolute -rotate-90 mt-[18rem] -ml-[2rem] text-2xl text-white">Pepe Aguilar</h1>
                <p className="absolute hidden text-base ml-[2rem] text-left mt-[31rem] text-white">Naked Meta es la mejor empresa del sector web3</p>
              </div>
            </div>

          </div>
          <div>
            <div data-aos="fade-up" className="flex flex-col h-[700px] justify-center items-center">
              <div>
                <h1 className="font-integral mt-10 text-black text-center text-2xl">MEET THE TEAM</h1>
              </div>
              <div className="flex mt-10 lg:justify-start nm:justify-start px-10 w-screen top-48 flex-row overflow-scroll no-scrollbar select-none">
                <div className="relative bg-meta-gray-3 rounded-[2.5rem] items-center z-1 flex flex-col ml-10 bg-cover  min-w-240 w-[247px] h-[452px]">
                  <div className="flex w-full rounded-[2.5rem] h-[75%]">
                    <Image src={images.nico} className="rounded-[2.5rem]" objectFit="cover" height={452} width={247} />
                  </div>
                  <div className="flex w-full items-center justify-center absolute">
                    <h1 className=" text-2xl font-integral text-center mt-[22rem] m text-black">Nico</h1>
                    <p className="absolute text-lg px-0 text-center mt-[26rem] text-black">El Oraculo</p>
                  </div>
                </div>
                <div className="relative bg-meta-gray-3 rounded-[2.5rem] items-center z-1 flex flex-col ml-10 bg-cover  min-w-240 w-[247px] h-[452px]">
                  <div className="flex w-full rounded-[2.5rem] h-[75%]">
                    <Image src={images.dani} className="rounded-[2.5rem]" objectFit="cover" height={452} width={247} />
                  </div>
                  <div className="flex w-full items-center justify-center absolute">
                    <h1 className=" text-2xl font-integral text-center mt-[22rem] m text-black">Dani</h1>
                    <p className="absolute text-lg px-0 text-center mt-[26rem] text-black">El Hombre Descentralizado</p>
                  </div>
                </div>
                <div className="relative bg-meta-gray-3 rounded-[2.5rem] items-center z-1 flex flex-col ml-10 bg-cover  min-w-240 w-[247px] h-[452px]">
                  <div className="flex w-full rounded-[2.5rem] h-[75%]">
                    <Image src={images.mati} className="rounded-[2.5rem]" objectFit="cover" height={452} width={247} />
                  </div>
                  <div className="flex w-full items-center justify-center absolute">
                    <h1 className=" text-2xl font-integral text-center mt-[22rem] m text-black">Mati</h1>
                    <p className="absolute text-lg px-0 text-center mt-[26rem] text-black">El Sinergiador</p>
                  </div>
                </div>
                <div className="relative bg-meta-gray-3 rounded-[2.5rem] items-center z-1 flex flex-col ml-10 bg-cover  min-w-240 w-[247px] h-[452px]">
                  <div className="flex w-full rounded-[2.5rem] h-[75%]">
                    <Image src={images.mike} className="rounded-[2.5rem]" objectFit="cover" height={452} width={247} />
                  </div>
                  <div className="flex w-full items-center justify-center absolute">
                    <h1 className=" text-2xl font-integral text-center mt-[22rem] m text-black">Mike</h1>
                    <p className="absolute text-lg px-0 text-center mt-[26rem] text-black">El Diseñador de la Matrix</p>
                  </div>
                </div>
                <div className="relative bg-meta-gray-3 rounded-[2.5rem] items-center z-1 flex flex-col ml-10 bg-cover  min-w-240 w-[247px] h-[452px]">
                  <div className="flex w-full rounded-[2.5rem] h-[75%]">
                    <Image src={images.tomi} className="rounded-[2.5rem]" objectFit="cover" height={452} width={247} />
                  </div>
                  <div className="flex w-full items-center justify-center absolute">
                    <h1 className=" text-2xl font-integral text-center mt-[22rem] m text-black">Tomi</h1>
                    <p className="absolute text-lg px-0 text-center mt-[26rem] text-black">El Hombre de Palabras</p>
                  </div>
                </div>
                <div className="relative bg-meta-gray-3 rounded-[2.5rem] items-center z-1 flex flex-col ml-10 bg-cover  min-w-240 w-[247px] h-[452px]">
                  <div className="flex w-full rounded-[2.5rem] h-[75%]">
                    <Image src={images.luis} className="rounded-[2.5rem]" objectFit="cover" height={452} width={247} />
                  </div>
                  <div className="flex w-full items-center justify-center absolute">
                    <h1 className=" text-2xl font-integral text-center mt-[22rem] m text-black">Luis</h1>
                    <p className="absolute text-lg px-0 text-center mt-[26rem] text-black">La Voz</p>
                  </div>
                </div>

                <div className="absolute z-0 sm:top-[5rem] xs:top-[5rem] md:top-[3rem] -left-[24rem]">
                  <Image src={images.bola} width={642} height={642} className="overflow-hidden absolute" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:mt-[6rem] xs:mt-[6rem] mt-[10rem] md:mt-[15rem] bg-gray-1">
            <div className="flex flex-col items-center">
              <div className="sm:mt-10">
                <h1 className="font-integral text-black sm:text-3xl md:text-4xl">NAKED META</h1>
              </div>
              <div className="flex w-full flex-row items-center justify-evenly mt-10 sm:mt-4 md:mt-10">
                <p className="font-bold text-black cursor-pointer hover:text-slate-600 text-sm">Home</p>
                <p className="font-bold text-black cursor-pointer hover:text-slate-600 text-sm">FAQ</p>
                <p className="font-bold text-black cursor-pointer hover:text-slate-600 text-sm">Instagram</p>
                <p className="font-bold text-black cursor-pointer hover:text-slate-600 text-sm">Twitter</p>
              </div>
              <div className=" mt-9 sm:mt-4 text-black  md:mt-10 mb-[6rem] sm:text-xs">
                2022. Naked Meta. Todos los derechos reservados.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default Home;
