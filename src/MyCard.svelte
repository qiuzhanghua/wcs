<svelte:options tag="my-card" />
<div id="app" bind:this={self}>
	<h1 class="name">{name}</h1>
	<button on:click={sayMyName}>呼唤我的名字</button>
</div>

<script lang="ts">
	export let name
	export let self
	function sayMyName() {
		alert(name)
		// 呼唤结束，你还可以自定义事件，冒泡向上层传递信息
		self.dispatchEvent(new CustomEvent('done', {
			detail: 'anything'
		}))
	}
</script>

<style>
	#app .name {
		color: red;
	}
</style>
