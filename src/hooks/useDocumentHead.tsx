import { useEffect } from 'react';

interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

interface UseDocumentHeadProps {
  title?: string;
  meta?: MetaTag[];
}

export const useDocumentHead = ({ title, meta }: UseDocumentHeadProps) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (meta && meta.length > 0) {
      meta.forEach(({ name, property, content }) => {
        let element;
        if (name) {
          element = document.querySelector(`meta[name="${name}"]`);
          if (!element) {
            element = document.createElement('meta');
            element.setAttribute('name', name);
            document.head.appendChild(element);
          }
        } else if (property) {
          element = document.querySelector(`meta[property="${property}"]`);
          if (!element) {
            element = document.createElement('meta');
            element.setAttribute('property', property);
            document.head.appendChild(element);
          }
        }

        if (element) {
          element.setAttribute('content', content);
        }
      });
    }

    // Cleanup function to reset title if component unmounts
    return () => {
      // Optionally clean up meta tags here
    };
  }, [title, meta]);
};
