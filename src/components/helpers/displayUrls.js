import React from "react";

const copyShortLink = (link) => {
  const el = document.createElement("textarea");
  el.value = link;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

export const displayUrls = (arr) =>
  arr.map((el) => {
    return (
      <li className="link" key={el._id}>
        <span className="link__element link__element--long">{el.fullUrl}</span>
        <span className="link__element link__element--short">{`/${el.shortUrl}`}</span>
        <button
          className="link__element btn btn-copy"
          onClick={(e) => {
            copyShortLink(`http://localhost:3001/${el.shortUrl}`);
            e.target.style.backgroundColor = "#3b3054";
            e.target.textContent = "Copied!";
          }}
        >
          Copy
        </button>
      </li>
    );
  });
