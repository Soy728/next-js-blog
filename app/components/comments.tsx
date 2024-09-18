"use client";

function Comments() {
  return (
    <section
      style={{ width: "100%" }}
      ref={(element) => {
        if (!element) return;

        const scriptElement = document.createElement("script");
        scriptElement.setAttribute("src", "https://utteranc.es/client.js");
        scriptElement.setAttribute("repo", "Soy728/blog-comments");
        scriptElement.setAttribute("issue-term", "pathname");
        scriptElement.setAttribute("label", "comments");
        scriptElement.setAttribute("theme", "github-light");
        scriptElement.setAttribute("crossorigin", "anonymous");
        scriptElement.setAttribute("async", "true");
        element.replaceChildren(scriptElement);
      }}
    />
  );
}

export default Comments;
