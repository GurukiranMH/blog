import './singlePost.css';

export default function SinglePost() {
  const user = false;
  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="single-post-img"
        />
        <h1 className="single-post-title">
          Lorem ipsum dolor sit amet.
          <>
            {user ? (
              <div className="single-post-edit">
                <i className="single-posticon fa-solid fa-pen-to-square"></i>
                <i className="single-posticon fa-solid fa-trash-can"></i>
              </div>
            ) : (
              <div className="single-post-edit">
                <i className="posticon-like fa-solid fa-heart"></i>
                <span>12</span>
                <i className="posticon-dislike fa-solid fa-heart-crack"></i>
                <span>3</span>
              </div>
            )}
          </>
        </h1>
        <div className="single-post-info">
          <span className="single-post-author">
            Author: <b>Guru</b>
          </span>
          <span className="single-post-date">1 hour ago</span>
        </div>
        <p className="single-postdes">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique,
          assumenda optio. Vero earum quae perspiciatis voluptatem ab magni!
          Magni numquam eius expedita at qui corrupti doloremque pariatur sint
          porro inventore? Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Similique, assumenda optio. Vero earum quae perspiciatis
          voluptatem ab magni! Magni numquam eius expedita at qui corrupti
          doloremque pariatur sint porro inventore? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Similique, assumenda optio. Vero earum
          quae perspiciatis voluptatem ab magni! Magni numquam eius expedita at
          qui corrupti doloremque pariatur sint porro inventore? Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Similique, assumenda
          optio. Vero earum quae perspiciatis voluptatem ab magni! Magni numquam
          eius expedita at qui corrupti doloremque pariatur sint porro
          inventore?
        </p>
      </div>
    </div>
  );
}
