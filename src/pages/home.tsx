import React from 'react';
import './home.scss';
import headerImg from '../images/header.png';
import {Chart1} from '../components/chart-1';
import {Chart2} from '../components/chart-2';

export const Home = () => {
  return (
    <div className="home">
      <header style={{backgroundImage: `url(${headerImg})`}}></header>

      <main>
        <section className="section1">
          <Chart1></Chart1>
          <Chart2></Chart2>
        </section>
        <section className="bordered section2"></section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>

      <footer>&copy; wang huan</footer>
    </div>
  );
};
