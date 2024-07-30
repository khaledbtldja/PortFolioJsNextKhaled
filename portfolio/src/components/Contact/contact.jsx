
import { motion, useInView } from "framer-motion";
import "./contact.scss";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import Navbar from '../Navbar/Navbar'; // Assurez-vous que le chemin est correct


const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3akws78', 'template_vbk0oo9', formRef.current, {
        publicKey: 'SKwCB7e7SCbwwGbqx',
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        },
      );
  };

  return (
    <>
      <Navbar />
      <motion.div
        ref={ref}
        className="contact"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="textContiner" variants={variants}>
          <motion.h1 variants={variants}>Let's work together</motion.h1>
          <motion.div className="item" variants={variants}>
            <h2>Mail</h2>
            <span>bouteldja.khaled09@gmail.com</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>Address</h2>
            <span>152 av des jonquilles</span>
          </motion.div>
          <motion.div className="item" variants={variants}>
            <h2>Phone</h2>
            <span>+1 514 232 0113</span>
          </motion.div>
        </motion.div>
        <div className="formContiner">
          <motion.div
            className="phone"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 128 128">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                fill="none"
                d="M82.898 128h-.002c-18.186-.001-38.418-10.422-55.51-28.592C9.259 81.126-.334 59.919 1.104 41.262l.048-.618.388-.482c1.424-1.77 2.672-3.189 3.928-4.468a55.286 55.286 0 0 1 9.476-7.68l1.666-1.069 1.086 1.654c5.125 7.804 10.87 15.625 17.075 23.246l1.035 1.271-1.042 1.264a3.381 3.381 0 0 1-.756.708l-7.351 4.964c-.502.332-.846.915-.989 1.654-.237 1.234.115 2.682.942 3.873 2.232 3.241 11.201 13.338 16.846 19.412 5.941 5.694 15.833 14.759 19.029 17.039.92.657 1.987 1.019 3.005 1.019 1.05 0 1.93-.393 2.353-1.049l1.631-2.496c1.093-1.673 2.185-3.344 3.28-5.013.225-.34.494-.583.704-.757l1.284-1.064 1.277 1.073c7.48 6.282 15.179 12.115 22.881 17.335l1.592 1.078-1.016 1.633a55.66 55.66 0 0 1-7.563 9.617c-1.256 1.278-2.692 2.588-4.394 4.003l-.488.405-.633.051c-1.143.089-2.32.135-3.5.135zM5.049 42.185C3.96 59.536 13.122 79.341 30.263 96.63 46.639 114.037 65.81 123.999 82.896 124h.002c.858 0 1.715-.026 2.554-.079a53.347 53.347 0 0 0 3.607-3.318 51.811 51.811 0 0 0 5.979-7.319 283.904 283.904 0 0 1-19.929-15.092c-.764 1.165-1.525 2.332-2.288 3.499l-1.624 2.485c-1.154 1.794-3.291 2.872-5.708 2.872-1.846 0-3.738-.626-5.329-1.764-3.509-2.503-13.72-11.89-19.516-17.446l-.081-.082c-5.508-5.925-14.798-16.349-17.246-19.902-1.445-2.081-2.023-4.6-1.58-6.904.348-1.806 1.304-3.307 2.694-4.224l5.912-3.993a288.594 288.594 0 0 1-14.878-20.256A51.324 51.324 0 0 0 8.318 38.5c-1.043 1.062-2.092 2.244-3.269 3.685z"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                fill="none"
                d="M71.638 77.055H45.936l-.135-1.855c-.019-.256-.395-6.368 4.912-14.284 2.251-3.357 6.229-6.171 10.078-8.893 4.426-3.13 9.002-6.367 9.002-9.3v-1.548c0-5.317-4.242-9.643-9.456-9.643-5.219 0-9.465 4.326-9.465 9.643h-4c0-7.522 6.041-13.643 13.465-13.643 7.42 0 13.456 6.12 13.456 13.643v1.548c0 5.004-5.193 8.677-10.692 12.566-3.552 2.512-7.225 5.11-9.065 7.854-2.854 4.258-3.795 7.851-4.102 9.912h21.704v4zM92.559 27.98h4v49.665h-4z"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                animate={isInView && { pathLength: 1 }}
                transition={{ duration: 3 }}
                fill="none"
                d="M102.215 65.136H73.729l-1.708-3.042L92.514 28.49l3.416 2.083-18.638 30.563h24.923z"
              />
              <g>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 3 }}
                  fill="none"
                  d="m27.703 20.617-2.847-2.811c.471-.477.946-.946 1.427-1.403l2.756 2.899c-.45.429-.895.868-1.336 1.315zM112.226 100.813l-3.018-2.627.261-.303 3.043 2.596-.286.334zm2.822-3.518-3.213-2.383a58 58 0 0 0 2.162-3.126l3.363 2.164a61.64 61.64 0 0 1-2.312 3.345zm4.396-6.838-3.5-1.936a56.83 56.83 0 0 0 1.724-3.385l3.623 1.693a59.037 59.037 0 0 1-1.847 3.628zm3.447-7.367-3.729-1.445c.456-1.179.88-2.387 1.257-3.59l3.816 1.197a61.427 61.427 0 0 1-1.344 3.838zm2.431-7.759-3.887-.941c.297-1.228.557-2.48.772-3.725l3.941.684a60.083 60.083 0 0 1-.826 3.982zm1.39-8.011-3.979-.422c.134-1.256.228-2.533.278-3.795l3.996.161a61.718 61.718 0 0 1-.295 4.056zm-3.672-8.022a57.311 57.311 0 0 0-.222-3.798l3.984-.363c.122 1.344.201 2.71.235 4.06l-3.997.101zm-.69-7.573a57.58 57.58 0 0 0-.717-3.737l3.9-.883a62.7 62.7 0 0 1 .768 3.994l-3.951.626zm-1.678-7.418a57.314 57.314 0 0 0-1.204-3.607l3.75-1.393c.469 1.261.901 2.56 1.288 3.861l-3.834 1.139zm-2.647-7.127a56.6 56.6 0 0 0-1.675-3.416l3.531-1.88a62.158 62.158 0 0 1 1.792 3.654l-3.648 1.642zm-3.573-6.711a57.6 57.6 0 0 0-2.116-3.161l3.246-2.336a61.159 61.159 0 0 1 2.267 3.383l-3.397 2.114zm-4.442-6.171a56.63 56.63 0 0 0-2.521-2.85l2.906-2.748a60.83 60.83 0 0 1 2.698 3.05l-3.083 2.548zm-5.224-5.526a57.175 57.175 0 0 0-2.874-2.485l2.512-3.112a59.708 59.708 0 0 1 3.079 2.663l-2.717 2.934zm-72.994-1.921-2.563-3.071a61.498 61.498 0 0 1 3.212-2.503l2.352 3.236a56.718 56.718 0 0 0-3.001 2.338zm67.085-2.848a55.852 55.852 0 0 0-3.183-2.07l2.064-3.426a59.713 59.713 0 0 1 3.411 2.218l-2.292 3.278zm-60.934-1.616-2.123-3.39a60.518 60.518 0 0 1 3.524-2.043l1.888 3.526a56.55 56.55 0 0 0-3.289 1.907zm54.436-2.299a55.356 55.356 0 0 0-3.438-1.613l1.574-3.678a60.524 60.524 0 0 1 3.686 1.73l-1.822 3.561zM44.642 8.805l-1.639-3.649a59.857 59.857 0 0 1 3.773-1.54l1.383 3.754c-1.186.437-2.369.92-3.517 1.435zm40.76-1.703a55.448 55.448 0 0 0-3.627-1.127l1.055-3.858c1.303.356 2.61.763 3.889 1.208l-1.317 3.777zm-33.636-.919-1.118-3.841a59.01 59.01 0 0 1 3.95-1.003l.85 3.909c-1.23.267-2.469.581-3.682.935zM78.08 5.098a55.87 55.87 0 0 0-3.748-.622l.52-3.966c1.341.176 2.692.4 4.018.667l-.79 3.921zm-18.896-.529L58.607.611a58.863 58.863 0 0 1 4.051-.447l.3 3.989a54.476 54.476 0 0 0-3.774.416zm11.366-.46A56.807 56.807 0 0 0 67.044 4h-.293l-.02-4h.322c1.24 0 2.504.04 3.746.117l-.249 3.992zM109.537 103.727l-2.852-2.805c.439-.447.871-.898 1.293-1.356l2.941 2.711c-.45.489-.911.971-1.382 1.45z"
                />
              </g>
            </svg>
          </motion.div>

          <motion.form ref={formRef} onSubmit={sendEmail}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 4, duration: 1 }}>
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea rows={8} placeholder="Message" name="message" />
            <button type="submit">Submit</button>
            {error && "Error"}
            {success && "Success"}
          </motion.form>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
