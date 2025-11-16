import React from 'react'
import Banner from './Banner'
import HowWork from './HowWork'
import MainService from './MainService';
import { useLoaderData } from 'react-router';
import Brands from './Brands';
import Reviews from './Reviews';

const reviewPromise = fetch('/reviews.json').then(res => res.json());

export default function Home() {
  const { howWork, mainService } = useLoaderData();
  return (
    <div>
        <Banner></Banner>
        <HowWork data={howWork}></HowWork>
        <MainService data={mainService}></MainService>
        <Brands></Brands>
        <Reviews reviewPromise={reviewPromise}></Reviews>
    </div>
  )
}
