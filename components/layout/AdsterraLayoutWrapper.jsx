// components/layout/AdsterraLayoutWrapper.jsx
"use client";

import { useEffect, useRef } from 'react';
import { getAIOptimizer } from '../../utils/adsterra';

export default function AdsterraLayoutWrapper({ children, countryCode }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !initialized.current) {
        const optimizer = getAIOptimizer();
        if (optimizer) {
            optimizer.setGeo(countryCode);
        }

        const nativeContainer = document.getElementById('container-9b6bf6190ee4603987e14c3135faa57f');

        const visibleAds = [
            { id: 'native', src: '//fundingfashioned.com/9b6bf6190ee4603987e14c3135faa57f/invoke.js' },
            { id: 'social', src: '//fundingfashioned.com/9d/1d/42/9d1d427cac89136b9639167019fa35ca.js' }
        ];

        visibleAds.forEach(s => {
            if(document.querySelector(`script[src="${s.src}"]`)) return;
            const el = document.createElement('script');
            el.src = s.src;
            el.async = true;
            
            // PERBAIKAN: Masukkan script native ke kontainer footer jika ada
            if (s.id === 'native' && nativeContainer) {
                nativeContainer.appendChild(el);
            } else {
                document.body.appendChild(el);
            }
        });

        setTimeout(() => {
            if(document.querySelector(`script[src*="0458dcc814fd4d4d99c34bb567a4abf9"]`)) return;
            const popunder = document.createElement('script');
            popunder.src = '//fundingfashioned.com/04/58/dc/0458dcc814fd4d4d99c34bb567a4abf9.js'; 
            document.head.appendChild(popunder);
        }, 3500);

        initialized.current = true;
    }
  }, [countryCode]);

  return <>{children}</>;
}