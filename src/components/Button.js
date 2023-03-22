import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outlined,
  rounded,
  ...rest
}) {
  console.log(rest);

  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-700 bg-gray-900 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-yellow-500 bg-yellow-500 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      // "bg-white": outlined,
      // "text-blue-500": outlined && primary,
      // "text-gray-900": outlined && secondary,
      // "text-yellow-00": outlined && warning,
      // "text-green-500": outlined && success,
      // "text-red-600": outlined && danger,
    }
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkValidationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        `Only one of primary, secondary, success, warning, danger can be true. Count was: ${count}`
      );
    }
  },
};

export default Button;
