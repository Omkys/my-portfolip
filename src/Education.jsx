import React from 'react';

const Education = () => {
  return (
    <section className="mt-12 w-full max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">🎓 Education</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Bachelor of Technology in Electronics and Computer Engineering</h3>
          <p className="text-gray-600">MIT College, Maharashtra</p>
          <p className="text-gray-600">August 2021 - Present (Expected Graduation: 2026)</p>
          <p className="text-gray-600">CGPA: 6.79</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">Higher Secondary School (12th Grade)</h3>
          <p className="text-gray-600">RJ International College, Maharashtra</p>
          <p className="text-gray-600">Graduation Year: 2021</p>
          <p className="text-gray-600">Percentage: 75%</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800">Secondary School (10th Grade)</h3>
          <p className="text-gray-600">Brilliant Kids School, Maharashtra</p>
          <p className="text-gray-600">Graduation Year: 2019</p>
          <p className="text-gray-600">Percentage: 70%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
