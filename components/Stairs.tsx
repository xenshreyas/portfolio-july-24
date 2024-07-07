import { motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* Render 6 Motion divs, each representing a step of the stairs 
    Each div will have the same animation defined by the stairsAnimation object.
    The delay for each div is calculated dynamically based on its reversed index,
    creating a staggered effect with decreasing delay for each subsequent step
    */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.2,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.05,
          }}
          className="h-full w-full bg-slate-800 relative"
        />
      ))}
    </>
  );
};

export default Stairs;
