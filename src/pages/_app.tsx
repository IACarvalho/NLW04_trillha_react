import "../styles/global.css";
import { ChallengeProvider } from "../Contexts/ChallengesContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengeProvider>
      <Component {...pageProps} />
    </ChallengeProvider>
  );
}

export default MyApp;
