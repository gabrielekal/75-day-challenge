<script setup lang="ts">
import { ref, defineProps } from 'vue';

const props = defineProps(['rule']);
const uploadedImages = ref<Record<number, string>>({});
const reader = ref(new FileReader());

function handleImageChange(event: Event) {
    const file = (event as any).target.files[0];
    if (file) {
        reader.value.onload = (e: any) => {
            uploadedImages.value[props.rule.id] = e.target.result;
        };
        reader.value.readAsDataURL(file);
    }
}
</script>

<template>
    <div v-if="props.rule.enableImageUpload" class="file-upload-container">
      <label :for="`file-upload-${props.rule.id}`" class="file-upload-label">
        Choose File
      </label>
      <input
        type="file"
        :id="`file-upload-${props.rule.id}`"
        @change="handleImageChange($event)"
        accept="image/*"
        aria-label="Upload picture"
      />
      <img
        v-if="uploadedImages[props.rule.id]"
        :src="uploadedImages[props.rule.id]"
        :alt="`Uploaded image for rule ${props.rule.title}`"
        class="uploaded-image"
      />
    </div>
</template>

<style scoped>
.uploaded-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 25px;
}

.day-circle input[type="file"] {
  display: none;
}

.file-upload-label {
  display: block;
  background-color: #D08BB9;
  color: white;
  padding: 5px;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 10px;
}

.file-upload-label:hover {
  background-color: #EA738DFF;
}
</style>
