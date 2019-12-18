import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify, faEdit } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

function ProfileNav({ setShowPosts, setShowScobs, setShowBookmarks }) {
  const [postsIsActive, setPostsIsActive] = useState(true);
  const [scobsIsActive, setScobsIsActive] = useState(false);
  const [bookmarksIsActive, setBookmarksIsActive] = useState(false);

  return (
    <div className="d-flex mb-4 border-bottom pb-2 bg-white profile-nav">
      <div className="d-flex w-100 align-items-center justify-content-between">
        <div className="w-100">
          <button
            className={`btn btn-default text-center text-gray-600 px-4 w-100 font-semibold text-uppercase btn-sm ${postsIsActive &&
              'active'}`}
            onClick={() => {
              setPostsIsActive(true);
              setScobsIsActive(false);
              setBookmarksIsActive(false);
              setShowPosts(true);
              setShowScobs(false);
              setShowBookmarks(false);
            }}>
            <FontAwesomeIcon className="text-center" icon={faAlignJustify} />
            <br />
            <span>Posts</span>
          </button>
        </div>
        <div className="w-100">
          <button
            className={`btn btn-default text-center text-gray-600 px-4 w-100 font-semibold text-uppercase btn-sm ${scobsIsActive &&
              'active'}`}
            onClick={() => {
              setPostsIsActive(false);
              setScobsIsActive(true);
              setBookmarksIsActive(false);
              setShowPosts(false);
              setShowScobs(true);
              setShowBookmarks(false);
            }}>
            <FontAwesomeIcon className="text-center" icon={faEdit} />
            <br />
            <span>Scobs</span>
          </button>
        </div>
        <div className="w-100">
          <button
            className={`btn btn-default text-center text-gray-600 px-4 w-100 font-semibold text-uppercase btn-sm ${bookmarksIsActive &&
              'active'}`}
            onClick={() => {
              setPostsIsActive(false);
              setScobsIsActive(false);
              setBookmarksIsActive(true);
              setShowPosts(false);
              setShowScobs(false);
              setShowBookmarks(true);
            }}>
            <FontAwesomeIcon className="text-center" icon={faBookmark} />
            <br />
            <span>Bookmarks</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// return (
//   <div className="profile-post">
//     <nav class="nav nav-pills nav-fill nav-justified mb-3">
//       <a
//         class={`nav-item nav-link ${postsIsActive && 'active'}`}
//         href="#"
//         onClick={() => {
//           setPostsIsActive(true);
//           setScobsIsActive(false);
//           setBookmarksIsActive(false);
//           setShowPosts(true);
//           setShowScobs(false);
//           setShowBookmarks(false);
//         }}>
//         Posts
//       </a>
//       <a
//         class={`nav-item nav-link ${scobsIsActive && 'active'}`}
//         href="#"
// onClick={() => {
//   setPostsIsActive(false);
//   setScobsIsActive(true);
//   setBookmarksIsActive(false);
//   setShowPosts(false);
//   setShowScobs(true);
//   setShowBookmarks(false);
// }}>
//         Scobs
//       </a>
//       <a
//         class={`nav-item nav-link ${bookmarksIsActive && 'active'}`}
//         href="#"
// onClick={() => {
//   setPostsIsActive(false);
//   setScobsIsActive(false);
//   setBookmarksIsActive(true);
//   setShowPosts(false);
//   setShowScobs(false);
//   setShowBookmarks(true);
// }}>
//         Bookmarks
//       </a>
//     </nav>
//   </div>
// );
export default ProfileNav;
