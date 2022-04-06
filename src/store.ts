import { writable } from 'svelte/store';
import { browser } from '$app/env'

const defaultTheme = 'theme-light'
const initialTheme = browser ? window.localStorage.getItem('theme') ?? defaultTheme : defaultTheme

export const theme = writable<string>(initialTheme);

theme.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('theme', value)

    }
})
