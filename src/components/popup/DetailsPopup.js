const DetailsPopup = ({ open, close, item }) => {
  if (!item) return null;
  return (
    <div className={`dizme_tm_modalbox ${open ? "opened" : ""}`}>
      <div className="box_inner">
        <div className="close">
          <a href="#" onClick={close}>
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">
          <div className="popup_details">
            <div className="top_image">
              <img src="img/thumbs/4-2.jpg" alt="image" />
              <div
                className="main"
                data-img-url={item?.image?.url}
                style={{ backgroundImage: `url(${item.image.url})` }}
              />
            </div>
            <div className="portfolio_main_title">
              <h3>{item?.title}</h3>
              <div>
              <span>
              <a href={item?.liveurl}>liveUrl </a>
              <a href={item?.githuburl}> GitUrl</a>
              </span>
              </div>
              <span>
                <a href="#">Detail</a>
              </span>
              <div />
            </div>
            <div className="main_details">
              <div className="textbox">
                <p>
                {item && item.description !== null ? item.description : "Details not available"}
                </p>
              </div>
              <div className="detailbox">
                <ul>
                  <li>
                    <span className="first">Client</span>
                    <span>Personal</span>
                  </li>
                  <li>
                    <span className="first">Tech Stack</span>
                    <span>
                      <a href="#">{`${item?.techStack.join(' ')}`}</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsPopup;
