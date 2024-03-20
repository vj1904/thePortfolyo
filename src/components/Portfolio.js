import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { dataImage, portfolioHover } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
import { useTheme } from "./Contex";

const Portfolio = () => {
  const {user} = useTheme();
  const [data, setData] = useState([]);
  useEffect( () => {
    if (user.projects) { // Add a null check
      const filteredAndSortedData = user.projects
        .filter(project => project.enabled) // Filter based on the "enabled" field
        .sort((a, b) => a.sequence - b.sequence); // Sort based on the "sequence" field
      setData(filteredAndSortedData);
      console.log(data);
    }
  }, []);

  useEffect(() => {
    dataImage();
    portfolioHover();
  }, []);

  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  // Popup
  const [popup, setPopup] = useState(null);
  const openPopup = (item) => {
    setPopup(item);
  };

  const closePopup = () => {
    setPopup(null);
  }

  return (
    <div className="dizme_tm_section" id="portfolio">
      <DetailsPopup open={popup !== null} close={closePopup} item={popup} />
      <div className="dizme_tm_portfolio">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Portfolio</span>
            <h3>My Amazing Works</h3>
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a
                  className={`c-pointer ${activeBtn("*")}`}
                  onClick={handleFilterKeyChange("*")}
                >
                  All
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("Reactjs")}`}
                  onClick={handleFilterKeyChange("Reactjs")}
                >
                  Reactjs
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("Nextjs")}`}
                  onClick={handleFilterKeyChange("Nextjs")}
                >
                  Nextjs
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("Mern")}`}
                  onClick={handleFilterKeyChange("Mern")}
                >
                  Mern
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer ${activeBtn("CSS")}`}
                  onClick={handleFilterKeyChange("CSS")}
                >
                  CSS
                </a>
              </li>
              <li>
                <a
                  className={`c-pointer  ${activeBtn("TailwindCSS")}`}
                  onClick={handleFilterKeyChange("TailwindCSS")}
                >
                  TailwindCSS
                </a>
              </li>
            </ul>
          </div>
          <div className="dizme_tm_portfolio_titles" />
          <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
            <ul className="gallery_zoom grid">
            {data.map((item) => (
              <li key={item?._id} className={`${item?.techStack.join(' ')} grid-item`}>
                <div className="inner">
                <div className="entry dizme_tm_portfolio_animation_wrap" data-title={item?.title} data-category={item?.techStack}>
                <a onClick={() => openPopup(item)}>
                        <img src={item?.image?.url} alt="image" />
                        <div className="main" data-img-url={item?.image?.url}  />
                      </a>
                    </div>
                  <div className="mobile_title">
                  <h3>{item?.title}</h3>
                  <span>
                    {item.techStack.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/portfolio/1.png" alt="image" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <img src="img/brushes/portfolio/2.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Portfolio;