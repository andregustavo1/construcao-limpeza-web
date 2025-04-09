
import { useState, useEffect, RefObject } from 'react';

interface UseInViewProps {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useInView({ threshold = 0.1, triggerOnce = false }: UseInViewProps = {}) {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting || !triggerOnce) {
          setInView(isIntersecting);
        }
        
        if (isIntersecting && triggerOnce) {
          observer.unobserve(ref);
        }
      },
      { threshold }
    );

    observer.observe(ref);

    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, threshold, triggerOnce]);

  return { ref, inView, setRef };
}
