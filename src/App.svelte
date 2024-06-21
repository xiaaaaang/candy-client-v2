<script>
	import Clock from "./controls/Clock.svelte";
	import Nameplate from "./controls/Nameplate.svelte";
	import Navigation from "./components/Navigation.svelte";
	import Task from "./pages/Task.svelte";
	import TaskLine from "./pages/TaskLine.svelte";
	import Dashboard from "./pages/Dashboard.svelte";
	import { onMount } from "svelte";
	import { Router, Route } from "svelte-routing";
	import * as bizAccount from "./businesses/bizAccount";

	onMount(async () => {
		await QueryAccountByUserId();
	});

	function QueryAccountByUserId() {
		bizAccount.QueryAccountByUserId(5789645950).then(x => {
			console.log(x);
		}).catch(e => console.log(e));
	}
</script>

<main id="app-root">
	<div id="app-title">
		<Nameplate></Nameplate>
		<Clock></Clock>
	</div>
	<div id="app-content">
		<Router>
			<Route path="/" component={Task}></Route>
			<Route path="/task-line" component={TaskLine}></Route>
			<Route path="/dashboard" component={Dashboard}></Route>
		</Router>
	</div>
	<div id="app-navigation">
		<Navigation></Navigation>
	</div>
</main>

<style>
	#app-root {
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
	}
	#app-title {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: var(--spacing);
		border-bottom: 1px solid var(--foreground-color);
	}
	#app-content {
		flex-grow: 1;
		overflow: auto;
	}
	#app-navigation {
		border-top: 1px solid var(--foreground-color);
	}
</style>
