import { useFonts as useLato, Lato_400Regular, } from '@expo-google-fonts/lato';
import { useFonts as useOswald, Oswald_400Regular, } from '@expo-google-fonts/oswald';
import { useFonts as useBebasNeue, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';

import MyTabs from './routes/bottomtab';

export default function App() {

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  const [BebasNeueLoaded] = useLato({
    BebasNeue_400Regular,
  });

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  if (!BebasNeueLoaded) {
    return null;
  }

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    MyTabs()
  );
}

