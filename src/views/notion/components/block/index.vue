<template>
	<el-card v-loading="loading" shadow="hover" header="block" class="mb15">
		<el-form :model="formInline" size="small" label-width="100px" class="mb25">
			<el-row :gutter="35">
				<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="mb20">
					<el-form-item label="pageId">
						<el-input v-model="formInline.pageId" clearable></el-input>
					</el-form-item>
				</el-col>
				<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="mb20">
					<el-form-item label-width="0px">
						<el-button type="primary" @click="retrieveBlock" icon="el-icon-thumb">retrieveBlock</el-button>
					</el-form-item>
				</el-col>
				<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="mb20">
					<el-form-item label-width="0px">
						<el-button type="primary" @click="retrieveBlockChildren" icon="el-icon-thumb">retrieveBlockChildren</el-button>
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
const crossApi = useCrossApi()
export default {
	name: 'notion',
	data() {
		return {
			loading: false,
			formInline: {
				pageId: ''
			},
			tableTitle: [],
			tableData: []
		}
	},
	methods: {
		appendBlockChildren() {
			const params = {
				method: 'PATCH',
				url: `https://api.notion.com/v1/blocks/${this.formInline.pageId}/children`,
				data: {
					children: [
						{
							object: 'block',
							type: 'heading_2',
							heading_2: {
								rich_text: [{ type: 'text', text: { content: 'Lacinato kale' } }]
							}
						},
						{
							object: 'block',
							type: 'paragraph',
							paragraph: {
								rich_text: [
									{
										type: 'text',
										text: {
											content:
												'Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale 19\n',
											link: { url: 'https://en.wikipedia.org/wiki/Lacinato_kale' }
										}
									},
									{
										type: 'text',
										text: {
											content:
												'\n1Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.\n'
										}
									},
									{
										type: 'text',
										text: {
											content:
												'2Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.',
											link: { url: 'https://en.wikipedia.org/wiki/Lacinato_kale' }
										}
									}
								]
							}
						}
					]
				}
			}
			crossApi
				.notionExec(params)
				.then((res) => {
					console.log('retrievePage', res)
				})
				.catch((err) => {
					console.log('retrievePage', err)
				})
		},
		retrieveBlock() {
			const params = {
				method: 'get',
				url: `https://api.notion.com/v1/blocks/${this.formInline.pageId}`
			}
			crossApi
				.notionExec(params)
				.then((res) => {
					console.log('retrievePage', res)
				})
				.catch((err) => {
					console.log('retrievePage', err)
				})
		},
		retrieveBlockChildren() {
			const params = {
				method: 'get',
				url: `https://api.notion.com/v1/blocks/${this.formInline.pageId}/children`
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
