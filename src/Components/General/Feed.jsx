import React from 'react'
import { ActivityFeed } from './ActivityFeed'

export const Feed = () => {
  return (
    <div>
        <div className="feeds">
            <h1>Feed</h1>
            <p>The feed component is a ui element that displays a stream of content (static or dynamic), such as comments, activity updates, posts, in a chronological order.</p>
        </div>

        <ActivityFeed/>
    </div>
  )
}
