<template>
		<el-card v-loading="loading" shadow="hover" header="queryDatabase" class="mb15">
			<el-form :model="formInline" size="small" label-width="100px" class="mb25">
				<el-row :gutter="35">
					<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="mb20">
						<el-form-item label="DatabaseId">
							<el-input v-model="formInline.databaseId" clearable></el-input>
						</el-form-item>
					</el-col>
					<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="6" class="mb20">
						<el-form-item label-width="0px">
							<el-button type="primary" @click="queryDatabase" icon="el-icon-thumb">queryDatabase</el-button>
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
import { useCrossApi } from '@/api/cross';
import notionUtils from '@/utils/notion';
const crossApi = useCrossApi();
export default {
	name: 'notion',
	data() {
		return {
      loading: false,
			formInline: {
				databaseId: '831d71800873466f929b83540d02ea61'
			},
      tableTitle: [],
      tableData: [],
      data: [{"object":"page","id":"5ce1c321-8aca-41a7-8325-25cb68dc63bb","created_time":"2023-04-24T05:30:00.000Z","last_edited_time":"2023-05-30T07:11:00.000Z","created_by":{"object":"user","id":"b1432dbb-9876-4ca9-bf68-3b683094af62"},"last_edited_by":{"object":"user","id":"b1432dbb-9876-4ca9-bf68-3b683094af62"},"cover":null,"icon":null,"parent":{"type":"database_id","database_id":"831d7180-0873-466f-929b-83540d02ea61"},"archived":false,"properties":{"中文":{"id":"ZBS%3D","type":"rich_text","rich_text":[]},"Text 1":{"id":"%5DU%60%7C","type":"rich_text","rich_text":[]},"AI summary":{"id":"hXcQ","type":"rich_text","rich_text":[]},"Text":{"id":"%7CL%60d","type":"multi_select","multi_select":[]},"Tags":{"id":"%7D%5Epe","type":"select","select":{"id":"m`q<","name":"6","color":"default"}},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"5","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"5","href":null}]}},"url":"https://www.notion.so/5-5ce1c3218aca41a7832525cb68dc63bb"},{"object":"page","id":"b29ddad0-62c0-451c-8bae-434d6d2a28f7","created_time":"2023-04-24T05:30:00.000Z","last_edited_time":"2023-04-24T05:31:00.000Z","created_by":{"object":"user","id":"b1432dbb-9876-4ca9-bf68-3b683094af62"},"last_edited_by":{"object":"user","id":"b1432dbb-9876-4ca9-bf68-3b683094af62"},"cover":null,"icon":null,"parent":{"type":"database_id","database_id":"831d7180-0873-466f-929b-83540d02ea61"},"archived":false,"properties":{"中文":{"id":"ZBS%3D","type":"rich_text","rich_text":[]},"Text 1":{"id":"%5DU%60%7C","type":"rich_text","rich_text":[]},"AI summary":{"id":"hXcQ","type":"rich_text","rich_text":[]},"Text":{"id":"%7CL%60d","type":"multi_select","multi_select":[]},"Tags":{"id":"%7D%5Epe","type":"select","select":{"id":"^@KC","name":"4","color":"default"}},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"3","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"3","href":null}]}},"url":"https://www.notion.so/3-b29ddad062c0451c8bae434d6d2a28f7"},{"object":"page","id":"d1b0df11-e4b3-4628-b76d-dafc31cc3492","created_time":"2023-04-24T05:30:00.000Z","last_edited_time":"2023-06-01T06:04:00.000Z","created_by":{"object":"user","id":"b1432dbb-9876-4ca9-bf68-3b683094af62"},"last_edited_by":{"object":"user","id":"b1432dbb-9876-4ca9-bf68-3b683094af62"},"cover":null,"icon":null,"parent":{"type":"database_id","database_id":"831d7180-0873-466f-929b-83540d02ea61"},"archived":false,"properties":{"中文":{"id":"ZBS%3D","type":"rich_text","rich_text":[{"type":"text","text":{"content":"简直就离谱啊","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"简直就离谱啊","href":null}]},"Text 1":{"id":"%5DU%60%7C","type":"rich_text","rich_text":[]},"AI summary":{"id":"hXcQ","type":"rich_text","rich_text":[{"type":"text","text":{"content":"This document contains no content except for two tags: \"1\" and \"2\".","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"This document contains no content except for two tags: \"1\" and \"2\".","href":null}]},"Text":{"id":"%7CL%60d","type":"multi_select","multi_select":[{"id":"752b9fc4-2841-43bd-8863-ae7c2b210606","name":"去","color":"brown"},{"id":"e7177f03-0559-472f-8e9c-d1275296a3d8","name":"q去","color":"orange"}]},"Tags":{"id":"%7D%5Epe","type":"select","select":{"id":"^@KC","name":"4","color":"default"}},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"1","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"1","href":null}]}},"url":"https://www.notion.so/1-d1b0df11e4b34628b76ddafc31cc3492"}]
		}
	},
	methods: {
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
				},
			};
			console.log(params);
			crossApi.notionExec(params)
				.then((res) => {
					console.log('queryDatabase', res);
          const properties = res.data.results.map(item => item.properties)
          this.tableTitle = Array.from(new Set(properties.map(item => Object.keys(item)).flat())).sort()
          this.tableData = notionUtils.analProps(properties)
				})
				.catch((err) => {
					console.log('queryDatabase', err);
				})
        .finally(() => {
          this.loading = false
        });
		}
	},
};
</script>
