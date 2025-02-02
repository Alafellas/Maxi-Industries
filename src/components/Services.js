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
// 
import React from "react";
import "../index.css";

const Services = () => (
  <section id="services" className="bg-gray-100 py-16">
    <div id="card"className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
  <div className="overflow-hidden rounded-t-lg">
    <img
      src="https://www.advancionsciences.com/wp-content/uploads/2021/03/Stewardship-1024x1024-compressed.jpg"
      alt="Service Image"
      className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-800 mb-2">
      Engineering Techniques & Implementation
    </h3>
    <p className="text-gray-600 mb-4">
      Providing expert engineering solutions to implement designs with precision and efficiency.
    </p>
    <a
      href="#"
      className="text-blue-600 font-bold flex items-center hover:underline"
    >
      Read More <span className="ml-2 text-xl">+</span>
    </a>
  </div>
</div>
{/*Service 2 */}
<div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
  <div className="overflow-hidden rounded-t-lg">
    <img
      src="https://www.advancionsciences.com/wp-content/uploads/2021/03/Stewardship-1024x1024-compressed.jpg"
      alt="Service Image"
      className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-800 mb-2">
      Engineering Techniques & Implementation
    </h3>
    <p className="text-gray-600 mb-4">
      Providing expert engineering solutions to implement designs with precision and efficiency.
    </p>
    <a
      href="#"
      className="text-blue-600 font-bold flex items-center hover:underline"
    >
      Read More <span className="ml-2 text-xl">+</span>
    </a>
  </div>
</div>
{/*service 3 */}
<div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
  <div className="overflow-hidden rounded-t-lg">
    <img
      src="https://www.advancionsciences.com/wp-content/uploads/2021/03/Stewardship-1024x1024-compressed.jpg"
      alt="Service Image"
      className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-800 mb-2">
      Engineering Techniques & Implementation
    </h3>
    <p className="text-gray-600 mb-4">
      Providing expert engineering solutions to implement designs with precision and efficiency.
    </p>
    <a
      href="#"
      className="text-blue-600 font-bold flex items-center hover:underline"
    >
      Read More <span className="ml-2 text-xl">+</span>
    </a>
  </div>
</div>
{/* service 4*/}
<div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
  <div className="overflow-hidden rounded-t-lg">
    <img
      src="https://www.advancionsciences.com/wp-content/uploads/2021/03/Stewardship-1024x1024-compressed.jpg"
      alt="Service Image"
      className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-800 mb-2">
      Engineering Techniques & Implementation
    </h3>
    <p className="text-gray-600 mb-4">
      Providing expert engineering solutions to implement designs with precision and efficiency.
    </p>
    <a
      href="#"
      className="text-blue-600 font-bold flex items-center hover:underline"
    >
      Read More <span className="ml-2 text-xl">+</span>
    </a>
  </div>
</div>
{/* service 5*/}
<div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
  <div className="overflow-hidden rounded-t-lg">
    <img
      src="https://www.advancionsciences.com/wp-content/uploads/2021/03/Stewardship-1024x1024-compressed.jpg"
      alt="Service Image"
      className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300"
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-800 mb-2">
      Engineering Techniques & Implementation
    </h3>
    <p className="text-gray-600 mb-4">
      Providing expert engineering solutions to implement designs with precision and efficiency.
    </p>
    <a
      href="#"
      className="text-blue-600 font-bold flex items-center hover:underline"
    >
      Read More <span className="ml-2 text-xl">+</span>
    </a>
  </div>
</div>

        {/* Additional Cards */}
        
      </div>
    </div>
  </section>
);

export default Services;
