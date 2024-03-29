'use client';

import { GetServerSideProps } from 'next';
import { services } from '../../data/data';
import ServiceCard from '@/components/ServiceCard';
import { motion } from 'framer-motion';
import { fadInUp, routeAnimation, stagger } from '../../animation';
export default function Home() {
  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col flex-grow px-6 pt-1 "
    >
      <h6 className="my-3 text-base font-medium">
        I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Academy of Technology. I have 3+ years of experience in
        Web Development and I have a Youtube Channel where I teach Full Stack
        Web Development
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am doing
        </h4>
        <motion.div
          className="grid lg:grid-cols-2 gap-6"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              variants={fadInUp}
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
