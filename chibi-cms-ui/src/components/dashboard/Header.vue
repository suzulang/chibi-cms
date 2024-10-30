<script lang="ts">
import { defineComponent } from 'vue'
import { Icon } from '@iconify/vue'

export default defineComponent({
  name: 'Header',
  components: {
    Icon
  }
})
</script>

<template>
  <header class="bg-white px-6 flex items-center justify-between">
    <!-- 左侧标题 -->
    <div class="flex items-center">
      <img src="" alt="Logo" class="h-8 w-8 mr-2" />
      <h2 class="text-lg font-semibold">管理系统</h2>
    </div>

    <!-- 右侧用户信息 -->
    <div class="flex items-center space-x-4">
      <!-- 通知图标 -->
      <button class="p-2 hover:bg-gray-100 rounded-full relative">
        <Icon icon="lucide:bell" class="w-5 h-5 text-gray-600" />
        <span class="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
      </button>

      <!-- 用户头像和下拉菜单 -->
      <div class="flex items-center">
        <div class="relative group">
          <img 
            src="" 
            alt="用户头像" 
            class="w-8 h-8 rounded-full object-cover cursor-pointer"
          />
          <div class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">个人信息</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">设置</a>
            <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">退出登录</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
