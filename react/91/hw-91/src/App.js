import './App.css';
import Users from './users';
import Blogs from './blogs';
import { Component } from 'react';


export default class App extends Component {

  state = {
    users: [],
    blogs: []
  }

  showBlogs = async (id, author)=>{
    
    try {
      const r = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      const usersBlogs = await r.json();
      if (!r.ok) {
        throw new Error(r.status, r.statusText)
      }
      console.log(usersBlogs);
      let arrOfBlogs = usersBlogs.map((blog) => {
        return (
          {
            userId: blog.userId,
            author: author,
            id: blog.id,
            title: blog.title,
            body: blog.body
          }
        )
      })

      this.setState({
        users: [],
        blogs: arrOfBlogs
      })
    } catch (e) {
      console.log(e);
    }
  }

  async fetchUsers() {
    try {
      const r = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await r.json();
      if (!r.ok) {
        throw new Error(r.status, r.statusText)
      }
      console.log(users);
      let arrOfUsers = users.map((user) => {
        return (
          {
            id: user.id,
            name: user.name,
            website: user.website,
            companyInfo: user.company.bs,
            showBlogs: this.showBlogs
          }
        )
      })

      this.setState({
        users: arrOfUsers
      })
    } catch (e) {
      console.log(e);
    }
  }

  async componentDidMount() {
    this.fetchUsers();
  }

  homePage = () => {
    this.setState({
      blogs: []
    })
    this.fetchUsers();
  }

  showComments = async (id) => {
    try {
      const r = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      const comments = await r.json();
      if (!r.ok) {
        throw new Error(r.status, r.statusText)
      }
      return(comments);
    } catch (e) {
      return(e);
    }
  }
    
    
    render() {
      let userDetails = this.state.users.length > 0 ? <Users users={this.state.users} showBlogs={this.showBlogs}/>  : null;
      let blogPage = this.state.blogs.length > 0 ? <Blogs blogs={this.state.blogs} homePage={this.homePage} showComments={this.showComments}/> : null;
      
      return (
        <div className="App">

          {userDetails}
          {blogPage}
          
        </div>
      );
    }

  }

