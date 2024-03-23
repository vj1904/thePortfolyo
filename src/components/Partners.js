import { useEffect, useState } from "react";
import { useTheme } from "./Contex";
const Partners = ({ dark }) => {
  const {user} = useTheme();

  const [data, setData] = useState([]);
  
  useEffect( () => {
    if (user.social_handles) { // Add a null check
      setData(user.social_handles
        .filter(social_handles => social_handles.enabled));
      console.log(data);
    }
  }, [user.social_handles]);

  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_partners">
        <div className="container">
          <div className="partners_inner">
            <ul>
              {data &&
                data.map((social, i) => (
                  <li
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    key={social?._id}
                    data-wow-delay={`0.${i + 1 * 2}s`}
                  >
                    <div className="list_inner">
                      <img
                        src={social?.image?.url}
                        alt="image"
                      />
                      <a className="dizme_tm_full_link" a="" href={social.url} />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/partners/1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Partners;
