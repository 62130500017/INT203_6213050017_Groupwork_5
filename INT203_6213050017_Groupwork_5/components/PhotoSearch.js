app.component('photo-search', {
    props: {
        gallery:{
            type: Array,
            require: true
        }
    },
    template:
    /*html*/
    `
    <div id="seachbar" class="flex flex-warp items-center">
        <i class="material-icons text-white px-5 cursor-pointer" v-on:click="toggleSearch"> 
          search
        </i>
        <input v-on:keyup.enter="searchPhotoItems" class="rounded-none h-8 w-96 pl-2 focus:outline-none" v-show="search.searchbox" v-model="search.textinput" type="text" id="search" name="search" placeholder="ค้นหาเพลง">
        <button v-show="search.cancelbox" v-on:click="toggleCancel"
          class="focus:outline-none border-2 border-white text-white ml-5 w-14 h-7 hover:bg-white hover:text-black transition duration-150">cancel</button>
    </div>
    `,
    data() {
        return {
            search: {
                searchbox: false,
                cancelbox: false,
                textinput: ""
            },
        }
    },
    methods:{
        toggleSearch() {
            this.search.searchbox = true
            this.search.cancelbox = true
        },
        toggleCancel() {
            this.search.searchbox = false
            this.search.cancelbox = false
            this.search.textinput = ""
            // for (let i = 0; i < this.gallery.length; i++) {
            //     this.gallery[i].eachpic = true
            // }

        },
        searchPhotoItems(){
            console.log("press enter!");
            this.$emit('search-photo-items')
        }
        
    }
})
