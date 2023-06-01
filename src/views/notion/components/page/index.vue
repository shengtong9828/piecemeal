<template>
	<el-card v-loading="loading" shadow="hover" header="page" class="mb15">
		<el-form :model="formInline" size="small" label-width="100px" class="mb25">
			<el-row :gutter="35">
				<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="mb20">
					<el-form-item label="pageId">
						<el-input v-model="formInline.pageId" clearable></el-input>
					</el-form-item>
				</el-col>
				<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="mb20">
					<el-form-item label="propertyId">
						<el-input v-model="formInline.propertyId" clearable></el-input>
					</el-form-item>
				</el-col>
				<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="mb20">
					<el-form-item label-width="0px">
						<el-button type="primary" @click="retrievePage" icon="el-icon-thumb">retrievePage</el-button>
					</el-form-item>
				</el-col>
				<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="mb20">
					<el-form-item label-width="0px">
						<el-button type="primary" @click="retrievePagePropertyItem" icon="el-icon-thumb">retrievePagePropertyItem</el-button>
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
				pageId: '',
				propertyId: ''
			},
			tableTitle: [],
			tableData: []
		}
	},
	methods: {
		retrievePage() {
			this.loading = true
			const params = {
				method: 'get',
				url: `https://api.notion.com/v1/pages/${this.formInline.pageId}`
			}
			crossApi
				.notionExec(params)
				.then((res) => {
					console.log('retrievePage', res)
					const properties = res.data.properties
					this.tableTitle = Array.from(new Set(Object.keys(properties))).sort()
					this.tableData = [notionUtils.analProp(properties)]
				})
				.catch((err) => {
					console.log('retrievePage', err)
				})
				.finally(() => {
					this.loading = false
				})
		},
		retrievePagePropertyItem() {
			const params = {
				method: 'get',
				url: `https://api.notion.com/v1/pages/${this.formInline.pageId}/properties/${this.formInline.propertyId}`
			}
			crossApi
				.notionExec(params)
				.then((res) => {
					console.log('retrievePage', res)
				})
				.catch((err) => {
					console.log('retrievePage', err)
				})
		}
	}
}
</script>
