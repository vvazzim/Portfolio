//components
import Circles from '/components/Circles'
import { useForm, ValidationError } from '@formspree/react';
//variants
import {fadeIn} from '../../variants'

//icons
import {BsArrowRight} from "react-icons/bs";

//framer
import { motion } from 'framer-motion';


const Contact = () => {
    const [state, handleSubmit] = useForm("mblynrpl");

  if (state.succeeded) {
    return (
      <div className="text-center py-32">
        <h2 className="text-2xl mb-4">Thank you! Your message has been sent.</h2>
        <a href="/" className="text-accent underline">Return to Home</a>
      </div>
    );
  }
  if (state.succeeded) {
    return (
      <div className="text-center py-32">
        <h2 className="text-2xl mb-4">Thank you! Your message has been sent.</h2>
        <a href="/" className="text-accent underline">Return to Home</a>
      </div>
    );
  }
  return (
      <div className={'h-full bg-primary/30'}>
        <div className={'container mx-auto py-32 text-center xl:texxt-left flex items-center justify-center h-full'}>
            {/* text & form */}
            <div className={'flex flex-col w-full max-w-[700px]'}>
                {/* text */}
                <motion.h2
                    variants={fadeIn('up', 0.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className={'h2 text-center mb-12'}>
                    Let's <span className={'text-accent'}>connect.</span>
                </motion.h2>
                {/* form */}
                <motion.form variants={fadeIn('up', 0.4)}
                        onSubmit={handleSubmit}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className={'flex-1 flex flex-col gap-6 w-full mx-auto'}>
                    {/* input group */}
                    <div className={'flex gap-x-6 w-full'}>
                        <input type="text" name="name" placeholder="Name" className={'input'} required />
                        <input type="email" name="email" placeholder="Email" className={'input'} required />
                    </div>
                    <input type="text" name="subject" placeholder="Subject" className={'input'} />
                    <textarea name="message" placeholder="Message" className="textarea" required></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                    <button type="submit" disabled={state.submitting} className={'btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all' +
                    ' duration-300 flex items-center justify-center overflow-hidden hover:border-accent' +
                    ' group-hover:opacity-0 transition-all duration-300 flex items-center justify-center' +
                    ' overflow-hidden hover:border-accent group'}>
                        <span className={'group-hover:-translate-y-[120px] group-hover:opacity-0 transition-all' +
                        ' duration-500'}>Let's Talk</span>
                        <BsArrowRight className={'-translate-y-[120%] opacity-0 group-hover:flex' +
                        ' group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute' +
                        ' text-[22px]'}/>
                    </button>
                </motion.form>
            </div>
        </div>
      </div>);
};

export default Contact;
