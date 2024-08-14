import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About Me!</h1>
        {/* <p className="text-justify">
          Hi I am Ashwini Kumar Tiwari. I am currently pursuing my MCA from
          Vellore Institute of Technology,Bhopal and I have done my Bachelors of
          computer Applications and Schooling from my Hometown East Champaran
          Bihar.I have a deep interest in development. My skills includes
          front-end technologies such as HTML, CSS, JavaScript and ReactJs. I
          have made real world projects in these. I am always eager to learn new
          techniques and currently learning fullstack development.
        </p> */}

        <h1 className="text-green-600 font-semibold text-xl">Education</h1>

        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Degree
                </th>
                <th scope="col" class="px-6 py-3">
                  Tenure
                </th>
                <th scope="col" class="px-6 py-3">
                  Educational Institution
                </th>
                <th scope="col" class="px-6 py-3">
                  CGPA / Percentage
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  MCA
                </th>
                <td class="px-6 py-4"> Aug 2022-Ongoing</td>
                <td class="px-6 py-4">VIT Bhopal</td>
                <td class="px-6 py-4">8.18 / 10</td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  BCA
                </th>
                <td class="px-6 py-4">2020</td>
                <td class="px-6 py-4">M S College Motihari</td>
                <td class="px-6 py-4">81.12 / 100</td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Class XII
                </th>
                <td class="px-6 py-4">2016</td>
                <td class="px-6 py-4">Gopal Sah School Motihari</td>
                <td class="px-6 py-4">63 / 100</td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Class X
                </th>
                <td class="px-6 py-4">2014</td>
                <td class="px-6 py-4">SJS Motihari</td>
                <td class="px-6 py-4">9.2 / 10</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Technical Skills
        </h1>
        <span>
          <ul class="max-w-md space-y-1 list-disc list-inside dark:text-black">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJs</li>
          </ul>
        </span>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Achievements</h1>
        <ul class="max-w-md space-y-1 list-disc list-inside dark:text-black">
          <li> Completed 100 Days Coding Challenge by VIT.</li>
          <li>Ranked as the top student in the class during BCA.</li>
        </ul>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative solutions that exceed client expectations and contribute
          positively to the digital landscape. I am committed to continuous
          learning and growth, always seeking new challenges and opportunities
          to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
