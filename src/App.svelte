<script>
	import Clock from "./controls/Clock.svelte";
	import Nameplate from "./controls/Nameplate.svelte";
	import Navigation from "./components/Navigation.svelte";
	import Task from "./pages/Task.svelte";
	import TaskLine from "./pages/TaskLine.svelte";
	import Profile from "./pages/Profile.svelte";
	import { onMount } from "svelte";
	import { Router, Route } from "svelte-routing";
	import * as bizAccount from "./businesses/bizAccount";
	import { storeAccount } from "./store";

	let telegram = {};

	onMount(async () => {
		telegram = window.Telegram.WebApp;
		await QueryAccountByUserId();
	});

	async function QueryAccountByUserId() {
		let user = telegram.initDataUnsafe.user;
		if (/*user != undefined*/ true) {
			let result = await bizAccount.QueryAccountByUserId(
				/*user.id*/ 5789645950,
			);
			if (result.status) {
				let profile = {
					...result.value,
					photoUrl:
						result.value.photoUrl == null
							? "https://i2.mjj.rip/2024/06/03/c0526f288d0120d250bed1816892d1d0.jpeg"
							: result.value.photoUrl,
				};
				storeAccount.update((x) => profile);
			}
		}
	}
</script>

<main id="app-root">
	<div id="app-title">
		<Nameplate
			name="{$storeAccount.firstName}.{$storeAccount.lastName}"
			description="@{$storeAccount.username}"
			photoUrl={$storeAccount.photoUrl}
		></Nameplate>
		<Clock></Clock>
	</div>
	<div id="app-content">
		<Router>
			<Route path="/" component={Task}></Route>
			<Route path="/task-line" component={TaskLine}></Route>
			<Route path="/profile" component={Profile}></Route>
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
