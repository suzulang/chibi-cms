<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
  name: 'Sidebar',
  components: {
    Icon
  }
})
</script>

<template>
  <aside class="bg-white h-full">
    <div class="p-4">
      <!-- Logo -->
      <div class="mb-6">
        <h1 class="text-xl font-bold">Dashboard</h1>
      </div>

      <!-- 导航菜单 -->
      <nav>
        <ul class="space-y-2">
          <li>
            <a href="#" class="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded">
              <Icon icon="lucide:file-text" class="w-5 h-5 mr-2" />
              <span>文章管理</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded">
              <Icon icon="lucide:folder" class="w-5 h-5 mr-2" />
              <span>文章分类</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>
