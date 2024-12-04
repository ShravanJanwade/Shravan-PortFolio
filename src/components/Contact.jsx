import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import emailjs from "emailjs-com"; // Import EmailJS

const EMAIL_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAIL_TEMPLATE_RECIEVED = import.meta.env
  .VITE_EMAILJS_TEMPLATE_ID_RECIEVED;
const EMAIL_TEMPLATE_AUTO_REPLY = import.meta.env
  .VITE_EMAILJS_TEMPLATE_ID_AUTO_REPLY;
const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const Contact = () => {
  const [showModal, setShowModal] = useState(false); // State for modal
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);

    // Send the main email (to yourself)
    emailjs
      .send(
        EMAIL_SERVICE, // Your EmailJS Service ID
        EMAIL_TEMPLATE_RECIEVED, // Your EmailJS Template ID for received emails
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        EMAIL_PUBLIC_KEY // Your EmailJS Public Key (User ID)
      )
      .then(
        () => {
          // Send the auto-reply email (to the user)
          emailjs
            .send(
              EMAIL_SERVICE, // Your EmailJS Service ID
              EMAIL_TEMPLATE_AUTO_REPLY, // Your EmailJS Template ID for auto-reply emails
              {
                to_name: form.name, // User's name
                to_email: form.email, // User's email address
                reply_message:
                  "Thank you for getting in touch! I will respond as soon as possible.", // Example auto-reply message
              },
              EMAIL_PUBLIC_KEY // Your EmailJS Public Key (User ID)
            )
            .then(() => {
              setLoading(false);
              setShowModal(true); // Show success modal
              setForm({ name: "", email: "", message: "" }); // Reset the form
              setTimeout(() => setShowModal(false), 3000); // Hide modal after 3 seconds
            })
            .catch((error) => {
              console.error("Error sending auto-reply:", error);
              alert(
                "Message sent successfully, but the confirmation email could not be sent."
              );
              setLoading(false);
            });
        },
        (error) => {
          setLoading(false);
          console.error("Error sending email:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
      {showModal && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-primary p-8 rounded-lg shadow-lg text-center">
            <motion.div
              className="text-green-500 text-5xl mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
            >
              ✔
            </motion.div>
            <h2 className="text-xl font-bold mb-2">
              Message Sent Successfully!
            </h2>
            <p className="text-gray-600">I will reply as fast as possible.</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
