app.component('photo-view', {
    props: {
        gallery: {
            type: Array,
            require: true
        }
        
    },
    template:
        /*html*/
        `
    <div v-show="photo_zoom" class="absolute left-0 top-0 h-full inline-flex w-full justify-center bg-black bg-opacity-75 items-center">
        <div v-for="(zoompic,index) in gallery">
            <i v-show="zoompic.zoom" class="material-icons text-4xl text-white cursor-pointer float-right" v-on:click="toggleCloseZoom(index)">
          close
            </i>
            <img v-show="zoompic.zoom" v-bind:src="zoompic.src" class="w-5/6 h-2/3">
        </div>
    </div>
    `,
    data() {
        return {
            photo_zoom: false
        }
    },
    methods: {
        Zoom() {
            this.photo_zoom = true
        }
    }
})