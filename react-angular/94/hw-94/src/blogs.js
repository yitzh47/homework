import { Component } from 'react'

export default class Blogs extends Component {

    state = {
        postComments: [],
    }

    // commentsShowing = async (id) => {
    //     if (this.state.postComments.show) {
    //         (
    //             <div>
    //                 <h3>Comments:</h3>
    //                 {this.state.postComments.comments.map((comment) => {
    //                     return (
    //                         <div key={comment.id}>
    //                             <p>Name: {comment.name}</p>
    //                             <p>Email: {comment.email}</p>
    //                             <p>"{comment.body}"</p>
    //                         </div>
    //                     )
    //                 })}
    //             </div>
    //         )
    //     }


    // }


    arrOfBlogs = this.props.blogs.map((blog) => {
        return (
            <div key={blog.id}>
                <hr></hr>
                <h3>{blog.title}</h3>
                <p>{blog.body}</p>
                <button onClick={async () =>
                    this.setState({
                        postComments: {
                            show: true,
                            authId: blog.userId,
                            id: blog.id,
                            comments: await this.props.showComments(blog.id)
                        }
                    })}>
                    Show comments?
                </button>
                <div value={this.state.postComments}>
                    {this.state.postComments}

                </div>
            </div>
        )
    })

    render() {
        if (this.state.postComments.show != null) {
            return (
                <>
                    <button onClick={this.props.homePage}>Go Home</button>
                    <h3>{this.props.blogs[0].author}</h3>
                    {this.arrOfBlogs}

                </>
            )
        };


    }
}
