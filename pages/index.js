/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import Image from 'next/image';

import React, { useEffect } from 'react';
import images from '../public/assets';

import 'aos/dist/aos.css';
import Aos from 'aos';

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="flex relative min-w-327  bg-meta-gray justify-center ">
      <div className="w-full relative max-w-max">
        {/* Titulo */}
        <div className="flex relative mt-72 md:mt-32 nm:mt-42 sm:mt-10 px-32 md:px-8 nm:px-12  flex-row md:flex-col-reverse ">
          <div data-aos="fade-up" className="flex max-w-full md:items-center flex-col">
            <h1 className="text-black font-integral md:mt-10 p-8 md:p-0 text-left text-5xl  minmd:text-7xl md:text-2xl md:text-center ">
              HACIENDO EL FUTURO ACCESIBLE PARA TODOS
            </h1>
            <p className="font-sfpro md:mt-5 font-normal md:text-center text-xl md:text-base px-8 nm:px-6 text-black ">Te ayudamos a encontrar y compartir tu verdadera esencia a través de la Web3.</p>
            <div className="px-6">
              <button
                type="button"
                className=" border mt-4 bg-black text-xl nm:text-xl sm:text-base md:text-md py-2 px-8 nm:px-6  minlg:px-8 rounded-full font-sfpro text-left text-white"
                onClick={() => {}}
              >
                Conócenos

              </button>
            </div>
          </div>
          <div className="flex md:items-center md:justify-center -mt-20 md:mt-20">
            <Image
              data-aos="fade-left"
              src={images.nakedmeta}
              height={628}
              width={628}
              objectFit="contain"
              className="overflow-visible"
            />
          </div>
        </div>
        {/* Nacky */}
        <div className="flex overflow-hidden z-1 mt-[8rem] minmd:mt-[15rem] nm:mt-10 sm:mt-12 flex-col m-0 justify-center">
          <div className="w-full h-full flex md:flex-col flex-row-reverse items-center justify-center  mb-10">
            <div data-aos="fade-left" className="w-full hidden md:w-full md:flex md:items-center justify-center ">
              <Image src={images.nacky} width={323} height={339} />
            </div>
            <div data-aos="fade-left" className="w-[50%] md:hidden md:w-full flex items-center ">
              <Image src={images.nacky} width={550} height={578} />
            </div>
            <div className="w-[50%] z-1 md:mt-10 md:w-full flex flex-col items-center justify-start md:px-10">
              <div className="flex flex-col items-center justify-center w-[50%] md:w-full ">
                <p className="text-[35px] w-full font-sfpro font-bold text-left md:text-[26px] md:text-center text-black">Web3 con conciencia</p>
                <p className="font-sfpro md:text-center w-full text-[18px] text-left md:text-base text-black ">Naked Meta nace para acompañarte en la exploración del mundo Web3. Nuestro objetivo es que puedas comprenderlo para sumergirte de forma consciente, sencilla y eficaz.</p>
              </div>
              <div className="flex flex-col justify-start ">
                <button
                  type="button"
                  className=" border mt-4 bg-black text-xl nm:text-xl sm:text-base md:text-md py-2 px-8 nm:px-6  minlg:px-8 rounded-full font-sfpro text-left text-white"
                  onClick={() => {}}
                >
                  Conócenos

                </button>
              </div>
            </div>
          </div>
          {/* nuestros valores */}
          <div className="flex mt-[5rem] z-1 justify-center items-center mb-10">
            <p className="text-black text-4xl md:text-[25px] font-bold">Nuestros servicios</p>
          </div>
          <div className="flex z-1 md:space-y-[5rem] flex-row md:flex-col mt-10 w-full items-center justify-center px-[2rem]">
            <div className="flex flex-col w-[33%] md:w-full items-center justify-center">
              <div className="hidden md:flex">
                <Image src={images.icon1} width={198} height={91} />
              </div>
              <div className="flex md:hidden">
                <Image src={images.icon1} width={252} height={116} />
              </div>
              <h1 className="font-sfpro mt-10 font-bold text-[30px] md:text-[25px] text-black">Proyectos NFTs</h1>
              <p className="font-sfpro text-[18px] md:text-base text-center px-[2rem] text-black">Lanzamos proyectos utilizando tecnología NFT. Para ello, desarrollamos smart contracts, artes, sitios webs, marketplaces, branding, estrategia de marketing y contenidos.</p>
            </div>
            <div className="flex flex-col w-[33%] md:w-full items-center justify-center">
              <div className="hidden md:flex">
                <Image src={images.icon2} width={142} height={77} />
              </div>
              <div className="md:hidden flex">
                <Image src={images.icon2} width={216} height={117} />
              </div>
              <h1 className="font-sfpro mt-10 font-bold text-[30px] md:text-[25px] text-black">Eventos en el Metaverso.</h1>
              <p className="font-sfpro text-[18px] md:text-base text-center px-[2rem] text-black">Diseñamos proyectos utilizando la realidad virtual, para lograrlo, buscamos el metaverso indicado, construimos los espacios y planificamos la comunicación.</p>
            </div>
            <div className="flex flex-col w-[33%] md:w-full items-center justify-center">
              <div className="hidden md:flex">
                <Image src={images.icon3} width={163} height={150} />
              </div>
              <div className="flex md:hidden">
                <Image src={images.icon3} width={200} height={117} />
              </div>
              <h1 className="font-sfpro mt-10 font-bold text-[30px] md:text-[25px] text-black">Educación Web3</h1>
              <p className="font-sfpro text-[18px] md:text-base text-center px-[2rem] text-black">Ofrecemos contenido educativo y creamos una comunidad NFT de acceso gratuito para que las personas aprendan todo sobre la Web3.</p>
            </div>
          </div>
        </div>
        {/* Por que trabajar con nosotros */}
        <div className="flex mt-60 nm:mt-32 md:mt-5 min-w-full flex-col justify-center nm:mb-32">
          <div className="flex relative nm:space-y-10 nm:flex-col mt-10 md:mt-16 justify-between md:items-center md:justify-center">
            <div className="flex ml-[10rem] md:ml-0 nm:ml-6 items-start justify-start w-[650px] nm:w-full nm:h-[100px] h-662 z-1 nm:items-start nm:justify-start rounded-3xl">
              <div data-aos="fade-up" className="flex">
                <p className="text-left text-black font-integral font-bold px-0 uppercase mt-[2rem] md:mt-16 md:text-xl md:text-center text-3xl">¿Por qué trabajar con nosotros?</p>
              </div>
              <div className="flex absolute  mt-[26rem] nm:hidden ">
                <p className="font-bold font-sfpro text-2xl text-black">01 </p>
                <Image src={images.line2} width={250} height={0} />
                <p className="font-bold font-sfpro text-2xl text-black"> 04</p>
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
                <h1 className=" absolute nm:text-xl lg:text-4xl minmd:text-4xl font-sfpro font-bold text-center mt-[24rem] nm:mt-[16rem] text-white">Visión</h1>
                <p className="absolute font-sfpro text-base sm:text-xs text-center sm:px-0 px-2 mt-[27rem] nm:mt-[18rem] text-white">Analizamos la naturaleza de tu proyecto, imaginamos y planificamos a gran escala.</p>
              </div>
              <div className="relative items-center z-1 flex flex-col ml-10 bg-cover  nm:min-w-240 nm:min-h-327 min-w-[360px] min-h-[480px] nm:w-[246px] nm:h-[380px]">
                <Image src={images.card2} className="nm:w-[246px] nm:h-[380px]" height={662} width={430} layout="" objectFit="cover" priority />
                <h1 className="absolute nm:text-xl lg:text-4xl minmd:text-4xl font-sfpro font-bold text-center mt-[24rem] nm:mt-[16rem] text-white">Impulso</h1>
                <p className="absolute font-sfpro text-base sm:text-xs text-center sm:px-0 px-2 mt-[27rem] nm:mt-[18rem] text-white">Desarrollamos un plan e introducimos tu proyecto en la tecnología del futuro.</p>
              </div>
              <div className="relative items-center z-1 flex flex-col ml-10 bg-cover  nm:min-w-240 nm:min-h-327 min-w-[360px] min-h-[480px] nm:w-[246px] nm:h-[380px] ">
                <Image src={images.card4} className="nm:w-[246px] nm:h-[380px]" height={662} width={430} layout="" objectFit="cover" priority />
                <h1 className="absolute nm:text-xl lg:text-4xl minmd:text-4xl font-sfpro font-bold text-center mt-[24rem] nm:mt-[16rem] text-white">Valor</h1>
                <p className="absolute font-sfpro text-base sm:text-xs text-center sm:px-0 px-2 mt-[27rem] nm:mt-[18rem] text-white">Creamos toda la infraestructura web3 para que tu te dediques a lo que te apasiona.</p>
              </div>
              <div className="relative items-center z-1 flex flex-col ml-10 bg-cover  nm:min-w-240 nm:min-h-327 min-w-[360px] min-h-[480px] nm:w-[246px] nm:h-[380px] ">
                <Image src={images.card5} className="nm:w-[246px] nm:h-[380px]" height={662} width={430} layout="" objectFit="cover" priority />
                <h1 className="absolute nm:text-xl lg:text-4xl minmd:text-4xl font-sfpro font-bold text-center mt-[24rem] nm:mt-[16rem] text-white">Estrategia</h1>
                <p className="absolute font-sfpro text-base sm:text-xs text-center sm:px-0 px-2 mt-[27rem] nm:mt-[18rem] text-white">Construimos una estrategia de comunicación para llegar a tu público ideal.</p>
              </div>
            </div>
            <div className="absolute z-0 block -top-[80rem] md:mt-[30rem] -left-[75rem]">
              <Image src={images.image1} width={1822} height={1822} className="overflow-hidden absolute" />
            </div>
          </div>
        </div>
        {/* Hechos reales desktop */}
        <div className="nm:hidden flex w-screen mt-[20rem] m-0">
          <div className="flex relative justify-start max-w-screen items-center">
            <Image src={images.section4} layout="" objectFit="fill" priority />
            <div data-aos="fade-up" className="flex absolute  justify-center flex-col items-start minmd:ml-[68rem] lg:ml-[55rem] nm:px-10 nm:ml-[40rem] h-317">
              <h1 className="font-integral text-black  text-left text-3xl minmd:text-6xl">
                HECHOS REALES
              </h1>
              <p className="text-left font-sfpro text-black minlg:mr-[20rem] minmd:mr-[10rem] lg:mr-[10rem] nm:mr-[1rem] text-sm">
                A través de nuestra experiencia hemos creado proyectos especiales para introducir distintas ideas, empresas, artistas y deportistas en la Web3. Desde colecciones de NFTs a Shows en el Metaverso, en Naked Meta no dejamos de innovar, y ojalá tú puedas ser parte de ese proceso.
              </p>
              <button
                className="border mt-4 bg-black text-xl md:text-md ml-0 py-2 minlg:px-8 rounded-full font-sfpro text-left text-white px-6"
                type="button"
              >
                Conocenos

              </button>
            </div>
          </div>
        </div>
        {/* Hechos reales mobile */}
        <div className="hidden overflow-hidden md:w-full sm:mt-[6rem] md:z-1 m-0 md:flex md:flex-col">
          <Image src={images.section5} className="" layout="" objectFit="cover" priority />
          <div data-aos="fade-up" className="flex absolute sm:mt-0 md:mt-10 flex-col minmd:mt-44 justify-start items-center h-317 md:w-full md:h-[300px] md:z-1">
            <h1 className="font-integral text-black mt-4 text-center text-2xl ">
              HECHOS REALES
            </h1>
            <p className="text-center text-black font-sfpro mt-2 sm:px-4 md:px-10 text-sm">
              A través de nuestra experiencia hemos creado proyectos especiales para introducir distintas ideas, empresas, artistas y deportistas en la Web3. Desde colecciones de NFTs a Shows en el Metaverso, nuestro objetivo es innovar, y ojalá tú puedas ser parte de ese proceso.
            </p>
            <button
              className="border mt-1 bg-black text-base md:text-md py-2 sm:py-1 minlg:px-8 rounded-full font-sfpro text-left text-white px-6 sm:px-6"
              type="button"
            >
              Contáctanos

            </button>
          </div>
        </div>
        <div className="h-screen w-full">
          <div className="flex sm:mt-4 flex-col items-center justify-center md:items-start sm:py-0 py-[15rem]">
            <div className="flex sm:mt-2 mt-[10rem] nm:mt-0 justify-start px-[6rem] nm:px-0 items-center md:items-start flex-col sm:justify-start sm:items-center sm:px-0">
              <h1 className="font-integral text-black mt-10 nm:text-left nm:ml-8 text-7xl nm:text-2xl">NUESTROS PROYECTOS</h1>
              <p className="font-sfpro text-center ml-4  text-black mt-3 text-xs">Conoce los proyectos en los que estamos trabajando.</p>
            </div>
            {/* clientes mobile */}
            <div className="hidden nm:flex  md:justify-start px-10  nm:mt-10  w-full top-[6rem] z-1 flex-row overflow-scroll no-scrollbar select-none">
              <div className="flex relative flex-col rounded-3xl mr-10   min-w-[90%] w-[90%] h-[510px]">
                <Image src={images.pepe} className="flex rounded-3xl" height={600} width={300} layout="" objectFit="cover " priority />
                <h1 className="absolute text-xl ml-[2rem] px-2 mt-[21rem] font-sfpro font-bold text-white">Pepe Aguilar</h1>
                <p className="absolute text-xs px-2 ml-[2rem] font-sfpro text-left mt-[23rem] text-white">Dime La Meta es el primer Talk Show en el Metaverso</p>
              </div>
              <div className="flex relative flex-col rounded-3xl mr-10   min-w-[90%] w-[90%] h-[510px]">
                <Image src={images.javi} className="flex rounded-3xl" height={600} width={300} layout="" objectFit="cover " priority />
                <h1 className=" absolute text-xl ml-[2rem] px-2 mt-[21rem] font-sfpro font-bold text-white">Javier Hernandez</h1>
                <p className="absolute text-xs px-2 ml-[2rem] font-sfpro text-left mt-[23rem] text-white">CH14 y Naked Meta están preparando el primer club digital de la estrella Mexicana.</p>
              </div>
              <div className="flex relative flex-col rounded-3xl mr-10   min-w-[90%] w-[90%] h-[510px]">
                <Image src={images.diego} className="flex rounded-3xl" height={600} width={300} layout="" objectFit="cover " priority />
                <h1 className=" absolute text-xl ml-[2rem] px-2 mt-[21rem] font-sfpro font-bold text-white">Diego Dreyfus</h1>
                <p className="absolute text-xs px-2 ml-[2rem] font-sfpro text-left mt-[23rem] text-white">Cacastupido es una colección de 11 NFTs únicos, que dan acceso a conocer a Diego en persona. </p>
              </div>
              <div className="flex relative flex-col rounded-3xl mr-10   min-w-[90%] w-[90%] h-[510px]">
                <Image src={images.rojkind} className="flex rounded-3xl" height={600} width={300} layout="" objectFit="cover " priority />
                <h1 className=" absolute text-xl ml-[2rem] px-2 mt-[21rem] font-sfpro font-bold text-white">Michel Rojkind</h1>
                <p className="absolute text-xs px-2 ml-[2rem] font-sfpro text-left mt-[23rem] text-white">Bey♾nd es un proyecto que propone propiedades virtuales en el Metaverso que van más allá de lo que conocemos como real.</p>
              </div>
              <div className="flex relative flex-col rounded-3xl mr-10   min-w-[90%] w-[90%] h-[510px]">
                <Image src={images.debook} className="flex rounded-3xl" height={600} width={300} layout="" objectFit="cover " priority />
                <h1 className=" absolute text-xl ml-[2rem] px-2 mt-[21rem] font-sfpro font-bold text-white">DEBOOK</h1>
                <p className="absolute text-xs px-2 ml-[2rem] font-sfpro text-left mt-[23rem] text-white">DEBOOK es la primera plataforma blockchain con el objetivo de tokenizar los libros y hacer de cada libro una red social.</p>
              </div>
              <div className="flex relative flex-col rounded-3xl mr-10   min-w-[90%] w-[90%] h-[510px]">
                <Image src={images.marcos} className="flex rounded-3xl" height={600} width={300} layout="" objectFit="cover " priority />
                <h1 className=" absolute text-xl ml-[2rem] px-2 mt-[21rem] font-sfpro font-bold text-white">AlquimiaMC</h1>
                <p className="absolute text-xs px-2 ml-[2rem] font-sfpro text-left mt-[23rem] text-white">The 77 BADBOYS es la primera colección de Marcos Cojab, conocido como AlquimiaMC</p>
              </div>
              <div className="flex relative flex-col rounded-3xl mr-10   min-w-[90%] w-[90%] h-[510px]">
                <Image src={images.humo} className="flex rounded-3xl" height={600} width={300} layout="" objectFit="" priority />
                <h1 className=" absolute text-xl ml-[2rem] px-2 mt-[21rem] font-sfpro font-bold text-white">Humo de Dios</h1>
                <p className="absolute text-xs px-2 ml-[2rem] font-sfpro text-left mt-[23rem] text-white">Un club privado al que solo accederán aquellos que aporten cierto valor.</p>
              </div>
              <div className="flex relative flex-col rounded-3xl mr-10   min-w-[90%] w-[90%] h-[510px]">
                <Image src={images.ka} className="flex rounded-3xl" height={600} width={300} layout="" objectFit="cover " priority />
                <h1 className=" absolute text-xl ml-[2rem] px-2 mt-[21rem] font-sfpro font-bold text-white">Ka Larraza</h1>
                <p className="absolute text-xs px-2 ml-[2rem] font-sfpro text-left mt-[23rem] text-white">Libera Femina es un proyecto que quiere empoderar a las mujeres a hacer sus sueños realidad.</p>
              </div>
            </div>
            {/* clientes desktop */}
            <div className="flex mt-[5rem] h-full min-h-full nm:hidden  md:mt-10 top-48 z-1 flex-row overflow-scroll no-scrollbar select-none">
              <div className="client bg-pepe">
                <div className="client-inner">
                  <div className="client-name font-sfpro">Pepe Aguilar</div>
                  <div className="client-description">Dime La Meta es el primer Talk Show en el Metaverso</div>
                </div>
              </div>
              <div className="client bg-javi bg-cover">
                <div className="client-inner">
                  <div className="client-name font-sfpro">Chicharito</div>
                  <div className="client-description">CH14 y Naked Meta están preparando el primer club digital de la estrella Mexicana.</div>
                </div>
              </div>
              <div className="client bg-diego bg-cover">
                <div className="client-inner">
                  <div className="client-name font-sfpro">Diego Dreyfus</div>
                  <div className="client-description">Cacastupido es una colección de 11 NFTs únicos, que dan acceso a conocer a Diego en persona.</div>
                </div>
              </div>
              <div className="client bg-rojkind bg-cover">
                <div className="client-inner">
                  <div className="client-name font-sfpro">Michel Rojkind</div>
                  <div className="client-description">Bey♾nd es un proyecto que propone propiedades virtuales en el Metaverso que van más allá de lo que conocemos como real.</div>
                </div>
              </div>
              <div className="client bg-debook">
                <div className="client-inner">
                  <div className="client-name font-sfpro">DEBOOK</div>
                  <div className="client-description">DEBOOK es la primera plataforma blockchain con el objetivo de tokenizar los libros y hacer de cada libro una red social.</div>
                </div>
              </div>
              <div className="client bg-marcos bg-cover">
                <div className="client-inner">
                  <div className="client-name font-sfpro">AlquimiaMC</div>
                  <div className="client-description">The 77 BADBOYS es la primera colección de Marcos Cojab, conocido como AlquimiaMC</div>
                </div>
              </div>
              <div className="client bg-humo">
                <div className="client-inner">
                  <div className="client-name font-sfpro">Humo de Dios</div>
                  <div className="client-description">Un club privado al que solo accederán aquellos que aporten cierto valor.</div>
                </div>
              </div>
              <div className="client bg-ka bg-cover before:">
                <div className="client-inner">
                  <div className="client-name font-sfpro">Ka Larraza</div>
                  <div className="client-description">Libera Femina es un proyecto que quiere empoderar a las mujeres a hacer sus sueños realidad.</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div data-aos="fade-up" className="flex flex-col h-[700px] justify-center items-center">
              <div>
                <h1 className="font-integral mt-10 text-black text-center text-2xl">CONOCE EL EQUIPO</h1>
              </div>
              <div className="flex mt-10 lg:justify-start nm:justify-start px-10 w-screen top-48 flex-row overflow-scroll no-scrollbar select-none">
                <div className="relative bg-meta-gray-3 rounded-[2.5rem] items-center z-1 flex flex-col ml-10 bg-cover  min-w-240 w-[247px] h-[452px]">
                  <div className="flex w-full rounded-[2.5rem] h-[75%]">
                    <Image src={images.nico} className="rounded-[2.5rem]" objectFit="cover" height={452} width={247} />
                  </div>
                  <div className="flex w-full items-center justify-center absolute">
                    <h1 className=" text-2xl font-sfpro font-bold text-center mt-[22rem] m text-black">Nico</h1>
                    <p className="absolute text-lg px-0 font-sfpro text-center mt-[26rem] text-black">El Oráculo</p>
                  </div>
                </div>
                <div className="relative bg-meta-gray-3 rounded-[2.5rem] items-center z-1 flex flex-col ml-10 bg-cover  min-w-240 w-[247px] h-[452px]">
                  <div className="flex w-full rounded-[2.5rem] h-[75%]">
                    <Image src={images.dani} className="rounded-[2.5rem]" objectFit="cover" height={452} width={247} />
                  </div>
                  <div className="flex w-full items-center justify-center absolute">
                    <h1 className=" text-2xl font-sfpro font-bold text-center mt-[22rem] m text-black">Dani</h1>
                    <p className="absolute text-lg px-0 font-sfpro text-center mt-[26rem] text-black">El Hombre Descentralizado</p>
                  </div>
                </div>
                <div className="relative bg-meta-gray-3 rounded-[2.5rem] items-center z-1 flex flex-col ml-10 bg-cover  min-w-240 w-[247px] h-[452px]">
                  <div className="flex w-full rounded-[2.5rem] h-[75%]">
                    <Image src={images.mati} className="rounded-[2.5rem]" objectFit="cover" height={452} width={247} />
                  </div>
                  <div className="flex w-full items-center justify-center absolute">
                    <h1 className=" text-2xl font-sfpro font-bold text-center mt-[22rem] m text-black">Mati</h1>
                    <p className="absolute text-lg px-0 font-sfpro text-center mt-[26rem] text-black">El Sinergiador</p>
                  </div>
                </div>
                <div className="relative bg-meta-gray-3 rounded-[2.5rem] items-center z-1 flex flex-col ml-10 bg-cover  min-w-240 w-[247px] h-[452px]">
                  <div className="flex w-full rounded-[2.5rem] h-[75%]">
                    <Image src={images.mike} className="rounded-[2.5rem]" objectFit="cover" height={452} width={247} />
                  </div>
                  <div className="flex w-full items-center justify-center absolute">
                    <h1 className=" text-2xl font-sfpro font-bold text-center mt-[22rem] m text-black">Mike</h1>
                    <p className="absolute text-lg px-0 font-sfpro text-center mt-[26rem] text-black">El Diseñador de la Matrix</p>
                  </div>
                </div>
                <div className="relative bg-meta-gray-3 rounded-[2.5rem] items-center z-1 flex flex-col ml-10 bg-cover  min-w-240 w-[247px] h-[452px]">
                  <div className="flex w-full rounded-[2.5rem] h-[75%]">
                    <Image src={images.tomi} className="rounded-[2.5rem]" objectFit="cover" height={452} width={247} />
                  </div>
                  <div className="flex w-full items-center justify-center absolute">
                    <h1 className=" text-2xl font-sfpro font-bold text-center mt-[22rem] m text-black">Tomi</h1>
                    <p className="absolute text-lg px-0 font-sfpro text-center mt-[26rem] text-black">El Hombre de Palabras</p>
                  </div>
                </div>
                <div className="relative bg-meta-gray-3 rounded-[2.5rem] items-center z-1 flex flex-col ml-10 bg-cover  min-w-240 w-[247px] h-[452px]">
                  <div className="flex w-full rounded-[2.5rem] h-[75%]">
                    <Image src={images.luis} className="rounded-[2.5rem]" objectFit="cover" height={452} width={247} />
                  </div>
                  <div className="flex w-full items-center justify-center absolute">
                    <h1 className=" text-2xl font-sfpro font-bold text-center mt-[22rem] m text-black">Luis</h1>
                    <p className="absolute text-lg px-0 font-sfpro text-center mt-[26rem] text-black">La Voz de la web3</p>
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
