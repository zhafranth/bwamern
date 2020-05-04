import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function Button(props) {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isSmall) className.push("btn-sm");
  if (props.hasShadow) className.push("btn-shadow");
  if (props.isLarge) className.push("btn-lg");
  if (props.isBlock) className.push("btn-block");

  // Function onClick
  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  // disable or loading
  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) className.push("disabled");
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  // Kondisi apabila button diberi type:link akan merender button dalam kondisi if
  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    }
  } else {
    return (
      <Link
        to={props.href}
        className={className.join(" ")}
        style={props.style}
        onClick={onClick}
      >
        {props.children}
      </Link>
    );
  }

  // Apabila tidak diberi type button akan merender yang button dibawah
  return (
    <button
      to={props.href}
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  className: propTypes.string,
  onClick: propTypes.func,
  target: propTypes.string,
  href: propTypes.string,
  isDisabled: propTypes.bool,
  isExternal: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isPrimary: propTypes.bool,
  isBlock: propTypes.bool,
  hasShadow: propTypes.bool,
  isLoading: propTypes.bool,
};
