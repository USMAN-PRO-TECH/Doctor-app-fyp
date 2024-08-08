import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="font-serif bg-teal-900 text-[#D9DBE1]">
      <main className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:py-10 md:py-6 py-4 lg:px-8 border-b-2 border-gray-700 space-y-10 lg:space-y-0">
        <div className="text-center lg:text-left lg:w-1/4">
          <img src="/image/apex.png" width={250} height={40} alt="apex" />
          <p className="my-5 mx-auto lg:mx-0 h-auto w-full lg:w-[310px] text-sm lg:text-xs 2xl:text-lg font-normal text-justify">
            Hospitals are institutions that deal with health care activities.
            They offer treatment to patients with specialized staff and
            equipment. In other words, hospitals serve humanity and play a vital
            role in the social welfare of any society. They have all the
            facilities to deal with varying diseases to make the patient
            healthy.
          </p>
          <div className="flex justify-center lg:justify-start gap-3">
            <img src="/image/fb.png" width={40} height={40} alt="fb" />
            <img src="/image/linkdn.png" width={40} height={40} alt="linkedin" />
            <img src="/image/inst.png" width={40} height={40} alt="instagram" />
            <img src="/image/twiter.png" width={40} height={40} alt="twitter" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between w-full lg:w-3/4 space-y-10 lg:space-y-0 lg:space-x-6">
          <div className="text-center lg:text-left">
            <h1 className="font-bold cursor-pointer underline text-[#FFFFFF] text-lg md:text-xl 2xl:text-2xl">
              Services
            </h1>
            <div className="space-y-2">
              <Link className="block hover:font-bold hover:underline text-[#D9DBE1]" to="/virtualassistance">Patient Management</Link>
              <Link className="block hover:font-bold hover:underline text-[#D9DBE1]" to="/afterhoursupport">Financial Management</Link>
              <Link className="block hover:font-bold hover:underline text-[#D9DBE1]" to="/emailcustomer">Clinical Services</Link>
              <Link className="block hover:font-bold hover:underline text-[#D9DBE1]" to="/socialmedia">Security Control</Link>
              <Link className="block hover:font-bold hover:underline text-[#D9DBE1]" to="/socialmedia">Operations Management</Link>
              <Link className="block hover:font-bold hover:underline text-[#D9DBE1]" to="/socialmedia">Communication</Link>
              <Link className="block hover:font-bold hover:underline text-[#D9DBE1]" to="/ordertaking">Reporting and Analytics</Link>
              <Link className="block hover:font-bold hover:underline text-[#D9DBE1]" to="/ordertaking">Patient Safety</Link>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h1 className="font-bold cursor-pointer underline text-[#FFFFFF] text-lg md:text-xl 2xl:text-2xl">
              About Us
            </h1>
            <div className="space-y-2">
              <p className="hover:font-bold cursor-pointer hover:underline">Mission Statement</p>
              <p className="hover:font-bold cursor-pointer hover:underline">Company History</p>
              <p className="hover:font-bold cursor-pointer hover:underline">Our Team</p>
              <p className="hover:font-bold cursor-pointer hover:underline">Our Values</p>
              <p className="hover:font-bold cursor-pointer hover:underline">Testimonials</p>
              <p className="hover:font-bold cursor-pointer hover:underline">Awards</p>
              <p className="hover:font-bold cursor-pointer hover:underline">Partnerships</p>
              <p className="hover:font-bold cursor-pointer hover:underline">Contact Us</p>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h1 className="font-bold cursor-pointer underline text-[#FFFFFF] text-lg md:text-xl 2xl:text-2xl">
              Resources
            </h1>
            <div className="space-y-2">
              <p className="hover:font-bold cursor-pointer hover:underline">Documentation</p>
              <p className="hover:font-bold cursor-pointer hover:underline">Support</p>
              <p className="hover:font-bold cursor-pointer hover:underline">Training</p>
              <p className="hover:font-bold cursor-pointer hover:underline">Education</p>
              <p className="hover:font-bold cursor-pointer hover:underline">Community and Forum</p>
              <p className="hover:font-bold cursor-pointer hover:underline">Updates and Releases</p>
              <p className="hover:font-bold cursor-pointer hover:underline">Integration and API</p>
              <p className="hover:font-bold cursor-pointer hover:underline">Compliance</p>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h1 className="font-bold cursor-pointer underline text-[#FFFFFF] text-lg md:text-xl 2xl:text-2xl">
              Locations
            </h1>
            <div className="space-y-2">
              <p className="hover:font-bold cursor-pointer hover:underline">Lahore</p>
              <p className="hover:font-bold cursor-pointer hover:underline">Sialkot</p>
              <p className="hover:font-bold cursor-pointer hover:underline">Faisalabad</p>
              <p className="hover:font-bold cursor-pointer hover:underline">Karachi</p>
              <p className="hover:font-bold cursor-pointer hover:underline">Bahawalpur</p>
              <p className="hover:font-bold cursor-pointer hover:underline">Peshawar</p>
              <p className="hover:font-bold cursor-pointer hover:underline">Islamabad</p>
              <p className="hover:font-bold cursor-pointer hover:underline">Gujranwala</p>
            </div>
          </div>
        </div>
      </main>

      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6 md:px-4 md:py-2">
        <div className="text-center md:text-left text-[#D9DBE1] font-normal">
          © 2024 Health Hub. All Rights Reserved.
        </div>
        <div className="flex space-x-6 md:space-x-10 lg:text-sm mt-4 md:mt-0">
          <p className="hover:underline cursor-pointer">Terms of Service</p>
          <p className="hover:underline cursor-pointer">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
