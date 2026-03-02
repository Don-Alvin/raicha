'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ui/ProjectCard';
import ProjectFilter from '@/components/ui/ProjectFilter';

export default function ProjectsGrid() {
  const categories = ['All Projects', 'Completed Projects', 'Ongoing Projects'];

  const [activeCategory, setActiveCategory] = useState('All Projects');

  const completedProjects = [
    {
      title: 'AFRO SPIN LTD',
      category: 'Completed Projects',
      location: 'Nakuru, Kenya',
      year: '',
      description:
        'Complete cotton Spinning Mills with installed load of 1.2 MVA and metered at 11KVA.',
      image: '🏭',
    },
    {
      title: 'VALLEY BAKERY',
      category: 'Completed Projects',
      location: 'Nakuru, Kenya',
      year: '',
      description:
        'A modern Automatic Bread making plant with installed load of 315 KVA.',
      image: '🍞',
    },
    {
      title: 'PECHE FOODS',
      category: 'Completed Projects',
      location: 'Kisumu, Kenya',
      year: '',
      description:
        'A fish processing plant with installed load of 315 KVA and a stand by generator of 245 KVA.',
      image: '🐟',
    },
    {
      title: 'VYATU LTD',
      category: 'Completed Projects',
      location: 'Kisumu, Kenya',
      year: '',
      description:
        'Rubber slipper manufacturing plant complete with synthetic rubber mills together with Hydraulic Press & Plastic injection molding plant.',
      image: '👞',
    },
    {
      title: 'ATP WORKSHOPS',
      category: 'Completed Projects',
      location: 'Mambo Leo - Kisumu, Kenya',
      year: '',
      description:
        'Industrial complex for ATP Workshops, a training organization run by the Lutheran Church In Kenya with Mig & Arc Welding machines, lathes, drill machines, hydraulic presses and guillotines.',
      image: '⚙️',
    },
    {
      title: 'BRIGHTLIGHT PRODUCTS',
      category: 'Completed Projects',
      location: 'Kenya',
      year: '',
      description:
        'A Vaseline Petroleum Jelly manufacturing plant complete with injection molding plant. Installed load of 500KVA with Automatic Power Factor Correction Unit of 240 KVAr obtaining a reading of 0.92 lag.',
      image: '🏭',
    },
    {
      title: 'WFP OFFICES - KAKUMA',
      category: 'Completed Projects',
      location: 'Kakuma, Kenya',
      year: '',
      description:
        'Electrical contracting for World Food Programme - WFP station development at Kakuma, a remote outpost in Kenya.',
      image: '🌍',
    },
    {
      title: 'EMBASSY OF THE PEOPLES REPUBLIC OF SUDAN',
      category: 'Completed Projects',
      location: 'Nairobi, Kenya',
      year: '',
      description:
        'Electrical Installations for the proposed Embassy Building and the Residences for the Sudan Embassy.',
      image: '🏛️',
    },
    {
      title: 'KOMBEWA MEDICAL RESEARCH CENTRE',
      category: 'Completed Projects',
      location: 'Kombewa, Kenya',
      year: '2003',
      description:
        'Extension of Kombewa Medical Research Centre. Phase II of the contract awarded on 6th Dec 2003. Involved in both Phase I and Phase II on design and built basis.',
      image: '🔬',
    },
    {
      title: 'MSF FRANCE - HOMABAY',
      category: 'Completed Projects',
      location: 'Homabay, Kenya',
      year: '',
      description:
        'HIV and AIDS counseling unit at Homabay Hospital.',
      image: '🏥',
    },
    {
      title: 'MSF SPAIN - BUSIA',
      category: 'Completed Projects',
      location: 'Busia, Kenya',
      year: '2001',
      description:
        'HIV and AIDS counseling Unit at Busia Hospital. Phase II of the project, with Phase I completed in 2001.',
      image: '🏥',
    },
    {
      title: 'ACACIA MEDICAL CENTRE',
      category: 'Completed Projects',
      location: 'Kisumu & Nairobi, Kenya',
      year: '2007',
      description:
        'Electrical installations for one of Kenya\'s highest ranked Medical service providers. Completed flagship project in Kisumu, Acacia Landmark in 2007, and Pharmacy at Westgate Building.',
      image: '⚕️',
    },
  ];

  const ongoingProjects = [
    {
      title: 'Office of The Prime Minister',
      category: 'Ongoing Projects',
      location: 'Kenya',
      year: 'Phase II',
      description: 'Ongoing electrical installations for the Office of The Prime Minister - Phase II.',
      image: '🏛️',
    },
    {
      title: 'Jade Petrol Station',
      category: 'Ongoing Projects',
      location: 'Eldoret, Kenya',
      year: '',
      description: 'Complete electrical installation for Jade Petrol Station in Eldoret.',
      image: '⛽',
    },
    {
      title: 'Housing for C.I.D',
      category: 'Ongoing Projects',
      location: 'Kiambu, Kenya',
      year: '',
      description: 'Electrical installations for housing development for C.I.D officers.',
      image: '🏘️',
    },
    {
      title: 'Housing for G.S.U.',
      category: 'Ongoing Projects',
      location: 'Ruaraka, Kenya',
      year: '',
      description: 'Electrical installations for housing development for G.S.U officers.',
      image: '🏘️',
    },
    {
      title: 'New Lake View Villas',
      category: 'Ongoing Projects',
      location: 'Kenya',
      year: '',
      description: 'Luxury Apartments - New Lake View Villas electrical installations.',
      image: '🏢',
    },
    {
      title: 'Hotel Woodburn',
      category: 'Ongoing Projects',
      location: 'Nakuru, Kenya',
      year: '',
      description: 'Complete electrical installations for Hotel Woodburn in Nakuru.',
      image: '🏨',
    },
    {
      title: 'Victoria Eco Lodge',
      category: 'Ongoing Projects',
      location: 'Kisumu, Kenya',
      year: '',
      description: 'Electrical installations for Victoria Eco Lodge resort in Kisumu.',
      image: '🏨',
    },
    {
      title: 'Java Coffee House - Galleria',
      category: 'Ongoing Projects',
      location: 'Nairobi, Kenya',
      year: '',
      description: 'Electrical installations for Java Coffee House at Galleria Shopping Mall.',
      image: '☕',
    },
    {
      title: 'Java Coffee House - JKIA',
      category: 'Ongoing Projects',
      location: 'Nairobi, Kenya',
      year: '',
      description: 'Electrical installations for Java Coffee House at Jomo Kenyatta International Airport.',
      image: '✈️',
    },
    {
      title: 'Commercial Bank of Africa',
      category: 'Ongoing Projects',
      location: 'Nairobi, Kenya',
      year: '',
      description: 'Electrical installations for Commercial Bank of Africa branch.',
      image: '🏦',
    },
    {
      title: 'Consolidated Bank',
      category: 'Ongoing Projects',
      location: 'Nakuru, Kenya',
      year: '',
      description: 'Electrical installations for Consolidated Bank branch in Nakuru.',
      image: '🏦',
    },
    {
      title: 'Chase Bank',
      category: 'Ongoing Projects',
      location: 'Eldoret, Kenya',
      year: '',
      description: 'Electrical installations for Chase Bank branch in Eldoret.',
      image: '🏦',
    },
  ];

  const allProjects = [...completedProjects, ...ongoingProjects];

  const filteredProjects =
    activeCategory === 'All Projects'
      ? allProjects
      : activeCategory === 'Completed Projects'
      ? completedProjects
      : ongoingProjects;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Filter */}
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              location={project.location}
              year={project.year}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Showing <span className="font-bold text-primary">{filteredProjects.length}</span> projects
            {activeCategory !== 'All Projects' && (
              <span> in <span className="font-bold">{activeCategory}</span></span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}