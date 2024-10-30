<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from '@/components/dashboard/Sidebar.vue'
import Header from '@/components/dashboard/Header.vue'
import MainContent from '@/components/dashboard/MainContent.vue'

export default defineComponent({
  components: {
    Sidebar,
    Header,
    MainContent
  }
})
</script>
<template>
  <div class="min-h-screen bg-background">
    <!-- 整体布局 -->
    <div class="flex h-screen">
      <!-- 侧边栏 -->
      <Sidebar class="w-64 border-r" />
      
      <!-- 右侧内容区 -->
      <div class="flex flex-col flex-1">
        <!-- 顶部栏 -->
        <Header class="h-16 border-b" />
        
        <!-- 主内容区 -->
        <main class="flex-1 overflow-auto p-6">
          <MainContent />
        </main>
      </div>
    </div>
  </div>
</template>