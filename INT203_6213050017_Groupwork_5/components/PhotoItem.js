app.component('photo-item', {
    props: {
        gallery:{
            type: Array,
            require: true
        }
    },
    template:
    /*html*/
    `
    <div class="p-10 inline-flex space-x-10 w-full">
        <div v-show="pic.isPhotoitem" v-for="(pic,index) in gallery">
        <img v-bind:src="pic.src" v-on:click="toggleZoom(index)" class="w-100% h-auto cursor-pointer">
        <div class="inline-flex w-full">
            <div class="w-1/2 text-gray-300 py-2 text-base">{{pic.picture_name}}</div>
            <div class="text-right w-1/2 py-2">
            <i v-show="!pic.isFav" class="material-icons text-pink-600 text-2xl cursor-pointer" v-on:click="toggleFav(index)">
            favorite_border
            </i>
            <i v-show="pic.isFav" class="material-icons text-pink-600 text-2xl cursor-pointer" v-on:click="toggleFav(index)">
            favorite
            </i>
            </div>
        </div>
        </div>
    </div>
    `,
    methods:{
        toggleFav(index) {
            this.$emit('toggle-fav',index)
        },
        toggleZoom(index) {
            this.$emit('toggle-zoom',index)
        },
    }
    
})