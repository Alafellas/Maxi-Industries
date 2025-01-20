// import React from "react";

// const Services = () => (
//   <section id="services" className="bg-gray-100 py-16">
//     <div className="container mx-auto px-4">
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
//         Our Services
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Service 1 */}
//         <div className="service-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//           <div className="text-center mb-6">
//             <i className="fas fa-building text-5xl text-yellow-500 mb-4"></i>
//           </div>
//           <h3 className="text-2xl font-bold text-gray-800 mb-4">Construction</h3>
//           <p className="text-gray-600">
//             We provide top-notch construction services for both residential and commercial projects, delivering high-quality results.
//           </p>
//         </div>
//         {/* Service 2 */}
//         <div className="service-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//           <div className="text-center mb-6">
//             <i className="fas fa-tools text-5xl text-yellow-500 mb-4"></i>
//           </div>
//           <h3 className="text-2xl font-bold text-gray-800 mb-4">Renovation</h3>
//           <p className="text-gray-600">
//             Transform your space with our expert renovation services. We specialize in remodeling and refurbishing all types of buildings.
//           </p>
//         </div>
//         {/* Service 3 */}
//         <div className="service-card bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//           <div className="text-center mb-6">
//             <i className="fas fa-paint-roller text-5xl text-yellow-500 mb-4"></i>
//           </div>
//           <h3 className="text-2xl font-bold text-gray-800 mb-4">Interior Design</h3>
//           <p className="text-gray-600">
//             Our interior design team creates beautiful, functional spaces with personalized solutions that fit your style and needs.
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default Services;

import React from "react";

const Services = () => (
  <section id="services" className="bg-gray-100 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://preview.colorlib.com/theme/constructioncompany/assets/img/service/servicess1.png"
            alt="Engineering Techniques"
            className="rounded-t-lg w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Engineering Techniques & Implementation
            </h3>
            <p className="text-gray-600 mb-4">
              Providing expert engineering solutions to implement designs with
              precision and efficiency.
            </p>
            <a href="#"
              className="text-blue-600 font-bold flex items-center hover:underline"
            >
              Read More <span className="ml-2 text-xl">+</span>
            </a>
          </div>
        </div>
        {/* Service 2 */}
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://preview.colorlib.com/theme/constructioncompany/assets/img/service/servicess2.png"
            alt="Renovation"
            className="rounded-t-lg w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Renovation Services
            </h3>
            <p className="text-gray-600 mb-4">
              Revitalize your spaces with our professional renovation and
              remodeling services.
            </p>
            <a href="#" className="text-blue-600 font-bold flex items-center hover:underline">
              Read More <span className="ml-2 text-xl">+</span>
            </a>
          </div>
        </div>
        {/* Service 3 */}
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://preview.colorlib.com/theme/constructioncompany/assets/img/service/servicess5.png"
            alt="Construction"
            className="rounded-t-lg w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Construction Projects
            </h3>
            <p className="text-gray-600 mb-4">
              Delivering high-quality construction services for residential and
              commercial projects.
            </p>
            <a href="#" className="text-blue-600 font-bold flex items-center hover:underline">
              Read More <span className="ml-2 text-xl">+</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
