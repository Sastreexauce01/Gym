import PropTypes from "prop-types";
import { motion, AnimatePresence } from "motion/react";

const ResponsiveMenu = ({open}) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{duration:0.3}}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font- font-semibold uppercase bg-primary text-white py-10 m-6 rounded-3xl ">
            <ul className="flex flex-col justify-center items-center gap-10 ">
              <li>home</li>
              <li>About</li>
              <li>Service</li>
              <li>Contact</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ✅ Validation des props
ResponsiveMenu.propTypes = {
 open: PropTypes.bool.isRequired, // correct
};

export default ResponsiveMenu;
