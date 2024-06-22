import App from './App.svelte';
import WebApp from '@twa-dev/sdk';

const app = new App({
	target: document.body,
	props: {}
});

WebApp.ready();
WebApp.expand();

export default app;