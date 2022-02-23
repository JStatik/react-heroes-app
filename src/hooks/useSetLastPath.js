import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const useSetLastPath = () => {
    const { pathname } = useLocation();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const hero = searchParams.get('hero') || '';

        if(!hero)
            localStorage.setItem('uhalp', pathname);
        else
            localStorage.setItem('uhalp', `${ pathname }?hero=${ hero }`);
    }, [pathname, searchParams]);
};

export default useSetLastPath;
