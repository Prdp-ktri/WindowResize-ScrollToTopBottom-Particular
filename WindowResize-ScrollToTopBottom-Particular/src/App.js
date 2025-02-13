import ScrollToSection from "./components/scroll-to-particular-section/scroll-to-section";
import ScrollToTopAndBottom from "./components/use-window-resize/Scroll-Top-Bottom";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToSection from "./components/scroll-to-particular-section/scroll-to-section";

export default function MenuList({ list = [] }) {
  return (
    // <featureFlagGlobalState>
    //   <FeatureFlags />
    // </featureFlagGlobalState>
    // <UseFetchHookTest />
    // <UseOnClickOutsideTest />
    // <UseWindowResizeTest />
    // <ScrollToTopAndBottom />
    <ScrollToSection />
  );
}
