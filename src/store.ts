import { writable } from 'svelte/store';
import { browser } from '$app/environment'

const defaultTheme = 'theme-light'
const initialTheme = browser
    ? window.localStorage.getItem('theme') as App.Theme
    : defaultTheme as App.Theme

export const theme = writable<App.Theme>(initialTheme);

theme.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem('theme', value)
    }
})
