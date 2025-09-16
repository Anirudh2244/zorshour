import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { Rocket, Telescope, Target, LineChart } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR_CSS = '38, 38, 38';
const MOBILE_BREAKPOINT = 768;

const cardData = [
  {
    color: '#060010',
    title: 'Performance First',
    description:
      'We don’t just create campaigns, we engineer outcomes. Every strategy is built to maximize ROI, optimize conversions, and deliver measurable growth. Success isn’t about vanity metrics — it’s about real results that move your brand forward.',
    icon: Rocket,
  },
  {
    color: '#060010',
    title: 'Visibility Where It Matters',
    description:
      'Whether it’s ranking your products higher on eCommerce platforms or placing your message in front of the right audience, we focus on positioning your brand where it counts. Silent but powerful, our methods ensure you stand out without shouting.',
    icon: Telescope,
  },
  {
    color: '#060010',
    title: 'Precision Targeting',
    description:
      'Through data-driven insights, we craft campaigns that reach the right people at the right time. From hyper-targeted ads to influencer partnerships that resonate, our approach ensures your marketing dollars work harder and smarter.',
    icon: Target,
  },
  {
    color: '#060010',
    title: 'Creativity Backed by Data',
    description:
      'We believe creativity should always serve performance. Every idea we execute is fueled by imagination but validated by analytics — making sure every piece of content, ad, or collaboration contributes directly to your growth goals.',
    icon: LineChart,
  },
];

const createParticleElement = (x, y, color = DEFAULT_GLOW_COLOR_CSS) => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = radius => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card, mouseX, mouseY, glow, radius) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty('--glow-x', `${relativeX}%`);
  card.style.setProperty('--glow-y', `${relativeY}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

const useIntersectionObserver = (ref, options) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};

const ParticleCard = ({
  children,
  className = '',
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR_CSS,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false
}) => {
  const cardRef = useRef(null);
  const isIntersecting = useIntersectionObserver(cardRef, { threshold: 0.9 });
  const particlesRef = useRef([]);
  const timeoutsRef = useRef([]);
  const memoizedParticles = useRef([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill?.();
    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        }
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current) return;
    if (!particlesInitialized.current) {
      initializeParticles();
    }
    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!cardRef.current) return;
        const clone = particle.cloneNode(true);
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);
        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });
        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: 'none',
          repeat: -1,
          yoyo: true
        });
        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true
        });
      }, index * 100);
      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const startAnimations = () => {
      element.classList.add('is-active');
      animateParticles();
      if (enableTilt) {
        gsap.to(element, { rotateX: 5, rotateY: 5, duration: 0.3, ease: 'power2.out', transformPerspective: 1000 });
      }
      if (enableMagnetism) {
        magnetismAnimationRef.current = gsap.to(element, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
      }
    };

    const stopAnimations = () => {
      element.classList.remove('is-active');
      clearAllParticles();
      if (enableTilt) {
        gsap.to(element, { rotateX: 0, rotateY: 0, duration: 0.3, ease: 'power2.out' });
      }
      if (enableMagnetism) {
        gsap.to(element, { x: 0, y: 0, duration: 0.3, ease: 'power2.out' });
      }
    };

    if (!disableAnimations) { // Desktop Logic
      const handleMouseMove = e => {
        if (!enableTilt && !enableMagnetism) return;
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        if (enableTilt) {
          const rotateX = ((y - centerY) / centerY) * -10;
          const rotateY = ((x - centerX) / centerX) * 10;
          gsap.to(element, { rotateX, rotateY, duration: 0.1, ease: 'power2.out', transformPerspective: 1000 });
        }
        if (enableMagnetism) {
          const magnetX = (x - centerX) * 0.05;
          const magnetY = (y - centerY) * 0.05;
          magnetismAnimationRef.current = gsap.to(element, { x: magnetX, y: magnetY, duration: 0.3, ease: 'power2.out' });
        }
      };

      const handleClick = e => {
        if (!clickEffect) return;
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const maxDistance = Math.max(
          Math.hypot(x, y),
          Math.hypot(x - rect.width, y),
          Math.hypot(x, y - rect.height),
          Math.hypot(x - rect.width, y - rect.height)
        );
        const ripple = document.createElement('div');
        ripple.style.cssText = `
          position: absolute;
          width: ${maxDistance * 2}px;
          height: ${maxDistance * 2}px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
          left: ${x - maxDistance}px;
          top: ${y - maxDistance}px;
          pointer-events: none;
          z-index: 1000;
        `;
        element.appendChild(ripple);
        gsap.fromTo(
          ripple,
          { scale: 0, opacity: 1 },
          { scale: 1, opacity: 0, duration: 0.8, ease: 'power2.out', onComplete: () => ripple.remove() }
        );
      };

      element.addEventListener('mouseenter', startAnimations);
      element.addEventListener('mouseleave', stopAnimations);
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('click', handleClick);

      return () => {
        stopAnimations();
        element.removeEventListener('mouseenter', startAnimations);
        element.removeEventListener('mouseleave', stopAnimations);
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('click', handleClick);
      };
    } else { // Mobile Logic
      if (isIntersecting) {
        startAnimations();
      } else {
        stopAnimations();
      }
    }
  }, [disableAnimations, isIntersecting, animateParticles, clearAllParticles, enableTilt, enableMagnetism, clickEffect, glowColor]);

  return (
    <div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      style={{ ...style, position: 'relative', overflow: 'hidden' }}
    >
      {children}
    </div>
  );
};

const GlobalSpotlight = ({
  gridRef,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR_CSS
}) => {
  const spotlightRef = useRef(null);
  const isInsideSection = useRef(false);
  const isMobile = useMobileDetection();
  const disableAnimations = isMobile;

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;
    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;
    const handleMouseMove = e => {
      if (!spotlightRef.current || !gridRef.current) return;
      const section = gridRef.current.closest('.bento-section');
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
      isInsideSection.current = mouseInside || false;
      const cards = gridRef.current.querySelectorAll('.card');
      if (!mouseInside) {
        gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' });
        cards.forEach(card => { card.style.setProperty('--glow-intensity', '0'); });
        return;
      }
      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;
      cards.forEach(card => {
        const cardElement = card;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);
        minDistance = Math.min(minDistance, effectiveDistance);
        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }
        updateCardGlowProperties(cardElement, e.clientX, e.clientY, glowIntensity, spotlightRadius);
      });
      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });
      const targetOpacity = minDistance <= proximity
        ? 0.8
        : minDistance <= fadeDistance
          ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
          : 0;
      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: 'power2.out'
      });
    };
    const handleMouseLeave = () => {
      isInsideSection.current = false;
      gridRef.current?.querySelectorAll('.card').forEach(card => { card.style.setProperty('--glow-intensity', '0'); });
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, { opacity: 0, duration: 0.3, ease: 'power2.out' });
      }
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);
  return null;
};

const BentoCardGrid = ({ children, gridRef }) => (
  <div
    className="bento-section grid gap-2 w-[100%] select-none relative"
    style={{ fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.5rem)' }}
    ref={gridRef}
  >
    {children}
  </div>
);

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return isMobile;
};

const AnimatedContent = ({ children, disableAnimations }) => {
  const contentRef = useRef(null);
  useEffect(() => {
    if (disableAnimations || !contentRef.current) return;
    const content = contentRef.current;
    const title = content.querySelector('.card__title');
    const description = content.querySelector('.card__description');
    const icon = content.querySelector('.card__icon');
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: content,
        start: 'top 85%',
        once: true,
      }
    });
    tl.fromTo(icon, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0)
      .fromTo(title, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.1)
      .fromTo(description, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, 0.2);
  }, [disableAnimations]);
  return <div ref={contentRef}>{children}</div>;
};

const PhilosophySection = ({
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR_CSS,
  clickEffect = true,
  enableMagnetism = true
}) => {
  const gridRef = useRef(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;
  const currentParticleCount = shouldDisableAnimations ? Math.floor(particleCount / 2) : particleCount;

  return (
    <section id="philosophy">
      <style>
        {`
    .bento-section {
      --glow-x: 50%;
      --glow-y: 50%;
      --glow-intensity: 0;
      --glow-radius: 200px;
      --glow-color: ${glowColor};
      --border-color: #262626;
      --background-dark: #060010;
      --white: hsl(0, 0%, 100%);
      overflow-x: hidden;
    }
    .card-responsive {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: auto;
      gap: 2rem;
      width: 100%;
      max-width: 100%;
      margin: 0 auto;
      padding: 3rem;
    }
    .card-responsive .card {
      grid-column: span 1;
      grid-row: span 1;
      width: 100%;
      height: 100%;
      min-height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    .card--border-glow::after {
      content: '';
      position: absolute;
      inset: 0;
      padding: 6px;
      background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
          rgba(var(--glow-color), calc(var(--glow-intensity) * 0.8)) 0%,
          rgba(var(--glow-color), calc(var(--glow-intensity) * 0.4)) 30%,
          transparent 60%);
      border-radius: inherit;
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: subtract;
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      pointer-events: none;
      transition: opacity 0.3s ease;
      z-index: 1;
      opacity: 0;
    }
    .card.is-active::after {
      opacity: 1;
    }
    .card.is-active,
    .card:hover {
      box-shadow: 0 4px 20px rgba(46, 24, 78, 0.4), 0 0 30px rgba(${glowColor}, 0.2);
    }
    .particle::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: rgba(var(--glow-color), 0.2);
      border-radius: 50%;
      z-index: -1;
    }
    @media (max-width: 767px) {
      .card-responsive {
        grid-template-columns: 1fr;
        padding: 1.5rem;
      }
    }
  `}
      </style>
      <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center pt-12 pb-8 mt-8 px-6">Our Philosophy, <span className="text-orange-400">Our North Star</span></p>
      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}
      <BentoCardGrid gridRef={gridRef}>
        <div className="card-responsive">
          {cardData.map((card, index) => {
            const baseClassName = `card flex flex-col justify-between relative p-8 rounded-2xl border border-solid font-light transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] ${enableBorderGlow ? 'card--border-glow' : ''
              }`;
            const cardStyle = {
              backgroundColor: card.color || 'var(--background-dark)',
              borderColor: 'var(--border-color)',
              color: 'var(--white)',
              '--glow-x': '50%',
              '--glow-y': '50%',
              '--glow-intensity': '0',
              '--glow-radius': '200px',
            };
            const IconComponent = card.icon;
            const content = (
              <div className="relative z-10 flex flex-col w-full gap-4">
                {IconComponent && (
                  <IconComponent
                    size={32}
                    color="#FF8C00"
                    className="card__icon flex-shrink-0"
                  />
                )}
                <div className="flex justify-between items-center w-full">
                  <h3 className={`card__title text-2xl font-semibold`}>{card.title}</h3>
                </div>
                <p className={`card__description text-neutral-300 text-base leading-relaxed`}>
                  {card.description}
                </p>
              </div>
            );
            if (enableStars) {
              return (
                <ParticleCard
                  key={index}
                  className={baseClassName}
                  style={cardStyle}
                  disableAnimations={shouldDisableAnimations}
                  particleCount={currentParticleCount}
                  glowColor={glowColor}
                  enableTilt={enableTilt}
                  clickEffect={clickEffect}
                  enableMagnetism={enableMagnetism}
                >
                  <AnimatedContent disableAnimations={shouldDisableAnimations}>{content}</AnimatedContent>
                </ParticleCard>
              );
            }
            return (
              <div
                key={index}
                className={baseClassName}
                style={cardStyle}
              >
                <AnimatedContent disableAnimations={shouldDisableAnimations}>{content}</AnimatedContent>
              </div>
            );
          })}
        </div>
      </BentoCardGrid>
    </section>
  );
};
export default PhilosophySection;