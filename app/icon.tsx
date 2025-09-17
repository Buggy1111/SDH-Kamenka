import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, #ff4444 0%, #ff6b35 50%, #ff8c00 100%)',
            width: '20px',
            height: '24px',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}