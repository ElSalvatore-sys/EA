import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Target,
  Building2,
  Sparkles,
  Globe,
  Code,
  Palette,
  Key,
  MessageSquare,
  Thermometer,
  Lock,
  TrendingUp,
  BarChart3,
  Smartphone,
  ExternalLink,
  Search,
  Lightbulb,
  Cog,
  Rocket,
  Brain,
  Shield
} from 'lucide-react';
import { useLanguage } from '../components/LanguageSelector';

const Home: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { translate } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const industries = [
    {
      id: 'gastronomy',
      title: translate('industry.gastronomy'),
      description: translate('industry.gastronomy.desc'),
      available: true,
      link: '/solutions/gastronomy-hospitality',
      icon: '🏨'
    },
    {
      id: 'industrial',
      title: translate('industry.industrial'),
      description: translate('industry.industrial.desc'),
      available: true,
      link: '/solutions/industrial-manufacturing',
      icon: '🏭'
    },
    {
      id: 'finance',
      title: translate('industry.finance'),
      description: translate('industry.finance.desc'),
      available: false,
      status: translate('industry.finance.status'),
      icon: '🏦'
    },
    {
      id: 'smart-living',
      title: translate('industry.smart'),
      description: translate('industry.smart.desc'),
      available: true,
      link: '/solutions/smart-living',
      icon: '🏠'
    },
    {
      id: 'healthcare',
      title: translate('industry.healthcare'),
      description: translate('industry.healthcare.desc'),
      available: true,
      link: '/solutions/healthcare',
      icon: '🏥'
    },
    {
      id: 'retail',
      title: translate('industry.retail'),
      description: translate('industry.retail.desc'),
      available: false,
      status: translate('industry.retail.status'),
      icon: '🛍️'
    }
  ];

  const clientLogos = [
    { 
      name: 'Hotel am Kochbrunnen', 
      industry: 'Hospitality', 
      metric: 'Complete AI Ecosystem',
      description: 'Full hospitality transformation with 8 integrated AI pillars',
      website: 'https://hotelamkochbrunnen.de',
      logo: 'https://hotelamkochbrunnen.de/favicon.ico'
    },
    { 
      name: 'Falchi Dental', 
      industry: 'Healthcare', 
      metric: '60% faster diagnostics',
      description: 'AI-powered diagnostic support and patient management',
      website: 'https://falchi.de',
      logo: 'https://falchi.de/favicon.ico'
    },
    { 
      name: 'Klavierschule Glenn Miller', 
      industry: 'Education', 
      metric: 'AI booking & scheduling',
      description: 'Intelligent booking system with automated schedule optimization',
      website: 'https://klavierschule-glennmiller.de',
      logo: 'https://www.google.com/s2/favicons?domain=klavierschule-glennmiller.de&sz=64'
    }
  ];

  const partners = [
    { 
      name: 'Google Cloud', 
      logo: 'https://www.google.com/favicon.ico',
      gradient: 'from-blue-500 to-green-500' 
    },
    { 
      name: 'Microsoft Azure', 
      logo: 'https://www.microsoft.com/favicon.ico',
      gradient: 'from-blue-600 to-cyan-500' 
    },
    { 
      name: 'OpenAI', 
      logo: 'https://openai.com/favicon.ico',
      gradient: 'from-green-500 to-teal-500' 
    },
    { 
      name: 'Anthropic', 
      logo: 'https://www.anthropic.com/favicon.ico',
      gradient: 'from-purple-500 to-pink-500' 
    },
    { 
      name: 'AWS', 
      logo: 'https://aws.amazon.com/favicon.ico',
      gradient: 'from-orange-500 to-yellow-500' 
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps(prev => [...new Set([...prev, stepIndex])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    stepsRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Advanced AI Brain & Hand Animation Component
  const AdvancedAIBrainHand = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>();
    const particlesRef = useRef<any[]>([]);
    const timeRef = useRef(0);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Set canvas size
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      // Initialize particles
      const initParticles = () => {
        particlesRef.current = [];
        for (let i = 0; i < 150; i++) {
          particlesRef.current.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.8 + 0.2,
            color: `hsl(${200 + Math.random() * 60}, 70%, 60%)`,
            life: Math.random() * 100,
            maxLife: 100 + Math.random() * 100
          });
        }
      };
      initParticles();

      // Neural network nodes for brain
      const brainNodes = [];
      const centerX = canvas.width * 0.3;
      const centerY = canvas.height * 0.3;
      
      for (let i = 0; i < 25; i++) {
        const angle = (i / 25) * Math.PI * 2;
        const radius = 80 + Math.random() * 40;
        brainNodes.push({
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
          size: 4 + Math.random() * 6,
          pulse: Math.random() * Math.PI * 2,
          connections: []
        });
      }

      // Create connections between brain nodes
      brainNodes.forEach((node, i) => {
        const numConnections = 2 + Math.floor(Math.random() * 3);
        for (let j = 0; j < numConnections; j++) {
          const targetIndex = Math.floor(Math.random() * brainNodes.length);
          if (targetIndex !== i) {
            node.connections.push(targetIndex);
          }
        }
      });

      // Hand position
      const handX = canvas.width * 0.7;
      const handY = canvas.height * 0.7;

      const animate = () => {
        timeRef.current += 0.02;
        
        // Clear canvas with fade effect
        ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw background neural network
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
        ctx.lineWidth = 1;
        for (let i = 0; i < 50; i++) {
          const x1 = Math.random() * canvas.width;
          const y1 = Math.random() * canvas.height;
          const x2 = x1 + (Math.random() - 0.5) * 200;
          const y2 = y1 + (Math.random() - 0.5) * 200;
          
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }

        // Draw AI Brain
        ctx.save();
        
        // Brain outline with glow
        const brainGlow = 20 + Math.sin(timeRef.current * 2) * 10;
        ctx.shadowColor = '#3B82F6';
        ctx.shadowBlur = brainGlow;
        
        // Brain shape
        ctx.beginPath();
        ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
        ctx.ellipse(centerX, centerY, 120, 100, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Brain hemispheres
        ctx.beginPath();
        ctx.strokeStyle = '#60A5FA';
        ctx.lineWidth = 3;
        ctx.ellipse(centerX - 30, centerY, 60, 80, 0, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.ellipse(centerX + 30, centerY, 60, 80, 0, 0, Math.PI * 2);
        ctx.stroke();
        
        // Neural connections in brain
        brainNodes.forEach((node, i) => {
          node.connections.forEach(targetIndex => {
            const target = brainNodes[targetIndex];
            const distance = Math.sqrt((target.x - node.x) ** 2 + (target.y - node.y) ** 2);
            
            if (distance < 150) {
              const pulse = Math.sin(timeRef.current * 3 + i * 0.5) * 0.5 + 0.5;
              ctx.strokeStyle = `rgba(139, 92, 246, ${pulse * 0.8})`;
              ctx.lineWidth = 2;
              
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(target.x, target.y);
              ctx.stroke();
              
              // Data flow particles
              const progress = (timeRef.current * 2 + i) % 1;
              const flowX = node.x + (target.x - node.x) * progress;
              const flowY = node.y + (target.y - node.y) * progress;
              
              ctx.beginPath();
              ctx.fillStyle = '#8B5CF6';
              ctx.arc(flowX, flowY, 3, 0, Math.PI * 2);
              ctx.fill();
            }
          });
        });

        // Brain nodes
        brainNodes.forEach((node, i) => {
          node.pulse += 0.1;
          const pulseSize = node.size + Math.sin(node.pulse) * 2;
          
          ctx.beginPath();
          ctx.fillStyle = '#60A5FA';
          ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Node glow
          ctx.beginPath();
          ctx.fillStyle = 'rgba(96, 165, 250, 0.3)';
          ctx.arc(node.x, node.y, pulseSize * 2, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.restore();

        // Draw Human Hand
        ctx.save();
        
        const handPulse = Math.sin(timeRef.current * 1.5) * 10;
        ctx.shadowColor = '#F59E0B';
        ctx.shadowBlur = 15 + handPulse;
        
        // Hand palm
        ctx.beginPath();
        ctx.fillStyle = 'rgba(245, 158, 11, 0.8)';
        ctx.ellipse(handX, handY, 40, 60, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Fingers
        const fingers = [
          { x: handX - 30, y: handY - 40, w: 12, h: 35 },
          { x: handX - 10, y: handY - 50, w: 12, h: 40 },
          { x: handX + 10, y: handY - 45, w: 12, h: 38 },
          { x: handX + 30, y: handY - 35, w: 12, h: 30 }
        ];
        
        fingers.forEach((finger, i) => {
          const fingerPulse = Math.sin(timeRef.current * 2 + i * 0.5) * 2;
          ctx.beginPath();
          ctx.fillStyle = 'rgba(245, 158, 11, 0.9)';
          ctx.roundRect(finger.x - finger.w/2, finger.y - finger.h + fingerPulse, finger.w, finger.h, 6);
          ctx.fill();
          
          // Fingertip sensors
          ctx.beginPath();
          ctx.fillStyle = '#3B82F6';
          ctx.arc(finger.x, finger.y - finger.h + fingerPulse, 4, 0, Math.PI * 2);
          ctx.fill();
        });

        // Thumb
        ctx.beginPath();
        ctx.fillStyle = 'rgba(245, 158, 11, 0.9)';
        ctx.ellipse(handX - 50, handY + 10, 15, 25, -0.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        // Energy Connection between Brain and Hand
        const connectionPoints = 8;
        for (let i = 0; i < connectionPoints; i++) {
          const progress = i / (connectionPoints - 1);
          const x = centerX + (handX - centerX) * progress;
          const y = centerY + (handY - centerY) * progress;
          
          // Add curve to the connection
          const curve = Math.sin(progress * Math.PI) * 50;
          const curvedY = y + curve;
          
          // Energy pulse
          const pulsePhase = (timeRef.current * 3 + i * 0.3) % (Math.PI * 2);
          const pulseIntensity = Math.sin(pulsePhase) * 0.5 + 0.5;
          
          ctx.beginPath();
          ctx.fillStyle = `rgba(139, 92, 246, ${pulseIntensity})`;
          ctx.arc(x, curvedY, 4 + pulseIntensity * 3, 0, Math.PI * 2);
          ctx.fill();
          
          // Energy trail
          ctx.beginPath();
          ctx.strokeStyle = `rgba(139, 92, 246, ${pulseIntensity * 0.5})`;
          ctx.lineWidth = 3;
          if (i > 0) {
            const prevX = centerX + (handX - centerX) * ((i-1) / (connectionPoints - 1));
            const prevY = centerY + (handY - centerY) * ((i-1) / (connectionPoints - 1));
            const prevCurvedY = prevY + Math.sin(((i-1) / (connectionPoints - 1)) * Math.PI) * 50;
            
            ctx.moveTo(prevX, prevCurvedY);
            ctx.lineTo(x, curvedY);
            ctx.stroke();
          }
        }

        // Floating particles
        particlesRef.current.forEach((particle, i) => {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.life++;
          
          // Particle attraction to brain-hand connection
          const connectionCenterX = (centerX + handX) / 2;
          const connectionCenterY = (centerY + handY) / 2;
          const distToConnection = Math.sqrt((particle.x - connectionCenterX) ** 2 + (particle.y - connectionCenterY) ** 2);
          
          if (distToConnection < 200) {
            const attractionForce = 0.02;
            particle.vx += (connectionCenterX - particle.x) * attractionForce / distToConnection;
            particle.vy += (connectionCenterY - particle.y) * attractionForce / distToConnection;
          }
          
          // Boundary check
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
          
          // Reset particle if it's too old
          if (particle.life > particle.maxLife) {
            particle.x = Math.random() * canvas.width;
            particle.y = Math.random() * canvas.height;
            particle.life = 0;
            particle.vx = (Math.random() - 0.5) * 2;
            particle.vy = (Math.random() - 0.5) * 2;
          }
          
          // Draw particle
          const alpha = 1 - (particle.life / particle.maxLife);
          ctx.beginPath();
          ctx.fillStyle = particle.color.replace('60%)', `60%, ${alpha})`);
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        });

        // Data streams
        for (let i = 0; i < 5; i++) {
          const streamProgress = (timeRef.current + i * 0.4) % 1;
          const streamX = centerX + (handX - centerX) * streamProgress;
          const streamY = centerY + (handY - centerY) * streamProgress;
          
          ctx.beginPath();
          ctx.fillStyle = `rgba(6, 182, 212, ${1 - streamProgress})`;
          ctx.arc(streamX, streamY, 6, 0, Math.PI * 2);
          ctx.fill();
          
          // Stream trail
          for (let j = 1; j <= 5; j++) {
            const trailProgress = streamProgress - j * 0.05;
            if (trailProgress > 0) {
              const trailX = centerX + (handX - centerX) * trailProgress;
              const trailY = centerY + (handY - centerY) * trailProgress;
              
              ctx.beginPath();
              ctx.fillStyle = `rgba(6, 182, 212, ${(1 - trailProgress) * 0.3})`;
              ctx.arc(trailX, trailY, 4 - j * 0.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }

        animationRef.current = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        window.removeEventListener('resize', resizeCanvas);
      };
    }, []);

    return (
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)' }}
      />
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Advanced AI Brain & Hand Hero Section */}
      <section className="pt-16 relative overflow-hidden min-h-screen flex items-center">
        {/* Advanced AI Brain & Hand Animation */}
        <AdvancedAIBrainHand />
        
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-20">
          <div className="max-w-4xl">
            {/* Enhanced Typography with Staggered Animation */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-light leading-tight tracking-tight text-white">
                <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  {translate('hero.title').split('.')[0]}.
                </span>
                <br />
                <span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 font-medium inline-block animate-fade-in-up"
                  style={{ animationDelay: '0.4s' }}
                >
                  {translate('hero.title').split('.')[1]}.
                </span>
              </h1>
            </div>
            
            <p 
              className="text-2xl md:text-3xl mb-12 text-gray-200 max-w-3xl font-light leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              {translate('hero.subtitle')}
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-6 animate-fade-in-up"
              style={{ animationDelay: '0.8s' }}
            >
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-full text-xl font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-2xl relative overflow-hidden">
                <span className="relative z-10">{translate('cta.book')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <Link 
                to="/solutions" 
                className="group border-2 border-white/50 text-white px-12 py-5 rounded-full text-xl font-medium hover:bg-white/10 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center">
                  {translate('cta.explore')}
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-2 h-4 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>

        {/* Ambient light effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse z-5" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse z-5" style={{ animationDelay: '1s' }} />
      </section>

      {/* Enhanced Client Showcase */}
      <section className="py-32 bg-gray-50 dark:bg-gray-800 relative overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              {translate('section.transforming')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
              From local innovators to global enterprises, we empower organizations to integrate intelligence at their core.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {clientLogos.map((client, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = '<div class="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center"><svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg></div>';
                      }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                    {client.industry}
                  </div>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-2 text-lg">
                  {client.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {client.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-green-600 dark:text-green-400 font-medium">
                    {client.metric}
                  </div>
                  <a 
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-medium"
                  >
                    {translate('common.visitWebsite')}
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Metrics */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-12 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-4xl font-light text-blue-600 dark:text-blue-400 mb-2">6+</div>
                <div className="text-gray-600 dark:text-gray-400 font-light">{translate('metrics.projects')}</div>
              </div>
              <div>
                <div className="text-4xl font-light text-purple-600 dark:text-purple-400 mb-2">98%</div>
                <div className="text-gray-600 dark:text-gray-400 font-light">{translate('metrics.satisfaction')}</div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-4xl font-light text-green-600 dark:text-green-400 mb-2">40-60%</div>
                <div className="text-gray-600 dark:text-gray-400 font-light">{translate('metrics.cost')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel am Kochbrunnen Showcase */}
      <section className="py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              {translate('hotel.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              {translate('hotel.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: translate('pillar.journey.title'),
                description: translate('pillar.journey.desc'),
                icon: Key,
                metric: translate('pillar.journey.metric')
              },
              {
                title: translate('pillar.backoffice.title'),
                description: translate('pillar.backoffice.desc'),
                icon: BarChart3,
                metric: translate('pillar.backoffice.metric')
              },
              {
                title: translate('pillar.building.title'),
                description: translate('pillar.building.desc'),
                icon: Thermometer,
                metric: translate('pillar.building.metric')
              },
              {
                title: translate('pillar.security.title'),
                description: translate('pillar.security.desc'),
                icon: Lock,
                metric: translate('pillar.security.metric')
              },
              {
                title: translate('pillar.revenue.title'),
                description: translate('pillar.revenue.desc'),
                icon: TrendingUp,
                metric: translate('pillar.revenue.metric')
              },
              {
                title: translate('pillar.booking.title'),
                description: translate('pillar.booking.desc'),
                icon: Smartphone,
                metric: translate('pillar.booking.metric')
              },
              {
                title: translate('pillar.staff.title'),
                description: translate('pillar.staff.desc'),
                icon: Users,
                metric: translate('pillar.staff.metric')
              },
              {
                title: translate('pillar.architecture.title'),
                description: translate('pillar.architecture.desc'),
                icon: Globe,
                metric: translate('pillar.architecture.metric')
              }
            ].map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{pillar.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 leading-relaxed">{pillar.description}</p>
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">{pillar.metric}</div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <a 
              href="https://hotelamkochbrunnen.de" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-lg"
            >
              {translate('hotel.visit')}
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* AI-Powered Websites & Apps Section */}
      <section className="py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              {translate('websites.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              {translate('websites.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-12 h-full">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden shadow-lg">
                    <img 
                      src="https://www.google.com/s2/favicons?domain=klavierschule-glennmiller.de&sz=64" 
                      alt="Klavierschule Glenn Miller logo"
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = '<div class="w-8 h-8 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center"><svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg></div>';
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 dark:text-white">{translate('websites.piano.title')}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{translate('websites.piano.subtitle')}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-8 text-lg font-light leading-relaxed">
                  {translate('websites.piano.desc')}
                </p>
                <a 
                  href="https://klavierschule-glennmiller.de" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  {translate('websites.piano.visit')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">{translate('websites.development.title')}</h4>
                <p className="text-gray-600 dark:text-gray-400 font-light">
                  {translate('websites.development.desc')}
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-medium text-gray-900 dark:text-white mb-4">{translate('websites.design.title')}</h4>
                <p className="text-gray-600 dark:text-gray-400 font-light">
                  {translate('websites.design.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimalistic Industry Solutions */}
      <section className="py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              {translate('industry.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              {translate('industry.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const isAvailable = industry.available;
              
              return (
                <div
                  key={industry.id}
                  className={`group relative bg-white dark:bg-gray-900 rounded-3xl p-8 transition-all duration-500 border border-gray-100 dark:border-gray-700 ${
                    isAvailable 
                      ? 'hover:shadow-xl hover:-translate-y-2 cursor-pointer' 
                      : 'opacity-60 cursor-not-allowed'
                  }`}
                >
                  {!isAvailable && (
                    <div className="absolute top-4 right-4 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full text-xs font-medium">
                      {industry.status}
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <div className="text-2xl">
                        {industry.icon}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-6">
                    {industry.description}
                  </p>
                  
                  {isAvailable ? (
                    <Link
                      to={industry.link!}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      {translate('industry.explore')}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  ) : (
                    <span className="text-gray-400 dark:text-gray-500 font-medium">
                      {translate('industry.coming')}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced EA Method Process */}
      <section className="py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              {translate('section.method')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light">
              {translate('method.subtitle')}
            </p>
          </div>

          <div className="relative">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {visibleSteps.includes(0) && visibleSteps.includes(1) && (
                <path
                  d="M 25% 25% Q 50% 15% 75% 35%"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />
              )}
              {visibleSteps.includes(1) && visibleSteps.includes(2) && (
                <path
                  d="M 75% 35% Q 50% 45% 25% 65%"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />
              )}
              {visibleSteps.includes(2) && visibleSteps.includes(3) && (
                <path
                  d="M 25% 65% Q 50% 75% 75% 85%"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />
              )}
            </svg>
            
            <div className="space-y-32 relative" style={{ zIndex: 2 }}>
              {[
                {
                  number: '01',
                  title: translate('method.step1.title'),
                  description: translate('method.step1.desc'),
                  duration: translate('method.step1.duration'),
                  icon: Search,
                  gradient: 'from-blue-500 to-cyan-500',
                  image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
                },
                {
                  number: '02',
                  title: translate('method.step2.title'),
                  description: translate('method.step2.desc'),
                  duration: translate('method.step2.duration'),
                  icon: Lightbulb,
                  gradient: 'from-green-500 to-emerald-500',
                  image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
                },
                {
                  number: '03',
                  title: translate('method.step3.title'),
                  description: translate('method.step3.desc'),
                  duration: translate('method.step3.duration'),
                  icon: Cog,
                  gradient: 'from-orange-500 to-red-500',
                  image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
                },
                {
                  number: '04',
                  title: translate('method.step4.title'),
                  description: translate('method.step4.desc'),
                  duration: translate('method.step4.duration'),
                  icon: TrendingUp,
                  gradient: 'from-purple-500 to-pink-500',
                  image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
                }
              ].map((stage, index) => {
                const IconComponent = stage.icon;
                return (
                  <div
                    key={index}
                    ref={(el) => (stepsRef.current[index] = el)}
                    data-step={index}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                      visibleSteps.includes(index) 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    } ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                  >
                    <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 bg-gradient-to-br ${stage.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <div className="text-3xl font-light text-gray-400 dark:text-gray-600">
                              {stage.number}
                            </div>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                            {stage.duration}
                          </span>
                        </div>
                        
                        <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                          {stage.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-400 font-light text-lg leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">
                        <img 
                          src={stage.image}
                          alt={`${stage.title} process visualization`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-20">
            <Link
              to="/ea-method"
              className="inline-flex items-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
            >
              {translate('method.learn')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              {translate('section.advantage')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Rocket,
                title: translate('feature.bespoke'),
                description: translate('feature.bespoke.desc'),
                gradient: 'from-blue-500 to-purple-600'
              },
              {
                icon: Brain,
                title: translate('feature.expertise'),
                description: translate('feature.expertise.desc'),
                gradient: 'from-green-500 to-teal-600'
              },
              {
                icon: Shield,
                title: translate('feature.impact'),
                description: translate('feature.impact.desc'),
                gradient: 'from-orange-500 to-red-600'
              }
            ].map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="text-center bg-gray-50 dark:bg-gray-800 p-12 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg">
                  <div className="flex justify-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${advantage.gradient} rounded-3xl flex items-center justify-center shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">{advantage.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Partners Section */}
      <section className="py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
              {translate('section.powered')}
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="group bg-white dark:bg-gray-900 rounded-3xl p-8 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `<div class="w-8 h-8 bg-gradient-to-br ${partner.gradient} rounded-lg flex items-center justify-center"><div class="w-4 h-4 bg-white rounded"></div></div>`;
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">{translate('final.title')}</h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-12 font-light">
            {translate('final.subtitle')}
          </p>
          <button className="bg-white text-gray-900 px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
            {translate('final.cta')}
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Home;