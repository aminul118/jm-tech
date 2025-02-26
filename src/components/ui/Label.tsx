import React from "react";

const Label = ({ name }: { name: string }) => {
  return (
    <label
      htmlFor={name}
      className="block text-sm font-semibold mb-1 capitalize ml-1"
    >
      {name}
    </label>
  );
};

export default Label;
