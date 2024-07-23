import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ZeePost from '/public/assets/projects/ZeePost.png';
import Portfolio from '/public/assets/projects/Portfolio.png';
import GM from '/public/assets/projects/GM.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>

        <h2 className='py-4 flex justify-center text-[#ffffff] font-roboto Mono'>Projects</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='ZeePost'
            backgroundImage={ZeePost}
            projectUrl='https://zee-post.vercel.app'
            desc='Social App'
          />
                <ProjectItem
            title='Abuzaid Portfolio'
            backgroundImage={Portfolio}
            projectUrl='https://abuzaid.vercel.app'
            desc='Portfolio'
          />
                     <ProjectItem
            title='GreenMarmot'
            backgroundImage={GM}
            projectUrl='https://gmm-ahmed.vercel.app'
            desc='Capsule Hotel'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;