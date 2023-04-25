import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {viteCommonjs, esbuildCommonjs} from '@originjs/vite-plugin-commonjs'

const viteEnv = {} 
Object.keys(process.env).forEach((key) => { 
  if (key.startsWith('VITE_')) { 
    viteEnv[`import.meta.env.${key}`] = process.env[key] 
  } 
})

export default defineConfig({
  plugins: [viteCommonjs(), react()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  optimizeDeps: {
    include: ['linked-dep', 'websocket'],
    esbuildOptions: {
      plugins: [esbuildCommonjs(['react-s3', 'websocket'])],
    },
  }
})