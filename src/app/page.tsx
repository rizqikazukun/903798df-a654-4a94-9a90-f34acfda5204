'use server'
/* eslint-disable @next/next/no-img-element */
import React from "react";
import './page.sass'
import { AdvantageServiceCard, Footer, Navbar, PrincingSchemeCard, ShortUrl } from './_components'
import { AdvantageService, PrincingScheme } from "@/lib/StaticData"
import { AppURL, BeURL } from "@/lib/Config";
import Link from 'next/link';

export default async function Home(): Promise<JSX.Element> {
  return (
    <div id='home-page'>
      <Navbar />
      <main>

        {/* 
            This is a main feature
            Because of this an client component
            It should be sparepart from server component
        */}
        <ShortUrl BeURL={BeURL} AppURL={AppURL} />

        {/* content */}
        <section id="content"
          className="container mx-auto my-10 flex flex-col bg-white justify-center
                      items-center rounded-lg border shadow-sm max-w-[1000px] p-10 gap-10">
          <div>
            <div className="flex flex-col items-center">
              <h2 className="font-bold text-2xl">
                The Advantage
              </h2>
              <p>Why should use our service?</p>
            </div>
            <div className="flex flex-wrap justify-around gap-5">
              {
                AdvantageService.map((advantage, index) => (
                  <AdvantageServiceCard
                    key={index}
                    image={advantage.image}
                    title={advantage.title}
                    description={advantage.description} />
                ))
              }
            </div>
          </div>

          <div className='flex flex-col gap-5'>
            <div className="flex flex-col items-center">
              <h2 className="font-bold text-2xl">
                Princing
              </h2>
            </div>

            <div className="flex flex-wrap justify-around gap-2">
              {
                PrincingScheme.map((schema, index) => (
                  <PrincingSchemeCard key={index} schema={schema} />
                ))
              }
            </div>
          </div>

        </section>
        {/* end of content */}

        {/* Call to action */}
        <section id='cta'>
          <div className='container mx-auto max-w-[1000px] flex flex-wrap gap-5 max-sm:justify-center 
                          justify-between p-10 bg-white items-center border shadow-sm rounded-lg'>
            <div>
              <p className='font-bold'>
                Not ready yet?
              </p>
            </div>
            <div>
              <Link href='/#' scroll>
                <button className="woozify-button p-2 rounded-full font-medium hover:font-bold text-white w-[100px]">
                  <p className=' font-bold'>Just Try</p>
                </button>
              </Link>
            </div>
          </div>
        </section>
        {/* End of Call to action */}
        
      </main>
      <Footer />
    </div>
  )
}
