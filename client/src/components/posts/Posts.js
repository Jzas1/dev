import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getPosts } from '../../actions/post'
import PostItem from './PostItem'
import PostForm from './PostForm'


const Posts = ({ getPosts, post: { posts, loading }, match }) => {
    useEffect(() => {
        getPosts(match.params.id)
    }, [getPosts])
    return loading || posts === null ? <Spinner /> : (
        <Fragment>
            <h1 className="larger text-primary">Post</h1>
            <p className="lead">
                <i className="fas fa-user"></i> Welcome to community
            </p>
            <PostForm />
            <div className="posts">
                {posts.map(post => (
                    <PostItem key={post._id} post={post} />
                ))}
            </div>

        </Fragment>
    )
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { getPosts })(Posts)
