import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'

const plugin = [
  mkcert({
    savePath: './certs', // save the generated certificate into certs directory
    // force: true, // force generation of certs even without setting https property in the vite config
  }),
]
const serL = {
  host: '127.0.0.1',
  cors: '*',
  hmr: {
    host: '127.0.0.1',
    protocol: 'ws',
  },
  watch: {
    usePolling: true,
  },
}
const serG = {
  // https: true, // turn off in tampermonkey+vercel, obsolete in vite5+
  host: true, // to host on local network
  // host: 'localhost',
  cors: '*',
  // hmr: {
  //   host: 'localhost',
  //   protocol: 'ws',
  // },
  // watch: {
  //   usePolling: true,
  // },
}
export default defineConfig({
  plugins: plugin,
  server: serG,
  build: {
    // sourcemap: 'inline',
    sourcemap: true,
    minify: true,
    manifest: true,
    rollupOptions: {
      input: './main.js',
      output: {
        format: 'umd',
        entryFileNames: 'main.js',
        esModule: false,
        compact: true,
        globals: {
          jquery: '$',
        },
      },
      external: ['jquery'],
    },
  },
})
