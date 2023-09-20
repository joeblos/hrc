import { writable } from 'svelte/store';

function createMediaQueryStore(mediaQueryString) {
    const { subscribe, set } = writable(undefined, () => {
        if (typeof window !== 'undefined') {
            let mql = window.matchMedia(mediaQueryString);
            set(mql.matches);
            const onchange = () => set(mql.matches);
            'addEventListener' in mql
                ? mql.addEventListener('change', onchange)
                : mql.addListener(onchange);

            return () => {
                'removeEventListener' in mql
                    ? mql.removeEventListener('change', onchange)
                    : mql.removeListener(onchange);
            };
        }
    });
    return { subscribe };
}

export const sm = createMediaQueryStore('(min-width: 640px)');
export const md = createMediaQueryStore('(min-width: 768px)');
export const lg = createMediaQueryStore('(min-width: 1024px)');
export const xl = createMediaQueryStore('(min-width: 1280px)');
export const xxl = createMediaQueryStore('(min-width: 1536px)');
