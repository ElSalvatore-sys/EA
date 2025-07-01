import React from 'react';

// Enhanced 3D-style icons with sophisticated design
export const Enhanced3DIcon: React.FC<{ 
  children: React.ReactNode; 
  gradient: string; 
  shadowColor: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}> = ({ children, gradient, shadowColor, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-10 w-10'
  };

  return (
    <div className="relative group">
      {/* Main icon container with 3D effect */}
      <div className={`relative ${sizeClasses[size]} transition-all duration-500 group-hover:scale-110`}>
        {/* Background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl ${shadowColor} shadow-lg group-hover:shadow-xl transition-shadow duration-500`}></div>
        
        {/* Glass overlay effect */}
        <div className="absolute inset-0 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
        
        {/* 3D depth effect */}
        <div className={`absolute -bottom-1 -right-1 w-full h-full bg-gradient-to-br ${gradient} rounded-2xl opacity-30 -z-10 group-hover:opacity-40 transition-opacity duration-500`}></div>
        
        {/* Icon content */}
        <div className="relative w-full h-full flex items-center justify-center">
          <div className={`${iconSizes[size]} text-white drop-shadow-lg`}>
            {children}
          </div>
        </div>
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500"></div>
        <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-500" style={{ animationDelay: '0.5s' }}></div>
      </div>
    </div>
  );
};

// Klavierschule Glenn Miller Logo Component
export const KlavierschuleLogo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} relative group`}>
      {/* Piano keys design inspired by music education */}
      <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* White keys */}
        <div className="absolute bottom-0 left-0 right-0 h-3/5 bg-gradient-to-t from-white to-gray-100 rounded-b-lg"></div>
        
        {/* Black keys */}
        <div className="absolute top-0 left-1/6 w-1/12 h-2/5 bg-gradient-to-b from-gray-900 to-black rounded-b-sm"></div>
        <div className="absolute top-0 left-1/3 w-1/12 h-2/5 bg-gradient-to-b from-gray-900 to-black rounded-b-sm"></div>
        <div className="absolute top-0 right-1/3 w-1/12 h-2/5 bg-gradient-to-b from-gray-900 to-black rounded-b-sm"></div>
        <div className="absolute top-0 right-1/6 w-1/12 h-2/5 bg-gradient-to-b from-gray-900 to-black rounded-b-sm"></div>
        
        {/* Musical note overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-blue-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
          </div>
        </div>
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      </div>
    </div>
  );
};

// Enhanced Industry Icons
export const HospitalityIcon: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ size = 'md' }) => (
  <Enhanced3DIcon 
    gradient="from-orange-400 via-red-400 to-pink-400" 
    shadowColor="shadow-orange-500/25"
    size={size}
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H9v5h2v-3h2v3h2v-3h2v3h2v-5h-2V7z"/>
      <circle cx="7" cy="10" r="1.5"/>
    </svg>
  </Enhanced3DIcon>
);

export const ManufacturingIcon: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ size = 'md' }) => (
  <Enhanced3DIcon 
    gradient="from-gray-400 via-slate-500 to-zinc-600" 
    shadowColor="shadow-gray-500/25"
    size={size}
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      <path d="M9 12h6v8H9z" opacity="0.7"/>
      <path d="M7 20h10v2H7z"/>
    </svg>
  </Enhanced3DIcon>
);

export const FinanceIcon: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ size = 'md' }) => (
  <Enhanced3DIcon 
    gradient="from-emerald-400 via-teal-500 to-cyan-600" 
    shadowColor="shadow-emerald-500/25"
    size={size}
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V14.5C14.8,16.4 13.4,18 12,18C10.6,18 9.2,16.4 9.2,14.5V10C9.2,8.6 10.6,7 12,7Z"/>
    </svg>
  </Enhanced3DIcon>
);

export const SmartHomeIcon: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ size = 'md' }) => (
  <Enhanced3DIcon 
    gradient="from-blue-400 via-indigo-500 to-purple-600" 
    shadowColor="shadow-blue-500/25"
    size={size}
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"/>
      <circle cx="15" cy="8" r="2" opacity="0.8"/>
      <path d="M16 10h2v2h-2z" opacity="0.6"/>
    </svg>
  </Enhanced3DIcon>
);

export const HealthcareIcon: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ size = 'md' }) => (
  <Enhanced3DIcon 
    gradient="from-pink-400 via-rose-500 to-red-500" 
    shadowColor="shadow-pink-500/25"
    size={size}
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
      <path d="M12 8v8M8 12h8" stroke="white" strokeWidth="1.5" opacity="0.8"/>
    </svg>
  </Enhanced3DIcon>
);

export const RetailIcon: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ size = 'md' }) => (
  <Enhanced3DIcon 
    gradient="from-purple-400 via-violet-500 to-indigo-600" 
    shadowColor="shadow-purple-500/25"
    size={size}
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M7,18C5.9,18 5,18.9 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.9 8.1,18 7,18Z"/>
      <path d="M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5H5.21L4.27,2H1Z"/>
      <path d="M17,18C15.9,18 15,18.9 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.9 18.1,18 17,18Z"/>
    </svg>
  </Enhanced3DIcon>
);

// Enhanced Feature Icons
export const AIBrainIcon: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ size = 'md' }) => (
  <Enhanced3DIcon 
    gradient="from-blue-500 via-purple-500 to-pink-500" 
    shadowColor="shadow-blue-500/25"
    size={size}
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M21.33 12.91c.09-.09.15-.2.15-.33s-.06-.24-.15-.33l-1.83-1.83c-.09-.09-.2-.15-.33-.15s-.24.06-.33.15l-.77.77-.77-.77c-.09-.09-.2-.15-.33-.15s-.24.06-.33.15l-1.83 1.83c-.09.09-.15.2-.15.33s.06.24.15.33l.77.77-.77.77c-.09.09-.15.2-.15.33s.06.24.15.33l1.83 1.83c.09.09.2.15.33.15s.24-.06.33-.15l.77-.77.77.77c.09.09.2.15.33.15s.24-.06.33-.15l1.83-1.83c.09-.09.15-.2.15-.33s-.06-.24-.15-.33l-.77-.77.77-.77z"/>
      <circle cx="12" cy="12" r="3" opacity="0.7"/>
      <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    </svg>
  </Enhanced3DIcon>
);

export const SecurityShieldIcon: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ size = 'md' }) => (
  <Enhanced3DIcon 
    gradient="from-green-400 via-emerald-500 to-teal-600" 
    shadowColor="shadow-green-500/25"
    size={size}
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
    </svg>
  </Enhanced3DIcon>
);

export const AutomationIcon: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ size = 'md' }) => (
  <Enhanced3DIcon 
    gradient="from-orange-400 via-amber-500 to-yellow-500" 
    shadowColor="shadow-orange-500/25"
    size={size}
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7.27L16,4.27L17.73,6L14.73,9H16.27C16.61,8.4 17.26,8 18,8A2,2 0 0,1 20,10A2,2 0 0,1 18,12C17.26,12 16.61,11.6 16.27,11H14.73L17.73,14L16,15.73L13,12.73V14.27C13.6,14.61 14,15.26 14,16A2,2 0 0,1 12,18A2,2 0 0,1 10,16C10,15.26 10.4,14.61 11,14.27V12.73L8,15.73L6.27,14L9.27,11H7.73C7.39,11.6 6.74,12 6,12A2,2 0 0,1 4,10A2,2 0 0,1 6,8C6.74,8 7.39,8.4 7.73,9H9.27L6.27,6L8,4.27L11,7.27V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2Z"/>
    </svg>
  </Enhanced3DIcon>
);