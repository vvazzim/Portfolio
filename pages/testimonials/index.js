import TestimonialSlider from "../../components/TestimonialSlider";

//framer motion
import {fadeIn} from "../../variants";
import {motion} from "framer-motion";

const Testimonials = () => {
  return (
    <div className={'min-h-screen xl:h-full bg-primary/30 pt-20 sm:pt-28 xl:pt-32 pb-28 sm:pb-32 xl:pb-0 text-center flex flex-col justify-center overflow-y-auto xl:overflow-hidden relative'}>
        <div className={'container mx-auto h-full flex flex-col justify-center'}>
            {/*title*/}
            <motion.h2 variants={fadeIn('up', 0.2)}
                       initial="hidden"
                       animate="show"
                       exit="hidden"
                       className={'h2 mb-4 xl:mb-0 text-3xl sm:text-4xl xl:text-5xl'}>
              What clients <span className={'text-accent'}>say.</span>
          </motion.h2>
            {/* slider */}
            <motion.div variants={fadeIn('up', 0.4)}
                 initial="hidden"
                 animate="show"
                 exit="hidden">
                <TestimonialSlider/>
            </motion.div>
        </div>
    </div>
  );
};

export default Testimonials;
