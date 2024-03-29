'use client';

import React, { useState } from 'react';
import { projects as projectData } from '../../../data/data';
import ProjectCard from '@/components/ProjectCard';
import ProjectNavbar from '@/components/ProjectNavbar';
import { Category } from '../../../data/types';
import { motion } from 'framer-motion';
import { fadInUp, routeAnimation, stagger } from '../../../animation';

function page() {
  const [projects, setProjects] = useState(projectData);
  const [active, setActive] = useState('all');
  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handlelFilterCateogary = (category: Category | 'all') => {
    if (category == 'all') {
      setProjects(projectData);
      setActive(category);
      return;
    }
    const filteredProject = projectData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(filteredProject);
    setActive(category);
  };

  return (
    <motion.div
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: '65vh' }}
    >
      <ProjectNavbar
        handlelFilterCateogary={handlelFilterCateogary}
        active={active}
      />
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="grid grid-cols-12 gap-4 my-3 relative"
      >
        {projects.map((project) => {
          return (
            <motion.div
              variants={fadInUp}
              className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 bg-gray-200 dark:bg-dark-200 rounded-lg"
              key={project.name}
            >
              <ProjectCard
                project={project}
                showDetail={showDetail}
                setShowDetail={setShowDetail}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default page;
