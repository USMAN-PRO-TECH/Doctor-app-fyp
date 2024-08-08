const About = () => {
  return (
    <>
      <main className="font-serif bg-white text-gray-800">
        <div className="flex justify-center items-center">
          <img
            className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] 2xl:w-[99%] max-h-[400px] md:max-h-[600px] object-cover"
            src={"/image/image 12.jpg"}
            alt="travel"
          />
        </div>
        <div
          className="flex flex-col gap-4 md:gap-6 xl:gap-8 2xl:gap-12 px-5 w-[90%] md:w-[80%] lg:w-[70%] 2xl:w-[60%] mx-auto rounded-lg shadow-xl 
                     relative bottom-16 md:bottom-24 lg:bottom-28 2xl:bottom-32 border-4 md:border-8 border-teal-800 bg-orange-200"
        >
          <p className="text-center mt-4 md:mt-6 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-semibold text-gray-800">
            <span className="text-gray-800">Health</span>
            <span className="text-teal-800"> Hub</span>
          </p>
          <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl font-normal text-[#605D64] hover:font-bold">
            Health Hub Hospital offers exceptional patient care and outcomes
            through cutting-edge technology and a team of skilled and
            compassionate professionals. Our warm and welcoming environment
            provides a wide range of specialized services and treatments,
            prioritizing comfort, healing, and wellness.
          </p>
        </div>

        {/* About us */}
        <div className="p-6">
          <div className="py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 border-4 md:border-8 border-teal-700 bg-orange-200">
            <div className="flex justify-center space-x-2 font-bold py-3 cursor-pointer hover:underline">
              <span className="animate-bounce">
                <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-gray-800">
                  About
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-teal-800">
                  Our Hospital
                </p>
              </span>
            </div>
            <div className="flex flex-col md:flex-row justify-center xl:py-8 2xl:py-16 gap-8 md:gap-12 lg:gap-16">
              <div className="flex-1">
                <p className="py-3 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl text-[#605D64] hover:font-bold">
                  At Healthcare, we are dedicated to providing exceptional
                  patient care and improving the health and wellbeing of our
                  communities. Our team of compassionate and innovative
                  healthcare professionals is committed to delivering
                  personalized and accessible care, combining cutting-edge
                  technology with a human touch.
                </p>
                <p className="py-3 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl text-[#605D64] hover:font-bold">
                  With a legacy of excellence and a passion for making a
                  positive impact, we strive to create a supportive and
                  inclusive environment that fosters trust, understanding, and
                  hope. Our commitment to empathy, kindness, and respect ensures
                  that every patient feels valued and cared for, and our team of
                  experts works together to ensure that every individual
                  receives the care they deserve.
                </p>
                <p className="py-3 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl text-[#605D64] hover:font-bold">
                  Through our unwavering dedication to our patients and
                  communities, we aim to shape the future of healthcare and
                  create a healthier, happier world for generations to come. We
                  believe in empowering individuals to take control of their
                  health and wellbeing, and we are dedicated to providing the
                  necessary support and resources to help them thrive. With a
                  focus on innovation, compassion, and excellence, we are proud
                  to be a leader in healthcare, and we look forward to
                  continuing to serve our communities with care, kindness, and
                  expertise.
                </p>
              </div>
              <div className="flex-1 mt-6 md:mt-0">
                <img
                  className="w-full h-auto rounded-lg object-cover"
                  src={"/image/image 7.avif"}
                  alt="hospital"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Online Interaction */}
        <div className="p-6">
          <div className="py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 flex flex-col md:flex-row justify-center gap-8 md:gap-12 lg:gap-16 border-4 md:border-8 border-teal-700 bg-orange-200">
            <div className="flex-1">
              <span className="flex space-x-2 font-bold py-3 cursor-pointer hover:underline animate-ping">
                <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-gray-800">
                  Online
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-teal-800">
                  Interaction
                </p>
              </span>
              <p className="py-3 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl text-[#605D64] hover:font-bold">
                At Healthcare, we understand the importance of compassionate
                care beyond our hospital walls. That's why we're dedicated to
                providing exceptional online support to our patients. Through
                our secure online portal, patients can easily access their
                medical records, schedule appointments, and communicate with
                our care team. Our responsive and empathetic staff are always
                available to address concerns, answer questions, and offer
                guidance every step of the way. We believe that care knows no
                boundaries, and we're committed to making healthcare accessible
                and patient-centric, wherever you are.
              </p>
              <p className="py-3 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl text-[#605D64] hover:font-bold">
                Through our mission, we aim to empower individuals to take
                control of their health and wellbeing, and to provide the
                necessary support and resources to help them thrive. We believe
                that everyone deserves access to exceptional healthcare, and we
                are dedicated to breaking down barriers and pushing boundaries
                to make that a reality. By combining expertise, compassion, and
                innovation, we are shaping the future of healthcare and creating
                a healthier, happier world for generations to come.
              </p>
            </div>
            <div className="flex-1 mt-6 md:mt-0 flex gap-4 md:gap-6 lg:gap-8">
              <img
                className="w-1/2 h-auto object-cover rounded-lg"
                src={"/image/image 1.png"}
                alt="interaction"
              />
              <img
                className="w-1/2 h-auto object-cover rounded-lg"
                src={"/image/Image 2.png"}
                alt="interaction 2"
              />
            </div>
          </div>
        </div>

        {/* Key Feature */}
        <div className="p-6">
          <div className="flex flex-col gap-4 md:gap-6 xl:gap-8 2xl:gap-14 py-6 md:py-10 lg:py-16 xl:py-20 2xl:py-24 border-4 md:border-8 border-teal-700 bg-orange-200">
            <p className="text-center text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold cursor-pointer hover:underline">
              <span className="text-gray-800">Features</span>
              <span className="text-teal-800"> Key Points</span>
            </p>
            <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#605D64] hover:font-bold">
              Key Features of ApexCyberServices Virtual Assistant Services
            </p>
            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 xl:gap-8 2xl:gap-12 px-4 md:px-14 lg:px-20 xl:px-32">
              <div className="text-center">
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-semibold cursor-pointer hover:text-teal-800 text-[#0A090B]">
                  24/7
                </p>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl text-[#605D64]">
                  Availability
                </p>
              </div>
              <div className="text-center border-t md:border-t-0 md:border-l border-teal-800 pt-4 md:pt-0 md:pl-4">
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-semibold cursor-pointer hover:text-teal-800 text-[#0A090B]">
                  95%
                </p>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl text-[#605D64]">
                  Operational Efficiency Boost
                </p>
              </div>
              <div className="text-center border-t md:border-t-0 md:border-l border-teal-800 pt-4 md:pt-0 md:pl-4">
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-semibold cursor-pointer hover:text-teal-800 text-[#0A090B]">
                  40%
                </p>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl text-[#605D64]">
                  Reduction in Response Time
                </p>
              </div>
              <div className="text-center border-t md:border-t-0 md:border-l border-teal-800 pt-4 md:pt-0 md:pl-4">
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-semibold cursor-pointer hover:text-teal-800 text-[#0A090B]">
                  89%
                </p>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl text-[#605D64]">
                  Improvement in Customer Engagement
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="p-6">
          <div className="py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-16 flex flex-col md:flex-row justify-center gap-8 md:gap-12 lg:gap-16 border-4 md:border-8 border-teal-700 bg-orange-200">
            <div className="flex-1 mt-6 md:mt-0">
              <img
                className="w-full h-auto object-cover rounded-lg"
                src={"/image/image 14.jpeg"}
                alt="hospital"
              />
            </div>
            <div className="flex-1 space-y-4 md:space-y-5">
              <span className="flex text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl space-x-2 cursor-pointer font-bold hover:underline">
                <p className="text-gray-800">Our</p>
                <p className="text-teal-800">Missions</p>
              </span>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl text-[#605D64] hover:font-bold">
                At Healthcare, our mission is to provide high-quality,
                patient-centered care that exceeds expectations. We are
                committed to delivering compassionate, innovative, and
                accessible healthcare to our communities. Our dedicated team of
                healthcare professionals works tirelessly to ensure that every
                patient receives the care they deserve, with dignity and
                respect.
              </p>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-3xl text-[#605D64] hover:font-bold">
                Our mission is built on a foundation of empathy, kindness, and a
                passion for improving lives. We strive to create a supportive
                and inclusive environment that fosters trust, understanding, and
                hope. By combining cutting-edge technology with a human touch,
                we aim to make healthcare more personal, more effective, and
                more accessible to all. Through our unwavering commitment to
                excellence, we aim to make a positive impact on the lives of our
                patients, their families, and our communities.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
