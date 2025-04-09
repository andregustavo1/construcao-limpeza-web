
import { useState, useEffect, RefObject, useRef } from 'react';

interface UseInViewProps {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useInView({ threshold = 0.1, triggerOnce = false }: UseInViewProps = {}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting || !triggerOnce) {
          setInView(isIntersecting);
        }
        
        if (isIntersecting && triggerOnce) {
          observer.unobserve(currentRef);
        }
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold, triggerOnce]);

  return { ref, inView };
}
