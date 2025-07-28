<script setup>
    import EventButton from '@/components/EventButton.vue';
    defineProps({
        event: Object,
        registered: Boolean,
        eventsLoading: Boolean
    })
    const emit = defineEmits(['button'])
</script>

<template> 

    <div v-if="!eventsLoading" class="bg-white shadow-2xl shadow-slate-200 rounded-md overflow-hidden flex flex-col text-center">
        <div class="p-3 bg-indigo-900 text-white font-semibold"
            :class="{
                'bg-indigo-900': !registered,
                'bg-slate-900': registered
            }"
        >{{ event.title }}</div>
        <div class="p-3 flex flex-col gap-3">
            <time class="text-xs text-slate-600 border-b pb-3 border-dashed border-slate-600">{{ event.date }}</time>
            <p class="text-slate-600">{{ event.description }}</p>
        </div>
        <EventButton :registered @button="!registered?$emit('button', event):$emit('button', booking)"/>
    </div>

    <div v-if="eventsLoading" class="bg-white shadow-2xl shadow-slate-200 rounded-md overflow-hidden flex flex-col text-center pointer-events-none">
        <div class="p-3 bg-slate-300 text-white font-semibold h-12 animate-pulse"
        ></div>
        <div class="p-3 flex flex-col gap-3">
            <time class="text-xs border-b pb-3 border-dashed border-slate-500">
                <span class="h-[14px] w-[70px] block mx-auto bg-slate-200 animate-pulse"></span>
            </time>
            <p class="text-slate-600 flex flex-col gap-2">
                <span class="h-[20px] w-full block mx-auto bg-slate-300 animate-pulse"></span>
                <span class="h-[20px] w-full block mx-auto bg-slate-300 animate-pulse"></span>
                <span class="h-[20px] w-full block mx-auto bg-slate-300 animate-pulse"></span>
            </p>
        </div>
        <EventButton :eventsLoading/>
    </div>

</template>