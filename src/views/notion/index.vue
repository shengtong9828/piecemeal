<template>
	<div>
		<database />
		<page />
		<block />
	</div>
</template>

<script>
import database from './components/database'
import page from './components/page'
import block from './components/block'
export default {
	name: 'notion',
	components: { database, page, block }
}
</script>
