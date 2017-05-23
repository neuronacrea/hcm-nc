App.factory('ProfileService', function() {
    console.log('profile')
    $data = [
        {
            id: 1,
            title: 'Dog 1',
            image: 'img/gallery/dogs/14250733433_271362f4ff_h.jpg'
        },
        {
            id: 2,
            title: 'Dog 2',
            image: 'img/gallery/dogs/174085592_c0b7e5076f_o.jpg'
        },
        {
            id: 3,
            title: 'Dog 3',
            image: 'img/gallery/dogs/174097822_6c0aae32e1_o.jpg'
        },
        {
            id: 4,
            title: 'Dog 4',
            image: 'img/gallery/dogs/4733823624_a758c8e8e9_b.jpg'
        },
        {
            id: 5,
            title: 'Dog 5',
            image: 'img/gallery/dogs/4939588185_4dc4fa8cca_b.jpg'
        },
        {
            id: 6,
            title: 'Dog 6',
            image: 'img/gallery/dogs/6698150783_161b18182e_b.jpg'
        },
        {
            id: 7,
            title: 'Dog 7',
            image: 'img/gallery/dogs/6787786882_4e74d00628_b.jpg'
        },
        {
            id: 8,
            title: 'Dog 8',
            image: 'img/gallery/dogs/8206632393_36622366c6_k.jpg'
        }
    ];
    return {
        getTitle: function() {
            return 'Profile';
        },
        getItemTitle: function(item) {
            return item ? item.title : '';
        },
        getEvents: function() {
            return {
                onFavorite: function(item){
                    item.favorite = !item.favorite;
                }
            };
        },
        prepareParams: function(item) {
            return {
                imageGalleryVisible: true,
                theme: item.theme,
                title : this.getTitle(),
                data: this.getDataForTheme(item.theme),
                events: this.getEvents()
            };
        }
    };
});
