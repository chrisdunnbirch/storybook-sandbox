/*
 * 1. Run:
 *    yarn storybook
 *
 * 2. Expected:
 *    It will load correctly with WARNING for react-hooks/rules-of-hooks
 *
 * 3. Test:
 *    Make any change to this file, save the file, and observe that storybook
 *    will hot reload with just another WARNING for react-hooks/rules-of-hooks
 *
 * Random number: 21435346657681
 */
import React, { useState } from "react";
import { Circle } from ".";

export default { title: "Circle" };

export const test = () => {
  const [count, setCount] = useState(0);
  return <Circle count={count} handleClick={() => setCount(count + 1)} />;
};
