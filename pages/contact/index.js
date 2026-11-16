// components
import Circles from '/components/Circles';
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';

// variants
import { fadeIn } from '../../variants';

// icons
import { BsArrowRight } from "react-icons/bs";

// framer
import { motion } from 'framer-motion';

const Contact = () => {
  const [state, handleSubmit] = useForm("mblynrpl");

  if (state.succeeded) {
    return (
      <div className="text-center py-32">
        <h2 className="text-2xl mb-4 font-semibold text-white">Thank you! Your message has been sent successfully.</h2>
        <p className="text-white/70 mb-6">I will get back to you shortly.</p>
        <Link href="/" className="cursor-pointer text-accent underline hover:text-white transition-colors">Return to Home</Link>
      </div> 
    );
  }

  return (
    <div className="min-h-screen xl:h-full bg-primary/30 pt-20 sm:pt-28 xl:pt-32 pb-28 sm:pb-32 xl:pb-16 flex items-center justify-center overflow-y-auto xl:overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-4 tracking-tight text-3xl sm:text-4xl xl:text-5xl"
          >
            Let's <span className="text-accent">Connect.</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center mb-6 sm:mb-8 text-xs sm:text-sm text-white/70 max-w-md mx-auto leading-relaxed font-light"
          >
            Have a project, a technical challenge, or an engineering role in mind? Reach out directly below.
          </motion.p>

          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            onSubmit={handleSubmit}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-4 sm:gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-x-6 w-full">
              <input type="text" name="name" placeholder="Full Name" className="input" required />
              <input type="email" name="email" placeholder="Email Address" className="input" required />
            </div>
            <input type="text" name="subject" placeholder="Subject" className="input" />
            <textarea name="message" placeholder="Your Message..." className="textarea" required></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button
              type="submit"
              disabled={state.submitting}
              className="btn rounded-full border border-white/50 max-w-[190px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group cursor-pointer mx-auto xl:mx-0"
            >
              <span className="group-hover:-translate-y-[120px] group-hover:opacity-0 transition-all duration-500 font-medium">
                Send Message
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] text-accent" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
