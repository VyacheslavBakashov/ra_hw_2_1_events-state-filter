import { useState } from 'react';
import { Toolbar } from './Toolbar';
import { ProjectList } from './ProjectList';

import projects from '../data/projects';
import filters from '../data/filters';

export const Portfolio = () => {
  const [selected, setSelected] = useState('All');

  const onSelectFilter = (filter) => () => {
    setSelected(filter);
  };

  const filteredProjects = selected !== 'All' ? projects.filter((project) => project.category === selected) : projects;

  return (
    <div className='portfolio'>
      <Toolbar {...{ filters, selected, onSelectFilter }} />
      <ProjectList filteredProjects={filteredProjects} />
    </div>
  );
};
