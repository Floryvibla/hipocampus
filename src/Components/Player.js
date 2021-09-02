import React from 'react'
import { ReactVideo } from "reactjs-media";


function Component(props) {

    return (
            <ReactVideo
                    src="https://vod-progressive.akamaized.net/exp=1627521614~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3362%2F22%2F566813618%2F2679874279.mp4~hmac=4269c34c2340c6932d6900c76229ad64104e6c2fc23a8d9d5ae3c2ea7aae323a/vimeo-prod-skyfire-std-us/01/3362/22/566813618/2679874279.mp4?filename=pexels-los-muertos-crew-8460068.mp4"
                    poster="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PHOTOS_INSIDE_THE_CLASSROOM_UPDATED014.jpg/500px-PHOTOS_INSIDE_THE_CLASSROOM_UPDATED014.jpg"
                    // other props
                />
    )
}

export default Component
