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
        <div
          className="service-card bg-cover bg-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{
            backgroundImage: "url('https://preview.colorlib.com/theme/constructioncompany/assets/img/service/servicess1.png')",
          }}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-4">Construction</h3>
          </div>
          <p className="text-white">
            We provide top-notch construction services for both residential and commercial projects, delivering high-quality results.
          </p>
        </div>
        {/* Service 2 */}
        <div
          className="service-card bg-cover bg-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{
            backgroundImage: "url('https://preview.colorlib.com/theme/constructioncompany/assets/img/service/servicess2.png')",
          }}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-4">Renovation</h3>
          </div>
          <p className="text-white">
            Transform your space with our expert renovation services. We specialize in remodeling and refurbishing all types of buildings.
          </p>
        </div>
        {/* Service 3 */}
        <div
          className="service-card bg-cover bg-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{
            backgroundImage: "url('https://preview.colorlib.com/theme/constructioncompany/assets/img/service/servicess6.png')",
          }}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-4">Interior Design</h3>
          </div>
          <p className="text-white">
            Our interior design team creates beautiful, functional spaces with personalized solutions that fit your style and needs.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;

