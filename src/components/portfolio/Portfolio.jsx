import { motion } from "motion/react";
import { works } from "../../content";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio" id="works">
      <div className="section-inner portfolioHeader">
        <p className="eyebrow">Selected work</p>
        <h2 className="spray-title">
          Archive of <span className="marker">marks.</span>
        </h2>
      </div>

      <div className="section-inner workWall">
        {works.map((item, index) => (
          <motion.article
            className={`workCard ${item.layout ?? ""}`}
            key={item.id}
            initial={{ y: 42, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: index * 0.06, duration: 0.55 }}
          >
            <div className="workImage">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="workInfo">
              <span>{String(item.id).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.medium}</p>
              <small>{item.tone}</small>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
