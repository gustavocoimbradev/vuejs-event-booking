<script setup>
    const emit = defineEmits(['button'])
    defineProps({
        registered: Boolean,
        eventsLoading: Boolean
    })
</script>

<template>

    <button v-if="!eventsLoading" class=" text-white p-3 cursor-pointer transition-all ease-in-out duration-300 block w-full"
            type="button"
            @click.prevent.stop="emit('button')"
            :class="{
                'bg-indigo-500 hover:bg-indigo-600': !registered,
                'bg-slate-500 hover:bg-slate-600': registered
            }"
    >
        {{ registered ? 'Cancel' : 'Register' }}
    </button>
        
    <button v-if="eventsLoading" class="bg-slate-300 p-3 cursor-pointer transition-all ease-in-out duration-300 block w-full h-12 animate-pulse">
    </button>
    
</template>