<template>
	<el-card v-loading="loading" shadow="hover" header="Database" class="mb15">
		<el-form :model="formInline" size="small" label-width="100px" class="mb25">
			<el-row :gutter="35">
				<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="mb20">
					<el-form-item label="DatabaseId">
						<el-input v-model="formInline.databaseId" clearable></el-input>
					</el-form-item>
				</el-col>
				<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="mb20">
					<el-form-item>
						<el-button type="primary" @click="queryDatabase" icon="el-icon-thumb">queryDatabase</el-button>
					</el-form-item>
				</el-col>
				<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="mb20">
					<el-form-item>
						<el-button type="primary" @click="retrieveDatabase" icon="el-icon-thumb">retrieveDatabase</el-button>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>
		<el-table :data="tableData">
			<el-table-column v-for="title in tableTitle" :key="title" :prop="title" :label="title"></el-table-column>
		</el-table>
	</el-card>
</template>

<script>
import { useCrossApi } from '@/api/cross'
import notionUtils from '@/utils/notion'
const crossApi = useCrossApi()
export default {
	name: 'notion',
	data() {
		return {
			loading: false,
			formInline: {
				databaseId: ''
			},
			tableTitle: [],
			tableData: []
		}
	},
	methods: {
		createDatabase() {
			const params = {
				method: 'post',
				url: `https://api.notion.com/v1/databases`,
				data: {}
			}
			crossApi
				.notionExe(params)
				.then((res) => {
					console.log('retrieveDatabase', res)
				})
				.catch((err) => {
					console.log('retrieveDatabase', err)
				})
		},
		retrieveDatabase() {
			const params = {
				method: 'get',
				url: `https://api.notion.com/v1/databases/${this.formInline.databaseId}`
			}
			crossApi
				.notionExec(params)
				.then((res) => {
					console.log('retrieveDatabase', res)
				})
				.catch((err) => {
					console.log('retrieveDatabase', err)
				})
		},
		queryDatabase() {
			this.loading = true
			const params = {
				method: 'post',
				url: `https://api.notion.com/v1/databases/${this.formInline.databaseId}/query`,
				data: {
					// filter: {}, // json
					// sorts: [], // array
					// start_cursor: '', // string
					// page_size: 1 // int32
				}
			}
			console.log(params)
			crossApi
				.notionExec(params)
				.then((res) => {
					console.log('queryDatabase', res)
					const properties = res.data.results.map((item) => item.properties)
					this.tableTitle = Array.from(new Set(properties.map((item) => Object.keys(item)).flat())).sort()
					this.tableData = notionUtils.analProps(properties)
				})
				.catch((err) => {
					console.log('queryDatabase', err)
				})
				.finally(() => {
					this.loading = false
				})
		}
	}
}
</script>
