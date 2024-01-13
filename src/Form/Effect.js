import React, { useEffect, useState } from "react";
let count = 0;
function Effect(props) {
  useEffect(() => {
    count++;
  });
  return (
    <div>
      <h2>
        render count :{count} times || count:{props.count}
      </h2>
    </div>
  );
}

export default Effect;
