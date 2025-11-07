import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin,
    triggerOnce = true
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const fallbackTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Detect mobile and adjust rootMargin accordingly
  const getMobileFriendlyRootMargin = useCallback(() => {
    if (rootMargin) return rootMargin;
    
    // Check if mobile device
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    // More lenient rootMargin for mobile devices
    return isMobile ? '0px 0px -50px 0px' : '0px 0px -100px 0px';
  }, [rootMargin]);

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
      if (triggerOnce) {
        setHasAnimated(true);
      }
      // Clear fallback timer if observer triggers
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
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

    const mobileFriendlyRootMargin = getMobileFriendlyRootMargin();

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin: mobileFriendlyRootMargin,
    });

    const currentElement = elementRef.current;
    const currentObserver = observerRef.current;

    if (currentElement && currentObserver) {
      currentObserver.observe(currentElement);
      
      // Fallback: Show content after 1 second if observer doesn't trigger
      // This ensures content is visible on mobile even if IntersectionObserver fails
      fallbackTimerRef.current = setTimeout(() => {
        setIsVisible(prevVisible => {
          if (!prevVisible && !hasAnimated) {
            if (triggerOnce) {
              setHasAnimated(true);
            }
            return true;
          }
          return prevVisible;
        });
      }, 1000);
    }

    return () => {
      if (currentElement && currentObserver) {
        currentObserver.unobserve(currentElement);
      }
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
      }
    };
  }, [threshold, getMobileFriendlyRootMargin, handleIntersection, hasAnimated, triggerOnce]);

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
  const fallbackTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing timers
    timersRef.current.forEach(timer => clearTimeout(timer));
    timersRef.current = [];
    
    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
    
    if (isVisible) {
      // Adjust delay for mobile devices (shorter delay for better UX)
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
      const adjustedDelay = isMobile ? Math.max(50, delay * 0.5) : delay;
      
      for (let i = 0; i < itemCount; i++) {
        const timer = setTimeout(() => {
          setVisibleItems(prev => {
            const newState = [...prev];
            newState[i] = true;
            return newState;
          });
        }, i * adjustedDelay);
        timersRef.current.push(timer);
      }
    }
    
    // Fallback: Show all items after 2 seconds if observer doesn't trigger or animations don't complete
    // This ensures content is visible on mobile even if IntersectionObserver fails
    fallbackTimerRef.current = setTimeout(() => {
      setVisibleItems(prev => {
        const allVisible = prev.every(item => item === true);
        if (!allVisible) {
          return new Array(itemCount).fill(true);
        }
        return prev;
      });
    }, 2000);

    return () => {
      timersRef.current.forEach(timer => clearTimeout(timer));
      timersRef.current = [];
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
      }
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
