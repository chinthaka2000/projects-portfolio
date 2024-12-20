import classNames from 'classnames';
import {motion, useAnimation} from 'framer-motion';
import Image from 'next/image';
import {FC, memo, useEffect, useMemo} from 'react';
import {useInView} from 'react-intersection-observer';
import {Typewriter} from 'react-simple-typewriter';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc = '', description = '', aboutItems = []} = aboutData || {};

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start({scale: 1, opacity: 1});
    } else {
      control.start({scale: 0, opacity: 0});
    }
  }, [control, inView]);

  const typewriterWords = useMemo(() => ['Full-Stack Developer', 'Blockchain Enthusiast', 'Problem Solver Extraordinaire'], []);

  return (
    <div>
      <Section className="bg-neutral-800" sectionId={SectionId.About}>
        <motion.div
          className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}
        >
          {!!profileImageSrc && (
            <motion.div
              animate={control}
              className="col-span-1 flex justify-start md:justify-start -ml-8"
              initial={{scale: 0, opacity: 0}}
              ref={ref}
              transition={{duration: 0.5}}
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-64 md:w-64">
                <Image
                  alt="about-me-image"
                  className="h-full w-full object-cover"
                  height={256}
                  src={profileImageSrc || '/profilepic.jpg'}
                  width={256}
                />
              </div>
            </motion.div>
          )}
          <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
            <div className="flex flex-col gap-y-2">
              <h2 className="text-2xl font-bold text-white">About me</h2>
              <p className="prose prose-sm text-gray-300 sm:prose-base">{description}</p>
            </div>
            <h2 className="text-2xl">
              <span className="text-orange-500 font-bold">
                <Typewriter
                  cursor
                  cursorStyle="|"
                  delaySpeed={1000}
                  deleteSpeed={50}
                  loop={true}
                  typeSpeed={70}
                  words={typewriterWords}
                />
              </span>
            </h2>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {aboutItems.map(({label, text, Icon}, idx) => (
                <li className="col-span-1 flex items-start gap-x-2" key={idx}>
                  {Icon && <Icon className="h-5 w-5 text-white" />}
                  <span className="text-sm font-bold text-white">{label}:</span>
                  <span className="text-sm text-gray-300">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Section>
    </div>
  );
});

About.displayName = 'About';
export default About;
