import { useState } from "react";
import Avatar from "react-avatar";

const TopNavbar = (props) => {
  const { setSidebarToggle, sidebarToggle } = props;
  const [toggle, setToggle] = useState(false);

  return (
    <div id="TopBar">
      <div className="nav-toggle-wrap" style={{ width: "50px" }}>
        <button
          id="MainMenuToggle"
          onClick={() => setSidebarToggle(!sidebarToggle)}
          type="button"
          className="btn btn-icon nav-toggle btn-nav"
        >
          <i className="fal fa-angle-left"></i>
        </button>
        <div className="divider"></div>
      </div>
      <div className="extras ml-auto text-right">
        <div className="dropdown ml-3">
          <button
            className="btn btn-icon dropdown-toggle"
            type="button"
            onClick={() => setToggle(!toggle)}
          >
            <Avatar
              className="avatar avatar-sm "
              name="Steve Murphy"
              round="80px"
            />
          </button>
          {toggle && (
            <div
              className="dropdown-menu"
              style={{
                display: "flex",
                top: "0px",
                transform: "translate3d(-125px, 27px, 0px)",
              }}
            >
              <a href="/" className="dropdown-item">
                <i className="fal fa-sign-out mr-3"></i> Logout{" "}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
