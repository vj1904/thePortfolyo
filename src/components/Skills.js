import { useEffect, useState } from "react";
import { activeSkillProgress, fatchData } from "../utilits";
import { useTheme } from "../../pages/Contex";

const Skills = ({ dark }) => {
  const getDefaultColor = (index) => {
    const colors = ["rgb(247, 80, 35)", "rgb(28, 190, 89)", "rgb(128, 103, 240)"]; 
    return colors[index % colors.length]; 
  };
  
  const {user} = useTheme();

  const [data, setData] = useState([]);
  useEffect( () => {
    if (user.skills) { // Add a null check
      const filteredAndSortedData = user.skills
        .filter(skill => skill.enabled) // Filter based on the "enabled" field
        .sort((a, b) => a.sequence - b.sequence); // Sort based on the "sequence" field
      setData(filteredAndSortedData);
    }
  }, [user.skills]);
  
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);
  return (
    <div className="dizme_tm_section">
      <div className="dizme_tm_skills">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div
                className="dizme_tm_main_title wow fadeInUp"
                data-wow-duration="1s"
                data-align="left"
              >
                <span>Design is Life</span>
                <h3>I Develop Skills Regularly to Keep Me Update</h3>
                <p>
                  Most common methods for designing websites that work well on
                  desktop is responsive and adaptive design
                </p>
              </div>
              <div
                className="dodo_progress wow fadeInUp"
                data-wow-duration="1s"
              >
                {data &&
                  data.map((skill, i) => data && (
                    <div
                      className="progress_inner skillsInner___"
                      data-value={skill?.percentage}
                      data-color={skill.color || getDefaultColor(i)}
                      key={skill?._id}
                    >
                      <span>
                        <span className="label">{skill.name}</span>
                        <span className="number">{skill.percentage}%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="right">
              <img src={`img/skills/${dark ? 2 : 1}.jpg`} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
