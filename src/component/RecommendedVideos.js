import React from "react";
import VideoCard from "./VideoCard";
import "./RecommendedVideos.css";
function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h1> Recommended Videos</h1>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Learn JavaScript - Full Course for Beginners"
          views="5.6M Views"
          timestamp="2 years ago"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s68-c-k-c0x00ffffff-no-rj"
          channel="freeCodeCamp.org "
          image="https://i.ytimg.com/an_webp/PkZNo7MFNFg/mqdefault_6s.webp?du=3000&sqp=CPjH8IIG&rs=AOn4CLC8t6E1f-WsUfNZZ1isoGxaqiFQXw"
        />

        <VideoCard
          title="Learn React Tutorials"
          views="4.5M Views"
          timestamp="2 days ago"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnj5vbwTemGpOuabZnfkl_tDzb_Fldf_CSMW2cg3=s176-c-k-c0x00ffffff-no-rj"
          channel="Codevolution"
          image="https://i.ytimg.com/vi/QFaFIcGhPoM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNd090zhR3S_d4NW2jrmOjjt2E5g"
        />

        <VideoCard
          title="Material UI tutorial"
          views="1.9K Views"
          timestamp="10 days ago"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwni-Wm0ZBDYJYFwySP2esxgc8s9mKiwmI3yJrmjlHQ=s68-c-k-c0x00ffffff-no-rj"
          channel="Net Ninja"
          image="https://i.ytimg.com/an_webp/GYTN5JdkLSQ/mqdefault_6s.webp?du=3000&sqp=CPyz8IIG&rs=AOn4CLCk7TwYOthNweRWJTJ5AqrbYepSzw"
        />

        <VideoCard
          title="Jail BEAN | Mr Bean Cartoon Season 1"
          views="445k Views"
          timestamp="2 days ago"
          channelImage="https://yt3.ggpht.com/ytc/AAUvwnjRgH09XfvVk5JQMZB_4zteSFnQESjW_UvgoHskZA=s68-c-k-c0x00ffffff-no-rj"
          image="https://i.ytimg.com/an_webp/3RZvISUPm5A/mqdefault_6s.webp?du=3000&sqp=CLCX8IIG&rs=AOn4CLDons_sJcZdFcKE4nGw2_F2l-AmnA"
        />

        <VideoCard
          title="7 Most Popular JavaScript Libraries in 2020"
          views="9.3K Views"
          timestamp="1 month ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo"
          image="https://i.ytimg.com/vi/NWOeM-1tgUI/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAsWhPdHsDx_5ttXOuGBr0IdT9PTg"
        />

        <VideoCard
          title="React & Node Tutorial - Full ECommerce in 5 Hours [2020]"
          views="190K Views"
          timestamp="3 month ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GjivGa_ZhV0i2BNMkSpR1qZtlzL_cH23eoeyQ=s68-c-k-c0x00ffffff-no-rj-mo"
          image="https://i.ytimg.com/vi/Fy9SdZLBTOo/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLB3UJOyozP7f5PMcVMT6jpYPdaYqg"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
