const app = Vue.createApp({
    data() {
        return {
            logo: "./Images/music_logo.svg",
            gallery: [{
                    picture_name: "รองช้ำ",
                    src: "./Images/รองช้ำ.jpg",
                    isFav: false,
                    isPhotoitem: true,
                    isCurrentPhoto: false
                },
                {

                    picture_name: "ไม่บอกเธอ",
                    src: "./Images/เกิดมาเพื่ออกหัก.jpg",
                    isFav: false,
                    isPhotoitem: true,
                    isCurrentPhoto: false
                },
                {

                    picture_name: "คลั่งรัก",
                    src: "./Images/คลั่งรัก.jpg",
                    isFav: false,
                    isPhotoitem: true,
                    isCurrentPhoto: false
                }
            ],
            photo_zoom: false
        }
    },
    methods: {
        toggleFav(index) {
            this.gallery[index].isFav = !this.gallery[index].isFav
        },
        searchPhotoItems(textinput) {
            for (let i = 0; i < this.gallery.length; i++) {
                if (!(this.gallery[i].picture_name.toLowerCase().includes(textinput.toLowerCase()))) {
                    this.gallery[i].isPhotoitem = false
                } else {
                    this.gallery[i].isPhotoitem = true
                }
            }
        },
        toggleZoom(index) {
            this.photo_zoom = true
            this.gallery[index].isCurrentPhoto = true
        },
        toggleCloseZoom(index) {
            this.photo_zoom = false
            this.gallery[index].isCurrentPhoto = false
        },
        toggleReset(){
            for (let i = 0; i < this.gallery.length; i++) {
                this.gallery[i].isPhotoitem = true
            }
        }
    },
    computed: {
        countUndone() {
            return this.gallery.filter(gallery => gallery.isFav).length
        },
        filterNoFound() {
            return this.gallery.filter(gallery => !gallery.isPhotoitem).length
        }
    }


})