import { useState } from "react";

export default function useModal(initialIsVisible) {
  const [isVisible, setIsVisible] = useState(
    initialIsVisible !== null ? initialIsVisible : false
  );

  const toggleModal = () => setIsVisible((prev) => !prev);

  return [isVisible, toggleModal];
}
