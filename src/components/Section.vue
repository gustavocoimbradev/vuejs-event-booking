<template> 
    <section class="my-15">
        <div class="text-2xl mb-6 border-b border-dashed border-slate-500 pb-4" v-if="$slots.head">
            <slot name="head"/>
        </div>
        <div v-if="$slots.main">
            <slot name="main"/>
        </div>
    </section>
</template>