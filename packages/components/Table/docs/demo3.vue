<template>
  <fz-table :data="tableData" style="width: 100%">
    <fz-table-column fixed prop="date" label="Date" width="150" />
    <fz-table-column prop="name" label="Name" width="120" />
    <fz-table-column prop="state" label="State" width="120" />
    <fz-table-column prop="city" label="City" width="120" />
    <fz-table-column prop="address" label="Address" width="600" />
    <fz-table-column prop="zip" label="Zip" width="120" />
    <fz-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <fz-button type="text" size="small" @click="handleClick">Detail</fz-button>
        <fz-button type="text" size="small">Edit</fz-button>
      </template>
    </fz-table-column>
  </fz-table>
</template>

<script lang="ts" setup>
const handleClick = () => {
  console.log('click');
};

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
    tag: 'Office',
  },
];
</script>
