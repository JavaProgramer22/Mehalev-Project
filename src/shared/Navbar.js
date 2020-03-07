import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserCircle,
  faClipboardList,
  faUserLock,
  faCog,
  faLightbulb,
  faStar,
  faClipboardCheck,
  faListAlt,
  faPlus,
  faStarHalfAlt,
  faPaperPlane,
  faArchive
} from "@fortawesome/free-solid-svg-icons";

// import {DataContext} from './Provider/DataProvider'

const NavbarWidth = "360px";

const styleNavbar = {
  position: "fixed",
  width: NavbarWidth,
  backgroundColor: "#f8f9fa",
  transition: "transform 0.228s ease-in",
  zIndex: "100",
  top: "0"
};

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };

    this.navbarMenu = [
      {
        icon: faHome,
        path: "/",
        name: "דף הבית",
        role: ["admin", "superVisor", "student", "external"]
      },
      {
        icon: faPlus,
        path: "/addproject",
        name: "הוספת פרויקט",
        role: ["admin"]
      },
      {
        icon: faPlus,
        path: "/addproject",
        name: "ערכית פרויקט",
        role: ["superVisor"]
      },
      {
        icon: faClipboardList,
        path: "/projects",
        name: "פרויקטים",
        role: ["admin", "external", "student", "superVisor"]
      },
      {
        icon: faArchive,
        path: "/ideas",
        name: "רעיונות",
        role: ["admin"]
      },
      {
        icon: faLightbulb,
        path: "/newidea",
        name: "רעיון חדש",
        role: ["admin"]
      },
      {
        icon: faUserCircle,
        path: "/users-list",
        name: "משתמשים",
        role: ["admin"]
      },

      {
        icon: faUserLock,
        path: "/roles",
        name: "תפקידים והרשאות",
        role: ["admin"]
      },

      {
        icon: faCog,
        path: "/settings/add/roles",
        name: "הגדרות",
        role: ["admin"]
      },

      {
        icon: faStar,
        path: "/my-skills/0",
        name: "My Skills",
        role: ["", ""]
      },
      {
        icon: faListAlt,
        path: "/pending-assignment-request",
        name: "Pending Assignment Request",
        role: [""]
      },
      {
        icon: faClipboardCheck,
        path: "/messagesFromSuperVisor",
        name: "הודעות ממנחה",
        role: ["student"]
      },

      {
        icon: faStarHalfAlt,
        path: "/pendingIdeas",
        name: "רעיונות בהמתנה לאישור",
        role: ["superVisor"]
      },

      {
        icon: faClipboardList,
        path: "/assign-history/",
        name: "פרויקט שלי ",
        role: ["student"]
      },
      {
        icon: faPaperPlane,
        path: "/contactus/",
        name: "צור קשר",
        role: ["superVisor", "admin", "student", "external"]
      },
      {
        icon: faClipboardCheck,
        path: "/signin",
        name: "התחברות",
        role: ["admin", "student", "superVisor"]
      }
    ];
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({ open: !this.state.open });
  }
  render() {
    return (
      <>
        <div>
          <h3
            style={{
              cursor: "pointer"
            }}
            className="ml-2"
            onClick={this.toggleNavbar}
          >
            &#9776;
          </h3>
          <span aria-hidden="true"></span>
          <div
            className="shadow"
            style={{
              transform: this.state.open
                ? `translateX(0)`
                : `translateX(-${NavbarWidth})`,
              ...styleNavbar
            }}
          >
            <button
              type="button"
              className="close m-3 mb-5"
              onClick={this.toggleNavbar}
            >
              <span aria-hidden="true">&times;</span>
            </button>

            <ul textalign="center" className="list-group list-group-flush mt-4">
              {(() => {
                // let role = this.context.data.authValues.role;
                // const roleName = role?role.name:''

                const roleName = "admin";

                // const roleName = "superVisor";
                // const roleName = "student";
                // const roleName = "external";

                return this.navbarMenu.map((menuItem, index) => {
                  if (menuItem.role.includes(roleName)) {
                    return (
                      <li
                        key={index}
                        className="list-group-item list-group-item-action"
                        onClick={this.toggleNavbar}
                        style={{ backgroundColor: "#f8f9fa" }}
                      >
                        <Link className="nav-link text-body" to={menuItem.path}>
                          <FontAwesomeIcon
                            icon={menuItem.icon}
                            className="mr-2"
                          />
                          {menuItem.name}
                        </Link>
                      </li>
                    );
                  }
                });
              })()}

              <li></li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

// Navbar.contextType = DataContext
