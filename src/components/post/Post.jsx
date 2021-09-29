import './post.css';

export default function Post() {
  return (
    <>
      <div className="post">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="post-img"
        />
        <div className="post-info">
          <div className="post-cats">
            <span className="post-cat">Music</span>
            <span className="post-cat">Life</span>
          </div>
          <span className="post-title">Lorem ipsum dolor sit amet.</span>
          <hr />
          <span className="post-date">1 Hour ago</span>
        </div>
        <p className="post-des">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero,
          consectetur excepturi. Quisquam, sit asperiores! Consequuntur
          architecto vitae optio accusantium cupiditate possimus nulla, nobis
          officia totam fugit nostrum deleniti molestiae aspernatur. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Vero, consectetur
          excepturi. Quisquam, sit asperiores! Consequuntur architecto vitae
          optio accusantium cupiditate possimus nulla, nobis officia totam fugit
          nostrum deleniti molestiae aspernatur. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Vero, consectetur excepturi. Quisquam,
          sit asperiores! Consequuntur architecto vitae optio accusantium
          cupiditate possimus nulla, nobis officia totam fugit nostrum deleniti
          molestiae aspernatur. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Vero, consectetur excepturi. Quisquam, sit
          asperiores! Consequuntur architecto vitae optio accusantium cupiditate
          possimus nulla, nobis officia totam fugit nostrum deleniti molestiae
          aspernatur.
        </p>
      </div>
      <div className="posticon">
        <i className="posticon-like fa-solid fa-heart"></i>
        <span>12</span>
        <i className="posticon-dislike fa-solid fa-heart-crack"></i>
        <span>3</span>
      </div>
    </>
  );
}
