import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

// Inicializar mermaid uma única vez
mermaid.initialize({ startOnLoad: true, theme: 'dark' });

/**
 * MermaidBlock
 * Renderiza blocos de código mermaid como diagramas
 * Uso: ```mermaid
 *       graph TD
 *       A --> B
 *       ```
 */
export function MermaidBlock({ children }) {
  const mermaidRef = useRef(null);

  useEffect(() => {
    if (mermaidRef.current) {
      // Renderizar o diagrama
      mermaid.contentLoaded();
      mermaid.run();
    }
  }, [children]);

  return (
    <div ref={mermaidRef} className="mermaid">
      {children}
    </div>
  );
}

export default MermaidBlock;
