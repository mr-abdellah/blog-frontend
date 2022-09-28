import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, atque.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur fuga in suscipit error fugiat assumenda laudantium consequuntur voluptas. Delectus quis explicabo at corrupti dolorem perspiciatis error est architecto illo.",
      img: "https://bit.ly/3RlBB5B",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, atque.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur fuga in suscipit error fugiat assumenda laudantium consequuntur voluptas. Delectus quis explicabo at corrupti dolorem perspiciatis error est architecto illo.",
      img: "https://bit.ly/3RlBB5B",
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, atque.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad pariatur fuga in suscipit error fugiat assumenda laudantium consequuntur voluptas. Delectus quis explicabo at corrupti dolorem perspiciatis error est architecto illo.",
      img: "https://bit.ly/3RlBB5B",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.description}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home
