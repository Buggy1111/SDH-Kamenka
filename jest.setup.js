// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
  })),
  usePathname: jest.fn(() => '/'),
  useSearchParams: jest.fn(() => new URLSearchParams()),
}))

// Mock Framer Motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => {
      const { initial, animate, exit, transition, ...rest } = props
      return <div {...rest}>{children}</div>
    },
    section: ({ children, ...props }) => {
      const { initial, animate, exit, transition, ...rest } = props
      return <section {...rest}>{children}</section>
    },
    nav: ({ children, ...props }) => {
      const { initial, animate, exit, transition, ...rest } = props
      return <nav {...rest}>{children}</nav>
    },
    button: ({ children, ...props }) => {
      const { initial, animate, exit, transition, ...rest } = props
      return <button {...rest}>{children}</button>
    },
    a: ({ children, ...props }) => {
      const { initial, animate, exit, transition, ...rest } = props
      return <a {...rest}>{children}</a>
    },
    h1: ({ children, ...props }) => {
      const { initial, animate, exit, transition, ...rest } = props
      return <h1 {...rest}>{children}</h1>
    },
    h2: ({ children, ...props }) => {
      const { initial, animate, exit, transition, ...rest } = props
      return <h2 {...rest}>{children}</h2>
    },
  },
  AnimatePresence: ({ children }) => children,
  useAnimation: () => ({
    start: jest.fn(),
    set: jest.fn(),
  }),
  useInView: () => true,
  useScroll: () => ({
    scrollYProgress: { current: 0 },
  }),
  useTransform: () => 0,
}))

// Mock Next.js Image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />
  },
}))

// Mock environment variables
process.env = {
  ...process.env,
  NEXT_PUBLIC_API_URL: 'http://localhost:3000',
}

// Suppress console errors in tests
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Warning: ReactDOM.render') ||
       args[0].includes('Warning: useLayoutEffect'))
    ) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})