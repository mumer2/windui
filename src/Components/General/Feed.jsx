import React from 'react'
import { ActivityFeed } from './ActivityFeed'
import CodePre from './CodePre';

export const Feed = () => {
  const htmlCode = ` <div>
      <ul>
        <div class="feed-container">
          <div class="feed-item">
            <div class="feed-avatar">
              <img src="Images/feed1.jfif" alt="Mary Jane avatar" />
            </div>
            <div class="feed-content">
              <p class="feed-user">
                <strong>Mary Jane</strong> created a new thread
                <span class="feed-time">3 hours ago</span>

              </p>
              <p class="feed-description">
                We just released windUI v1.5, which includes a brand new component. An activity feed is a chronological record of system events or user actions. Have a look at the feed page and let me know what you think. Feedback is highly appreciated.
              </p>
            </div>
          </div>

          <div class="feed-item">
            <div class="feed-avatar">
              <img src="Images/feed2.jfif" alt="John Langan avatar" />
            </div>
            <div class="feed-content">
              <p class="feed-user">
                <strong>John Langan</strong><i class="fa fa-heart green-heart"></i> liked the thread
                <span class="feed-time">2 hours ago</span>

              </p>
            </div>
          </div>
          <ul>
            <div class="feed-item">
              <div class="feed-avatar">
                <img src="Images/feed1.jfif" alt="Mary Jane avatar" />
              </div>
              <div class="feed-content">
                <p class="feed-user">
                  <strong>Mary Jane</strong> replied
                  <span class="feed-time">2 hours ago</span>
                </p>
                <p class="feed-description">
                  Hey John! Did you have a look at the new component?
                </p>
              </div>
            </div>
            <div class="feed-item">
              <div class="feed-avatar">
                <img src="Images/feed2.jfif" alt="Mary Jane avatar" />
              </div>
              <div class="feed-content">
                <p class="feed-user">
                  <strong>John langan</strong> replied
                  <span class="feed-time">2 hours ago</span>
                </p>
                <p class="feed-description">
                  It looks awesome! Good one! The only thing that I would tweak is the spacing in smaller screens. Other than that it looks superb! Really loved the color as well.
                </p>
              </div>
            </div>
            <div class="feed-item">
              <div class="feed-avatar">
                <img src="Images/feed1.jfif" alt="Mary Jane avatar" />
              </div>
              <div class="feed-content">
                <p class="feed-user">
                  <strong>Mary Jane</strong> replied
                  <span class="feed-time">2 hours ago</span>
                </p>
                <p class="feed-description">
                  Thanks so much 🙏. Your feedback is highly appreciated.
                </p>
              </div>
            </div>
          </ul>
          <div class="feed-item">
            <div class="feed-avatar">
              <img src="Images/feed3.jfif" alt="Mary Jane avatar" />
            </div>
            <div class="feed-content">
              <p class="feed-user">
                <strong>Manos Gaitanakis</strong>  commented
                <span class="feed-time">3 hours ago</span>

              </p>
              <p class="feed-description">
                Love it! I really like how the nested feeds are working as well. Is that going to be multi-nested? Or maybe stay in just one level. Also any ides on how I can remove the time stamp from the feeds?        </p>
            </div>
          </div>
        </div>

      </ul>
    </div>

    -----------------------CSS-------------------------

    
/* ******************* */
       /* Feed */
/* ******************* */
.feeds {
  margin-top: 5%;
  margin-left: 2%;
  color: gray;
}

.feeds h1 {
  font-size: 1.875rem;
  color: rgb(71, 85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}

/* Container to center the feed */
.feed-container {
  padding: 20px;
  max-width: 800px;
  margin: auto;
  background-color: #f9fafb;
  border-radius: 8px;
}

/* Individual feed items */
.feed-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 15px;
}

.feed-avatar {
  margin-right: 15px;
}

.feed-avatar img {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-top: 10px;
}
.feed-cont{
  border: 1px solid rgb(234, 233, 233);
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  background-color: white;
}
/* Styling for feed content */
.feed-content {
  max-width: 900px;
  color: gray;
}
.green-heart {
  color: #28a745; /* Green color */
  font-size: 18px; /* Adjust size as needed */
  margin-left: 10px;
  margin-right: 5px;
}
.feed-user {
  font-size: 15px;
  color: rgb(100 ,116, 139);
  font-weight: 500;
  margin-bottom: 5px;
}
.feed-user strong{
  color: #5b5959;
  font-weight: 600;
  font-size: 18px;
}

.feed-time {
  font-size: 13px;
  color: rgb(107, 114, 128);
  margin-left: 10px;
}

.feed-description {
  margin: 8px 0;
  font-size: 16px;
  color: rgb(100 ,116, 139);
  line-height: 1.5rem;
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
  .feed-content {
    max-width: 100%;
  }

  .feed-avatar img {
    width: 40px;
    height: 40px;
  }
}
  `;

const reactCode = `import React from 'react'

export const ActivityFeed = () => {
  return (
    <div>
      <ul>
        <div class="feed-container">
          <div class="feed-item">
            <div class="feed-avatar">
              <img src="Images/feed1.jfif" alt="Mary Jane avatar" />
            </div>
            <div class="feed-content">
              <p class="feed-user">
                <strong>Mary Jane</strong> created a new thread
                <span class="feed-time">3 hours ago</span>

              </p>
              <p class="feed-description">
                We just released windUI v1.5, which includes a brand new component. An activity feed is a chronological record of system events or user actions. Have a look at the feed page and let me know what you think. Feedback is highly appreciated.
              </p>
            </div>
          </div>

          <div class="feed-item">
            <div class="feed-avatar">
              <img src="Images/feed2.jfif" alt="John Langan avatar" />
            </div>
            <div class="feed-content">
              <p class="feed-user">
                <strong>John Langan</strong><i class="fa fa-heart green-heart"></i> liked the thread
                <span class="feed-time">2 hours ago</span>

              </p>
            </div>
          </div>
          <ul>
            <div class="feed-item">
              <div class="feed-avatar">
                <img src="Images/feed1.jfif" alt="Mary Jane avatar" />
              </div>
              <div class="feed-content">
                <p class="feed-user">
                  <strong>Mary Jane</strong> replied
                  <span class="feed-time">2 hours ago</span>
                </p>
                <p class="feed-description">
                  Hey John! Did you have a look at the new component?
                </p>
              </div>
            </div>
            <div class="feed-item">
              <div class="feed-avatar">
                <img src="Images/feed2.jfif" alt="Mary Jane avatar" />
              </div>
              <div class="feed-content">
                <p class="feed-user">
                  <strong>John langan</strong> replied
                  <span class="feed-time">2 hours ago</span>
                </p>
                <p class="feed-description">
                  It looks awesome! Good one! The only thing that I would tweak is the spacing in smaller screens. Other than that it looks superb! Really loved the color as well.
                </p>
              </div>
            </div>
            <div class="feed-item">
              <div class="feed-avatar">
                <img src="Images/feed1.jfif" alt="Mary Jane avatar" />
              </div>
              <div class="feed-content">
                <p class="feed-user">
                  <strong>Mary Jane</strong> replied
                  <span class="feed-time">2 hours ago</span>
                </p>
                <p class="feed-description">
                  Thanks so much 🙏. Your feedback is highly appreciated.
                </p>
              </div>
            </div>
          </ul>
          <div class="feed-item">
            <div class="feed-avatar">
              <img src="Images/feed3.jfif" alt="Mary Jane avatar" />
            </div>
            <div class="feed-content">
              <p class="feed-user">
                <strong>Manos Gaitanakis</strong>  commented
                <span class="feed-time">3 hours ago</span>

              </p>
              <p class="feed-description">
                Love it! I really like how the nested feeds are working as well. Is that going to be multi-nested? Or maybe stay in just one level. Also any ides on how I can remove the time stamp from the feeds?        </p>
            </div>
          </div>
        </div>

      </ul>
    </div>
  )
}

-----------------CSS-------------------


/* ******************* */
       /* Feed */
/* ******************* */
.feeds {
  margin-top: 5%;
  margin-left: 2%;
  color: gray;
}

.feeds h1 {
  font-size: 1.875rem;
  color: rgb(71, 85, 105);
  line-height: 2.25rem;
  font-weight: 600;
}

/* Container to center the feed */
.feed-container {
  padding: 20px;
  max-width: 800px;
  margin: auto;
  background-color: #f9fafb;
  border-radius: 8px;
}

/* Individual feed items */
.feed-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 15px;
}

.feed-avatar {
  margin-right: 15px;
}

.feed-avatar img {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-top: 10px;
}
.feed-cont{
  border: 1px solid rgb(234, 233, 233);
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  background-color: white;
}
/* Styling for feed content */
.feed-content {
  max-width: 900px;
  color: gray;
}
.green-heart {
  color: #28a745; /* Green color */
  font-size: 18px; /* Adjust size as needed */
  margin-left: 10px;
  margin-right: 5px;
}
.feed-user {
  font-size: 15px;
  color: rgb(100 ,116, 139);
  font-weight: 500;
  margin-bottom: 5px;
}
.feed-user strong{
  color: #5b5959;
  font-weight: 600;
  font-size: 18px;
}

.feed-time {
  font-size: 13px;
  color: rgb(107, 114, 128);
  margin-left: 10px;
}

.feed-description {
  margin: 8px 0;
  font-size: 16px;
  color: rgb(100 ,116, 139);
  line-height: 1.5rem;
}

/* Responsive design for smaller screens */
@media (max-width: 768px) {
  .feed-content {
    max-width: 100%;
  }

  .feed-avatar img {
    width: 40px;
    height: 40px;
  }
}
`;
  return (
    <div>
      <div className="feeds" style={{marginTop:'15%'}}>
        <h1>Feed</h1>
        <p>The feed component is a ui element that displays a stream of content (static or dynamic), such as comments, activity updates, posts, in a chronological order.</p>
      </div>
      <div className='feed-cont'>
        <ActivityFeed />
      </div>

      <div className="feeds" style={{marginTop:'3%'}}>
       <h2>Variations</h2>
             </div>
      <div className="code-cont">
    <CodePre htmlCode={htmlCode} reactCode={reactCode}/>
    </div>
    </div>
  )
}
