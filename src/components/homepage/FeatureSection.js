import React from 'react';
import { FiCheckCircle, FiCalendar, FiList } from 'react-icons/fi'; // Import Feather icons

const Feature = ({ icon, title, description }) => (
  <div className="flex flex-col items-center p-6 space-y-4">
    {icon}
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeatureSection = () => {
  return (
    <section className="bg-blue-500 py-16"> {/* Apply blue background color */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10 text-black"> 
          Features of Our Task Manager
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            icon={<FiCheckCircle className="text-4xl text-blue-200" />} 
           
            title="Task Tracking"
            description="Efficiently track your tasks and stay organized."
          />
          <Feature
            icon={<FiCalendar className="text-4xl text-blue-200" />} 
            title="Deadline Management"
            description="Set and manage deadlines to meet your goals."
          />
          <Feature
            icon={<FiList className="text-4xl text-blue-200" />}
            title="List View"
            description="View tasks in a convenient list format."
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
