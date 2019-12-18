import React from 'react';
import PostCard from './PostCard';
import CommentCard from './CommentCard';
import NewComment from './NewComment';

const Comments = () => {
  return (
    <div>
      <div className="flex d-flex flex-column align-items-center justify-content-center profile border py-2 bg-white">
        <p className="text-gray-700 text-sm font-semibold">
          Showing comments for:
        </p>
        <PostCard />
      </div>
      <div className="bg-gray-300 profile d-flex flex flex-column align-items-center pt-2 min-vh-100">
        <NewComment />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </div>
  );
};

export default Comments;
