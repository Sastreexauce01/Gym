import { useState } from "react";
import { ProductsData } from "../../mockData/data";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";
// import PropTypes from "prop-types";

const TabCompt = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Yoga", "Fitness", "Muscles"];

  const filteredCards =
    activeTab === "All"
      ? ProductsData
      : ProductsData.filter((card) => card.category === activeTab);

  return (
    <>
      <div className="container my-12 md:my-16 ">
        {/* Tabs button section */}
        <div className="flex space-x-4 mb-4 p-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 rounded ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Tab Cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card) => (
            <motion.div
             
              key={card.id}
              variants={SlideLeft(0.5)}
              //  initial="hidden"
              //  whileInView="visible"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-4  border rounded shadow-sm space-y-2 "
            >
              <img src={card.image} alt={card.title} />
              <p>{card.title}</p>
              <p>{card.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TabCompt;
