<script setup>
import { onMounted, ref, watch } from "vue";
import users from "./users.json";

// Cấu hình các cột
const columns = [
  { label: "ID", key: "id" },
  { label: "Name", key: "name" },
  { label: "Age", key: "age" },
  { label: "Occupation", key: "occupation" },
];

// Thiết lập trạng thái cho phân trang
const page = ref(1);
const pageSize = ref(5);
const pageUsers = ref([]);
const totalPages = ref(0);

// Hàm phân trang
function paginateUsers(usersList, page, pageSize) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    pageUsers: usersList.slice(start, end),
    totalPages: Math.ceil(usersList.length / pageSize),
  };
}

// Thay đổi kích thước trang
function handleChange(event) {
  pageSize.value = parseInt(event.target.value);
}

// Cập nhật phân trang
function updatePagination() {
  const { pageUsers: paginatedUsers, totalPages: total } = paginateUsers(
    users,
    page.value,
    pageSize.value
  );
  pageUsers.value = paginatedUsers;
  totalPages.value = total;
}

// Watchers để theo dõi thay đổi của page và pageSize
watch(pageSize, () => {
  page.value = 1; // Cập nhật page về 1 khi pageSize thay đổi
  updatePagination();
});

watch(page, () => {
  updatePagination();
});

// Khởi tạo phân trang khi component được mount
onMounted(() => {
  updatePagination();
});
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="col in columns" :key="col.key">{{ col.label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in pageUsers" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.occupation }}</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <div class="pagination">
      <select aria-label="Page size" @change="handleChange">
        <option v-for="value in [5, 10, 20]" :key="value" :value="value">
          Show {{ value }}
        </option>
      </select>
      <div class="pages">
        <button :disabled="page === 1" @click="page--">Prev</button>
        <span aria-label="Page number">
          Page {{ page }} of {{ totalPages }}
        </span>
        <button :disabled="page === totalPages" @click="page++">Next</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
