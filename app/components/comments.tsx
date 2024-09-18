"use client";
import React, { useEffect } from "react";

function Comments() {
  let container: Element | undefined = undefined;
  // src="https://utteranc.es/client.js"
  // repo="Soy728/blog-comments"
  // issue-term="pathname"
  // label="comments"
  // theme="github-light"
  // crossorigin="anonymous"
  // async

  useEffect(() => {
    if (!container) return;

    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.setAttribute("repo", "Soy728/blog-comments");
    script.setAttribute("issue-term", "title");
    script.setAttribute("label", "comment");
    script.setAttribute("theme", `github-light`);
    script.setAttribute("crossorigin", "anonymous");
    container.appendChild(script);
  }, []);

  return <div className="comments" ref={container} />;
}

export default Comments;
