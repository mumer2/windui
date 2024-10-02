import React from 'react'

export const ActivityFeed = () => {
  return (
    <div>
        <ul>
        <div class="feed-container">
    <div class="feed-item">
      <div class="feed-avatar">
        <img src="Images/feed1.jfif" alt="Mary Jane avatar"/>
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
        <img src="Images/feed2.jfif" alt="John Langan avatar"/>
      </div>
      <div class="feed-content">
        <p class="feed-user">
          <strong>John Langan</strong> liked the thread
        <span class="feed-time">2 hours ago</span>

        </p>
      </div>
    </div>
    <ul>
    <div class="feed-item">
      <div class="feed-avatar">
        <img src="Images/feed1.jfif" alt="Mary Jane avatar"/>
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
        <img src="Images/feed2.jfif" alt="Mary Jane avatar"/>
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
        <img src="Images/feed1.jfif" alt="Mary Jane avatar"/>
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
        <img src="Images/feed3.jfif" alt="Mary Jane avatar"/>
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
