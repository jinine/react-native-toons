import * as React from "react";
export const NavigationReference = React.createRef();
export function navigate(name) {
  NavigationReference.current?.navigate(name);
}
