import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// @ts-ignore
window.require = window.import;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
