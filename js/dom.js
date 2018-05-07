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

    var currentPost = getPhotoPost(postId);
    
    post.id = currentPost.id;

    photo.firstChild.src = currentPost.photoLink;
    photo.src = currentPost.photoLink;
    information.children[0].querySelector('.content').textContent = concatStr(currentPost.tags);
    information.children[1].querySelector('.content').textContent = currentPost.description;
    information.children[2].querySelector('.content').textContent = currentPost.createdAt.toLocaleString().substr(0, 20);
    information.children[3].querySelector('.content').textContent = currentPost.author;

    parentOfNewPost.appendChild(post);
}

function hidePost(postId) {
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
    inputEmail.setAttribute('id', '');
    inputEmail.setAttribute('placeholder', 'Enter your email...');

    var labelPassword = document.createElement('label');
    labelPassword.setAttribute('for', 'password');
    labelPassword.innerText = 'Password';

    var inputPassword = document.createElement('input');
    inputPassword.setAttribute('type', 'text');
    inputPassword.setAttribute('name', 'password');
    inputPassword.setAttribute('id', '');
    inputPassword.setAttribute('placeholder', 'Enter your ********...');

    var submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Log In');


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

    var labelHashtags = document.createElement('label');
    labelHashtags.setAttribute('for', 'hashtags');
    labelHashtags.innerText = 'Hashtags';

    var inputHashtags = document.createElement('input');
    inputHashtags.setAttribute('type', 'text');
    inputHashtags.setAttribute('name', 'hashtags');
    inputHashtags.setAttribute('id', '');
    inputHashtags.setAttribute('placeholder', 'Enter your hashtags...');

    var submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Load');

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

function showUserHead(userName, parent) {
    parent.innerHTML = '';
    if (userName == null) {
        showButton("Sign Up", parent);
        showButton("Log In", parent);
    } else {
        showButton("Add", parent);
        showButton("Change", parent);
        showButton("Delete", parent);
    }
}

function addPost(parent, post) {
    addPhotoPost(post);
    showPost(post.id, parent);
}

function editPost(parent, post) {
    editPhotoPost(post.id, post);
    hidePost(post.id);
    var debug = getPhotoPost(post.id);
    addPost(parent, debug);
}