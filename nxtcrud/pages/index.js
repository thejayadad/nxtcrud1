


import { getFeaturedPosts } from "../api-helpers/frontend/utils"
import PostList from "../components/PostList"


export default function Home({posts}) {
  return (
    <>
     <div>
      <h2>Hi</h2>
      <PostList getFeaturedPosts data={posts} />
     </div>
    </>
  )
}


export const getStaticProps = async() => {
  const posts = await getFeaturedPosts()

  return {
    props: {
      posts,
    }
  }
}