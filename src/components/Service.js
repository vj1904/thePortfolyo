import parse from "html-react-parser";
import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
import ServicePopup from "./popup/ServicePopup";
import { useTheme } from "./Contex";

const Service = ({ dark }) => {
  const {user} = useTheme()
  const [staticData, setStaticData] = useState([]);
  const [services, setServices] = useState([])
  const [popupdata, setPopupdata] = useState({});
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    
    const fetchDataAndMerge = async () => {
      const dynamicData = user?.services?.filter(service => service.enabled);
      const staticData = await fatchData("/static/service.json");

      const mergedData = mergeData(staticData, dynamicData);
      setServices(dynamicData);
      setStaticData(mergedData);

    setTimeout(() => {
      let VanillaTilt = require("vanilla-tilt");
      VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
        maxTilt: 6,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 500,
        transition: true,
      });
    }, 1000);
  };
  fetchDataAndMerge();
  }, [user.services]);

  const mergeData = (staticData, dynamicData) => {
    if (!Array.isArray(dynamicData) || dynamicData.length === 0) {
      return staticData; // If dynamicData is undefined or empty, return staticData as is
    }
    
    // Ensure dynamicData has the same length as staticData
    const mergedLength = Math.min(staticData.length, dynamicData.length);
  
    return staticData.slice(0, mergedLength).map((staticItem, index) => {
      const dynamicItem = dynamicData[index] || {}; // Use empty object if dynamicItem is undefined
      return { ...staticItem, ...dynamicItem };
    });
  };
  

  const onClick = (index) => {
    setPopup(true);
    setPopupdata(staticData[index]);
  };

  return (
    <div className="dizme_tm_section" id="service">
      <ServicePopup
        data={popupdata}
        open={popup}
        close={() => setPopup(false)}
      />
      <div className="dizme_tm_services">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Services</span>
            <h3>What I Do for Clients</h3>
            <p>
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
          </div>
          <div className="service_list">
            <ul>
              {staticData.map(
                  (item, i) =>
                     (
                      <li
                        className={`wow ${
                          (i * 1) % 2 === 0 ? "fadeInLeft" : "fadeInRight"
                        }`}
                        data-wow-duration="1s"
                        key={i}
                        onClick={() => onClick(i)}
                      >
                        <div className="list_inner tilt-effect">
                          <span className="icon">
                            {parse(item.icon.svg)}
                            {dark ? (
                              <img
                                className="back"
                                src={item.icon.iconBgDark}
                                alt="image"
                              />
                            ) : (
                              <img
                                className="back"
                                src={item.icon.iconBg}
                                alt="image"
                              />
                            )}
                          </span>
                          <div className="title">
                            <h3>{services && services[i]?.name}</h3>
                            <span className="price">
                              Starts from <span>{services && services[i]?.charge}</span>
                            </span>
                          </div>
                          <div className="text">
                            <p>{services && services[i]?.desc}</p>
                          </div>
                          <a className="dizme_tm_full_link" href="#" />
                          <img
                            className="popup_service_image"
                            src={services && services[i]?.image.url}
                            alt="image"
                          />
                        </div>
                      </li>
                    )
                )}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/service/5.png" alt="image" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <img src="img/brushes/service/6.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Service;
