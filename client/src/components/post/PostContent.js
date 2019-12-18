import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisH,
  // eslint-disable-next-line
  faThumbsUp as faThumbsUpSolid,
  // eslint-disable-next-line
  faThumbsDown as faThumbsDownSolid,
  // eslint-disable-next-line
  faBookmark as faBookmarkSolid,
  faShare,
  faEye
} from '@fortawesome/free-solid-svg-icons';
import {
  faThumbsUp,
  faThumbsDown,
  faBookmark
} from '@fortawesome/free-regular-svg-icons';
import LikesModal from './LikesModal';

const PostContent = ({ className }) => {
  const [showLikesModal, setShowLikesModal] = useState(false);

  return (
    <div className={`${className}`}>
      <img
        className="w-100 img-fluid mb-4"
        src="https://images.unsplash.com/photo-1558981420-c532902e58b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        alt=""
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod
        quis tempora exercitationem voluptas voluptatum iste earum minus. Odio,
        ea?
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quod
        quis tempora exercitationem voluptas voluptatum iste earum minus. Odio,
        ea?
      </p>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad aliquid
        voluptatibus sunt, repellat dicta sint voluptatem voluptates quae ex
        labore ducimus cupiditate illum quos distinctio dolor magnam iusto magni
        omnis dolorum. Facilis vitae et voluptatem cupiditate alias placeat
        autem suscipit. Modi blanditiis, iusto quo repellat adipisci qui omnis
        at iste.
      </p>

      <h3>Lorem, ipsum dolor.</h3>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        voluptatem quis assumenda nisi mollitia autem nulla adipisci? Quasi,
        nostrum voluptatum!
      </p>

      <img
        className="w-100 img-fluid mb-4"
        src="https://images.unsplash.com/photo-1574192773018-be32f27632d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        alt=""
      />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
        accusantium assumenda a at. Accusamus dolores vitae eum placeat maxime
        libero laborum perferendis est, natus ea numquam rem odit mollitia
        facilis sunt nemo. Perspiciatis minus dignissimos nulla aliquam modi
        labore cupiditate laborum reiciendis, adipisci impedit officiis? Numquam
        cum facere rem? Expedita?
      </p>

      <div className="d-flex flex-wrap">
        <button className="btn btn-gray-300 text-gray-700 btn-sm text-sm mr-2">
          Technology
        </button>
        <button className="btn btn-gray-300 text-gray-700 btn-sm text-sm mr-2">
          Programming
        </button>
        <button className="btn btn-gray-300 text-gray-700 btn-sm text-sm mr-2">
          React
        </button>
        <button className="btn btn-gray-300 text-gray-700 btn-sm text-sm mr-2">
          Bootstrap
        </button>
      </div>

      <div className="mt-2 d-flex align-items-center justify-content-between border-bottom pb-2">
        <div>
          <a className="text-decoration-none text-secondary" href="#!">
            <FontAwesomeIcon icon={faThumbsUp} />
          </a>
          <a className="text-decoration-none text-secondary" href="#!">
            <small className="ml-2" onClick={() => setShowLikesModal(true)}>
              242
            </small>
          </a>

          <a className="text-decoration-none text-secondary ml-4" href="#!">
            <FontAwesomeIcon className="align-middle" icon={faThumbsDown} />
          </a>
          <a className="text-decoration-none text-secondary" href="#!">
            <small className="ml-2">13</small>
          </a>
          <a className="text-decoration-none text-secondary ml-4" href="#!">
            <FontAwesomeIcon className="align-middle" icon={faEye} />
          </a>
          <a className="text-decoration-none text-secondary" href="#!">
            <small className="ml-2">200K+</small>
          </a>
        </div>

        <div className="d-flex align-items-center">
          <a className="text-decoration-none text-secondary" href="#!">
            <FontAwesomeIcon className="align-middle" icon={faBookmark} />
          </a>
          <a className="text-decoration-none text-secondary ml-4" href="#!">
            <FontAwesomeIcon className="align-middle" icon={faShare} />
          </a>

          <div class="dropdown">
            <button
              class="btn btn-link text-secondary text-decoration-none dropdown"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              <FontAwesomeIcon icon={faEllipsisH} />
            </button>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#!">
                Bookmark
              </a>
              <a class="dropdown-item" href="#!">
                Hide
              </a>
              <a class="dropdown-item" href="#!">
                Unfollow
              </a>
              <a class="dropdown-item" href="#!">
                Report
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center border-bottom">
        <div className="d-flex align-items-center py-4">
          <img
            className="rounded-circle fit-image"
            src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/p960x960/65123467_10219910636463233_5371741452810321920_o.jpg?_nc_cat=102&_nc_oc=AQllQE9F2oHnz03qbVXp8zJ2yRunR6djtQEc5PDdaZqjBgLbED-_WZqdI-tfvCMpPc4&_nc_ht=scontent-otp1-1.xx&oh=360ed3d04eab2e7462dd54d33479b6e0&oe=5E5343CC"
            width="100"
            height="100"
            alt=""
          />
          <div className="ml-2">
            <div className="text-gray-600 text-xs text-uppercase">
              Posted by
            </div>
            <div className="text-lg font-semibold">Ege Çakmak</div>
          </div>
        </div>

        <button className="btn btn-outline-green-500 text-sm btn-sm">
          Follow
        </button>
      </div>
      <Link to="/posts/123123post_id/comments">
        <button className="btn btn-outline-green-500 mt-4 w-100">
          Show Comments
        </button>
      </Link>
      <LikesModal
        show={showLikesModal}
        onHide={() => setShowLikesModal(false)}
      />
    </div>
  );
};

export default PostContent;
