import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export const AboutUs = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-10 md:px-24 md:py-16 bg-white rounded-3xl my-5 md:my-12 shadow-md">
        <h1 className="text-3xl md:text-5xl text-primary font-extrabold mb-6">
          About Us
        </h1>
        <p className="text-[#606060] md:w-[630px] mb-6 md:mb-12 text-lg">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          height="2"
          viewBox="0 0 1282 2"
          fill="none"
        >
          <path d="M0 1H1282" stroke="black" strokeOpacity="0.1" />
        </svg>
        <div className="mt-8">
          <Tabs>
            <TabList className="flex gap-2 border-b-0">
              <Tab className="text-[#00000080]  font-medium hover:text-primary text-xl md:text-2xl text-center py-2.5 px-5 border-b-2 border-transparent cursor-pointer">
                Story
              </Tab>
              <Tab className="text-[#00000080] font-medium hover:text-primary text-xl md:text-2xl text-center py-2.5 px-5 border-b-2 border-transparent cursor-pointer">
                Content
              </Tab>
              <Tab className="text-[#00000080] font-medium hover:text-primary text-xl md:text-2xl text-center py-2.5 px-5 border-b-2 border-transparent cursor-pointer">
                Profile
              </Tab>
            </TabList>

            <TabPanel className="react-tabs__tab-panel">
              <div className="mt-8">
                <p className=" text-lg text-slate-600 mt-2 leading-relaxed">
                  We started with a simple promise — to make parcel delivery
                  fast, reliable, and stress-free. Over the years, our
                  commitment to real-time tracking, efficient logistics, and
                  customer-first service has made us a trusted partner for
                  thousands. Whether it's a personal gift or a time-sensitive
                  business delivery, we ensure it reaches its destination — on
                  time, every time.
                </p>
                <p className=" text-lg text-slate-600 mt-2 leading-relaxed">
                  We started with a simple promise — to make parcel delivery
                  fast, reliable, and stress-free. Over the years, our
                  commitment to real-time tracking, efficient logistics, and
                  customer-first service has made us a trusted partner for
                  thousands. Whether it's a personal gift or a time-sensitive
                  business delivery, we ensure it reaches its destination — on
                  time, every time.
                </p>
                <p className=" text-lg text-slate-600 mt-2 leading-relaxed">
                  We started with a simple promise — to make parcel delivery
                  fast, reliable, and stress-free. Over the years, our
                  commitment to real-time tracking, efficient logistics, and
                  customer-first service has made us a trusted partner for
                  thousands. Whether it's a personal gift or a time-sensitive
                  business delivery, we ensure it reaches its destination — on
                  time, every time.
                </p>
              </div>
            </TabPanel>
            <TabPanel className="react-tabs__tab-panel">
              <div className=" mt-8">
                <div className="mt-8">
                  <p className=" text-lg text-slate-600 mt-2 leading-relaxed">
                    We started with a simple promise — to make parcel delivery
                    fast, reliable, and stress-free. Over the years, our
                    commitment to real-time tracking, efficient logistics, and
                    customer-first service has made us a trusted partner for
                    thousands. Whether it's a personal gift or a time-sensitive
                    business delivery, we ensure it reaches its destination — on
                    time, every time.
                  </p>
                  <p className=" text-lg text-slate-600 mt-2 leading-relaxed">
                    We started with a simple promise — to make parcel delivery
                    fast, reliable, and stress-free. Over the years, our
                    commitment to real-time tracking, efficient logistics, and
                    customer-first service has made us a trusted partner for
                    thousands. Whether it's a personal gift or a time-sensitive
                    business delivery, we ensure it reaches its destination — on
                    time, every time.
                  </p>
                  <p className=" text-lg text-slate-600 mt-2 leading-relaxed">
                    We started with a simple promise — to make parcel delivery
                    fast, reliable, and stress-free. Over the years, our
                    commitment to real-time tracking, efficient logistics, and
                    customer-first service has made us a trusted partner for
                    thousands. Whether it's a personal gift or a time-sensitive
                    business delivery, we ensure it reaches its destination — on
                    time, every time.
                  </p>
                </div>
              </div>
            </TabPanel>
            <TabPanel className="react-tabs__tab-panel">
              <div className=" mt-8">
                <div className="mt-8">
                  <p className=" text-lg text-slate-600 mt-2 leading-relaxed">
                    We started with a simple promise — to make parcel delivery
                    fast, reliable, and stress-free. Over the years, our
                    commitment to real-time tracking, efficient logistics, and
                    customer-first service has made us a trusted partner for
                    thousands. Whether it's a personal gift or a time-sensitive
                    business delivery, we ensure it reaches its destination — on
                    time, every time.
                  </p>
                  <p className=" text-lg text-slate-600 mt-2 leading-relaxed">
                    We started with a simple promise — to make parcel delivery
                    fast, reliable, and stress-free. Over the years, our
                    commitment to real-time tracking, efficient logistics, and
                    customer-first service has made us a trusted partner for
                    thousands. Whether it's a personal gift or a time-sensitive
                    business delivery, we ensure it reaches its destination — on
                    time, every time.
                  </p>
                  <p className=" text-lg text-slate-600 mt-2 leading-relaxed">
                    We started with a simple promise — to make parcel delivery
                    fast, reliable, and stress-free. Over the years, our
                    commitment to real-time tracking, efficient logistics, and
                    customer-first service has made us a trusted partner for
                    thousands. Whether it's a personal gift or a time-sensitive
                    business delivery, we ensure it reaches its destination — on
                    time, every time.
                  </p>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};
