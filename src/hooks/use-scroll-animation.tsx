import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
      if (triggerOnce) {
        setHasAnimated(true);
      }
    } else if (!triggerOnce) {
      setIsVisible(false);
    }
  }, [triggerOnce]);

  useEffect(() => {
    // Check if IntersectionObserver is supported
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Fallback for browsers without IntersectionObserver support
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    const currentElement = elementRef.current;
    const currentObserver = observerRef.current;

    if (currentElement && currentObserver) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement && currentObserver) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, handleIntersection]);

  return {
    elementRef,
    isVisible: triggerOnce ? (hasAnimated || isVisible) : isVisible,
  };
};

// Hook for staggered animations
export const useStaggeredAnimation = (itemCount: number, delay: number = 100) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));
  const { elementRef, isVisible } = useScrollAnimation();
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    if (isVisible) {
      // Clear any existing timers
      timersRef.current.forEach(timer => clearTimeout(timer));
      timersRef.current = [];
      
      for (let i = 0; i < itemCount; i++) {
        const timer = setTimeout(() => {
          setVisibleItems(prev => {
            const newState = [...prev];
            newState[i] = true;
            return newState;
          });
        }, i * delay);
        timersRef.current.push(timer);
      }
    }

    return () => {
      timersRef.current.forEach(timer => clearTimeout(timer));
      timersRef.current = [];
    };
  }, [isVisible, itemCount, delay]);

  // Reset visible items when component unmounts or itemCount changes
  useEffect(() => {
    setVisibleItems(new Array(itemCount).fill(false));
  }, [itemCount]);

  return {
    elementRef,
    visibleItems,
    isVisible,
  };
};
