<script lang="ts" context="module">
	import type { User } from '@prisma/client';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const users: User[] = await fetch('/api/users').then((r) => r.json());

		return { props: { user: users[0] } };
	};
</script>

<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import '../app.css';

	export let user: User;
</script>

<div class="w-screen h-screen flex justify-center items-center">
	<div
		class="border border-slate-100 rounded shadow w-1/4  h-1/6 flex flex-col items-center justify-center"
	>
		<h1 class="text-2xl font-bold m-2">
			Hello
			{user.firstname}
			{user.lastname}
		</h1>

		<div class="w-[24px] h-[24px] rounded-full bg-green-500 pulse" />
	</div>
</div>

<style>
	@keyframes pulse {
		from {
			transform: scale(1);
			opacity: 1;
		}
		to {
			transform: scale(1.5);
			opacity: 0;
		}
	}

	.pulse {
		animation: pulse 2s ease-out infinite;
	}
</style>
