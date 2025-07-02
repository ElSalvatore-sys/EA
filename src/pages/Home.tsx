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

  // Ultra-Detailed AI Brain & Hand Animation Component
  const UltraDetailedAIBrain = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>();
    const particlesRef = useRef<any[]>([]);
    const neuronsRef = useRef<any[]>([]);
    const synapsesRef = useRef<any[]>([]);
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

      // Initialize ultra-detailed brain structure
      const initBrainStructure = () => {
        neuronsRef.current = [];
        synapsesRef.current = [];
        
        const centerX = canvas.width * 0.25;
        const centerY = canvas.height * 0.4;
        
        // Create detailed brain regions
        const regions = [
          // Frontal Cortex
          { name: 'frontal', x: centerX - 60, y: centerY - 80, neurons: 25, color: '#3B82F6' },
          // Parietal Cortex
          { name: 'parietal', x: centerX - 20, y: centerY - 100, neurons: 20, color: '#8B5CF6' },
          // Temporal Cortex
          { name: 'temporal', x: centerX - 80, y: centerY - 20, neurons: 18, color: '#06B6D4' },
          // Occipital Cortex
          { name: 'occipital', x: centerX + 40, y: centerY - 60, neurons: 15, color: '#10B981' },
          // Cerebellum
          { name: 'cerebellum', x: centerX + 60, y: centerY + 40, neurons: 30, color: '#F59E0B' },
          // Brain Stem
          { name: 'brainstem', x: centerX, y: centerY + 80, neurons: 12, color: '#EF4444' },
          // Hippocampus
          { name: 'hippocampus', x: centerX - 40, y: centerY + 20, neurons: 16, color: '#EC4899' },
          // Thalamus
          { name: 'thalamus', x: centerX, y: centerY - 20, neurons: 14, color: '#84CC16' }
        ];

        // Create neurons for each brain region
        regions.forEach((region, regionIndex) => {
          for (let i = 0; i < region.neurons; i++) {
            const angle = (i / region.neurons) * Math.PI * 2;
            const radius = 30 + Math.random() * 50;
            const neuron = {
              id: `${region.name}_${i}`,
              x: region.x + Math.cos(angle) * radius + (Math.random() - 0.5) * 20,
              y: region.y + Math.sin(angle) * radius + (Math.random() - 0.5) * 20,
              size: 3 + Math.random() * 4,
              color: region.color,
              region: region.name,
              activity: Math.random(),
              connections: [],
              dendrites: [],
              axon: null,
              pulse: Math.random() * Math.PI * 2,
              lastFired: 0,
              threshold: 0.7 + Math.random() * 0.3,
              charge: Math.random() * 0.5
            };

            // Create dendrites (input branches)
            const numDendrites = 3 + Math.floor(Math.random() * 5);
            for (let d = 0; d < numDendrites; d++) {
              const dendriteAngle = (d / numDendrites) * Math.PI * 2;
              const dendriteLength = 15 + Math.random() * 25;
              neuron.dendrites.push({
                angle: dendriteAngle,
                length: dendriteLength,
                branches: Math.floor(Math.random() * 3) + 1,
                activity: 0
              });
            }

            // Create axon (output branch)
            neuron.axon = {
              angle: Math.random() * Math.PI * 2,
              length: 40 + Math.random() * 60,
              terminals: Math.floor(Math.random() * 4) + 2,
              activity: 0
            };

            neuronsRef.current.push(neuron);
          }
        });

        // Create synaptic connections between neurons
        neuronsRef.current.forEach((neuron, i) => {
          const numConnections = 3 + Math.floor(Math.random() * 6);
          for (let c = 0; c < numConnections; c++) {
            const targetIndex = Math.floor(Math.random() * neuronsRef.current.length);
            if (targetIndex !== i) {
              const target = neuronsRef.current[targetIndex];
              const distance = Math.sqrt((target.x - neuron.x) ** 2 + (target.y - neuron.y) ** 2);
              
              if (distance < 120) {
                const synapse = {
                  from: i,
                  to: targetIndex,
                  strength: 0.3 + Math.random() * 0.7,
                  activity: 0,
                  neurotransmitters: [],
                  delay: Math.random() * 0.1,
                  plasticity: Math.random() * 0.2
                };
                
                neuron.connections.push(synapse);
                synapsesRef.current.push(synapse);
              }
            }
          }
        });

        // Initialize particles for neural activity
        particlesRef.current = [];
        for (let i = 0; i < 300; i++) {
          particlesRef.current.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 3,
            vy: (Math.random() - 0.5) * 3,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.8 + 0.2,
            color: `hsl(${200 + Math.random() * 80}, 70%, 60%)`,
            life: Math.random() * 100,
            maxLife: 100 + Math.random() * 200,
            type: Math.random() > 0.7 ? 'neurotransmitter' : 'signal'
          });
        }
      };

      initBrainStructure();

      // Hand structure
      const handX = canvas.width * 0.75;
      const handY = canvas.height * 0.6;

      const animate = () => {
        timeRef.current += 0.02;
        
        // Clear canvas with sophisticated fade
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'rgba(15, 23, 42, 0.15)');
        gradient.addColorStop(0.5, 'rgba(30, 41, 59, 0.1)');
        gradient.addColorStop(1, 'rgba(51, 65, 85, 0.05)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw background neural field
        ctx.save();
        ctx.globalAlpha = 0.1;
        for (let i = 0; i < 100; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const size = Math.random() * 3;
          
          ctx.beginPath();
          ctx.fillStyle = `hsl(${220 + Math.random() * 40}, 60%, 50%)`;
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();

        // Update and draw neural network
        neuronsRef.current.forEach((neuron, index) => {
          // Update neuron activity
          neuron.pulse += 0.1 + neuron.activity * 0.05;
          neuron.charge += (Math.random() - 0.5) * 0.02;
          neuron.charge = Math.max(0, Math.min(1, neuron.charge));

          // Neural firing logic
          if (neuron.charge > neuron.threshold && timeRef.current - neuron.lastFired > 0.5) {
            neuron.lastFired = timeRef.current;
            neuron.activity = 1;
            
            // Propagate signal to connected neurons
            neuron.connections.forEach(connection => {
              const target = neuronsRef.current[connection.to];
              if (target) {
                target.charge += connection.strength * 0.3;
                connection.activity = 1;
                
                // Create neurotransmitter particles
                for (let i = 0; i < 3; i++) {
                  particlesRef.current.push({
                    x: neuron.x,
                    y: neuron.y,
                    vx: (target.x - neuron.x) * 0.02 + (Math.random() - 0.5) * 2,
                    vy: (target.y - neuron.y) * 0.02 + (Math.random() - 0.5) * 2,
                    size: 1 + Math.random() * 2,
                    opacity: 1,
                    color: neuron.color,
                    life: 0,
                    maxLife: 60,
                    type: 'neurotransmitter'
                  });
                }
              }
            });
          }

          // Decay activity
          neuron.activity *= 0.95;
          neuron.charge *= 0.98;

          // Draw neuron cell body
          const pulseSize = neuron.size + Math.sin(neuron.pulse) * 2 + neuron.activity * 3;
          
          // Cell membrane
          ctx.save();
          ctx.shadowColor = neuron.color;
          ctx.shadowBlur = 10 + neuron.activity * 20;
          
          ctx.beginPath();
          ctx.fillStyle = neuron.color;
          ctx.globalAlpha = 0.8 + neuron.activity * 0.2;
          ctx.arc(neuron.x, neuron.y, pulseSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Nucleus
          ctx.beginPath();
          ctx.fillStyle = '#FFFFFF';
          ctx.globalAlpha = 0.6;
          ctx.arc(neuron.x, neuron.y, pulseSize * 0.4, 0, Math.PI * 2);
          ctx.fill();
          
          // Nucleolus
          ctx.beginPath();
          ctx.fillStyle = neuron.color;
          ctx.globalAlpha = 0.8;
          ctx.arc(neuron.x + 1, neuron.y - 1, pulseSize * 0.15, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.restore();

          // Draw dendrites (input branches)
          neuron.dendrites.forEach((dendrite, dIndex) => {
            const dendriteActivity = neuron.activity * (0.5 + Math.sin(timeRef.current * 3 + dIndex) * 0.5);
            
            ctx.save();
            ctx.strokeStyle = neuron.color;
            ctx.lineWidth = 1 + dendriteActivity * 2;
            ctx.globalAlpha = 0.6 + dendriteActivity * 0.4;
            
            for (let branch = 0; branch < dendrite.branches; branch++) {
              const branchAngle = dendrite.angle + (branch - dendrite.branches/2) * 0.3;
              const branchLength = dendrite.length * (0.7 + branch * 0.15);
              
              ctx.beginPath();
              ctx.moveTo(neuron.x, neuron.y);
              
              // Create curved dendrite
              const controlX = neuron.x + Math.cos(branchAngle) * branchLength * 0.5;
              const controlY = neuron.y + Math.sin(branchAngle) * branchLength * 0.5;
              const endX = neuron.x + Math.cos(branchAngle) * branchLength;
              const endY = neuron.y + Math.sin(branchAngle) * branchLength;
              
              ctx.quadraticCurveTo(controlX, controlY, endX, endY);
              ctx.stroke();
              
              // Dendritic spines
              for (let spine = 1; spine < 4; spine++) {
                const spineProgress = spine / 4;
                const spineX = neuron.x + Math.cos(branchAngle) * branchLength * spineProgress;
                const spineY = neuron.y + Math.sin(branchAngle) * branchLength * spineProgress;
                
                ctx.beginPath();
                ctx.arc(spineX, spineY, 0.5 + dendriteActivity, 0, Math.PI * 2);
                ctx.fill();
              }
            }
            ctx.restore();
          });

          // Draw axon (output branch)
          if (neuron.axon) {
            const axonActivity = neuron.activity;
            
            ctx.save();
            ctx.strokeStyle = neuron.color;
            ctx.lineWidth = 2 + axonActivity * 3;
            ctx.globalAlpha = 0.7 + axonActivity * 0.3;
            
            // Main axon shaft
            const axonEndX = neuron.x + Math.cos(neuron.axon.angle) * neuron.axon.length;
            const axonEndY = neuron.y + Math.sin(neuron.axon.angle) * neuron.axon.length;
            
            ctx.beginPath();
            ctx.moveTo(neuron.x, neuron.y);
            ctx.lineTo(axonEndX, axonEndY);
            ctx.stroke();
            
            // Axon terminals
            for (let terminal = 0; terminal < neuron.axon.terminals; terminal++) {
              const terminalAngle = neuron.axon.angle + (terminal - neuron.axon.terminals/2) * 0.4;
              const terminalLength = 15 + Math.random() * 10;
              
              const terminalX = axonEndX + Math.cos(terminalAngle) * terminalLength;
              const terminalY = axonEndY + Math.sin(terminalAngle) * terminalLength;
              
              ctx.beginPath();
              ctx.moveTo(axonEndX, axonEndY);
              ctx.lineTo(terminalX, terminalY);
              ctx.stroke();
              
              // Synaptic bouton
              ctx.beginPath();
              ctx.fillStyle = neuron.color;
              ctx.arc(terminalX, terminalY, 2 + axonActivity * 2, 0, Math.PI * 2);
              ctx.fill();
            }
            
            ctx.restore();
          }
        });

        // Draw synaptic connections with neurotransmitter flow
        synapsesRef.current.forEach(synapse => {
          const fromNeuron = neuronsRef.current[synapse.from];
          const toNeuron = neuronsRef.current[synapse.to];
          
          if (fromNeuron && toNeuron) {
            synapse.activity *= 0.9;
            
            const distance = Math.sqrt((toNeuron.x - fromNeuron.x) ** 2 + (toNeuron.y - fromNeuron.y) ** 2);
            const alpha = synapse.strength * (0.3 + synapse.activity * 0.7);
            
            ctx.save();
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 1 + synapse.activity * 2;
            
            // Draw synaptic connection
            ctx.beginPath();
            ctx.moveTo(fromNeuron.x, fromNeuron.y);
            
            // Create curved connection
            const midX = (fromNeuron.x + toNeuron.x) / 2 + Math.sin(timeRef.current + synapse.from) * 10;
            const midY = (fromNeuron.y + toNeuron.y) / 2 + Math.cos(timeRef.current + synapse.to) * 10;
            
            ctx.quadraticCurveTo(midX, midY, toNeuron.x, toNeuron.y);
            ctx.stroke();
            
            // Synaptic gap visualization
            if (synapse.activity > 0.5) {
              const gapX = fromNeuron.x + (toNeuron.x - fromNeuron.x) * 0.8;
              const gapY = fromNeuron.y + (toNeuron.y - fromNeuron.y) * 0.8;
              
              ctx.beginPath();
              ctx.fillStyle = `rgba(255, 255, 255, ${synapse.activity})`;
              ctx.arc(gapX, gapY, 2, 0, Math.PI * 2);
              ctx.fill();
            }
            
            ctx.restore();
          }
        });

        // Draw ultra-detailed human hand
        ctx.save();
        
        const handPulse = Math.sin(timeRef.current * 1.5) * 15;
        ctx.shadowColor = '#F59E0B';
        ctx.shadowBlur = 20 + handPulse;
        
        // Hand palm with detailed anatomy
        const palmGradient = ctx.createRadialGradient(handX, handY, 0, handX, handY, 60);
        palmGradient.addColorStop(0, 'rgba(245, 158, 11, 0.9)');
        palmGradient.addColorStop(0.7, 'rgba(217, 119, 6, 0.8)');
        palmGradient.addColorStop(1, 'rgba(180, 83, 9, 0.7)');
        
        ctx.beginPath();
        ctx.fillStyle = palmGradient;
        ctx.ellipse(handX, handY, 45, 65, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Palm lines (life line, heart line, head line)
        ctx.strokeStyle = 'rgba(180, 83, 9, 0.6)';
        ctx.lineWidth = 2;
        
        // Life line
        ctx.beginPath();
        ctx.arc(handX - 20, handY - 10, 30, 0.5, 2.5);
        ctx.stroke();
        
        // Heart line
        ctx.beginPath();
        ctx.moveTo(handX - 35, handY - 25);
        ctx.quadraticCurveTo(handX, handY - 35, handX + 35, handY - 20);
        ctx.stroke();
        
        // Head line
        ctx.beginPath();
        ctx.moveTo(handX - 30, handY - 5);
        ctx.quadraticCurveTo(handX + 10, handY + 5, handX + 40, handY + 10);
        ctx.stroke();

        // Detailed fingers with joints and fingerprints
        const fingers = [
          { x: handX - 35, y: handY - 45, w: 14, h: 40, name: 'pinky' },
          { x: handX - 12, y: handY - 55, w: 16, h: 45, name: 'ring' },
          { x: handX + 12, y: handY - 50, w: 16, h: 42, name: 'middle' },
          { x: handX + 35, y: handY - 40, w: 15, h: 35, name: 'index' }
        ];
        
        fingers.forEach((finger, i) => {
          const fingerPulse = Math.sin(timeRef.current * 2 + i * 0.5) * 3;
          
          // Finger segments (3 phalanges)
          for (let segment = 0; segment < 3; segment++) {
            const segmentY = finger.y - finger.h + (segment * finger.h / 3) + fingerPulse;
            const segmentHeight = finger.h / 3;
            
            const segmentGradient = ctx.createLinearGradient(
              finger.x - finger.w/2, segmentY,
              finger.x + finger.w/2, segmentY + segmentHeight
            );
            segmentGradient.addColorStop(0, 'rgba(245, 158, 11, 0.95)');
            segmentGradient.addColorStop(0.5, 'rgba(217, 119, 6, 0.9)');
            segmentGradient.addColorStop(1, 'rgba(180, 83, 9, 0.85)');
            
            ctx.beginPath();
            ctx.fillStyle = segmentGradient;
            ctx.roundRect(finger.x - finger.w/2, segmentY, finger.w, segmentHeight, 8);
            ctx.fill();
            
            // Joint lines
            if (segment < 2) {
              ctx.strokeStyle = 'rgba(180, 83, 9, 0.7)';
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(finger.x - finger.w/2 + 2, segmentY + segmentHeight);
              ctx.lineTo(finger.x + finger.w/2 - 2, segmentY + segmentHeight);
              ctx.stroke();
            }
          }
          
          // Fingertip with neural sensors
          const tipY = finger.y - finger.h + fingerPulse;
          
          // Fingerprint pattern
          ctx.strokeStyle = 'rgba(180, 83, 9, 0.4)';
          ctx.lineWidth = 0.5;
          for (let ring = 1; ring <= 4; ring++) {
            ctx.beginPath();
            ctx.ellipse(finger.x, tipY + 5, ring * 2, ring * 1.5, 0, 0, Math.PI * 2);
            ctx.stroke();
          }
          
          // Neural sensor
          ctx.beginPath();
          ctx.fillStyle = '#3B82F6';
          ctx.shadowColor = '#3B82F6';
          ctx.shadowBlur = 10;
          ctx.arc(finger.x, tipY + 5, 4, 0, Math.PI * 2);
          ctx.fill();
          
          // Sensor activity rings
          const sensorActivity = Math.sin(timeRef.current * 4 + i) * 0.5 + 0.5;
          for (let ring = 1; ring <= 3; ring++) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${sensorActivity * (1 - ring * 0.3)})`;
            ctx.lineWidth = 2;
            ctx.arc(finger.x, tipY + 5, 6 + ring * 4, 0, Math.PI * 2);
            ctx.stroke();
          }
        });

        // Thumb with detailed anatomy
        const thumbX = handX - 55;
        const thumbY = handY + 15;
        const thumbPulse = Math.sin(timeRef.current * 1.8) * 2;
        
        // Thumb segments
        for (let segment = 0; segment < 2; segment++) {
          const segmentAngle = -0.5 + segment * 0.3;
          const segmentLength = 25 - segment * 5;
          
          ctx.save();
          ctx.translate(thumbX, thumbY);
          ctx.rotate(segmentAngle);
          
          const thumbGradient = ctx.createLinearGradient(-8, 0, 8, segmentLength);
          thumbGradient.addColorStop(0, 'rgba(245, 158, 11, 0.95)');
          thumbGradient.addColorStop(1, 'rgba(180, 83, 9, 0.85)');
          
          ctx.beginPath();
          ctx.fillStyle = thumbGradient;
          ctx.roundRect(-8, 0, 16, segmentLength, 8);
          ctx.fill();
          
          ctx.restore();
        }
        
        // Thumb neural sensor
        ctx.beginPath();
        ctx.fillStyle = '#3B82F6';
        ctx.arc(thumbX - 8, thumbY - 20, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        // Advanced neural-hand connection system
        const connectionPoints = 12;
        const brainCenterX = canvas.width * 0.25;
        const brainCenterY = canvas.height * 0.4;
        
        for (let i = 0; i < connectionPoints; i++) {
          const progress = i / (connectionPoints - 1);
          
          // Create sophisticated curved path
          const controlPoint1X = brainCenterX + (handX - brainCenterX) * 0.3;
          const controlPoint1Y = brainCenterY - 100 + Math.sin(progress * Math.PI) * 80;
          const controlPoint2X = brainCenterX + (handX - brainCenterX) * 0.7;
          const controlPoint2Y = handY - 50 + Math.cos(progress * Math.PI) * 60;
          
          const t = progress;
          const x = Math.pow(1-t, 3) * brainCenterX + 
                   3 * Math.pow(1-t, 2) * t * controlPoint1X + 
                   3 * (1-t) * Math.pow(t, 2) * controlPoint2X + 
                   Math.pow(t, 3) * handX;
          const y = Math.pow(1-t, 3) * brainCenterY + 
                   3 * Math.pow(1-t, 2) * t * controlPoint1Y + 
                   3 * (1-t) * Math.pow(t, 2) * controlPoint2Y + 
                   Math.pow(t, 3) * handY;
          
          // Multi-layered energy pulses
          const pulsePhase = (timeRef.current * 4 + i * 0.2) % (Math.PI * 2);
          const pulseIntensity = Math.sin(pulsePhase) * 0.5 + 0.5;
          
          // Primary energy node
          ctx.save();
          ctx.shadowColor = '#8B5CF6';
          ctx.shadowBlur = 15 + pulseIntensity * 10;
          ctx.beginPath();
          ctx.fillStyle = `rgba(139, 92, 246, ${pulseIntensity * 0.9})`;
          ctx.arc(x, y, 5 + pulseIntensity * 4, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
          
          // Secondary energy rings
          for (let ring = 1; ring <= 3; ring++) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${pulseIntensity * (0.6 - ring * 0.15)})`;
            ctx.lineWidth = 3 - ring * 0.5;
            ctx.arc(x, y, 8 + ring * 6 + pulseIntensity * 3, 0, Math.PI * 2);
            ctx.stroke();
          }
          
          // Data stream particles
          if (i > 0) {
            const prevProgress = (i - 1) / (connectionPoints - 1);
            const prevT = prevProgress;
            const prevX = Math.pow(1-prevT, 3) * brainCenterX + 
                         3 * Math.pow(1-prevT, 2) * prevT * controlPoint1X + 
                         3 * (1-prevT) * Math.pow(prevT, 2) * controlPoint2X + 
                         Math.pow(prevT, 3) * handX;
            const prevY = Math.pow(1-prevT, 3) * brainCenterY + 
                         3 * Math.pow(1-prevT, 2) * prevT * controlPoint1Y + 
                         3 * (1-prevT) * Math.pow(prevT, 2) * controlPoint2Y + 
                         Math.pow(prevT, 3) * handY;
            
            ctx.save();
            ctx.strokeStyle = `rgba(6, 182, 212, ${pulseIntensity * 0.8})`;
            ctx.lineWidth = 2 + pulseIntensity * 2;
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.restore();
          }
        }

        // Advanced data streams with quantum effects
        for (let stream = 0; stream < 8; stream++) {
          const streamProgress = (timeRef.current * 2 + stream * 0.3) % 1;
          const t = streamProgress;
          
          const controlPoint1X = brainCenterX + (handX - brainCenterX) * 0.3;
          const controlPoint1Y = brainCenterY - 100 + Math.sin(streamProgress * Math.PI) * 80;
          const controlPoint2X = brainCenterX + (handX - brainCenterX) * 0.7;
          const controlPoint2Y = handY - 50 + Math.cos(streamProgress * Math.PI) * 60;
          
          const streamX = Math.pow(1-t, 3) * brainCenterX + 
                         3 * Math.pow(1-t, 2) * t * controlPoint1X + 
                         3 * (1-t) * Math.pow(t, 2) * controlPoint2X + 
                         Math.pow(t, 3) * handX;
          const streamY = Math.pow(1-t, 3) * brainCenterY + 
                         3 * Math.pow(1-t, 2) * t * controlPoint1Y + 
                         3 * (1-t) * Math.pow(t, 2) * controlPoint2Y + 
                         Math.pow(t, 3) * handY;
          
          // Main data packet
          ctx.save();
          ctx.shadowColor = '#06B6D4';
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.fillStyle = `rgba(6, 182, 212, ${1 - streamProgress})`;
          ctx.arc(streamX, streamY, 8, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
          
          // Quantum trail effect
          for (let trail = 1; trail <= 6; trail++) {
            const trailProgress = streamProgress - trail * 0.03;
            if (trailProgress > 0) {
              const trailT = trailProgress;
              const trailX = Math.pow(1-trailT, 3) * brainCenterX + 
                           3 * Math.pow(1-trailT, 2) * trailT * controlPoint1X + 
                           3 * (1-trailT) * Math.pow(trailT, 2) * controlPoint2X + 
                           Math.pow(trailT, 3) * handX;
              const trailY = Math.pow(1-trailT, 3) * brainCenterY + 
                           3 * Math.pow(1-trailT, 2) * trailT * controlPoint1Y + 
                           3 * (1-trailT) * Math.pow(trailT, 2) * controlPoint2Y + 
                           Math.pow(trailT, 3) * handY;
              
              ctx.beginPath();
              ctx.fillStyle = `rgba(6, 182, 212, ${(1 - trailProgress) * 0.4})`;
              ctx.arc(trailX, trailY, 6 - trail * 0.8, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }

        // Update and render particles
        particlesRef.current.forEach((particle, index) => {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.life++;
          
          // Particle physics and interactions
          if (particle.type === 'neurotransmitter') {
            // Attraction to nearby neurons
            let closestNeuron = null;
            let closestDistance = Infinity;
            
            neuronsRef.current.forEach(neuron => {
              const distance = Math.sqrt((particle.x - neuron.x) ** 2 + (particle.y - neuron.y) ** 2);
              if (distance < closestDistance && distance < 50) {
                closestDistance = distance;
                closestNeuron = neuron;
              }
            });
            
            if (closestNeuron) {
              const attractionForce = 0.05;
              particle.vx += (closestNeuron.x - particle.x) * attractionForce / closestDistance;
              particle.vy += (closestNeuron.y - particle.y) * attractionForce / closestDistance;
            }
          }
          
          // Boundary interactions
          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -0.8;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -0.8;
          
          // Particle aging and regeneration
          if (particle.life > particle.maxLife) {
            particle.x = Math.random() * canvas.width;
            particle.y = Math.random() * canvas.height;
            particle.life = 0;
            particle.vx = (Math.random() - 0.5) * 3;
            particle.vy = (Math.random() - 0.5) * 3;
            particle.opacity = Math.random() * 0.8 + 0.2;
          }
          
          // Render particle with advanced effects
          const alpha = particle.opacity * (1 - particle.life / particle.maxLife);
          
          ctx.save();
          ctx.globalAlpha = alpha;
          
          if (particle.type === 'neurotransmitter') {
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 8;
            
            ctx.beginPath();
            ctx.fillStyle = particle.color;
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Neurotransmitter glow
            ctx.beginPath();
            ctx.fillStyle = particle.color.replace('60%)', '60%, 0.3)');
            ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.beginPath();
            ctx.fillStyle = particle.color.replace('60%)', `60%, ${alpha})`);
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
          }
          
          ctx.restore();
        });

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
        style={{ 
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #334155 70%, #475569 100%)'
        }}
      />
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Ultra-Detailed AI Brain & Hand Hero Section */}
      <section className="pt-16 relative overflow-hidden min-h-screen flex items-center">
        {/* Ultra-Detailed AI Brain & Hand Animation */}
        <UltraDetailedAIBrain />
        
        {/* Enhanced overlay gradient for perfect text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-gray-900/30 z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-20">
          <div className="max-w-5xl">
            {/* Ultra-Enhanced Typography with Advanced Staggered Animation */}
            <div className="mb-12">
              <h1 className="text-7xl md:text-9xl font-light leading-tight tracking-tight text-white">
                <span 
                  className="inline-block animate-fade-in-up" 
                  style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
                >
                  {translate('hero.title').split('.')[0]}.
                </span>
                <br />
                <span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 font-medium inline-block animate-fade-in-up"
                  style={{ 
                    animationDelay: '0.6s', 
                    animationFillMode: 'both',
                    filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))'
                  }}
                >
                  {translate('hero.title').split('.')[1]}.
                </span>
              </h1>
            </div>
            
            <p 
              className="text-3xl md:text-4xl mb-16 text-gray-100 max-w-4xl font-light leading-relaxed animate-fade-in-up"
              style={{ 
                animationDelay: '0.9s', 
                animationFillMode: 'both',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
              }}
            >
              {translate('hero.subtitle')}
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-8 animate-fade-in-up"
              style={{ animationDelay: '1.2s', animationFillMode: 'both' }}
            >
              <button className="group bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white px-16 py-6 rounded-full text-2xl font-medium hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 transition-all duration-500 transform hover:scale-110 shadow-2xl relative overflow-hidden">
                <span className="relative z-10">{translate('cta.book')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
              <Link 
                to="/solutions" 
                className="group border-3 border-white/60 text-white px-16 py-6 rounded-full text-2xl font-medium hover:bg-white/20 transition-all duration-500 relative overflow-hidden backdrop-blur-md"
              >
                <span className="relative z-10 flex items-center">
                  {translate('cta.explore')}
                  <ArrowRight className="ml-4 h-7 w-7 group-hover:translate-x-3 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced floating scroll indicator with neural pulse */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-10 h-16 border-3 border-white/60 rounded-full flex justify-center backdrop-blur-md relative">
            <div className="w-3 h-6 bg-gradient-to-b from-white/80 to-transparent rounded-full mt-3 animate-pulse" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-400/20 to-purple-400/20 animate-pulse" />
          </div>
        </div>

        {/* Enhanced ambient light effects with neural patterns */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-3xl animate-pulse z-5" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-3xl animate-pulse z-5" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse z-5" style={{ animationDelay: '2s' }} />
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
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Home;