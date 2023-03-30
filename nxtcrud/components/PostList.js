import React from 'react'

import PostItem from './PostItem'


const PostList = ({data}) => {
  return (
    <div>
        
        {data.map((post) => (
            <div key={post._id}>
                <PostItem title={post.title} content={post.content} id={post._id} />
            </div>
        ))}

    </div>
  )
}

export default PostList