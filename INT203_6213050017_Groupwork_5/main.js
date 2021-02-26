const app = Vue.createApp({
    data() {
        return {
            logo: "./Images/music_logo.svg",
            gallery: [{
                    picture_name: "รองช้ำ",
                    src: "./Images/รองช้ำ.jpg",
                    isFav: false,
                    isPhotoitem: true,
                },
                {

                    picture_name: "ไม่บอกเธอ",
                    src: "./Images/เกิดมาเพื่ออกหัก.jpg",
                    isFav: false,
                    isPhotoitem: true,
                },
                {

                    picture_name: "คลั่งรัก",
                    src: "./Images/คลั่งรัก.jpg",
                    isFav: false,
                    isPhotoitem: true,
                }
            ],
        }
    },
    methods: {
        toggleFav(index) {
            this.gallery[index].isFav = !this.gallery[index].isFav
        },
        searchPhotoItems() {
            for (let i = 0; i < this.gallery.length; i++) {
                if ((this.gallery[i].picture_name.toLowerCase().includes(search.textinput.toLowerCase())) == false) {
                    this.gallery[i].isPhotoitem = false
                } else {
                    this.gallery[i].isPhotoitem = true
                }
            }
        },
        toggleZoom(index) {
            index;
            console.log("zoommm")
        },
        // toggleCloseZoom(index) {
        //     this.gallery[index].zoom = true
        // },

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