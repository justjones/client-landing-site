export default function Button({
  as = "a",
  href,
  onClick,
  variant = "primary",
  children,
  type,
  ...rest
}) {
  const className = `btn btn--${variant}`;
  const common = { className, onClick, ...rest };

  if (as === "button") {
    return (
      <button type={type || "button"} {...common}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} {...common}>
      {children}
    </a>
  );
}

