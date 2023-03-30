import React from 'react'
import Link from "next/link"
import { deletePost } from '../api-helpers/frontend/utils'
import {useRouter} from "next/router"



const PostItem = ({title, content, id, featured}) => {
    const router = useRouter();
  return (
    <div>
<div className="card" >
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{featured}</h6>
    <p className="card-text">{content}</p>
    <Link href={`/posts/${id}`}><i class="fas fa-pen"></i></Link>
    <a href="/" className="card-link"></a>
  </div>
</div>

    </div>
  )
}

export default PostItem