console.log('init')
vi.mock('framer-motion', async () => {
  console.log('mock')
  return {
    default: 'mocked',
  }
})

export {}
