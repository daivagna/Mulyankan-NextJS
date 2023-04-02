import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import EventsCarousel from 'components/HomePage/EventsCarousel'
//import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import EventsOfTheMonth from '@/components/HomePage/EventsOfTheMonth'
//const inter = Inter({ subsets: ['latin'] })

import { GetStaticProps, InferGetStaticPropsType } from "next";
import FeaturedEventItem from "@/components/HomePage/FeaturedEventItem";

type Data = {
    message: string,
    result: {
        Topic: string,
        ShortDescription: string,
        LongDescription: string,
        Duration: string,
        Date: string,
        Time: string,
        Image_Url: string,
        Featured: string,
    },
};

const Home = ({
    events,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <EventsCarousel />
            <EventsOfTheMonth />
            <section className="bg-light">
                <div className="container py-5">
                    <div className="row text-center py-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Featured Trainings</h1>
                        </div>
                    </div>
                    <div className="row">
                        {events.map((event:any) => (
                            <div className="col-12 col-md-4 mb-4" key={event.Topic}>
                                <FeaturedEventItem event = {event} />
                            </div>
                        ))}  
                    </div>
                </div>
            </section>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch('https://mocki.io/v1/790d6ad3-55b7-4854-8124-a54872447215')
    const events: Data = await res.json();

    return {
        props: {
            events,
        },
    };
};

export default Home;