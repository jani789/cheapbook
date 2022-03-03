import React from "react";

function LabelInput({ placeholder, value, type, mainClass,rows }) {
  return (
    <div className={`font-roboto ${mainClass}`}>
      <label
        className="font-raleway text-lg font-medium leading-6 text-black capitalize "
      >
        {value}
      </label>
      <div className="mt-3">
        <input
          type={type}
          className="py-2 px-4 block w-full sm:text-sm border border-black rounded-full placeholder-black"
          placeholder={placeholder}
          rows={rows}
        />
      </div>
    </div>
  );
}

export default LabelInput;
