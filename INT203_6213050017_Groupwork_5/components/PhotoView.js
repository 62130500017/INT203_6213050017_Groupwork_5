app.component('photo-view', {
    props: {
        gallery: {
            type: Array,
            require: true
        },
        photozoom: {
            type: Boolean
        }
    },
    template:
        /*html*/
    `
            <div v-show="photozoom" class="absolute left-0 top-0 h-full inline-flex w-full justify-center bg-black bg-opacity-75 items-center">
            <div v-for="(zoompic,index) in gallery">
                 <i v-show="zoompic.isCurrentPhoto" class="material-icons text-4xl text-white cursor-pointer float-right" v-on:click="toggleCloseZoom(index)">
                    close
                 </i>
        <img v-show="zoompic.isCurrentPhoto" v-bind:src="zoompic.src" class="w-5/6 h-2/3">
        </div>
    </div>
    `,

    methods: {
        toggleCloseZoom(index) {
            this.$emit('toggle-close-zoom',index)
        },
    }
})