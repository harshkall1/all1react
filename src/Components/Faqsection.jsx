import React, { useState } from 'react'
import './Style.css'

const faqs = [
  {
    question: "What services does All1 Digitalz offer?",
    answer:
      "All1 Digitalz provides a wide range of IT services, including website development, software development, digital marketing, and other customized solutions.",
  },
  {
    question: "Where is All1 Digitalz based?",
    answer:
      "We are based in Delhi, India, but we serve clients worldwide with top-notch digital solutions.",
  },
  {
    question: "Does All1 Digitalz offer customized IT solutions?",
    answer:
      "Yes! We specialize in developing customized IT solutions tailored to your business needs.",
  },
  {
    question: "How can I get started with All1 Digitalz?",
    answer:
      "You can contact us through our website or email us with your project requirements, and our team will reach out to you.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Absolutely! We offer post-development support and maintenance services to ensure your website or software runs smoothly.",
  },
];


const FaqsSection = () => {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>

      <section className="faq-section colored-bg">
        <div className="container">
          <h2 style={{textAlign:"center", marginBottom: "30px"}}>Frequently Asked Questions (FAQs)</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? "open" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <span>{`Q${index + 1}. ${faq.question}`}</span>
                  <span className="icon">{openIndex === index ? "−" : "+"}</span>
                </div>
                {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default FaqsSection