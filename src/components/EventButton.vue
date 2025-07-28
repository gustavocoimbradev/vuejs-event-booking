<script setup>
    import { ref } from 'vue'
    const emit = defineEmits(['button'])
    defineProps({
        registered: Boolean,
        eventsLoading: Boolean
    })
    const doing = ref(false)
    const handleClick = async () => {
        doing.value = true
        await emit('button')
    }
</script>

<template>

    <button v-if="!eventsLoading" class=" text-white p-3 cursor-pointer transition-all ease-in-out duration-300 w-full block"
            type="button"
            @click="handleClick"
            :class="{
                'bg-indigo-500 hover:bg-indigo-600': !registered,
                'bg-slate-500 hover:bg-slate-600': registered,
                'opacity-70 pointer-events-none': doing
            }"
    >
        <div v-if="doing" class="flex items-center gap-1 justify-center">
            <svg class="mr-3 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            <span>{{ registered ? 'Canceling' : 'Registering' }}</span>
        </div>
        <div v-else>
            <span>{{ registered ? 'Cancel' : 'Register' }}</span>
        </div>

    </button>
        
    <button v-if="eventsLoading" class="bg-slate-300 p-3 cursor-pointer transition-all ease-in-out duration-300 block w-full h-12 animate-pulse">
    </button>
    
</template>