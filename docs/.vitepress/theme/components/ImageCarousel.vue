<script setup lang="ts">
import { ref, computed } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'

interface ImageItem {
  src: string
  alt: string
}

const props = defineProps<{
  images: ImageItem[]
  title?: string
}>()

const currentIndex = ref(0)
const lightboxVisible = ref(false)
const lightboxIndex = ref(0)

const currentImage = computed(() => props.images[currentIndex.value])

// 為 vue-easy-lightbox 準備的圖片格式
const lightboxImages = computed(() => 
  props.images.map(img => ({
    src: img.src,
    title: img.alt
  }))
)

const prev = () => {
  currentIndex.value = currentIndex.value === 0 
    ? props.images.length - 1 
    : currentIndex.value - 1
}

const next = () => {
  currentIndex.value = currentIndex.value === props.images.length - 1 
    ? 0 
    : currentIndex.value + 1
}

const goTo = (index: number) => {
  currentIndex.value = index
}

// Lightbox 功能
const openLightbox = (index?: number) => {
  lightboxIndex.value = index ?? currentIndex.value
  lightboxVisible.value = true
}

const closeLightbox = () => {
  lightboxVisible.value = false
}

const onLightboxIndexChange = (_oldIndex: number, newIndex: number) => {
  currentIndex.value = newIndex
}
</script>

<template>
  <div class="carousel">
    <div v-if="title" class="carousel-title">{{ title }}</div>
    <div class="carousel-container">
      <button class="carousel-btn prev" @click="prev" aria-label="上一張">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>
      
      <div class="carousel-image-wrapper">
        <img 
          :src="currentImage.src" 
          :alt="currentImage.alt"
          class="carousel-image"
          @click="openLightbox()"
          title="點擊放大"
        />
        <div class="carousel-caption">
          {{ currentImage.alt }}
          <span class="zoom-hint">🔍 點擊圖片放大</span>
        </div>
      </div>
      
      <button class="carousel-btn next" @click="next" aria-label="下一張">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
        </svg>
      </button>
    </div>
    
    <!-- 縮圖預覽列 -->
    <div class="thumbnail-strip">
      <div class="thumbnail-container">
        <button
          v-for="(image, index) in images"
          :key="index"
          :class="['thumbnail', { active: index === currentIndex }]"
          @click="goTo(index)"
          :aria-label="`切換到第 ${index + 1} 張圖片`"
        >
          <img :src="image.src" :alt="image.alt" />
        </button>
      </div>
    </div>
    
    <div class="carousel-counter">
      {{ currentIndex + 1 }} / {{ images.length }}
    </div>

    <!-- Lightbox 放大檢視 -->
    <VueEasyLightbox
      :visible="lightboxVisible"
      :imgs="lightboxImages"
      :index="lightboxIndex"
      @hide="closeLightbox"
      @on-index-change="onLightboxIndexChange"
      :loop="true"
      :moveDisabled="false"
      :zoomScale="0.2"
      :maxZoom="5"
      :minZoom="0.5"
    />
  </div>
</template>

<style scoped>
.carousel {
  margin: 1.5rem 0;
  padding: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
}

.carousel-title {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--vp-c-text-1);
}

.carousel-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.carousel-btn {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border: none;
  background: var(--vp-c-default-soft);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  color: var(--vp-c-text-1);
}

.carousel-btn:hover {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.carousel-btn svg {
  width: 24px;
  height: 24px;
}

.carousel-image-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
}

.carousel-image {
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: zoom-in;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.carousel-image:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.carousel-caption {
  margin-top: 0.75rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.zoom-hint {
  font-size: 0.75rem;
  color: var(--vp-c-text-3);
  opacity: 0.7;
}

/* 縮圖預覽列 */
.thumbnail-strip {
  margin-top: 1rem;
  overflow-x: auto;
  padding: 0.5rem 0;
}

.thumbnail-container {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: nowrap;
  min-width: min-content;
}

.thumbnail {
  flex-shrink: 0;
  width: 60px;
  height: 45px;
  border: 2px solid transparent;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  padding: 0;
  background: var(--vp-c-bg);
  transition: all 0.2s ease;
  opacity: 0.6;
}

.thumbnail:hover {
  opacity: 0.9;
  border-color: var(--vp-c-brand-soft);
}

.thumbnail.active {
  border-color: var(--vp-c-brand-1);
  opacity: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-counter {
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}

/* 滾動條樣式 */
.thumbnail-strip::-webkit-scrollbar {
  height: 6px;
}

.thumbnail-strip::-webkit-scrollbar-track {
  background: var(--vp-c-bg-soft);
  border-radius: 3px;
}

.thumbnail-strip::-webkit-scrollbar-thumb {
  background: var(--vp-c-divider);
  border-radius: 3px;
}

.thumbnail-strip::-webkit-scrollbar-thumb:hover {
  background: var(--vp-c-text-3);
}

@media (max-width: 640px) {
  .carousel-btn {
    width: 32px;
    height: 32px;
  }
  
  .carousel-btn svg {
    width: 20px;
    height: 20px;
  }
  
  .carousel-image-wrapper {
    min-height: 200px;
  }
  
  .carousel-image {
    max-height: 280px;
  }
  
  .thumbnail {
    width: 50px;
    height: 38px;
  }
  
  .thumbnail-container {
    justify-content: flex-start;
    padding: 0 0.5rem;
  }
}
</style>
