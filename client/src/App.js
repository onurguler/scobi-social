import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Profile from './components/profile/Profile';
import Settings from './components/profile/settings/Settings';
import Navbar from './components/layout/Navbar';
import Topic from './components/topic/Topic';
import ProfileEdit from './components/profile/edit/ProfileEdit';
import NewPost from './components/post/NewPost';
import TwoFA from './components/auth/TwoFA';
import Contact from './components/contact/Contact';
import Post from './components/post/Post';
import Footer from './components/layout/Footer';
import AboutUs from './components/contact/AboutUs';
import Comments from './components/post/Comments';

const App = () => {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-900">
        <Navbar isAuthenticated={false} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/2FA" component={TwoFA} />
          <Route exact path="/register" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/topic" component={Topic} />
          <Route exact path="/profile/edit" component={ProfileEdit} />
          <Route exact path="/profile/edit/:option" component={ProfileEdit} />
          <Route exact path="/topic/:topic_name" component={Topic} />
          <Route exact path="/profile/edit" component={ProfileEdit} />
          <Route exact path="/profile/edit/:option" component={ProfileEdit} />
          <Route exact path="/posts/new" component={NewPost} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/posts" component={Post} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/posts/:post_id/comments" component={Comments} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
