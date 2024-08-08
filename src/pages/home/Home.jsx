import { Link } from "react-router-dom"
const Home = () => {
  return (
    <>
     <main className="font-serif py-4 px-10 space-y-5 bg-white">
      {/* first part */}
      <div className="flex flex-col lg:flex-row justify-between p-5 md:p-10 rounded-md bg-orange-200">
  <div className="flex flex-col space-y-4 lg:space-y-6 2xl:space-y-7">
    <div id="first" className="font-bold text-3xl md:text-4xl xl:text-5xl 2xl:text-[85px] space-y-2 md:space-y-4 xl:space-y-6 2xl:space-y-8">
      <p>
        <span className="hover:underline cursor-pointer text-gray-800">
          Seeing The
        </span>
      </p>
      <p>
        <span className="hover:underline cursor-pointer text-gray-800">
          Doctor Just
        </span>
      </p>
      <p>
        <span id="cooler" className="hover:underline cursor-pointer text-teal-800">
          {/* Got Cooler */}
        </span>
      </p>
    </div>

    <div className="py-2 md:py-4 text-justify">
      <p className="text-sm md:text-base xl:text-lg 2xl:text-3xl 2xl:w-[660px] lg:w-[500px] md:w-[400px] font-normal font-sans hover:font-bold text-gray-800">
        At Health Hub, we offer a comprehensive range of medical services,
        including emergency care, surgery, rehabilitation, and preventive
        care. Equipped with advanced technology and state-of-the-art
        equipment, our hospital is capable of handling complex medical
        cases with expertise and compassion.
      </p>
    </div>

    <div>
      <Link to="/aboutus">
        <div className="flex justify-center lg:justify-start">
          <button className="py-2 md:py-3 lg:py-4 2xl:py-8 w-full lg:w-auto 2xl:w-72 rounded-bl-lg rounded-tr-lg font-semibold text-white bg-teal-700 hover:bg-black hover:text-white transition-transform hover:translate-y-3">
            Information About Us
          </button>
        </div>
      </Link>
    </div>

    <div className="flex justify-center lg:justify-start py-6 space-x-9">
      <div>
        <p className="font-bold text-2xl md:text-3xl xl:text-4xl 2xl:text-6xl cursor-pointer hover:text-teal-950 text-[#090909]">
          2,513
        </p>
        <p className="text-sm md:text-base xl:text-lg 2xl:text-2xl font-normal text-[#605D64]">
          Patients
        </p>
      </div>
      <div>
        <p className="font-bold text-2xl md:text-3xl xl:text-4xl 2xl:text-6xl cursor-pointer hover:text-teal-950 text-[#090909]">
          4.8/5
        </p>
        <div className="flex gap-x-2 items-center">
          <img
            className="w-16 md:w-20 lg:w-24 2xl:w-32"
            src="/image/stars.png"
            alt="stars"
          />
          <p className="text-sm md:text-base xl:text-lg 2xl:text-2xl font-normal text-[#605D64]">
            Ratings
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* 2nd part */}
  <div className="relative w-full lg:w-auto m-auto">
    <img
      className="h-[250px] md:h-[300px] xl:h-[500px] 2xl:h-[900px] w-full md:w-auto"
      src="/image/h3.gif"
      alt="man3"
    />
  </div>
</div>


      {/* Treatment Options */}
      <div className="font-serif border-8 border-orange-200">
  <div className="flex flex-col p-5 lg:px-6 lg:py-10 bg-white">
    <div className="space-y-4">
      <h1 className="text-center font-bold text-gray-800 text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        Treatment Options
      </h1>
      <h1 className="flex flex-col text-center font-bold text-lg md:text-2xl lg:text-3xl xl:text-4xl cursor-pointer hover:text-teal-800 text-gray-800">
        <span>Health Hub Hospital,</span>
        <span>where comfort and care come first</span>
      </h1>
      <div className="flex justify-center text-center hover:font-bold">
        <p className="w-full max-w-lg text-sm md:text-base lg:text-lg text-gray-800">
          Get the smile you've always dreamed of at Health Hub Hospital. Our
          industry-leading dental treatment options, comprehensive insurance
          coverage, and flexible financing choices make it easier than ever to
          attain your healthiest and most confident smile, all in a relaxed and
          judgment-free environment.
        </p>
      </div>
    </div>
  </div>

  {/* Treatment Options Boxes */}
  <div className="flex flex-wrap justify-center lg:justify-between">
    {/* Box 1 */}
    <div className="p-5">
      <div className="flex flex-col justify-between items-center p-4 border-4 text-gray-800 border-orange-200 w-full max-w-xs">
        <img className="w-36 h-36 lg:w-44 lg:h-44" src="/image/image 15.jpg" alt="Child Specialist" />
        <h1 className="font-bold text-lg cursor-pointer hover:underline hover:text-teal-800">
          Child Specialist
        </h1>
        <p className="text-center text-sm md:text-base">
          Health Hub Hospital's child specialists are renowned for their
          expertise and providing exceptional care for your child's unique
          needs. Our pediatric team is dedicated to delivering comprehensive
          and personalized treatment, from infancy to adolescence.
        </p>
        <span className="flex justify-center items-center space-x-3 cursor-pointer hover:font-extrabold hover:underline">
          <p>Learn More</p>
          <img src="/image/arr.svg" className="w-5 h-5" alt="arrow" />
        </span>
      </div>
    </div>
    {/* Box 2 */}
    <div className="p-5">
      <div className="flex flex-col justify-between items-center p-4 border-4 text-gray-800 border-orange-200 w-full max-w-xs">
        <img className="w-36 h-36 lg:w-44 lg:h-44" src="/image/image 18.jpg" alt="Dermatologist" />
        <h1 className="font-bold text-lg cursor-pointer hover:underline hover:text-teal-800">
          Dermatologist
        </h1>
        <p className="text-center text-sm md:text-base">
          Dermatologists at our hospital specialize in diagnosing and treating a
          wide range of skin conditions. They provide expert care for issues
          such as acne, eczema, psoriasis, and skin cancer, utilizing the latest
          advancements in medical and cosmetic dermatology.
        </p>
        <span className="flex justify-center items-center space-x-3 cursor-pointer hover:font-extrabold hover:underline">
          <p>Learn More</p>
          <img src="/image/arr.svg" className="w-5 h-5" alt="arrow" />
        </span>
      </div>
    </div>
    {/* Box 3 */}
    <div className="p-5">
      <div className="flex flex-col justify-between items-center p-4 border-4 text-gray-800 border-orange-200 w-full max-w-xs">
        <img className="w-36 h-36 lg:w-44 lg:h-44" src="/image/image 17.jpg" alt="Ophthalmologist" />
        <h1 className="font-bold text-lg cursor-pointer hover:underline hover:text-teal-800">
          Ophthalmologist
        </h1>
        <p className="text-center text-sm md:text-base">
          Our eye specialist provides comprehensive eye care, offering everything
          from routine eye exams to advanced treatments for complex eye
          conditions. Trust our experienced ophthalmologists to help you maintain
          and improve your eyesight, ensuring a lifetime of clear vision.
        </p>
        <span className="flex justify-center items-center space-x-3 cursor-pointer hover:font-extrabold hover:underline">
          <p>Learn More</p>
          <img src="/image/arr.svg" className="w-5 h-5" alt="arrow" />
        </span>
      </div>
    </div>
  </div>

  {/* Second Row of Treatment Options Boxes */}
  <div className="flex flex-wrap justify-center lg:justify-between">
    {/* Box 4 */}
    <div className="p-5">
      <div className="flex flex-col justify-between items-center p-4 border-4 text-gray-800 border-orange-200 w-full max-w-xs">
        <img className="w-36 h-36 lg:w-44 lg:h-44" src="/image/image 21.jpg" alt="Orthopedic" />
        <h1 className="font-bold text-lg cursor-pointer hover:underline hover:text-teal-800">
          Orthopedic
        </h1>
        <p className="text-center text-sm md:text-base">
          Our orthopedic specialists are committed to providing advanced care for
          bones, joints, and muscles. Our team aims to restore mobility, alleviate
          pain, and improve overall quality of life through personalized treatment
          plans.
        </p>
        <span className="flex justify-center items-center space-x-3 cursor-pointer hover:font-extrabold hover:underline">
          <p>Learn More</p>
          <img src="/image/arr.svg" className="w-5 h-5" alt="arrow" />
        </span>
      </div>
    </div>
    {/* Box 5 */}
    <div className="p-5">
      <div className="flex flex-col justify-between items-center p-4 border-4 text-gray-800 border-orange-200 w-full max-w-xs">
        <img className="w-36 h-36 lg:w-44 lg:h-44" src="/image/image 20.jpg" alt="Physiotherapists" />
        <h1 className="font-bold text-lg cursor-pointer hover:underline hover:text-teal-800">
          Physiotherapists
        </h1>
        <p className="text-center text-sm md:text-base">
          Our physiotherapists are dedicated to improving your mobility and overall
          physical health through personalized treatment plans. They specialize in
          rehabilitating injuries and managing chronic pain.
        </p>
        <span className="flex justify-center items-center space-x-3 cursor-pointer hover:font-extrabold hover:underline">
          <p>Learn More</p>
          <img src="/image/arr.svg" className="w-5 h-5" alt="arrow" />
        </span>
      </div>
    </div>
    {/* Box 6 */}
    <div className="p-5">
      <div className="flex flex-col justify-between items-center p-4 border-4 text-gray-800 border-orange-200 w-full max-w-xs">
        <img className="w-36 h-36 lg:w-44 lg:h-44" src="/image/image 19.jpg" alt="Neurologist" />
        <h1 className="font-bold text-lg cursor-pointer hover:underline hover:text-teal-800">
          Neurologist
        </h1>
        <p className="text-center text-sm md:text-base">
          Our neurologists offer expert care for a wide range of neurological
          conditions, including migraines, epilepsy, stroke, and Parkinson's
          disease. They utilize advanced diagnostic techniques and personalized
          treatment plans to improve patients' neurological health.
        </p>
        <span className="flex justify-center items-center space-x-3 cursor-pointer hover:font-extrabold hover:underline">
          <p>Learn More</p>
          <img src="/image/arr.svg" className="w-5 h-5" alt="arrow" />
        </span>
      </div>
    </div>
  </div>

  {/* Button Section */}
  <div className="flex flex-col lg:flex-row justify-center items-center space-x-0 lg:space-x-6 lg:p-6">
    <Link to="/doctor">
      <button className="py-3 md:py-4 xl:py-5 2xl:py-8 w-48 md:w-64 xl:w-72 text-center text-sm md:text-base xl:text-lg rounded-bl-lg rounded-tr-lg font-semibold bg-teal-600 text-white hover:bg-black transition-transform hover:translate-x-3">
        Experienced Doctors
      </button>
    </Link>
    <Link to="/events">
      <span className="flex justify-center items-center space-x-3 mt-4 lg:mt-0 cursor-pointer font-serif hover:font-extrabold hover:underline text-gray-800">
        <p>News and Events</p>
        <img src="/image/arr.svg" className="w-5 h-5" alt="arrow" />
      </span>
    </Link>
  </div>
</div>


       {/* profitable  */}
       <div className="flex flex-col gap-4 md:gap-6 lg:gap-7 2xl:gap-12 py-10 md:py-14 lg:py-20 2xl:py-24">
  <p className="font-bold text-center text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl">
    <span className="cursor-pointer hover:underline text-gray-800">Health-Hub</span>
    <span className="cursor-pointer hover:underline text-teal-800"> Report</span>
  </p>
  <p className="font-normal hover:font-bold text-sm md:text-base lg:text-lg 2xl:text-3xl text-center hover:underline text-[#605D64]">
    Health Hub treated 20,00,000+ patients, performed 1,00,000+ surgeries and successfully completed 18000+ bypass operations.
  </p>
  <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 2xl:px-64 md:px-32">
    <span className="p-4 text-center">
      <p className="font-semibold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl cursor-pointer text-[#0A090B] hover:text-teal-800">
        20000000+
      </p>
      <p className="font-normal text-xs md:text-sm lg:text-base 2xl:text-2xl text-[#605D64]">
        Patients Treated
      </p>
    </span>
    <span className="p-4 text-center md:border-l-4 border-orange-200">
      <p className="font-semibold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl cursor-pointer text-[#0A090B] hover:text-teal-800">
        100000+
      </p>
      <p className="font-normal text-xs md:text-sm lg:text-base 2xl:text-2xl text-[#605D64]">
        Surgeries Performed
      </p>
    </span>
    <span className="p-4 text-center md:border-l-4 border-orange-200">
      <p className="font-semibold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl cursor-pointer text-[#0A090B] hover:text-teal-800">
        18000+
      </p>
      <p className="font-normal text-xs md:text-sm lg:text-base 2xl:text-2xl text-[#605D64]">
        Bypass Performed
      </p>
    </span>
  </div>
</div>


      {/* patient Care You'll Love  */}
      <div className="flex flex-col lg:flex-row justify-center p-6 md:p-10 rounded-md bg-orange-200">
  {/* <!-- First part --> */}
  <div className="relative w-full lg:w-a m-auto mb-8 lg:mb-0">
    <img
      className="w-full md:w-[420px] xl:w-[500px] 2xl:w-[800px] h-auto"
      src="/image/image 13.jpg"
      alt="Patient Care"
    />
  </div>

  {/* <!-- Second part --> */}
  <div className="flex flex-col p-4 md:p-10 space-y-6">
    <p className="text-base lg:text-lg font-bold text-teal-950">
      Patient Care You'll Love
    </p>
    <div className="font-bold text-2xl md:text-3xl xl:text-4xl 2xl:text-[85px] space-y-3 md:space-y-4 2xl:space-y-8">
      <p>
        <span className="cursor-pointer hover:underline text-gray-800">
          Helping you achieve
        </span>
      </p>
      <p>
        <span className="cursor-pointer hover:underline text-teal-800">
          your dream Health
        </span>
      </p>
    </div>

    <div className="flex flex-col space-y-4 py-4 font-sans text-gray-800">
      <p className="text-justify text-sm md:text-base lg:text-lg 2xl:text-3xl cursor-pointer hover:font-bold">
        At Health Hub Hospital, we pride ourselves on our patient-centered
        approach to care. Our team of experienced healthcare professionals is
        dedicated to providing personalized attention to each and every
        patient. We understand that every individual has unique needs and
        concerns, and we strive to address these with empathy and
        understanding.
      </p>
      <p className="text-justify text-sm md:text-base lg:text-lg 2xl:text-3xl cursor-pointer hover:font-bold">
        What sets us apart from other hospitals is our commitment to innovation
        and excellence. Our medical teams are constantly updating their skills
        and knowledge to stay abreast of the latest medical advancements and
        best practices.
      </p>
      <p className="text-justify text-sm md:text-base lg:text-lg 2xl:text-3xl cursor-pointer hover:font-bold">
        At Health Hub Hospital, we believe that healthcare should be accessible
        and affordable for all. That's why we offer flexible payment options
        and a range of insurance plans to suit every budget. Our dedicated team
        is available 24/7 to answer your questions and address your concerns.
      </p>
    </div>

    <div className="flex justify-center lg:justify-start">
      <Link to="/stories">
        <button className="py-2 md:py-3 xl:py-4 2xl:py-8 w-full lg:w-48 2xl:w-72 text-center text-sm md:text-base 2xl:text-2xl rounded-bl-lg rounded-tr-lg font-semibold text-white bg-teal-700 hover:bg-black transition-transform hover:translate-x-2">
          Patient Stories
        </button>
      </Link>
    </div>
  </div>
</div>


      {/* Dental Care for Every Wallet */}
      <div className="p-6 md:p-10">
  <div className="text-center space-y-4">
    <p className="text-base md:text-lg lg:text-xl font-bold text-teal-950">
      Health Care for Every Wallet
    </p>
    <p className="text-2xl md:text-3xl lg:text-4xl cursor-pointer hover:underline text-gray-800">
      Flexible Payment Options
    </p>
    <p className="text-sm md:text-lg lg:text-xl cursor-pointer hover:underline text-gray-800">
      We offer flexible payment options that fit your budget, ensuring you
      receive exceptional care without compromise.
    </p>
  </div>
</div>


      {/* card 1 */}
      <div className="p-4 lg:p-6">
  <div className="flex flex-col xl:flex-row justify-between items-center space-y-6 xl:space-y-0 xl:space-x-6">
    {/* <!-- Card 1 --> */}
    <div className="flex flex-col justify-between p-6 border-l-8 rounded-l-xl border-teal-500 bg-orange-200 text-gray-800 w-full xl:w-[400px]">
      <h1 className="text-2xl md:text-3xl font-bold cursor-pointer hover:underline text-gray-800 hover:text-teal-800">
        Most Insurances Accepted
      </h1>
      <p className="mt-4 text-sm md:text-base lg:text-lg hover:font-semibold">
        We value your investment in your health and wellness. Our hospital
        gladly works with most insurances, making your healthcare journey
        smooth and stress-free.
      </p>
      <span className="flex items-center space-x-3 mt-4 cursor-pointer hover:font-extrabold hover:underline">
        <p>Verify your Coverage</p>
        <img
          src="/image/arr.svg"
          alt="arrow"
          className="w-5 h-5"
        />
      </span>
    </div>

    {/* <!-- Card 2 --> */}
    <div className="flex flex-col justify-between p-6 border-l-8 rounded-l-xl border-pink-800 bg-orange-200 text-gray-800 w-full xl:w-[400px]">
      <h1 className="text-2xl md:text-3xl font-bold cursor-pointer hover:underline text-gray-800 hover:text-teal-800">
        Health Care Membership
      </h1>
      <p className="mt-4 text-sm md:text-base lg:text-lg hover:font-semibold">
        Elevate your healthcare experience with our Healthcare Membership.
        Unlock exclusive discounts while prioritizing your wellness. Enjoy
        peace of mind knowing you're taking care of your health, while also
        taking care of your budget.
      </p>
      <span className="flex items-center space-x-3 mt-4 cursor-pointer hover:font-extrabold hover:underline">
        <p>Sign up for Membership</p>
        <img
          src="/image/arr.svg"
          alt="arrow"
          className="w-5 h-5"
        />
      </span>
    </div>
{/* 
    <!-- Card 3 --> */}
    <div className="flex flex-col justify-between p-6 border-l-8 rounded-l-xl border-green-800 bg-orange-200 text-gray-800 w-full xl:w-[400px]">
      <h1 className="text-2xl md:text-3xl font-bold cursor-pointer hover:underline text-gray-800 hover:text-teal-800">
        Affordable Care Financing
      </h1>
      <p className="mt-4 text-sm md:text-base lg:text-lg hover:font-semibold">
        Make your health a priority without worrying about the cost. We offer
        financing options through Affirm and CareCredit, allowing you to pay
        for medical treatments in convenient installments.
      </p>
      <span className="flex items-center space-x-3 mt-4 cursor-pointer hover:font-extrabold hover:underline">
        <p>Learn About Financing Options</p>
        <img
          src="/image/arr.svg"
          alt="arrow"
          className="w-5 h-5"
        />
      </span>
    </div>
  </div>

  {/* <!-- Button Section --> */}
  <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mt-8">
    <Link to="/explore">
      <button className="py-3 md:py-4 xl:py-5 2xl:py-8 w-full md:w-auto xl:w-64 2xl:w-72 text-center text-sm md:text-base xl:text-lg rounded-bl-lg rounded-tr-lg font-semibold bg-teal-600 text-white hover:bg-black transition-transform hover:translate-x-2">
        Explore All Health Hub Services
      </button>
    </Link>
    <Link to="/events">
      <span className="flex items-center space-x-3 cursor-pointer font-serif hover:font-extrabold hover:underline text-gray-800">
        <p>News and Events</p>
        <img
          src="/image/arr.svg"
          alt="arrow"
          className="w-5 h-5"
        />
      </span>
    </Link>
  </div>
</div>


    </main>
    </>
  )
}

export default Home