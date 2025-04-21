import React from 'react'
import banner2 from "../../assets/burger/banner2.png"
import eng2 from "../../assets/burger/engineering2.png"
import sports1 from "../../assets/burger/sports1.png"
import commerce1 from "../../assets/burger/commerce1.png"
import bio1 from "../../assets/burger/bio1.png"
import defence1 from "../../assets/burger/defence1.png"
import software from "../../assets/software developer.png";
import environmental from "../../assets/Environmental Scientist.png";
import ias from "../../assets/IAS.png";
import CA from "../../assets/CA.jpg";
function Content() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
        <div className="absolute inset-0">
          <img className="object-cover w-full h-full md:object-left md:scale-100 md:origin-top-left" src={banner2} alt="" />
        </div>

        <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

        <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Explore Your Career Options</h2>
            <p className="mt-4 text-base text-gray-200 text-justify">Choosing a career can be challenging with so many fields to consider. Our platform provides comprehensive data analysis and predictions to help you make an informed decision. Discover insights and trends to guide your career path and find the perfect fit for you.</p>

            <div className="mt-8 lg:mt-12">
              <a href="/model" className="inline-flex items-center justify-center w-auto px-4 py-4 font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:bg-blue-700">
                See More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          {/* <!-- Reverse order on larger screens with flex-row-reverse --> */}
          <div className="flex flex-col md:flex-row-reverse items-center">
            {/* <!-- Image Section --> */}
            <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col">
              <img
                src={eng2}
                alt="Engineering Projects"
                className="shadow-lg w-[520px] h-[320px] mx-auto"
              />
            </div>
            {/* <!-- Content Section --> */}
            <div className="md:w-1/2 md:pr-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Explore Engineering Careers
              </h2>
              <p className="text-gray-600 text-lg mb-6 text-justify">
                Engineering is a diverse and dynamic field with opportunities in various disciplines such as mechanical, civil, electrical, and software engineering. Discover how you can leverage your skills and passions to pursue a rewarding career in engineering. Our platform offers insights into different engineering fields, job trends, and career development resources.
              </p>
              <a
                href="#"
                className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Explore Different Career Paths</h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600 text-justify">Discover various career options, understand the skills required to excel in each field, and learn about their future prospects to make an informed decision about your career path.</p>
          </div>

          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 1 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Software Engineering</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Master programming languages like Python, Java, or C++. Learn about algorithms, data structures, and software development methodologies. Gain hands-on experience with coding projects, internships, and collaborative coding. Software engineering offers a vast range of opportunities with continuous growth in technology.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> GATE (Graduate Aptitude Test in Engineering), university-specific entrance exams for relevant programs.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 2 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Data Science</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Develop skills in statistical analysis, data visualization, and machine learning. Learn to use tools like Python, R, SQL, and data visualization software. Work on real-world datasets to build a strong portfolio. Data science is in high demand with opportunities in various industries and a promising future.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> GATE, data science certifications (e.g., from Google, Microsoft), and data analytics entrance exams for higher studies.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 3 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Network Engineering</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Learn about network design, security, and protocols. Acquire certifications like CCNA or CompTIA Network+ to validate your skills. Gain practical experience through network setup and troubleshooting. Network engineering has a strong future with increasing demand for network infrastructure and security.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> CCNA (Cisco Certified Network Associate), CompTIA Network+ certification exams.
                </p>
              </div>


              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 4 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Mechanical Engineering</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Study mechanics, thermodynamics, and material science. Learn to use design software and engage in hands-on projects. Internships and real-world experience are crucial. Mechanical engineering is essential for innovation in manufacturing and technology, with a robust future in various industries.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> GATE, specific mechanical engineering entrance exams for master's and certification programs.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 5 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Civil Engineering</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Focus on structural design, construction management, and infrastructure planning. Obtain practical experience through internships and fieldwork. Civil engineering has a promising future due to ongoing infrastructure projects and urban development worldwide.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> GATE, government sector exams (like UPSC Engineering Services), and master's program entrance exams.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 6 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Electrical Engineering</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Learn about circuit design, electronics, and electromagnetism. Gain experience with laboratory work and practical projects. Electrical engineering is vital for advancements in energy systems and electronics, with strong future growth in automation and smart technologies.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> GATE, certifications in electrical and power systems, and exams for higher studies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={software}
          alt="roadmap"
          className="w-[600px] h-[450px] shadow-lg mx-auto mt-12"
        />
      </section>

      {/* Biology */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={bio1}
                alt="Biology Careers"
                className="w-[600px] h-[400px] shadow-lg mx-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Explore Biology Careers
              </h2>
              <p className="text-gray-600 text-lg mb-6 text-justify">
                Biology offers a wide range of fascinating career paths, from healthcare to environmental conservation, research, and biotechnology. Discover how you can make a difference by exploring your passion for life sciences. Our platform provides insights into career options, educational pathways, and advancements in the field of biology.
              </p>
              <a
                href="#"
                className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-green-600"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Explore Different Biology Career Paths</h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600 text-justify">Discover various career opportunities in the biology field, including healthcare, research, and environmental sciences. Learn about essential qualifications, future prospects, and the exams required to advance in these areas.</p>
          </div>

          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 1 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Medicine</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Pursue a career in medicine by studying human biology, anatomy, and diseases. Hands-on training through internships and residencies is essential. Doctors and healthcare professionals have a crucial role in improving public health and providing patient care.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> NEET (National Eligibility cum Entrance Test), MCAT (Medical College Admission Test), USMLE (United States Medical Licensing Examination).
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 2 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Biotechnology</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Explore the application of biology in technology, agriculture, and pharmaceuticals. Biotechnologists work on developing new medicines, improving crops, and creating sustainable bio-solutions. The future of biotech is promising with rapid advancements in genetic engineering and bioinformatics.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> GATE (Biotechnology), JNU Combined Entrance Exam for Biotechnology, GRE (Graduate Record Examination) for advanced studies abroad.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 3 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Pharmacy</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Pharmacists specialize in the development, preparation, and dispensing of medications. You’ll learn about pharmaceutical chemistry, drug development, and healthcare systems. This career has strong prospects in both clinical and industrial settings.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> GPAT (Graduate Pharmacy Aptitude Test), PCAT (Pharmacy College Admission Test), NAPLEX (North American Pharmacist Licensure Examination).
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 4 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Environmental Science</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Environmental scientists study the impact of human activities on nature and develop solutions to environmental challenges. Careers in this field involve conservation, climate science, and policy advising, making it vital for sustainable development.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> UGC NET (Environmental Science), GRE (for global research opportunities), GATE (Ecology and Evolution).
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 5 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Research Scientist</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Research scientists work at the cutting edge of biology, exploring new discoveries in genetics, cell biology, and bioinformatics. Their work is critical in advancing scientific knowledge and medical innovations. Research offers exciting prospects in both academic and industrial settings.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> CSIR NET (Council of Scientific & Industrial Research), GATE (Life Sciences), GRE (for international research opportunities).
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 6 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Zoology</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Zoologists study animal behavior, physiology, and ecology, playing an essential role in wildlife conservation and biodiversity management. Zoology offers careers in research, conservation, and academic teaching.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> UGC NET (Zoology), GATE (Life Sciences), GRE (for global research opportunities).
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={environmental}
          alt="roadmap"
          className="w-[600px] h-[450px] shadow-lg mx-auto mt-5"
        />
      </section>

      {/* Sports */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          {/* <!-- Reverse order on larger screens with flex-row-reverse --> */}
          <div className="flex flex-col md:flex-row-reverse items-center">
            {/* <!-- Image Section --> */}
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={sports1}
                alt="Sports Careers"
                className="shadow-lg mx-auto w-[550px] h-[400px]"
              />
            </div>
            {/* <!-- Content Section --> */}
            <div className="md:w-1/2 md:pr-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Explore Careers in Sports
              </h2>
              <p className="text-gray-600 text-lg mb-6 text-justify">
                A career in sports can be both thrilling and rewarding. From becoming a professional athlete in popular sports to pursuing roles in coaching, management, and beyond, explore the various career paths available in the sports industry. Understand the skills, training, and qualifications needed to excel in these exciting fields.
              </p>
              <a
                href="#"
                className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Explore Various Sports Careers
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600 text-justify">
              Discover the specific sports careers that are currently trending, understand the necessary skills, and learn about the future prospects in each field to make an informed decision about your career path.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 1 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Professional Basketball Player</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Develop exceptional skills in basketball through rigorous training and participation in local and national leagues. Focus on physical conditioning, strategy, and teamwork. Success can lead to opportunities in the NBA or international leagues. Future roles include coaching, sports management, or media presence.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> Participate in NBA draft combines, scouting camps, and college basketball competitions.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 2 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Professional Cricketer</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Focus on developing skills in batting, bowling, and fielding. Gain experience through domestic leagues and international tours. Essential to stay updated with strategies and techniques. Career advancement could include coaching roles, commentary, or administrative positions in cricket boards like the BCCI.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> Selection through national and international cricket tournaments, domestic leagues, and fitness tests.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 3 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Professional Badminton Player</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Train intensively in technical skills, agility, and strategy. Compete in national and international tournaments to build a ranking. Continuous improvement and physical fitness are crucial. Opportunities for coaching, sports administration, or roles in sports development programs exist.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> Participation in national and international tournaments, ranking events, and qualification rounds for major championships like the Olympics.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 4 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Professional Tennis Player</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Achieve success by mastering technical skills, physical fitness, and mental toughness. Participate in ATP/WTA tours and Grand Slam tournaments. The sport offers potential career advancement into coaching, commentary, or sports management.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> Qualification through ATP/WTA tours, Grand Slam qualifiers, and ATP/WTA rankings.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 5 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Professional Soccer Player</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Develop skills in technique, strategy, and team dynamics. Gain experience through youth academies, local leagues, and professional teams. Successful players may transition into coaching, sports analysis, or managerial roles in football clubs.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> Scouting and trials, youth academies, and professional league participation.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 6 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Formula 1 Driver</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Begin with karting to build driving skills and gain experience. Progress through junior racing categories like Formula 3 and Formula 2. Gain sponsorship and join a Formula 1 team as a test or reserve driver before securing a race seat. Formula 1 offers high-profile career prospects, including roles in team management or commentary.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> Success in karting and junior formula categories, obtaining a racing license, and securing a seat with a Formula 1 team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commerce */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={commerce1}
                alt="Commerce Careers"
                className="shadow-lg mx-auto w-[550px] h-[400px]"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Explore Commerce Careers
              </h2>
              <p className="text-gray-600 text-lg mb-6 text-justify">
                Commerce offers a range of exciting career paths such as accounting, finance, marketing, and entrepreneurship. Each path requires a combination of specialized knowledge, practical skills, and strategic thinking. Discover how you can harness your interests and strengths to excel in these dynamic fields. Our platform provides valuable insights into career options, educational requirements, and industry trends in commerce.
              </p>
              <a
                href="#"
                className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Explore Different Commerce Career Paths</h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600 text-justify">Uncover various career opportunities in the commerce field, learn about essential skills and qualifications, and understand the future prospects for each career to guide your decision-making process.</p>
          </div>

          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 1 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Accounting</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Develop expertise in financial reporting, auditing, and tax preparation. Learn accounting principles, standards, and software tools. Practical experience through internships and certification programs (like CPA) is essential. Accounting careers offer stability and a strong future in various sectors including corporate and public accounting.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> CPA (Certified Public Accountant) exam, CMA (Certified Management Accountant) exam, and ACCA (Association of Chartered Certified Accountants) exams.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 2 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Finance</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Master financial analysis, investment strategies, and risk management. Learn about financial markets, instruments, and corporate finance. Building a strong network and obtaining relevant certifications (such as CFA) can boost career prospects. Finance offers diverse opportunities with strong growth potential in various sectors.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> CFA (Chartered Financial Analyst) exam, CFP (Certified Financial Planner) exam, and CPA (Certified Public Accountant) exam.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 3 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Marketing</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Acquire skills in market research, digital marketing, and brand management. Learn to use marketing tools and analytics to drive business growth. Practical experience through internships and projects can be very beneficial. Marketing careers are dynamic and have a promising future with the rise of digital platforms.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> CIM (Chartered Institute of Marketing) certifications, Google Analytics certification, and HubSpot Content Marketing certification.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700 "> 4 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Entrepreneurship</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Learn about business planning, management, and innovation. Develop skills in leadership, finance, and marketing. Practical experience through starting a business or internships can be invaluable. Entrepreneurship offers the freedom to create and grow your own ventures with substantial growth potential.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> No specific exams required; however, relevant business courses or programs, like an MBA (Master of Business Administration), can be beneficial.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 5 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Management</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Focus on leadership, strategic planning, and organizational behavior. Gain experience in project management and team coordination. Advanced degrees or certifications (like MBA) can enhance career prospects. Management careers are crucial in driving organizational success across various industries.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> MBA (Master of Business Administration) entrance exams (like GMAT or GRE), PMP (Project Management Professional) certification.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 6 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Human Resources</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Develop skills in recruitment, employee relations, and organizational development. Learn about labor laws, compensation, and performance management. Certifications and hands-on experience through internships can be beneficial. Human Resources plays a key role in shaping organizational culture and ensuring effective talent management.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> SHRM (Society for Human Resource Management) certification, HRCI (Human Resource Certification Institute) certification.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={CA}
          alt="roadmap"
          className="w-[600px] h-[450px] shadow-lg mx-auto mt-5"
        />
      </section>

      {/* Civil Services and defence */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src={defence1}
                alt="Civil Services/Defense Careers"
                className="shadow-lg w-[500px] h-[400px] mx-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Explore Civil Services & Defense Careers
              </h2>
              <p className="text-gray-600 text-lg mb-6 text-justify">
                A career in civil services or defense offers the opportunity to serve the nation while pursuing a path of personal and professional growth. From administrative roles to leadership positions in the armed forces, discover how you can contribute to the country’s governance and security. Learn about the career options, educational pathways, and the physical and mental preparation required for these prestigious roles.
              </p>
              <a
                href="#"
                className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Explore Different Civil Services/Defense Career Paths</h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600 text-justify">Uncover various career opportunities in civil services and defense, learn about the qualifications, exams, and fitness levels required, and understand the future prospects to guide your decision-making process.</p>
          </div>

          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 1 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Civil Services (IAS/IPS)</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  A career in Indian Administrative Services (IAS) or Indian Police Services (IPS) offers leadership roles in governance and law enforcement. Candidates must prepare for the UPSC exam, and focus on policy-making, management, and maintaining law and order. These roles are prestigious with opportunities for making a significant impact on society.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> UPSC Civil Services Examination (CSE)
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 2 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Indian Armed Forces (Army/Navy/Air Force)</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  Serving in the Indian Armed Forces involves a commitment to national defense. It requires physical fitness, leadership, and technical expertise. Candidates can join through NDA or CDS exams and may advance to high-ranking positions with experience and further training.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> NDA (National Defence Academy), CDS (Combined Defence Services)
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 3 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Indian Foreign Services (IFS)</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  As an IFS officer, you'll represent India on the global stage, handling diplomatic relations and international negotiations. Strong analytical, communication, and diplomatic skills are crucial. Like IAS/IPS, the UPSC exam is required, and this role provides opportunities for travel and engaging with global leaders.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> UPSC Civil Services Examination (CSE)
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 4 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Indian Coast Guard</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  The Indian Coast Guard offers roles in maritime law enforcement, search and rescue, and environmental protection. Candidates must clear the ICG exam and possess excellent physical fitness and problem-solving abilities. It provides rewarding careers ensuring the nation's maritime security.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> Indian Coast Guard Recruitment Examination
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 5 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Para-Military Forces (BSF/CRPF)</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  A career in the paramilitary forces such as the BSF (Border Security Force) or CRPF (Central Reserve Police Force) involves safeguarding the nation's borders and maintaining internal security. Candidates must clear the CAPF exam, and these roles offer challenging but fulfilling opportunities.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> CAPF (Central Armed Police Forces) Examination
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700"> 6 </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Indian Revenue Service (IRS)</h3>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  The Indian Revenue Service focuses on managing the country’s taxation system and ensuring financial compliance. IRS officers work on tax policy, audits, and investigations, contributing to the nation's financial stability. The UPSC CSE exam is required for entry into this prestigious field.
                </p>
                <p className="mt-4 text-base text-gray-600 text-justify">
                  <strong>Exams/Tests:</strong> UPSC Civil Services Examination (CSE)
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={ias}
          alt="roadmap"
          className="w-[600px] h-[450px] shadow-lg mx-auto mt-5"
        />
      </section>

      {/* Contact Us */}
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">Contact us</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
              Looking for personalized guidance to help you choose the perfect career path? Our experts at Aspire Foundations are here to offer one-on-one consultations to help you explore your interests, assess your skills, and discover the best career options tailored just for you. Reach out to us to schedule a session and take the first step towards a fulfilling career.
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
            <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
              <div className="overflow-hidden bg-white rounded-xl">
                <div className="p-6">
                  <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="mt-6 text-lg font-medium text-gray-900">+91-98765-43210</p>
                  <p className="mt-1 text-lg font-medium text-gray-900">+91-98765-43211</p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded-xl">
                <div className="p-6">
                  <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="mt-6 text-lg font-medium text-gray-900">contact@aspirefoundations.com</p>
                  <p className="mt-1 text-lg font-medium text-gray-900">hr@aspirefoundations.com</p>
                </div>
              </div>

              <div className="overflow-hidden bg-white rounded-xl">
                <div className="p-6">
                  <svg className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900">Sarkhej Road, Near Prahlad Nagar Garden, Sector 17, Vastrapur, Ahmedabad - 380015, Gujarat, India</p>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden bg-white rounded-xl">
              <div className="px-6 py-12 sm:p-12">
                <h3 className="text-3xl font-semibold text-center text-gray-900">Send us a message</h3>

                <form action="#" method="POST" className="mt-14">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <label className="text-base font-medium text-gray-900"> Your name </label>
                      <div className="mt-2.5 relative">
                        <input type="text" name="" id="" placeholder="Enter your full name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium text-gray-900"> Email address </label>
                      <div className="mt-2.5 relative">
                        <input type="email" name="" id="" placeholder="Enter your email address" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium text-gray-900"> Phone number </label>
                      <div className="mt-2.5 relative">
                        <input type="tel" name="" id="" placeholder="Enter your phone number" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium text-gray-900"> Company name </label>
                      <div className="mt-2.5 relative">
                        <input type="text" name="" id="" placeholder="Enter your company name" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="text-base font-medium text-gray-900"> Message </label>
                      <div className="mt-2.5 relative">
                        <textarea name="" id="" placeholder="" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600" rows="4"></textarea>
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Content