import React from "react";

function StudyResources() {
  return (
    <div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">
            Top Study Resources
          </h2>
          <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            {/* Card 1 */}
            <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
              <div className="flex items-center mb-6">
                <img
                  src="https://pagedone.io/asset/uploads/1696244553.png"
                  alt="Resource image"
                  className="rounded-lg w-full object-cover"
                />
              </div>
              <div className="block">
                <h4 className="text-gray-900 font-medium leading-8 mb-9">
                  Introduction to Data Structures and Algorithms
                </h4>
                <div className="flex items-center justify-between font-medium">
                  <h6 className="text-sm text-gray-500">By Harsh C.</h6>
                  <span className="text-sm text-indigo-600">2 years ago</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
              <div className="flex items-center mb-6">
                <img
                  src="https://pagedone.io/asset/uploads/1696244579.png"
                  alt="Resource image"
                  className="rounded-lg w-full object-cover"
                />
              </div>
              <div className="block">
                <h4 className="text-gray-900 font-medium leading-8 mb-9">
                  Mastering Operating Systems: Concepts and Implementation
                </h4>
                <div className="flex items-center justify-between font-medium">
                  <h6 className="text-sm text-gray-500">By John D.</h6>
                  <span className="text-sm text-indigo-600">2 years ago</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
              <div className="flex items-center mb-6">
                <img
                  src="https://pagedone.io/asset/uploads/1696244619.png"
                  alt="Resource image"
                  className="rounded-lg w-full object-cover"
                />
              </div>
              <div className="block">
                <h4 className="text-gray-900 font-medium leading-8 mb-9">
                  Understanding DBMS: Relational Models and SQL
                </h4>
                <div className="flex items-center justify-between font-medium">
                  <h6 className="text-sm text-gray-500">By Alexa H.</h6>
                  <span className="text-sm text-indigo-600">2 years ago</span>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#"
            className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100"
          >
            View All Resources
          </a>
        </div>
      </section>
    </div>
  );
}

export default StudyResources;
