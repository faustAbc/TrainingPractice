var changeContent = (function () {

    var numberOfPostsToLoad = 2;
    var currentLoadedPost = 1;
    var username;



    function onClickChangePost(event) {
        addLoadPhoto(document.body);
        document.querySelector('.capture-big').innerHTML = "Edit Your photo";
        document.querySelector('#load-submit').value = "Edit";
        var post = this.parentNode.parentNode.parentNode;
        document.querySelector('#edit-post-description').value = post.querySelector('#description').innerText;
        document.querySelector('#edit-tags-description').value = post.querySelector('#tags').innerText;
    }

    function onClickAddPost(event) {
        var post = {
            id: null,
            description: document.getElementById('edit-post-description').value,
            createdAt: new Date(),
            author: username,
            photoLink: getGoodPath(document.getElementById('edit-post-photo').value),
            tags: document.getElementById('edit-tags-description').value,
        }

        showPost(photoPost.addPhotoPost(post), document.querySelector('.body > .center .content'));
        document.body.removeChild(document.getElementsByClassName('wrapper')[0]);
    }

    function getGoodPath(stringPath) {
        return '../img/' + stringPath.substring(12);
    }

    function showPost(postId, parentOfNewPost) {

        var information = document.createElement('div');
        information.className = "information";
        for (var i = 0; i < 4; i++) {
            information.appendChild(document.createElement("div"));
            information.children[i].appendChild(document.createElement("span"));
            information.children[i].lastChild.className = 'capture';
            information.children[i].appendChild(document.createElement("span"));
            information.children[i].lastChild.className = 'content';

        }
        information.children[0].querySelector('.capture').textContent = 'Tags:';
        information.children[1].querySelector('.capture').textContent = 'Description: ';
        information.children[2].querySelector('.capture').textContent = 'Date: ';
        information.children[3].querySelector('.capture').textContent = 'Author: ';

        var photo = document.createElement('div');
        photo.className = 'photo';
        photo.appendChild(document.createElement('img'));
        var post = document.createElement('div');
        post.className = 'post';

        post.appendChild(photo);
        post.appendChild(information);

        var currentPost = photoPost.getPhotoPost(postId);
        post.id = currentPost.id;

        photo.firstChild.src = currentPost.photoLink;
        photo.src = currentPost.photoLink;
        information.children[0].querySelector('.content').textContent = concatStr(currentPost.tags);
        information.children[0].querySelector('.content').setAttribute('id', 'tags');
        information.children[1].querySelector('.content').textContent = currentPost.description;
        information.children[1].querySelector('.content').setAttribute('id', 'description');
        information.children[2].querySelector('.content').textContent = currentPost.createdAt.toLocaleString().substr(0, 20);
        information.children[3].querySelector('.content').textContent = currentPost.author;
        parentOfNewPost.appendChild(post);

        if (currentPost.author == username) {
            var buttons = document.createElement('div');
            buttons.setAttribute('id', 'buttons');
            information.appendChild(buttons);

            showButton('Change', buttons);
            post.querySelector('#Change').addEventListener('click', onClickChangePost);
            showButton('Delete', buttons);
            post.querySelector("#Delete").addEventListener('click', hidePostEvent);
        }
    }

    function hidePostEvent(event) {
        hidePost(this.parentNode.parentNode.parentNode.id);
    }

    function hidePost(postId) {
        photoPost.removePhotoPost(photoPost.getPhotoPost(postId));
        document.querySelector('.body > .center .content').removeChild(document.getElementById(postId));
    }

    function concatStr(stringArray) {
        var result = "";
        for (var i = 0; i < stringArray.length; i++) {
            result += " " + stringArray[i];
        }
        return result;
    }

    function scroll(elementheigthToScroll) {
        window.scrollBy(0, elementheigthToScroll + 20);
    }

    function addLogIn(parentOfNewPost) {
        var panel = document.createElement('div');
        panel.className = 'wrapper';

        panel.addEventListener('click', function (event) {
            var target = event.target;
            while (target != this) {
                if (target.className == 'field log-in') {
                    return;
                }
                target = target.parentNode;
            }
            document.body.removeChild(document.getElementsByClassName('wrapper')[0]);
        });

        var logIn = document.createElement('div');
        logIn.className = 'field log-in';

        var capture = document.createElement('div');
        capture.className = 'capture flex-center';

        var captureBig = document.createElement('div');
        captureBig.className = 'capture-big';
        captureBig.innerText = 'Members Sign In';

        var captureSmall = document.createElement('div');
        captureSmall.className = 'capture-small';
        captureSmall.innerHTML = 'Not a member yet? <a>Sign up</a> now.';

        var content = document.createElement('div');
        content.className = 'content flex-center';

        var form = document.createElement('form');
        form.setAttribute('action', '123');
        form.setAttribute('method', 'post');

        var labelEmail = document.createElement('label');
        labelEmail.setAttribute('for', 'email');
        labelEmail.innerText = 'Username/Email';

        var inputEmail = document.createElement('input');
        inputEmail.setAttribute('type', 'text');
        inputEmail.setAttribute('name', 'email');
        inputEmail.setAttribute('id', 'input-email');
        inputEmail.setAttribute('placeholder', 'Enter your email...');
        inputEmail.setAttribute('autocomplete', 'off');

        var labelPassword = document.createElement('label');
        labelPassword.setAttribute('for', 'password');
        labelPassword.innerText = 'Password';

        var inputPassword = document.createElement('input');
        inputPassword.setAttribute('type', 'text');
        inputPassword.setAttribute('name', 'password');
        inputPassword.setAttribute('id', '');
        inputPassword.setAttribute('placeholder', 'Enter your ********...');
        inputPassword.setAttribute('autocomplete', 'off');

        var submit = document.createElement('input');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('value', 'Log In');
        submit.setAttribute('onclick', 'return false');
        submit.addEventListener('click', validateAuthorisation);

        capture.appendChild(captureBig);
        capture.appendChild(captureSmall);
        form.appendChild(labelEmail);
        form.appendChild(inputEmail);
        form.appendChild(labelPassword);
        form.appendChild(inputPassword);
        form.appendChild(submit);
        content.appendChild(form);
        logIn.appendChild(capture);
        logIn.appendChild(content);
        panel.appendChild(logIn);

        parentOfNewPost.insertBefore(panel, parentOfNewPost.firstChild);
    }

    function addLoadPhoto(parentOfNewPost) {
        var panel = document.createElement('div');
        panel.className = 'wrapper';

        panel.addEventListener('click', function (event) {
            var target = event.target;
            while (target != this) {
                if (target.className == 'field log-in load-photo') {
                    return;
                }
                target = target.parentNode;
            }
            document.body.removeChild(document.getElementsByClassName('wrapper')[0]);
        });

        var logIn = document.createElement('div');
        logIn.className = 'field log-in load-photo';

        var capture = document.createElement('div');
        capture.className = 'capture flex-center';

        var captureBig = document.createElement('div');
        captureBig.className = 'capture-big';
        captureBig.innerText = 'Load Your photo';

        var flexRow = document.createElement('div');
        flexRow.className = 'flex-row';

        var imgDiv = document.createElement('div');
        imgDiv.className = 'img';

        var img = document.createElement('img');
        img.setAttribute('src', '../img/bg_load.png');

        var text = document.createElement('div');
        text.className = 'text';

        var labelFile = document.createElement('label');
        labelFile.setAttribute('for', 'file');
        labelFile.innerText = 'Choose image';

        var inputFile = document.createElement('input');
        inputFile.setAttribute('type', 'file');
        inputFile.setAttribute('name', 'file');
        inputFile.setAttribute('id', 'edit-post-photo');

        var content = document.createElement('div');
        content.className = 'content flex-top';

        var form = document.createElement('form');
        form.setAttribute('action', '123');
        form.setAttribute('method', 'post');

        var labelDescription = document.createElement('label');
        labelDescription.setAttribute('for', 'description');
        labelDescription.innerText = 'Description';

        var inputDescription = document.createElement('input');
        inputDescription.setAttribute('type', 'text');
        inputDescription.setAttribute('name', 'description');
        inputDescription.setAttribute('id', '');
        inputDescription.setAttribute('placeholder', 'Enter your description...');
        inputDescription.setAttribute('autocomplete', 'off');
        inputDescription.setAttribute('id', 'edit-post-description');

        var labelHashtags = document.createElement('label');
        labelHashtags.setAttribute('for', 'hashtags');
        labelHashtags.innerText = 'Hashtags';

        var inputHashtags = document.createElement('input');
        inputHashtags.setAttribute('type', 'text');
        inputHashtags.setAttribute('name', 'hashtags');
        inputHashtags.setAttribute('id', '');
        inputHashtags.setAttribute('placeholder', 'Enter your hashtags...');
        inputHashtags.setAttribute('autocomplete', 'off');
        inputHashtags.setAttribute('id', 'edit-tags-description');

        var submit = document.createElement('input');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('value', 'Load');
        submit.setAttribute('onclick', 'return false');
        submit.addEventListener('click', onClickAddPost);
        submit.setAttribute('id', 'load-submit');

        capture.appendChild(captureBig);
        form.appendChild(labelDescription);
        form.appendChild(inputDescription);
        form.appendChild(labelHashtags);
        form.appendChild(inputHashtags);
        form.appendChild(submit);
        content.appendChild(form);
        imgDiv.appendChild(img);
        imgDiv.appendChild(text);
        text.appendChild(labelFile);
        text.appendChild(inputFile);

        logIn.appendChild(capture);
        logIn.appendChild(flexRow);
        flexRow.appendChild(imgDiv);
        flexRow.appendChild(content);
        panel.appendChild(logIn);

        parentOfNewPost.insertBefore(panel, parentOfNewPost.firstChild);
    }

    function showButton(textOnButton, parent) {
        var button = document.createElement('div');
        button.id = textOnButton.toString();
        button.className = 'button color-capture';
        var text = document.createElement('div');
        text.className = 'text';
        text.innerText = textOnButton;
        var animation = document.createElement('div');
        animation.className = 'animation';
        var visible = document.createElement('div');
        visible.className = 'visible';
        visible.innerText = 'Click on me';
        var input = document.createElement('input');
        input.setAttribute('type', 'button');
        input.setAttribute('value', '');
        input.setAttribute('onclick', 'console.log(123)');

        button.appendChild(text);
        button.appendChild(animation);
        animation.appendChild(visible);
        visible.appendChild(input);
        parent.appendChild(button);
    }

    function addAddEvent(event) {
        addLoadPhoto(document.body);
    }

    function showUserHead(userName, parent) {
        parent.innerHTML = '';
        if (userName == null) {
            showButton("Sign Up", parent);
            showButton("Log In", parent);
            document.getElementById("Log In").addEventListener('click', addLogInEvent);
        } else {
            var text = document.createElement('div');
            text.innerText = 'Hello, ' + username;
            text.setAttribute('id', 'textHeader');
            parent.appendChild(text);
            showButton('Add', parent);
            document.getElementById("Add").addEventListener('click', addAddEvent);

            showButton("Log out", parent);
            document.getElementById("Log out").addEventListener('click', addLogOutEvent);
        }
    }

    function addLogOutEvent() {
        username = undefined;
        location.reload();
    }

    function addLogInEvent() {
        addLogIn(document.body);
    }

    function addPost(parent, post) {
        photoPost.addPhotoPost(post);
        showPost(post.id, parent);
    }

    function clearPosts() {
        document.querySelector('.body > .center .content').innerHTML = '';
    }

    function showPosts(event = null) {
        var maxPost = currentLoadedPost + numberOfPostsToLoad;
        for (var i = currentLoadedPost; i < maxPost; i++) {
            if (currentLoadedPost <= photoPost.photoPosts().length) {
                showPost(i, document.querySelector('.body > .center .content'));
                currentLoadedPost++;
            } 
        }
        if (currentLoadedPost > photoPost.photoPosts().length) {
            alert('There are no more posts.');
        }
    }

    function addEventListeners() {
        document.getElementById('load-photos').addEventListener('click', showPosts);
        document.getElementById('find').addEventListener('click', find);
    }

    function onLoad() {
        username = localStorage.getItem('username');
        var postsToShow = JSON.parse(localStorage.getItem('posts'));
        if (postsToShow.length)
            for (var i = 0; i < postsToShow.length; i++)
                showPost(postsToShow[i], document.querySelector('.body > .center .content'));
        if (username == 'undefined') {
            showUserHead(null, document.querySelector('.header > .logo-panel > .panel:nth-child(2) > div'));
        } else {
            showUserHead(username, document.querySelector('.header > .logo-panel > .panel:nth-child(2) > div'));
        }

        addEventListeners();


    }

    function onUnload() {
        localStorage.setItem('username', username);
        var posts = [];
        var copy = document.querySelector('.body > .center .content').children;
        for (var i = 0; i < copy.length; i++) {
            posts.push(copy[i].id);
        }
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    function find(event) {
        clearPosts();
        document.getElementById('input-text').value;
    }

    function validateAuthorisation(event) {
        var inputNickname = document.getElementById('input-email').value;

        if (validateNickname(inputNickname)) {
            username = inputNickname;
            location.reload();
        } else {
            alert('smth');
        }
    }

    function validateNickname(nickname) {
        for (var i = 1; i <= photoPost.photoPosts().length; i++) {
            if (photoPost.getPhotoPost(i).author == nickname) {
                return true;
            }
        }
        return false;
    }

    document.addEventListener('DOMContentLoaded', onLoad);
    window.addEventListener('beforeunload', onUnload);

    return {
        showPost: function (postId, parentOfNewPost) {
            showPost(postId, parentOfNewPost);
        },
        hidePost: function (postId) {
            hidePost(postId);
        },
        addLogIn: function (parentOfNewPost) {
            addLogIn(parentOfNewPost);
        },
        addLoadPhoto: function (parentOfNewPost) {
            addLoadPhoto(parentOfNewPost);
        },
        showButton: function (textOnButton, parent) {
            showButton(textOnButton, parent);
        },
        showUserHead: function (userName, parent) {
            showUserHead(userName, parent);
        },
        addPost: function (parent, post) {
            addPost(parent, post);
        },
        editPost: function (parent, post) {
            editPost(parent, post);
        }
    }
}());
