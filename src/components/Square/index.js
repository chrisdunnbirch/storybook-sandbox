/*
 * 1. Run:
 *    yarn storybook
 *
 * 2. Expected:
 *    It will load correctly with WARNING for react-hooks/rules-of-hooks
 *
 * 3. Test:
 *    Make any change to this file (e.g. random number below), save the file,
 *    and observe that storybook will ERROR for react-hooks/rules-of-hooks
 *
 * Random number: 2143534665768
 */
import React from "react";
import "./square.scss";

export const Square = () => (
  <div className="square" />
);
