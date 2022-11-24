import { reactive } from "vue";

export const store = reactive({
  navbar: [
    {
        route: 'home',
        label: 'Home',
        active: false
    },
    {
        route: 'landing',
        label: 'Landing',
        active: true,
        items: ['landing - 1', 'landing - 2', 'landing - 3']
    },
    {
        route: 'page',
        label: 'page',
        active: false,
        items: ['page-1', 'page-2', 'page-3']
    },
    {
        route: 'docs',
        label: 'Docs',
        active: false,
        items: ['docs-1', 'docs-2', 'docs-3']
    }
]
  
});