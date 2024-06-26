import { FunctionComponent } from 'react';

import { Skill } from '../../data/types';

import { Variants, motion } from 'framer-motion';

const Bar: FunctionComponent<{ value: Skill }> = ({
  value: { Icon, level, name },
}) => {
  const bar_width = `${level}%`;

  const variants: Variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
        style={{
          width: bar_width,
        }}
        variants={variants}
        initial="initial"
        animate="animate"
        // animate={{ x: 100 }}
        // transition={{ ease: 'easeOut', duration: 2 }}
      >
        <Icon className="mr-3" /> {name}
      </motion.div>
    </div>
  );
};
export default Bar;
