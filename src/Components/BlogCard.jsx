import React from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';

function BlogCard() {

    const BlogCardDatas=[
        "https://anutone.com/wp-content/uploads/2018/12/Balbir-Singh-Juneja-indoor-stadium-Raipur.jpg",
        "https://images.unsplash.com/photo-1615750185825-fc85c6aba18d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b3BlbiUyMGxhcHRvcHxlbnwwfHwwfHw%3D&w=1000&q=80",
        "https://cdn.pocket-lint.com/r/s/1200x/assets/images/153252-laptops-review-hands-on-27-inch-imac-2020-initial-review-more-pro-than-ever-image1-xhedju43nz.jpg"
    ]

  return (
   <>
   <div className='blog-card'>

  
   {
         BlogCardDatas.map((item,index)=>{
            return(
                <>
                <div className="card my-4 mx-3" style={{"width":"18rem"}}>
  <img className="card-img-top" key={index} src={item} alt="Card image cap" />
  <div className="card-body">
    <h6 className="card-title cardH6 my-4">Cung-edge products launched<br/> through Logitech-Excel</h6>
    <p className='blogCard-p'>The Managing Director & Cluster Head India & South-West Asia at Logitech Sumanta Datta.</p>
    

    <a  className="primary"><AiOutlineArrowRight fontSize={"27px"}/></a>
  </div>
</div>
</>
            )

         })}
   
   </div>
   
   </>
  )
}

export default BlogCard