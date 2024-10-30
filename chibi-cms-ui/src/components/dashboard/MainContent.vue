<script lang="ts" setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog'

// 在 script 开头添加接口定义
interface Article {
  title: string
  category: string
  publishDate: string
  status: string
}

const isDialogOpen = ref(false)
const currentArticle = ref<Article | null>(null)
const documentType = ref('')
const publishStatus = ref('')
const articles = ref([
  {
    title: '医药反腐非牟利医护收入',
    category: '时事',
    publishDate: '2023年09月05日',
    status: '已发布'
  },
  {
    title: '中国男篮怎何一败涂地?',
    category: '篮球',
    publishDate: '2023年09月05日',
    status: '已发布'
  },
  {
    title: '华山景区已恢复仅景点限流7-8成，未来24小时将持续',
    category: '旅游',
    publishDate: '2023年09月05日',
    status: '已发布'
  },
  {
    title: '"石油姐"粉色战袍吸睛，真能顺利被深圳娶到？ 专家：别净说边',
    category: '时事',
    publishDate: '2023年09月05日',
    status: '已发布'
  }
])

const handleEdit = (article: Article) => {
  currentArticle.value = article
  isDialogOpen.value = true
}
</script>

<template>
  <div class="bg-white p-6">
    <div class="flex justify-end items-center mb-6">
      <button class="bg-blue-500 text-white px-4 py-2 rounded">发布文章</button>
    </div>
    
    <!-- 搜索筛选区域 -->
    <div class="flex gap-4 mb-6">
      <div class="flex items-center gap-2">
        <span>文章分类:</span>
        <select v-model="documentType" class="border rounded px-3 py-1">
          <option value="">请选择</option>
        </select>
      </div>
      <div class="flex items-center gap-2">
        <span>发布状态:</span>
        <select v-model="publishStatus" class="border rounded px-3 py-1">
          <option value="">请选择</option>
        </select>
      </div>
      <button class="bg-blue-500 text-white px-4 py-1 rounded">搜索</button>
      <button class="border px-4 py-1 rounded">重置</button>
    </div>

    <!-- 文章列表 -->
    <table class="w-full">
      <thead class="bg-gray-50">
        <tr>
          <th class="text-left py-3 px-4">文章标题</th>
          <th class="text-left py-3 px-4">分类</th>
          <th class="text-left py-3 px-4">发表时间</th>
          <th class="text-left py-3 px-4">状态</th>
          <th class="text-left py-3 px-4">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.title" class="border-b">
            <td class="py-3 px-4">
                <router-link 
                    :to="`/article/${article.title}`" 
                    class="text-blue-600 hover:text-blue-800 hover:underline"
                >
                    {{ article.title }}
                </router-link>
            </td>
            <td class="py-3 px-4">{{ article.category }}</td>
            <td class="py-3 px-4">{{ article.publishDate }}</td>
            <td class="py-3 px-4">{{ article.status }}</td>
            <td class="py-3 px-4">
            <button 
              class="text-blue-500 hover:bg-blue-50 px-3 py-1 rounded mr-2"
              @click="handleEdit(article)"
            >
              <Icon icon="lucide:edit" class="w-4 h-4 inline-block" />
            </button>
            <button class="text-red-500 hover:bg-red-50 px-3 py-1 rounded">
              <Icon icon="lucide:trash-2" class="w-4 h-4 inline-block" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 分页 -->
    <div class="flex justify-between items-center mt-4">
      <div class="text-gray-600">
        第 1 页 共 4 页
      </div>
      <div class="flex gap-2">
        <button class="px-3 py-1 border rounded">&lt;</button>
        <button class="px-3 py-1 bg-blue-500 text-white rounded">1</button>
        <button class="px-3 py-1 border rounded">&gt;</button>
        <select class="border rounded px-2">
          <option>10条/页</option>
        </select>
      </div>
    </div>

    <!-- 添加编辑弹窗 -->
    <Dialog v-model:open="isDialogOpen">
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>编辑文章</DialogTitle>
        </DialogHeader>
        
        <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
                <label class="text-right">标题</label>
                <input
                v-if="currentArticle"
                v-model="currentArticle.title"
                class="col-span-3 border rounded-md px-3 py-2"
                />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
                <label class="text-right">分类</label>
                <input
                v-if="currentArticle"
                v-model="currentArticle.category"
                class="col-span-3 border rounded-md px-3 py-2"
                />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
                <label class="text-right">状态</label>
                <select
                v-if="currentArticle"
                v-model="currentArticle.status"
                class="col-span-3 border rounded-md px-3 py-2"
                >
                    <option value="已发布">已发布</option>
                    <option value="未发布">未发布</option>
                    <option value="草稿">草稿</option>
                </select>
            </div>
        </div>

        <DialogFooter>
          <button 
            class="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md mr-2"
            @click="isDialogOpen = false"
          >
            取消
          </button>
          <button 
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            @click="isDialogOpen = false"
          >
            保存
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>