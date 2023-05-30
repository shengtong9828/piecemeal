<template>
  <div>
    <span>databaseId</span>
    <input type="text" v-model="databaseId">
  </div>
  <div>
    <span>pageId</span>
    <input type="text" v-model="pageId">
  </div>
  <div>
    <span>propertyId</span>
    <input type="text" v-model="propertyId">
  </div>
  <div>
    <button @click="queryDatabase">queryDatabase</button>
    <button @click="retrieveDatabase">retrieveDatabase</button>
    <button @click="createDatabase">createDatabase</button>
  </div>
  <div>
    <button @click="retrievePage">retrievePage</button>
    <button @click="retrievePagePropertyItem">retrievePagePropertyItem</button>
  </div>
  <div>
    <button @click="appendBlockChildren">appendBlockChildren</button>
    <button @click="retrieveBlock">retrieveBlock</button>
    <button @click="retrieveBlockChildren">retrieveBlockChildren</button>
  </div>
  
</template>

<script setup>
import { inject, ref } from 'vue'

const $axios = inject('$axios')
const databaseId = ref("")
const pageId = ref("")
const propertyId = ref("")

// #region block
function appendBlockChildren() {
  const params = {
    method: 'PATCH',
    url: `https://api.notion.com/v1/blocks/${pageId.value}/children`,
    data: {
      "children": [
        {
          "object": "block",
          "type": "heading_2",
          "heading_2": {
            "rich_text": [{ "type": "text", "text": { "content": "Lacinato kale" } }]
          }
        },
        {
          "object": "block",
          "type": "paragraph",
          "paragraph": {
            "rich_text": [
              {
                "type": "text",
                "text": {
                  "content": "Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale 19\n",
                  "link": { "url": "https://en.wikipedia.org/wiki/Lacinato_kale" }
                }
              },
              {
                "type": "text",
                "text": {
                  "content": "\n1Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.\n",
                }
              },
              {
                "type": "text",
                "text": {
                  "content": "2Lacinato kale is a variety of kale with a long tradition in Italian cuisine, especially that of Tuscany. It is also known as Tuscan kale, Italian kale, dinosaur kale, kale, flat back kale, palm tree kale, or black Tuscan palm.",
                  "link": { "url": "https://en.wikipedia.org/wiki/Lacinato_kale" }
                }
              }
            ]
          }
        }
      ]
    }
  }
  execute(params).then(res => {
    console.log('retrievePage', res);
  }).catch(err => {
    console.log('retrievePage', err);
  })
}
function retrieveBlock () {
  const params = {
    method: 'get',
    url: `https://api.notion.com/v1/blocks/${pageId.value}`,
  }
  execute(params).then(res => {
    console.log('retrievePage', res);
  }).catch(err => {
    console.log('retrievePage', err);
  })
}
function retrieveBlockChildren () {
  const params = {
    method: 'get',
    url: `https://api.notion.com/v1/blocks/${pageId.value}/children`,
  }
  execute(params).then(res => {
    console.log('retrievePage', res);
  }).catch(err => {
    console.log('retrievePage', err);
  })
}
// #endregion


// #region page
function retrievePage() {
  const params = {
    method: 'get',
    url: `https://api.notion.com/v1/pages/${pageId.value}`,
  }
  execute(params).then(res => {
    console.log('retrievePage', res);
  }).catch(err => {
    console.log('retrievePage', err);
  })
}
function retrievePagePropertyItem() {
  const params = {
    method: 'get',
    url: `https://api.notion.com/v1/pages/${pageId.value}/properties/${propertyId.value}`,
  }
  execute(params).then(res => {
    console.log('retrievePage', res);
  }).catch(err => {
    console.log('retrievePage', err);
  })
}
// #endregion

// #region Databases
function queryDatabase() {
  const params = {
    method: 'post',
    url: `https://api.notion.com/v1/databases/${databaseId.value}/query`,
    data: {
      // filter: {}, // json
      // sorts: [], // array
      // start_cursor: '', // string 
      // page_size: 1 // int32
    }
  }
  console.log(params);
  execute(params).then(res => {
    console.log('queryDatabase', res);
  }).catch(err => {
    console.log('queryDatabase', err);
  })
}
function retrieveDatabase() {
  const params = {
    method: 'get',
    url: `https://api.notion.com/v1/databases/${databaseId.value}`,
  }
  execute(params).then(res => {
    console.log('retrieveDatabase', res);
  }).catch(err => {
    console.log('retrieveDatabase', err);
  })
}
function createDatabase() {
  const params = {
    method: 'post',
    url: `https://api.notion.com/v1/databases`,
    data: {}
  }
  execute(params).then(res => {
    console.log('retrieveDatabase', res);
  }).catch(err => {
    console.log('retrieveDatabase', err);
  })
}
// #endregion


function execute(data) {
  return new Promise(function (resolve, reject) {
    const promise =  $axios.post('https://cross.vercel.qingqian.fun/', 
      { type: 'notion', ...data }, 
      { headers: {token: 'ff768bfc-07c6-3951-0f1f-15f6bc3d6fcf' }}
    )
    promise.then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      reject(error)
    })
  }) 
}
</script>

<style></style>
