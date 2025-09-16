import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20%',
        }}
      >
        {/* Fire flame SVG-like shape */}
        <div
          style={{
            position: 'relative',
            width: '80px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Main flame */}
          <div
            style={{
              background: 'linear-gradient(135deg, #ff4444 0%, #ff6b35 50%, #ff8c00 100%)',
              width: '60px',
              height: '80px',
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              position: 'absolute',
              transform: 'rotate(-10deg)',
            }}
          />
          {/* Inner flame highlight */}
          <div
            style={{
              background: 'linear-gradient(135deg, #ffeb3b 0%, #ffc107 100%)',
              width: '30px',
              height: '40px',
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              position: 'absolute',
              transform: 'rotate(-5deg) translateX(-5px)',
              opacity: 0.8,
            }}
          />
          {/* Small highlight */}
          <div
            style={{
              background: '#ffffff',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              position: 'absolute',
              transform: 'translateX(-10px) translateY(-10px)',
              opacity: 0.9,
            }}
          />
        </div>

        {/* Text below */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: 'system-ui',
            letterSpacing: '1px',
          }}
        >
          SDH
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}