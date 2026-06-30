import React from 'react';

interface VydoLogoProps {
    className?: string;
}

const VydoLogo: React.FC<VydoLogoProps> = ({ className = '' }) => {
    return (
        <div className={`flex flex-col items-start leading-none select-none ${className}`}>
            {/* VYDO — linha 1 */}
            <span
                className="font-extrabold tracking-tight text-white"
                style={{
                    fontSize: 'clamp(2.2rem, 8vw, 3.2rem)',
                    fontFamily: '"Inter", sans-serif',
                    lineHeight: 1,
                    textShadow: '0 0 40px rgba(255,255,255,0.15)',
                    letterSpacing: '-0.02em',
                }}
            >
                VYDO
            </span>

            {/* CODE </> — linha 2 */}
            <span
                className="font-extrabold tracking-tight flex items-center gap-1 sm:gap-2"
                style={{
                    fontSize: 'clamp(2.2rem, 8vw, 3.2rem)',
                    fontFamily: '"Inter", sans-serif',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    marginLeft: 'clamp(0.8rem, 3vw, 1.5rem)',
                }}
            >
                <span
                    style={{
                        color: '#6366f1',
                        textShadow: '0 0 24px rgba(99,102,241,0.7), 0 0 60px rgba(138,43,226,0.4)',
                    }}
                >
                    CODE
                </span>
                <span
                    style={{
                        color: 'rgba(255,255,255,0.75)',
                        fontSize: 'clamp(1.8rem, 7vw, 2.8rem)',
                        textShadow: '0 0 20px rgba(255,255,255,0.3)',
                    }}
                >
                    {'</>'}
                </span>
            </span>
        </div>
    );
};

export default VydoLogo;
