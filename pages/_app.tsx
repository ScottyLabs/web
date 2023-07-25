import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle as faCircleHollow } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCircle } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from 'next/app';
import BaseLayout from "../src/layouts/BaseLayout";
import '../styles/globals.scss';

function MyApp({ Component, pageProps, router }: AppProps) {
	library.add(faBars);
	library.add(faCircle);
	library.add(faCircleHollow);
  return (
    <BaseLayout collapsedNavBar={router.route != "/"}>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={router.route}
          variants={{
            hidden: { opacity: 0 },
            enter: { opacity: 1 },
            exit: { opacity: 0 },
          }}
          initial="hidden" // Set the initial state to variants.hidden
          animate="enter" // Animated state to variants.enter
          exit="exit" // Exit state (used later) to variants.exit
          transition={{ type: "tween" }} // Set the transition to linear
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </BaseLayout>
  );
}

export default MyApp;
