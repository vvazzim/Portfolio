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
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-4 tracking-tight"
          >
            Let's <span className="text-accent">Connect.</span>
          </motion.h2>

          {/* Strategic Availability & Fast-Track Badge */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center mb-8"
          >
            <p className="text-sm text-white/85 max-w-lg mx-auto leading-relaxed">
              Available <span className="text-accent font-medium">immediately for permanent engineering positions (CDI)</span>.
            </p>
            <p className="text-xs text-white/60 mt-1 font-light">
              French M.Sc. Research Graduate — Eligible for direct Cadre & Passeport Talent sponsorship (fast-track procedure without labor market test).
            </p>
          </motion.div>

          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            onSubmit={handleSubmit}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input type="text" name="name" placeholder="Full Name" className="input" required />
              <input type="email" name="email" placeholder="Email Address" className="input" required />
            </div>
            <input type="text" name="subject" placeholder="Subject" className="input" />
            <textarea name="message" placeholder="Your Message..." className="textarea" required></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button
              type="submit"
              disabled={state.submitting}
              className="btn rounded-full border border-white/50 max-w-[190px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group cursor-pointer"
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
