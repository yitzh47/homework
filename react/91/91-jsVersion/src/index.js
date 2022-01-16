import $ from 'jquery';

'use strict';

const authorOptions = $('<div id="authorOptions"></div>');
const authorsBlogs = $('<div id="authorsBlogs"></div>');

const usersEndUrl = 'users';
const blogsEndUrl = 'posts?userId=';
const commentsEndUrl = 'comments?postId=';
let commentsIsRunning = false;


async function getData(endUrl) {
    try {
        const r = await fetch('https://jsonplaceholder.typicode.com/' + endUrl);
        const data = await r.json();
        if (!r.ok) {
            throw new Error(r.status, r.statusText)
        }
        return data
    } catch (e) {
        console.log(e);
    }
}


async function showComments(postId) {
    if (commentsIsRunning === false) {
        commentsIsRunning = true;
        if ($(`#cmmntsBtn${postId}`).text() === 'Show comments?') {
            $(`#comments${postId}`).css('display', 'block');
            //if ($(`#comments${postId}`).text() === '') {
            let comments = await getData(commentsEndUrl + postId);
            comments.forEach(comment => {
                $(`<p>Name: ${comment.name}</p>
                <p>Email: ${comment.email}</p>
                <p>Body: ${comment.body}</p>
                <hr>'`).appendTo(`#comments${postId}`);
            })
            //}
            $(`#cmmntsBtn${postId}`).text('Hide comments?');
        } else {
            $(`#comments${postId}`).empty();
            $(`#cmmntsBtn${postId}`).text('Show comments?');
        }
    }
    commentsIsRunning = false;
}

async function setAuthorsBlogPageHtml(id, index = 0) {
    authorsBlogs.empty();
    let blogs = await getData(blogsEndUrl + id);

    $(`<button>Back to Home Page</button>`).on('click', () => {
        authorsBlogs.css('display', 'none');
        authorOptions.css('display', 'block');
    }).appendTo(authorsBlogs);

    $(`<button>Next 3</button>`).on('click', () => {
        setAuthorsBlogPageHtml(id, index + 3);
    }).appendTo(authorsBlogs);

    $(`<button>Past 3</button>`).on('click', () => {
        setAuthorsBlogPageHtml(id, index - 3);
    }).appendTo(authorsBlogs);

    for (let i = 0; i < 3; i++) {
        index + i > blogs.length - 1 ? index = -i : index;
        index + i < 0 ? index += blogs.length : index;
        let option = $('<div class="authorsBlogs"></div>');
        $(`<h1>Title: ${blogs[index + i].title}</h1>
          <p>Website: ${blogs[index + i].body}</p>
          <p>${blogs[index + i].id}</p>
          `).appendTo(option);
        $(`<button id="cmmntsBtn${blogs[index + i].id}">Show comments?</button>`).on('click', () => {
            showComments(blogs[index + i].id)
        }).appendTo(option);
        $(`<div id="comments${blogs[index + i].id}"></div><hr>`).appendTo(option);
        authorsBlogs.append(option);
    }
    $('body').append(authorsBlogs);
}

async function setHomePageHtml() {
    let users = await getData(usersEndUrl);
    users.forEach(user => {
        const option = $('<div class="authorOption"></div>');
        $(`<h1>Author: ${user.name}</h1>
          <h2>Website: ${user.website}</h2>
          <h3>Company Info: ${user.company.bs}</h3>
          <hr>'`).on('click', () => {
            authorOptions.css('display', 'none');
            authorsBlogs.css('display', 'block');
            setAuthorsBlogPageHtml(user.id);
            console.log(user.id)
        }).appendTo(option);
        authorOptions.append(option);
    })
    $('body').append(authorOptions);
}

setHomePageHtml();
