import React, { useState } from "react";
import "./header.css";
import Post from "../Post/Post";
const Header = () => {
  const [show, setShow] = useState(false);
  const sidebar = () => {
    document.body.classList.toggle("toggle-sidebar");
  };
  return (
    <main>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src="assets/img/mmlogo.png" alt="" />
            <span className="d-none d-lg-block">Menstrual Mavericks</span>
          </a>
          <div onClick={sidebar}>
            <i className="bi bi-list toggle-sidebar-btn"></i>
          </div>
        </div>

        <div className="search-bar">
          <form
            className="search-form d-flex align-items-center"
            method="POST"
            action="#ok"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="#ok">
                <i className="bi bi-search"></i>
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link nav-icon"
                href="#ok"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-bell"></i>
                <span className="badge bg-primary badge-number">4</span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  You have 2 new notifications
                  <a href="#ok">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-exclamation-circle text-warning"></i>
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary"></i>
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <a href="#ok">Show all notifications</a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link nav-icon"
                href="#ok"
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-chat-left-text"></i>
                <span className="badge bg-success badge-number">3</span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
                <li className="dropdown-header">
                  You have 3 new messages
                  <a href="#ok">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <a href="#ok">
                    <img
                      src="assets/img/messages-1.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>Maria Hudson</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>4 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <a href="#ok">
                    <img
                      src="assets/img/messages-2.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>Anna Nelson</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>6 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                  <a href="#ok">
                    <img
                      src="assets/img/messages-3.jpg"
                      alt=""
                      className="rounded-circle"
                    />
                    <div>
                      <h4>David Muldon</h4>
                      <p>
                        Velit asperiores et ducimus soluta repudiandae labore
                        officia est ut...
                      </p>
                      <p>8 hrs. ago</p>
                    </div>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li className="dropdown-footer">
                  <a href="#ok">Show all messages</a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown pe-3">
              <a className="nav-link nav-icon" href="/cart">
                <i class="bi bi-cart-plus"></i>
                <span className="badge bg-primary badge-number">1</span>
              </a>
            </li>

            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#ok"
                data-bs-toggle="dropdown"
              >
                <img
                  src="https://media.istockphoto.com/id/612520134/vector/girl-icon-cartoon-single-avatar-people-icon.jpg?s=612x612&w=0&k=20&c=DiBfKRoHjMpR1Ncm77ZxQLEGaq5JTD-0ddQTy0EkRT0="
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  V. Aglawe
                </span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>Vaibhavi Aglawe</h6>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="/profile"
                  >
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#ok"
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <a className="nav-link " href="/">
              <i className="bi bi-house-fill"></i>
              <span>Home</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link " href="/post">
              <i class="bi bi-postcard-fill"></i>
              <span>Post</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link " href="/dash">
              <i className="bi bi-grid-fill"></i>
              <span>Dashboard</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link " href="/purchase">
              <i class="bi bi-bag-fill"></i>
              <span>Buy</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link " href="/chat">
              <i class="bi bi-envelope-fill"></i>
              <span>Contact Experts</span>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link " href="https://chatappmm.onrender.com">
              <i class="bi bi-gear-fill"></i>
              <span>AI Assistance</span>
            </a>
          </li>
        </ul>
      </aside>
    </main>
  );
};

export default Header;
