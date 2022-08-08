import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import {
  SignedInNavigation,
  SignedOutNavigation,
} from "./navigation/ScreenNavigation";
import React, { useState } from "react";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  if (!isLoadingComplete) {
    return null;
  } else {
    return userAuthenticated ? <SignedInNavigation /> : <SignedOutNavigation />;
  }
}
