var photoPost = (function() {

    var photoPosts = [
        {
            id: '1',
            description: 'Love For All, Hatred For None.',
            createdAt: new Date('2018-01-23T23:00:00'),
            author: 'Alex',
            photoLink: 'img/photo_1.jpg',
            tags: ['#alex', '#gusev1']
        },
        {
            id: '2',
            description: 'Change the world by being yourself.',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Vane',
            photoLink: 'img/photo_2.jpg',
            tags: ['#alex', '#gusev2']
        },
        {
            id: '3',
            description: 'Every moment is a fresh beginning.',
            createdAt: new Date('2018-03-23T23:00:00'),
            author: 'Alex',
            photoLink: 'img/photo_3.jpg',
            tags: ['#alex', '#gusev3']
        },
        {
            id: '4',
            description: 'Never regret anything that made you smile.',
            createdAt: new Date('2018-04-23T23:00:00'),
            author: 'Addison',
            photoLink: 'img/photo_4.jpg',
            tags: ['#alex', '#gusev4']
        },
        {
            id: '5',
            description: 'Die with memories, not dreams.',
            createdAt: new Date('2018-05-23T23:00:00'),
            author: 'Adney',
            photoLink: 'img/photo_5.jpg',
            tags: ['#alex', '#gusev5']
        },
        {
            id: '6',
            description: 'Aspire to inspire before we expire.',
            createdAt: new Date('2018-06-23T23:00:00'),
            author: 'Adria',
            photoLink: 'img/photo_6.jpg',
            tags: ['#alex', '#gusev6']
        },
        {
            id: '7',
            description: 'Everything you can imagine is real.',
            createdAt: new Date('2018-07-23T23:00:00'),
            author: 'Afton',
            photoLink: 'img/photo_7.jpg',
            tags: ['#alex', '#gusev7']
        },
        {
            id: '8',
            description: 'Simplicity is the ultimate sophistication.',
            createdAt: new Date('2018-08-23T23:00:00'),
            author: 'Aiken',
            photoLink: 'img/photo_8.jpg',
            tags: ['#alex', '#gusev8']
        },
        {
            id: '9',
            description: 'Whatever you do, do it well.',
            createdAt: new Date('2018-09-23T23:00:00'),
            author: 'Ailith',
            photoLink: 'img/photo_9.jpg',
            tags: ['#alex', '#gusev9']
        },
        {
            id: '10',
            description: 'What we think, we become.',
            createdAt: new Date('2018-10-23T23:00:00'),
            author: 'Albert',
            photoLink: 'img/photo_10.jpg',
            tags: ['#alex', '#gusev10']
        },
        {
            id: '11',
            description: 'All limitations are self-imposed.',
            createdAt: new Date('2018-11-23T23:00:00'),
            author: 'Alberta',
            photoLink: 'img/photo_11.jpg',
            tags: ['#alex', '#gusev11']
        },
        {
            id: '12',
            description: 'Tough times never last but tough people do.',
            createdAt: new Date('2018-12-23T23:00:00'),
            author: 'Alcott',
            photoLink: 'img/photo_12.jpg',
            tags: ['#alex', '#gusev12']
        },
        {
            id: '13',
            description: 'Strive for greatness.',
            createdAt: new Date('2018-00-23T23:00:00'),
            author: 'Alden',
            photoLink: 'img/photo_13.jpg',
            tags: ['#alex', '#gusev13']
        },
        {
            id: '14',
            description: 'And still I rise.',
            createdAt: new Date('2018-01-23T23:00:00'),
            author: 'Alder',
            photoLink: 'img/photo_14.jpg',
            tags: ['#alex', '#gusev14']
        },
        {
            id: '15',
            description: 'Strive for greatness.',
            createdAt: new Date('2018-02-23T23:00:00'),
            author: 'Aldith',
            photoLink: 'img/photo_15.jpg',
            tags: ['#alex', '#gusev15']
        },
        {
            id: '16',
            description: 'It hurt because it mattered.',
            createdAt: new Date('2018-03-23T23:00:00'),
            author: 'Aldora',
            photoLink: 'img/photo_16.jpg',
            tags: ['#alex', '#gusev16']
        }, {
            id: '17',
            description: 'When words fail, music speaks. ',
            createdAt: new Date('2018-04-23T23:00:00'),
            author: 'Aldred',
            photoLink: 'img/photo_17.jpg',
            tags: ['#alex', '#gusev17']
        },
        {
            id: '18',
            description: 'Embrace the glorious mess that you are. ',
            createdAt: new Date('2018-05-23T23:00:00'),
            author: 'Aldrich',
            photoLink: 'img/photo_18.jpg',
            tags: ['#alex', '#gusev18']
        },
        {
            id: '19',
            description: 'Yesterday you said tomorrow. Just do it.',
            createdAt: new Date('2018-06-23T23:00:00'),
            author: 'Aldwin',
            photoLink: 'img/photo_19.jpg',
            tags: ['#alex', '#gusev19']
        },
        {
            id: '20',
            description: 'Reality is wrong, dreams are for real.',
            createdAt: new Date('2018-07-23T23:00:00'),
            author: 'Aley',
            photoLink: 'img/photo_20.jpg',
            tags: ['#alex', '#gusev20']
        }
    ];

    function compareDates(a, b) {
        return a.createdAt - b.createdAt;
    }

    function getPhotoPosts(skip, top, filterConfig) {
        if (filterConfig.author)
            result = photoPosts.filter(function (a) {
                return a.author == filterConfig.author;
            });
        if (filterConfig.createdAt)
            result = photoPosts.filter(function (a) {
                return a.createdAt.getTime() == filterConfig.createdAt.getTime();
            });
        result.sort(compareDates);
        return result.slice(skip, skip + top);
    }

    function getPhotoPost(id) {
        return photoPosts.find(
            function (item, i, arr) {
                return item.id == id;
            }
        )
    }

    function validatePhotoPost(post) {
        //  if(!post.id || getPhotoPost(post.id)!=undefined)
        //  return false;
        if (!post.description || post.description.length >= 200)
            return false;
        if (!post.createdAt || !post.author || !post.photoLink)
            return false
        return post.author.length != 0 && post.photoLink.length != 0;
    }

    function addPhotoPost(photoPost) {
        if (validatePhotoPost(photoPost)) {
            photoPost.id = photoPosts.length + 1;
            photoPosts.push(photoPost)
            return photoPost.id;
        }
        return false;
    }

    function removePhotoPost(id) {
        photoPosts.splice(photoPosts.indexOf(getPhotoPost(id)), 1);
    }

    function editPhotoPost(id, photoPost) {
        post = getPhotoPost(id);
        /*if((photoPost.id && photoPost.id!=id)||(post.author && post.author!=photoPost.author)
          || (post.createdAt && post.createdAt!=photoPost.createdAt))
            return false;*/
        photoPost.createdAt = post.createdAt;
        photoPost.author = post.author;
        photoPost.id = post.id;
        if (validatePhotoPost(photoPost)) {
            post.description = photoPost.description;
            post.photoLink = photoPost.photoLink;
            post.tags = photoPost.tags;
            return true;
        }
        return false;
    }

    return {
        photoPosts: function () {
            return photoPosts;
        },
        compareDates: function (a, b) {
            return compareDates(a, b);
        },
        getPhotoPosts: function (skip, top, filterConfig) {
            return getPhotoPosts(skip, top, filterConfig);
        },
        getPhotoPost: function (id) {
            return getPhotoPost(id);
        },
        validatePhotoPost: function (post) {
            return validatePhotoPost(post);
        },
        addPhotoPost: function (photoPost) {
            return addPhotoPost(photoPost);
        },
        removePhotoPost: function (id) {
            return removePhotoPost(id);
        },
        editPhotoPost: function (id, photoPost) {
            return editPhotoPost(id, photoPost);
        }
    }
})();