import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Comment from "./Comment";

import "./post.css";
const Post = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [usercom, setusercom] = useState("");

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const submithandler = (e) => {
    e.preventDefault();
    setusercom("");
  };
  return (
    <main id="main" class="main">
      <div className="post" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <div className="container" style={{ marginBottom: "2rem" }}>
          <div class="blog-container" style={{ maxWidth: "40rem" }}>
            <div class="blog-header">
              <div class="blog-cover">
                <div class="blog-author">
                  <h4>Deep Gulhane</h4>
                </div>
              </div>
            </div>

            <div class="blog-body">
              <div class="blog-title">
                <h4>
                  <a href="#/">I Like To Make Cool Things</a>
                </h4>
              </div>
              <div class="blog-summary">
                <p>
                  I love working on fresh designs that. To that end, I need to
                  freshen up my portfolio here because it does exactly the
                  opposite. For the next month I will be working almost
                  exclusively on my portfolio. Sounds like a lot of fun!
                </p>
              </div>
              <div class="blog-tags">
                <ul>
                  <div
                    className="usericon"
                    style={{ display: "flex", gap: "5px" }}
                  >
                    <li
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Up Vote"
                    >
                      <i class="bi bi-arrow-up-square" id="up"></i>
                    </li>
                    <li style={{ marginLeft: "0px" }}>
                      <p>69</p>
                    </li>
                    <li
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Down Vote"
                    >
                      <i class="bi bi-arrow-down-square" id="down"></i>
                    </li>

                    <div className="accordion-header" onClick={toggleAccordion}>
                      <div
                        className={
                          isOpen ? "accordion-icon open" : "accordion-icon"
                        }
                      >
                        {" "}
                        <li
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="Comment"
                        >
                          <i class="bi bi-chat-left-text" id="com"></i>
                        </li>
                      </div>
                    </div>
                  </div>
                  <div
                    className="adminicons"
                    style={{ display: "flex", gap: "7px" }}
                  >
                    <li
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Report!"
                    >
                      <i class="bi bi-exclamation-octagon" id="rep"></i>
                    </li>
                    <li
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Block"
                    >
                      <i class="bi bi-cone-striped" id="block"></i>
                    </li>
                    <li
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Delete"
                    >
                      <i class="bi bi-trash" id="del"></i>
                    </li>
                  </div>
                </ul>
              </div>

              {/* accordion */}
              <div className="accordion">
                {isOpen && (
                  <div className="accordion-content">
                    <div>
                      <form onSubmit={submithandler}>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                          <input
                            style={{
                              width: "95%",
                              padding: "5px",
                              borderRadius: "10px",
                              border: "0.3px solid black",
                            }}
                            type="text"
                            name="comment"
                            id="comment"
                            value={usercom}
                            placeholder="Add Comment"
                            onChange={(e) => setusercom(e.target.value)}
                          />
                          <button
                            type="submit"
                            style={{
                              border: "0px",
                              color: "white",
                              backgroundColor: "white",
                            }}
                          >
                            <i
                              class="bi bi-cursor-fill"
                              style={{ fontSize: "20px", color: "#4154f1" }}
                            ></i>
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* comment display */}
                    <div style={{ marginTop: "1rem" }}>
                      <Comment
                        Comment="Hi there it is comment by Deeeeeeeeeeeeeeeeeeeep"
                        Idname="Ganesh"
                      />
                      <Comment
                        Comment="Hi there it is comment by Deeeeeeeeeeeeeeeeeeeep"
                        Idname="Ganesh"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* second post */}
        <div className="container">
          <div class="blog-container" style={{ maxWidth: "40rem" }}>
            <div class="blog-header">
              <div class="blog-cover">
                <div class="blog-author">
                  <h4>Deep Gulhane</h4>
                </div>
              </div>
            </div>

            <div class="blog-body">
              <div class="blog-title">
                <h4>
                  <a href="#/">I Like To Make Cool Things</a>
                </h4>
              </div>
              <div class="blog-summary">
                <p>
                  I love working on fresh designs that. To that end, I need to
                  freshen up my portfolio here because it does exactly the
                  opposite. For the next month I will be working almost
                  exclusively on my portfolio. Sounds like a lot of fun!
                </p>
              </div>
              <div class="blog-tags">
                <ul>
                  <div
                    className="usericon"
                    style={{ display: "flex", gap: "5px" }}
                  >
                    <li
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Up Vote"
                    >
                      <i class="bi bi-arrow-up-square" id="up"></i>
                    </li>
                    <li>
                      <p>69</p>
                    </li>
                    <li
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Down Vote"
                    >
                      <i class="bi bi-arrow-down-square" id="down"></i>
                    </li>
                    <li
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Comment"
                    >
                      <i class="bi bi-chat-left-text" id="com"></i>
                    </li>
                  </div>
                  <div
                    className="adminicons"
                    style={{ display: "flex", gap: "5px" }}
                  >
                    <li
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Report!"
                    >
                      <i class="bi bi-exclamation-octagon" id="rep"></i>
                    </li>
                    <li
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Block"
                    >
                      <i class="bi bi-cone-striped" id="block"></i>
                    </li>
                    <li
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Delete"
                    >
                      <i class="bi bi-trash" id="del"></i>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Tooltip id="my-tooltip" />
      </div>
    </main>
  );
};

export default Post;
