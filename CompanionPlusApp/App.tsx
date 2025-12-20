// App.tsx ✅ RootNavigator already includes NavigationContainer

import React from 'react';
import RootNavigator from './navigation/RootNavigator';
import { ThemeProvider } from './context/ThemeContext';
export default function App() {
  return(
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
);
}
