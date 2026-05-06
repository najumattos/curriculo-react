import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import BackButton from '../components/BackButton';
import readmeContent from '../../README.md?raw';
import './style.css';

export default function Sobre() {
  return (
    <div className="container">
      <h1>Bem Vindo ao meu ecossistema tecnologico :)</h1>
      <div className="content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {readmeContent}
        </ReactMarkdown>
      </div>
    </div>
  );
}
