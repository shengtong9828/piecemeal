<template>
	<div>
		<el-card shadow="hover" header="tagsView 非当前页演示">
			<el-form :model="formInline" size="small" label-width="100px" class="mt35 mb35">
				<el-row :gutter="35">
					<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="mb20">
						<el-form-item label="DatabaseId">
							<el-input v-model="formInline.databaseId" clearable></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="mb20">
						<el-form-item label="PageId">
							<el-input v-model="formInline.pageId" clearable></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="mb20">
						<el-form-item label="PropertyId">
							<el-input v-model="formInline.propertyId" clearable></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6">
						<el-form-item label-width="0px">
							<el-button type="primary" @click="queryDatabase" icon="el-icon-thumb">点击执行</el-button>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
		</el-card>
	</div>
</template>

<script>
import request from '@/utils/request';
export default {
	name: 'notion',
	data() {
		return {
			formInline: {
				databaseId: '',
				pageId: '',
				propertyId: '',
			},
		};
	},
	methods: {
		// #region block
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
								rich_text: [{ type: 'text', text: { content: 'Lacinato kale' } }],
							},
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
											link: { url: 'https://en.wikipedia.org/wiki/Lacinato_kale' },
										},
									},
									{
										type: 'text',
										text: {
											content:
												'\n1Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.\n',
										},
									},
									{
										type: 'text',
										text: {
											content:
												'2Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.',
											link: { url: 'https://en.wikipedia.org/wiki/Lacinato_kale' },
										},
									},
								],
							},
						},
					],
				},
			};
			this.execute(params)
				.then((res) => {
					console.log('retrievePage', res);
				})
				.catch((err) => {
					console.log('retrievePage', err);
				});
		},
		retrieveBlock() {
			const params = {
				method: 'get',
				url: `https://api.notion.com/v1/blocks/${this.formInline.pageId}`,
			};
			this.execute(params)
				.then((res) => {
					console.log('retrievePage', res);
				})
				.catch((err) => {
					console.log('retrievePage', err);
				});
		},
		retrieveBlockChildren() {
			const params = {
				method: 'get',
				url: `https://api.notion.com/v1/blocks/${this.formInline.pageId}/children`,
			};
			this.execute(params)
				.then((res) => {
					console.log('retrievePage', res);
				})
				.catch((err) => {
					console.log('retrievePage', err);
				});
		},
		// #endregion

		// #region page
		retrievePage() {
			const params = {
				method: 'get',
				url: `https://api.notion.com/v1/pages/${this.formInline.pageId}`,
			};
			this.execute(params)
				.then((res) => {
					console.log('retrievePage', res);
				})
				.catch((err) => {
					console.log('retrievePage', err);
				});
		},
		retrievePagePropertyItem() {
			const params = {
				method: 'get',
				url: `https://api.notion.com/v1/pages/${this.formInline.pageId}/properties/${this.formInline.propertyId}`,
			};
			this.execute(params)
				.then((res) => {
					console.log('retrievePage', res);
				})
				.catch((err) => {
					console.log('retrievePage', err);
				});
		},
		// #endregion

		// #region Databases
		queryDatabase() {
			const params = {
				method: 'post',
				url: `https://api.notion.com/v1/databases/${this.formInline.databaseId}/query`,
				data: {
					// filter: {}, // json
					// sorts: [], // array
					// start_cursor: '', // string
					// page_size: 1 // int32
				},
			};
			console.log(params);
			this.execute(params)
				.then((res) => {
					console.log('queryDatabase', res);
				})
				.catch((err) => {
					console.log('queryDatabase', err);
				});
		},
		retrieveDatabase() {
			const params = {
				method: 'get',
				url: `https://api.notion.com/v1/databases/${this.formInline.databaseId}`,
			};
			this.execute(params)
				.then((res) => {
					console.log('retrieveDatabase', res);
				})
				.catch((err) => {
					console.log('retrieveDatabase', err);
				});
		},
		createDatabase() {
			const params = {
				method: 'post',
				url: `https://api.notion.com/v1/databases`,
				data: {},
			};
			this.execute(params)
				.then((res) => {
					console.log('retrieveDatabase', res);
				})
				.catch((err) => {
					console.log('retrieveDatabase', err);
				});
		},
		// #endregion

		execute(data) {
			return request({
				url: 'https://cross.vercel.qingqian.fun/',
				method: 'post',
				data: { type: 'notion', ...data },
				headers: { token: 'ff768bfc-07c6-3951-0f1f-15f6bc3d6fcf' },
			});
			// return new Promise(function (resolve, reject) {
			// 	const promise = request.post(
			// 		'https://cross.vercel.qingqian.fun/',
			// 		{ type: 'notion', ...data },
			// 		{ headers: { token: 'ff768bfc-07c6-3951-0f1f-15f6bc3d6fcf' } }
			// 	);
			// 	promise
			// 		.then(function (response) {
			// 			resolve(response.data);
			// 		})
			// 		.catch(function (error) {
			// 			reject(error);
			// 		});
			// });
		},
	},
};
</script>
