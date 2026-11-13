import React from 'react';

/**
 * Architectural geometric mountain ridge & sun-arc linework inspired by the
 * ArizoTek emblem. Clean vector geometry designed to remain crisp at any width.
 */
export const DesertHorizonLines: React.FC<{
  className?: string;
  tone?: 'light' | 'dark';
}> = ({ className = '', tone = 'light' }) => {
  const ridgeColor = tone === 'dark' ? '#E9A04A' : '#D66A25';
  const lineColor = tone === 'dark' ? '#FFFFFF' : '#402015';

  return (
    <div
      className={`pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Subtle desert sun arc */}
        <path
          d="M960 220C960 120.589 1040.59 40 1140 40C1239.41 40 1320 120.589 1320 220"
          stroke={ridgeColor}
          strokeOpacity={tone === 'dark' ? '0.2' : '0.16'}
          strokeWidth="2"
        />
        <path
          d="M1010 220C1010 148.203 1068.2 90 1140 90C1211.8 90 1270 148.203 1270 220"
          stroke={ridgeColor}
          strokeOpacity={tone === 'dark' ? '0.12' : '0.1'}
          strokeWidth="1.5"
        />

        {/* Layered mountain silhouettes */}
        <path
          d="M0 240L260 156L450 198L720 112L940 182L1140 122L1440 194V240H0Z"
          fill={ridgeColor}
          fillOpacity={tone === 'dark' ? '0.09' : '0.05'}
        />
        <path
          d="M0 240L210 186L420 214L650 152L880 208L1110 162L1440 216V240H0Z"
          fill={lineColor}
          fillOpacity={tone === 'dark' ? '0.12' : '0.035'}
        />

        {/* Sweeping horizon curve */}
        <path
          d="M0 226C390 198 920 198 1440 228"
          stroke={ridgeColor}
          strokeOpacity={tone === 'dark' ? '0.28' : '0.2'}
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};
