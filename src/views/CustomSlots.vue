<template>
  <h1>Slots</h1>
  <button @click="openModal">Open modal</button>

  <Modal v-if="isOpen" @on:close="closeModal" title="Hi">
        <!-- <h2>Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, temporibus natus nihil amet labore recusandae.</p>
        <button>Exit</button> -->
        <template v-slot:header>
            <h2>Title</h2>
        </template>
        <template v-slot:body>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, temporibus natus nihil amet labore recusandae.</p>
        </template>
        <template v-slot:footer>
            <button @click="closeModal">Exit</button>
        </template>
       <!--  <template v-slot:exposed="slotProps">
            {{ slotProps }}
        </template> -->
        <template v-slot:exposed="{newTitle}">
            {{ newTitle }}
        </template>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue';
import { ref } from 'vue';


export default {
    components: {
        Modal
    },
    setup() {

        const isOpen = ref(false)

        return {
            isOpen,
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false
        }
    }
}
</script>

<style scoped>

</style>