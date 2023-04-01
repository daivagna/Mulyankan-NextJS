import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import EventsCarousel from 'components/HomePage/EventsCarousel'
//import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import EventsOfTheMonth from '@/components/HomePage/EventsOfTheMonth'
//const inter = Inter({ subsets: ['latin'] })
export default function Home() {
    return (
        <>
            <EventsCarousel />
            <EventsOfTheMonth />
        </>
    )
}