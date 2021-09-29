import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
          molestiae enim laudantium dolor repudiandae animi consequatur ipsam
          velit voluptas quibusdam?
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">Life</li>
          <li className="sidebar-list-item">Music</li>
          <li className="sidebar-list-item">Sports</li>
          <li className="sidebar-list-item">Style</li>
          <li className="sidebar-list-item">Tech</li>
          <li className="sidebar-list-item">Cinema</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Follow Us</span>
        <div className="sidebar-social">
          <i className="sidebaricon fa-brands fa-facebook"></i>
          <i className="sidebaricon fa-brands fa-instagram"></i>
          <i className="sidebaricon fa-brands fa-twitter"></i>
          <i className="sidebaricon fa-brands fa-pinterest"></i>
        </div>
      </div>
    </div>
  );
}
