import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";

const EquipmentData = [
  {
    id: 1,
    title: "Yoga Equipments",
    desc: "It is a long established fact that a reader readable.",
    icon: <GrYoga />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Muscles Equipments",
    desc: "It is a long established fact that a reader readable.",
    link: "/",
    icon: <FaDumbbell />,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fitness Equipments",
    desc: "It is a long established fact that a reader readable.",
    link: "/",
    icon: <GiGymBag />,
    delay: 0.9,
  },
];

const Equiments = () => {
  return (
    <div>
      <div className="container py-24 ">
        <div className="grid rid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair ">
          <div className="space-y-4 p-6 ">
            <h1 className="text-3xl md:text-4xl font-bold">
              What we offer for you
            </h1>
            <p className="text-gray-500">
              It is a long established fact that a reader readable.
            </p>
          </div>
          {EquipmentData.map((item) => {
            return (
              <motion.div
                 variants={SlideLeft(item.delay)}
                 initial="hidden"
                 whileInView="visible"
                 key={item.id}
                className="space-y-4 p-6 bg-[#fbfbfb] hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] "
              >
                    <div className="text-4xl">{item.icon}</div>
                    <div className="text-2xl font-semibold ">{item.title}</div>
                    <div className="text-gray-500">{item.desc}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Equiments;
